// Inline markdown for report text: **bold** and [label](url), including a
// link inside a bold run. Kept tiny on purpose - no markdown parser.
const TOKEN = /\*\*(.+?)\*\*|\[([^\]]+)\]\(([^)\s]+)\)/g;
const LINK = /\[([^\]]+)\]\(([^)\s]+)\)/g;

function linkEl(label, href, key, bold) {
  return (
    <a
      key={key}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`text-navy-light underline decoration-navy/40 underline-offset-2 hover:decoration-navy-light ${bold ? "font-semibold" : ""}`}
    >
      {label}
    </a>
  );
}

function boldRun(inner, key) {
  const parts = [];
  let last = 0;
  let m;
  LINK.lastIndex = 0;
  while ((m = LINK.exec(inner))) {
    if (m.index > last) parts.push(inner.slice(last, m.index));
    parts.push(linkEl(m[1], m[2], `${key}-l${m.index}`, true));
    last = m.index + m[0].length;
  }
  if (last < inner.length) parts.push(inner.slice(last));
  return (
    <strong key={key} className="font-semibold text-ink">
      {parts}
    </strong>
  );
}

export function renderInline(text) {
  if (!text) return null;
  const out = [];
  let last = 0;
  let m;
  TOKEN.lastIndex = 0;
  while ((m = TOKEN.exec(text))) {
    if (m.index > last) out.push(text.slice(last, m.index));
    if (m[1] !== undefined) out.push(boldRun(m[1], `b${m.index}`));
    else out.push(linkEl(m[2], m[3], `a${m.index}`, false));
    last = m.index + m[0].length;
  }
  if (last < text.length) out.push(text.slice(last));
  return out;
}

export const stripInline = (text) =>
  String(text || "").replace(/\*\*/g, "").replace(/\[([^\]]+)\]\([^)]+\)/g, "$1");
