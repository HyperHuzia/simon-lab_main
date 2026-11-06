// Lucide icons (lucide-static, ISC licence, see public/licenses.txt) used on the site, as raw SVG strings read at
// build time. Only the icons listed here end up in the build; add a line to use another one.
import arrowRight from 'lucide-static/icons/arrow-right.svg?raw';
import bookOpen from 'lucide-static/icons/book-open.svg?raw';
import bot from 'lucide-static/icons/bot.svg?raw';
import building2 from 'lucide-static/icons/building-2.svg?raw';
import calculator from 'lucide-static/icons/calculator.svg?raw';
import check from 'lucide-static/icons/check.svg?raw';
import chevronDown from 'lucide-static/icons/chevron-down.svg?raw';
import cog from 'lucide-static/icons/cog.svg?raw';
import copy from 'lucide-static/icons/copy.svg?raw';
import cpu from 'lucide-static/icons/cpu.svg?raw';
import database from 'lucide-static/icons/database.svg?raw';
import fileCheck from 'lucide-static/icons/file-check.svg?raw';
import fileText from 'lucide-static/icons/file-text.svg?raw';
import fileX from 'lucide-static/icons/file-x.svg?raw';
import flag from 'lucide-static/icons/flag.svg?raw';
import flaskConical from 'lucide-static/icons/flask-conical.svg?raw';
import gauge from 'lucide-static/icons/gauge.svg?raw';
import gitCompare from 'lucide-static/icons/git-compare.svg?raw';
import gitFork from 'lucide-static/icons/git-fork.svg?raw';
import globe from 'lucide-static/icons/globe.svg?raw';
import graduationCap from 'lucide-static/icons/graduation-cap.svg?raw';
import handshake from 'lucide-static/icons/handshake.svg?raw';
import hardDrive from 'lucide-static/icons/hard-drive.svg?raw';
import layers from 'lucide-static/icons/layers.svg?raw';
import lightbulb from 'lucide-static/icons/lightbulb.svg?raw';
import logIn from 'lucide-static/icons/log-in.svg?raw';
import mail from 'lucide-static/icons/mail.svg?raw';
import network from 'lucide-static/icons/network.svg?raw';
import scrollText from 'lucide-static/icons/scroll-text.svg?raw';
import server from 'lucide-static/icons/server.svg?raw';
import shieldCheck from 'lucide-static/icons/shield-check.svg?raw';
import triangleAlert from 'lucide-static/icons/triangle-alert.svg?raw';
import unlink from 'lucide-static/icons/unlink.svg?raw';
import users from 'lucide-static/icons/users.svg?raw';

export const ICONS = {
  'arrow-right': arrowRight,
  'book-open': bookOpen,
  bot,
  'building-2': building2,
  calculator,
  check,
  'chevron-down': chevronDown,
  cog,
  copy,
  cpu,
  database,
  'file-check': fileCheck,
  'file-text': fileText,
  'file-x': fileX,
  flag,
  'flask-conical': flaskConical,
  gauge,
  'git-compare': gitCompare,
  'git-fork': gitFork,
  globe,
  'graduation-cap': graduationCap,
  handshake,
  'hard-drive': hardDrive,
  layers,
  lightbulb,
  'log-in': logIn,
  mail,
  network,
  'scroll-text': scrollText,
  server,
  'shield-check': shieldCheck,
  'triangle-alert': triangleAlert,
  unlink,
  users,
} as const;

export type IconName = keyof typeof ICONS;
