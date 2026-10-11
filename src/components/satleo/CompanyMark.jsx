import { COMPANIES } from "./theme";

export function companyKey(label) {
  const plain = String(label).replace(/\*\*/g, "").trim();
  return Object.keys(COMPANIES).find((k) => plain === k || plain.startsWith(k + " ")) || null;
}

export default function CompanyMark({ name, size = 22 }) {
  const c = COMPANIES[name];
  if (!c) return null;
  if (c.logo) {
    return <img src={c.logo} alt="" width={size} height={size} className="inline-block shrink-0 rounded-full bg-white object-contain p-0.5" />;
  }
  return (
    <span
      aria-hidden="true"
      className="inline-flex shrink-0 items-center justify-center rounded-full font-semibold"
      style={{
        width: size,
        height: size,
        fontSize: size * 0.42,
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
