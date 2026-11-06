"""Polish-only subsets of the variable web fonts.

Fontsource ships one latin-ext file per family (Noto Sans: 168 KB) and Polish pages need 18 letters from it. This
writes src/assets/fonts/<family>-pl-wght-normal.woff2 with just those letters (variation axes and mark positioning
kept); src/styles/fonts.css serves them under the same family names. Re-run after upgrading a @fontsource-variable
package:  python scripts/subset-fonts.py   (needs fonttools and brotli)
"""
from pathlib import Path

from fontTools import subset

ROOT = Path(__file__).resolve().parent.parent
# Ą ą Ć ć Ę ę Ł ł Ń ń Ś ś Ź ź Ż ż (Ó ó are in the latin subset). German needs nothing beyond latin.
POLISH = "U+0104-0107,U+0118-0119,U+0141-0144,U+015A-015B,U+0179-017C"
FAMILIES = ["montserrat", "noto-sans", "jetbrains-mono"]

for family in FAMILIES:
    src = ROOT / f"node_modules/@fontsource-variable/{family}/files/{family}-latin-ext-wght-normal.woff2"
    out = ROOT / f"src/assets/fonts/{family}-pl-wght-normal.woff2"
    options = subset.Options()
    options.flavor = "woff2"
    options.layout_features = ["*"]
    font = subset.load_font(str(src), options)
    subsetter = subset.Subsetter(options)
    subsetter.populate(unicodes=subset.parse_unicodes(POLISH))
    subsetter.subset(font)
    subset.save_font(font, str(out), options)
    print(f"{out.relative_to(ROOT).as_posix()}: {src.stat().st_size} -> {out.stat().st_size} bytes")
