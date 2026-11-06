"""Metric-matched fallbacks for the web fonts.

While Montserrat and Noto Sans load (font-display: swap), text is set in a fallback font. Arial scaled to the web font's
width (size-adjust) and given its ascent, descent and line gap keeps the swap from re-wrapping lines and moving the
page. This measures the site's own text (the built pages in all three languages: headings for Montserrat, paragraphs
and lists for Noto Sans) in each web font at the weights the site uses and in Arial or Arial Bold, and prints the
@font-face rules for src/styles/fonts.css. Kerning is left out: shaped with HarfBuzz, the values move by about 0.1%.
Re-run after upgrading a @fontsource-variable package, on a fresh build:
    npm run build && python scripts/font-fallbacks.py
(needs fonttools and brotli, and Arial: Windows or macOS)
"""
import sys
from html.parser import HTMLParser
from pathlib import Path

from fontTools.ttLib import TTFont
from fontTools.varLib import instancer

ROOT = Path(__file__).resolve().parent.parent
ARIAL = {
    "regular": ["C:/Windows/Fonts/arial.ttf", "/System/Library/Fonts/Supplemental/Arial.ttf", "/Library/Fonts/Arial.ttf"],
    "bold": ["C:/Windows/Fonts/arialbd.ttf", "/System/Library/Fonts/Supplemental/Arial Bold.ttf", "/Library/Fonts/Arial Bold.ttf"],
}
LOCAL = {"regular": "local('Arial'), local('ArialMT')", "bold": "local('Arial Bold'), local('Arial-BoldMT')"}
# web font: fallback family, the text it sets, and its faces (weight range, weight measured, Arial face)
FAMILIES = {
    "montserrat": ("Montserrat Fallback", "display", [("100 500", 500, "regular"), ("600 900", 600, "bold")]),
    "noto-sans": ("Noto Sans Fallback", "body", [("100 500", 400, "regular"), ("600 900", 600, "bold")]),
}
DISPLAY = {"h1", "h2", "h3", "h4"}
BODY = {"p", "li", "dd"}


class Text(HTMLParser):
    """Collects the text of headings (display) and of paragraphs and list items (body)."""

    def __init__(self):
        super().__init__()
        self.stack, self.display, self.body = [], [], []

    def handle_starttag(self, tag, attrs):
        self.stack.append(tag)

    def handle_endtag(self, tag):
        while self.stack and self.stack.pop() != tag:
            pass

    def handle_data(self, data):
        if {"script", "style"} & set(self.stack):
            return
        if DISPLAY & set(self.stack):
            self.display.append(data)
        elif BODY & set(self.stack):
            self.body.append(data)


def site_text():
    pages = [p for p in (ROOT / "dist").rglob("index.html") if "last-job-before-ai-takes-over" not in p.parts]
    if not pages:
        sys.exit("dist/ is empty: run npm run build first")
    parser = Text()
    for page in pages:
        parser.feed(page.read_text(encoding="utf-8"))
    # whitespace collapsed as the browser renders it
    return {"display": " ".join(" ".join(parser.display).split()), "body": " ".join(" ".join(parser.body).split())}, len(pages)


def advances(font):
    upm = font["head"].unitsPerEm
    hmtx = font["hmtx"]
    return {code: hmtx[glyph][0] / upm for code, glyph in font.getBestCmap().items()}


def width(text, tables):
    """Total advance in em; tables are tried in order (the latin file, then the Polish subset)."""
    return sum(next(table[ord(ch)] for table in tables if ord(ch) in table) for ch in text)


def line_metrics(font):
    upm = font["head"].unitsPerEm
    os2 = font["OS/2"]
    if os2.fsSelection & (1 << 7):  # USE_TYPO_METRICS
        return os2.sTypoAscender / upm, -os2.sTypoDescender / upm, os2.sTypoLineGap / upm
    hhea = font["hhea"]
    return hhea.ascent / upm, -hhea.descent / upm, hhea.lineGap / upm


def arial(face):
    for candidate in ARIAL[face]:
        if Path(candidate).exists():
            return TTFont(candidate)
    sys.exit(f"Arial ({face}) not found")


def pct(value):
    return f"{value * 100:.2f}".rstrip("0").rstrip(".") + "%"


text, pages = site_text()
rules = []
for family, (fallback, kind, faces) in FAMILIES.items():
    files = [
        ROOT / f"node_modules/@fontsource-variable/{family}/files/{family}-latin-wght-normal.woff2",
        ROOT / f"src/assets/fonts/{family}-pl-wght-normal.woff2",
    ]
    for weights, weight, face in faces:
        web = [instancer.instantiateVariableFont(TTFont(f), {"wght": weight}) for f in files]
        tables = [advances(f) for f in web]
        ref = advances(arial(face))
        # only characters both fonts draw (a few symbols outside the subsets fall back for good)
        sample = [ch for ch in text[kind] if ord(ch) in ref and any(ord(ch) in t for t in tables)]
        size = width(sample, tables) / width(sample, [ref])
        ascent, descent, gap = line_metrics(web[0])
        print(f"/* {family} {weight} vs Arial {face}: {pct(size)} over {len(sample)} characters on {pages} pages */", file=sys.stderr)
        rules.append(
            "@font-face {\n"
            f"  font-family: '{fallback}';\n"
            "  font-style: normal;\n"
            f"  font-weight: {weights};\n"
            f"  src: {LOCAL[face]};\n"
            f"  size-adjust: {pct(size)};\n"
            f"  ascent-override: {pct(ascent / size)};\n"
            f"  descent-override: {pct(descent / size)};\n"
            f"  line-gap-override: {pct(gap / size)};\n"
            "}"
        )
print("\n\n".join(rules))
