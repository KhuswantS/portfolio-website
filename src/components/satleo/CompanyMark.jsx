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
