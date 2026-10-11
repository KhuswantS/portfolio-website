import { COMPANIES } from "./theme";

// Official logo files dropped into src/assets/logos/ are picked up at build
// time; a company without a file keeps its initials badge.
const FILES = import.meta.glob("../../assets/logos/*.{svg,png,webp}", { eager: true, query: "?url", import: "default" });
const LOGOS = Object.fromEntries(
  Object.entries(FILES).map(([path, url]) => [path.split("/").pop().replace(/\.(svg|png|webp)$/, ""), url])
);

export function companyKey(label) {
  const plain = String(label).replace(/\*\*/g, "").trim();
  return Object.keys(COMPANIES).find((k) => plain === k || plain.startsWith(k + " ")) || null;
}

export default function CompanyMark({ name, size = 22 }) {
  const c = COMPANIES[name];
  if (!c) return null;
  const logo = LOGOS[c.slug];
  if (logo) {
    return (
      <span
        aria-hidden="true"
        className="inline-flex shrink-0 items-center justify-center overflow-hidden rounded-full bg-white"
        style={{ width: size, height: size, boxShadow: `0 0 0 1.5px ${c.color}` }}
      >
        <img src={logo} alt="" className="h-[78%] w-[78%] object-contain" />
      </span>
    );
  }
  return (
    <span
      aria-hidden="true"
      className="inline-flex shrink-0 items-center justify-center rounded-full font-semibold"
      style={{
        width: size,
        height: size,
        fontSize: size * 0.4,
        background: `${c.color}26`,
        color: c.color,
        boxShadow: `inset 0 0 0 1.5px ${c.color}`,
        letterSpacing: "0.02em",
      }}
    >
      {c.initials}
    </span>
  );
}

// A company's name as shown in tables and charts: its official logo on a
// white tile when we have the file (the logo already carries the name),
// otherwise the initials badge followed by the name.
export function CompanyLabel({ name, children, bold = false, size = 22, fixed = false }) {
  const c = COMPANIES[name];
  const logo = c && LOGOS[c.slug];
  if (logo) {
    // Logos differ in shape (wordmark only vs symbol + wordmark), so each has
    // its own height to look the same size; `fixed` gives equal-width tiles.
    return (
      <span
        className={`inline-flex h-8 shrink-0 items-center rounded-md bg-white px-2.5 shadow-sm ${fixed ? "w-[108px] justify-center" : ""}`}
        title={name}
      >
        <img src={logo} alt={name} style={{ height: c.logoH || 16 }} className="w-auto max-w-[92px] object-contain" />
      </span>
    );
  }
  return (
    <span className={`inline-flex items-center gap-2 ${bold ? "font-semibold text-ink" : ""}`}>
      <CompanyMark name={name} size={size} />
      <span>{children || name}</span>
    </span>
  );
}
