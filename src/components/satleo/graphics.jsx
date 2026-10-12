import { useState } from "react";
import { motion } from "framer-motion";
import { C } from "./theme";
import { CompanyLabel } from "./CompanyMark";
import { PulseDot } from "./Pulse";
import usePlay from "./usePlay";
import useWidth from "./useWidth";
import { FUNDING, VALUATION } from "./data";

const ease = [0.22, 1, 0.36, 1];

/* ------------------------------------------------------------------ */
/* 1. Competitor funding                                               */
/* ------------------------------------------------------------------ */

export function CompetitorFundingGraphic() {
  const { ref, play, reduce } = usePlay();
  const max = FUNDING[0].usd;
  const base = FUNDING.at(-1).usd;
  return (
    <div ref={ref} role="img" aria-label="Equity raised: SatVu $122M, constellr $89.1M, Hydrosat at least $70M, OroraTech $63.2M, SatLeo $5.5M">
      <p className="text-xs text-ink-soft/70">Total equity funding, US$ million (Tracxn; Hydrosat from its own announcements), with each rival's multiple of SatLeo</p>
      <ul className="mt-5 space-y-3">
        {FUNDING.map((r, i) => {
          const isS = r.name === "SatLeo";
          return (
            <li key={r.name} className="grid grid-cols-[8.75rem_1fr] items-center gap-3 sm:grid-cols-[9.5rem_1fr]">
              <span className={`flex items-center text-sm ${isS ? "font-semibold text-ink" : "text-ink-soft"}`}>
                <CompanyLabel name={r.name} bold={isS} fixed />
              </span>
              <span className="flex items-center gap-2">
                <motion.span
                  className="block h-6 rounded-r-sm"
                  style={{ background: isS ? C.satleo : C.muted, minWidth: 4 }}
                  initial={{ width: reduce ? `${(r.usd / max) * 78}%` : 0 }}
                  animate={{ width: play ? `${(r.usd / max) * 78}%` : 0 }}
                  transition={{ duration: 0.9, delay: i * 0.12, ease }}
                />
                <motion.span
                  className={`whitespace-nowrap text-sm tabular-nums ${isS ? "font-semibold text-ink" : "text-ink-soft"}`}
                  initial={{ opacity: reduce ? 1 : 0 }}
                  animate={{ opacity: play ? 1 : 0 }}
                  transition={{ delay: 0.5 + i * 0.12 }}
                >
                  ${r.usd}M{r.atLeast ? "+" : ""}
                  {!isS && <span className="text-ink-soft/60">{`  ${Math.round(r.usd / base)}x${r.atLeast ? "+" : ""}`}</span>}
                </motion.span>
              </span>
            </li>
          );
        })}
      </ul>
      <p className="mt-4 text-xs text-ink-soft/60">On SatVu's own figure of GBP 60 million (about $80 million), the gap is about 15 times.</p>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* 2. Commercial thermal companies                                     */
/* ------------------------------------------------------------------ */
const THERMAL = [
  { name: "SatVu", lvl: 0, country: "UK", orbit: 2, orbitNote: "HotSat-2 in use; HotSat-3 launched 1 Oct 2026", res: 3.5, resLabel: "3.5 m", buyers: "Defence, intelligence, energy" },
  { name: "constellr", lvl: 1, country: "Germany", orbit: 2, orbitNote: "2 satellites (2025)", res: 30, resLabel: "30 m native, sharpened to 10 m", buyers: "Moving from farming towards defence" },
  { name: "OroraTech", lvl: 0, country: "Germany", orbit: 20, orbitNote: "After FOREST-20 on 1 Oct 2026", res: 200, resLabel: "About 200 m", buyers: "Wildfire agencies, governments" },
  { name: "Hydrosat", lvl: 1, country: "Luxembourg/US", orbit: 2, orbitNote: "2 satellites", res: 70, resLabel: "About 70 m thermal", buyers: "Farming, insurance, government" },
  { name: "SatLeo", lvl: 0, country: "India", orbit: 1, orbitNote: "1 hosted test payload", res: 60, resLabel: "About 60 m now; about 10 m targeted", target: 10, buyers: "Government pilots; defence in discussion" },
];

// Log scale from 2 m to 300 m, sharper (smaller) on the left.
const lo = Math.log10(2);
const hi = Math.log10(300);
const pos = (m) => ((Math.log10(m) - lo) / (hi - lo)) * 100;

export function ThermalCompaniesGraphic() {
  const { ref, play, reduce } = usePlay();
  return (
    <div ref={ref}>
      <p className="text-xs text-ink-soft/70">Status in October 2026. Each square is one satellite or payload listed in the table.</p>

      <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {THERMAL.map((r, i) => {
          const isS = r.name === "SatLeo";
          return (
            <motion.div
              key={r.name}
              className="rounded-lg border p-4"
              style={{ borderColor: isS ? `${C.satleo}88` : "rgba(110,155,238,0.15)", background: isS ? "rgba(242,193,78,0.06)" : "transparent" }}
              initial={{ opacity: reduce ? 1 : 0, y: reduce ? 0 : 10 }}
              animate={{ opacity: play ? 1 : 0, y: play ? 0 : 10 }}
              transition={{ duration: 0.5, delay: i * 0.1, ease }}
            >
              <div className="flex flex-col items-start gap-1.5">
                <CompanyLabel name={r.name} bold size={26} />
                <p className="text-xs text-ink-soft/70">{r.country}</p>
              </div>
              <div className="mt-3 flex flex-wrap gap-1" aria-hidden="true">
                {Array.from({ length: r.orbit }).map((_, k) => (
                  <motion.span
                    key={k}
                    className="h-2.5 w-2.5 rounded-[2px]"
                    style={{ background: isS ? C.satleo : C.blue }}
                    initial={{ scale: reduce ? 1 : 0 }}
                    animate={{ scale: play ? 1 : 0 }}
                    transition={{ delay: 0.3 + i * 0.1 + k * 0.03 }}
                  />
                ))}
              </div>
              <p className="mt-2 text-xs text-ink-soft">{r.orbitNote}</p>
              <p className="mt-2 text-xs text-ink-soft">
                <span className="text-ink-soft/60">Resolution: </span>
                {r.resLabel}
              </p>
              <p className="mt-1 text-xs text-ink-soft">
                <span className="text-ink-soft/60">Buyers: </span>
                {r.buyers}
              </p>
            </motion.div>
          );
        })}
      </div>

      {/* Shared sharpness scale */}
      <div className="mt-8">
        <p className="text-xs font-semibold uppercase tracking-wide text-ink-soft/70">Thermal resolution, metres (log scale; further left is sharper)</p>
        <div className="relative mt-20 mb-8 h-px bg-white/20">
          {[3, 10, 30, 100, 300].map((t) => (
            <span key={t} className={`absolute top-2 whitespace-nowrap text-[11px] text-ink-soft/50 ${t === 300 ? "-translate-x-full" : "-translate-x-1/2"}`} style={{ left: `${pos(t)}%` }}>
              {t} m
            </span>
          ))}
          {THERMAL.map((r, i) => {
            const isS = r.name === "SatLeo";
            return (
              <motion.div
                key={r.name}
                className="absolute -translate-x-1/2"
                style={{ left: `${pos(r.res)}%`, top: 0 }}
                initial={{ opacity: reduce ? 1 : 0 }}
                animate={{ opacity: play ? 1 : 0 }}
                transition={{ delay: 0.6 + i * 0.12 }}
              >
                <span className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full" style={{ width: 12, height: 12, background: isS ? C.satleo : C.blue, left: "50%", top: 0 }} />
                <span
                  className={`absolute -translate-x-1/2 whitespace-nowrap text-[11px] ${isS ? "font-semibold text-ink" : "text-ink-soft"}`}
                  style={{ left: "50%", top: r.lvl ? -44 : -26 }}
                >
                  {r.name}
                </span>
              </motion.div>
            );
          })}
          {/* SatLeo's PYRO target: hollow pulsing marker at about 10 m */}
          <motion.div
            className="absolute -translate-x-1/2"
            style={{ left: `${pos(10)}%`, top: 0 }}
            initial={{ opacity: reduce ? 1 : 0 }}
            animate={{ opacity: play ? 1 : 0 }}
            transition={{ delay: 1.4 }}
          >
            <span className="absolute -translate-x-1/2 -translate-y-1/2" style={{ left: "50%", top: 0 }}>
              <span className="pulse-ring absolute inset-0 rounded-full" style={{ background: C.satleo }} />
              <span className="relative block rounded-full" style={{ width: 12, height: 12, boxShadow: `inset 0 0 0 2px ${C.satleo}`, background: "#131518" }} />
            </span>
            <span className="absolute -translate-x-1/2 whitespace-nowrap text-[11px] text-ink-soft" style={{ left: "50%", top: -26 }}>
              PYRO target
            </span>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* 3. Revenue in public accounts                                       */
/* ------------------------------------------------------------------ */
const ACCOUNTS = [
  { label: "Revenue", fy24: 27.86, fy25: 3.4 },
  { label: "Total expenses", fy24: 27.11, fy25: 40.17 },
  { label: "of which staff costs", fy24: 8.0, fy25: 23.01 },
  { label: "Net profit or loss", fy24: 0.54, fy25: -36.77 },
];

export function RevenueGraphic() {
  const { ref, play, reduce } = usePlay();
  const negMax = 36.77;
  const posMax = 40.17;
  const zero = 13 + (negMax / (negMax + posMax)) * 74;
  const span = (v) => (Math.abs(v) / (negMax + posMax)) * 74; // leave room for labels
  const Bar = ({ v, color, delay }) => (
    <div className="relative h-5">
      <span className="absolute inset-y-0 w-px bg-white/25" style={{ left: `${zero}%` }} />
      <motion.span
        className="absolute inset-y-0 rounded-sm"
        style={{ background: v < 0 ? C.negative : color, right: v < 0 ? `${100 - zero}%` : "auto", left: v < 0 ? "auto" : `${zero}%` }}
        initial={{ width: reduce ? `${span(v)}%` : 0 }}
        animate={{ width: play ? `${span(v)}%` : 0 }}
        transition={{ duration: 0.8, delay, ease }}
      />
      <span
        className="absolute top-1/2 -translate-y-1/2 whitespace-nowrap text-xs tabular-nums text-ink"
        style={v < 0 ? { right: `${100 - zero + span(v) + 1}%` } : { left: `${zero + span(v) + 1}%` }}
      >
        {v < 0 ? `(${Math.abs(v)})` : v}
      </span>
    </div>
  );
  return (
    <div ref={ref} role="img" aria-label="FY2024 revenue Rs 27.86 lakh, FY2025 Rs 3.4 lakh. FY2025 net loss Rs 36.77 lakh.">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <p className="text-xs text-ink-soft/70">Rs lakh, from public accounts. FY2024 ran from 29 May 2023 to March 2024.</p>
        <div className="flex gap-4 text-xs text-ink-soft">
          <span className="inline-flex items-center gap-1.5"><span className="h-2.5 w-2.5 rounded-sm" style={{ background: C.blue }} />FY2024</span>
          <span className="inline-flex items-center gap-1.5"><span className="h-2.5 w-2.5 rounded-sm" style={{ background: C.satleo }} />FY2025</span>
          <span className="inline-flex items-center gap-1.5"><span className="h-2.5 w-2.5 rounded-sm" style={{ background: C.negative }} />Loss</span>
        </div>
      </div>
      <div className="mt-5 space-y-5">
        {ACCOUNTS.map((a, i) => (
          <div key={a.label} className="grid grid-cols-[7.5rem_1fr] items-center gap-3 sm:grid-cols-[10rem_1fr]">
            <span className="text-sm text-ink-soft">{a.label}</span>
            <div className="space-y-1">
              <Bar v={a.fy24} color={C.blue} delay={i * 0.15} />
              <Bar v={a.fy25} color={C.satleo} delay={i * 0.15 + 0.1} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* 4. Valuation series                                                 */
/* ------------------------------------------------------------------ */

// Where each value label sits relative to its point, chosen so no label
// touches the step line.
const LABEL_POS = {
  "Dec 2024": { dx: 8, dy: 20, anchor: "start" },
  "Feb 2025": { dx: -8, dy: -10, anchor: "end" },
  "Apr 2025": { dx: 8, dy: -12, anchor: "start" },
  "Apr 2026": { dx: -10, dy: 22, anchor: "end" },
  "May 2026": { dx: 0, dy: -16, anchor: "middle" },
};

export function ValuationGraphic() {
  const { ref, play, reduce } = usePlay();
  const [wRef, width] = useWidth(640);
  const W = Math.max(width, 280);
  const narrow = W < 480;
  const H = narrow ? 260 : 300;
  const pad = { l: 36, r: narrow ? 40 : 48, t: 30, b: 34 };
  const x = (m) => pad.l + (m / 17) * (W - pad.l - pad.r);
  const y = (v) => pad.t + (1 - v / 170) * (H - pad.t - pad.b);
  let d = "";
  VALUATION.forEach((p, i) => {
    d += i === 0 ? `M${x(p.m)},${y(p.cr)}` : ` H${x(p.m)} V${y(p.cr)}`;
  });
  const last = VALUATION.at(-1);
  // Axis dates: keep the first and last, then add others only where they do
  // not collide (dates two months apart would otherwise overlap).
  const tw = (t) => t.length * 6.4;
  const span = (t) => (t.anchor === "start" ? [t.x, t.x + tw(t.label)] : t.anchor === "end" ? [t.x - tw(t.label), t.x] : [t.x - tw(t.label) / 2, t.x + tw(t.label) / 2]);
  const ticks = [
    { label: VALUATION[0].label, x: x(VALUATION[0].m), anchor: "start" },
    { label: last.label, x: x(last.m), anchor: "end" },
  ];
  VALUATION.slice(1, -1).forEach((p) => {
    const t = { label: p.label, x: x(p.m), anchor: "middle" };
    const [a, b] = span(t);
    if (ticks.every((o) => { const [c, e] = span(o); return b + 12 < c || a > e + 12; })) ticks.push(t);
  });
  return (
    <div ref={ref}>
      <p className="text-xs text-ink-soft/70">Valuation at each share allotment, Rs crore (Tracxn). Basis of the earlier points unconfirmed.</p>
      <div ref={wRef} className="mt-4 w-full">
        <svg width={W} height={H} role="img" aria-label="Valuation: Rs 38.3 crore Dec 2024, 48.3 Feb 2025, 80 Apr 2025, 149 Apr 2026, 150 May 2026" className="block overflow-visible">
          {[0, 50, 100, 150].map((v) => (
            <g key={v}>
              <line x1={pad.l} x2={W - pad.r + 20} y1={y(v)} y2={y(v)} stroke={v === 0 ? "rgba(255,255,255,0.3)" : C.grid} />
              <text x={pad.l - 8} y={y(v) + 4} textAnchor="end" fontSize="11" fill={C.textSoft}>
                {v}
              </text>
            </g>
          ))}
          <motion.path
            d={d}
            fill="none"
            stroke={C.satleo}
            strokeWidth="2.5"
            strokeLinejoin="round"
            initial={{ pathLength: reduce ? 1 : 0 }}
            animate={{ pathLength: play ? 1 : 0 }}
            transition={{ duration: 1.6, ease: "easeInOut" }}
          />
          {VALUATION.map((p, i) => {
            const isLast = i === VALUATION.length - 1;
            const lab = LABEL_POS[p.label];
            const showValue = !(narrow && p.label === "Feb 2025");
            return (
              <g key={p.label}>
                <motion.circle
                  cx={x(p.m)}
                  cy={y(p.cr)}
                  r={isLast ? 6.5 : 4.5}
                  fill={C.satleo}
                  className={isLast && play ? "blink-dot" : undefined}
                  initial={{ opacity: reduce ? 1 : 0 }}
                  animate={{ opacity: play ? 1 : 0 }}
                  transition={{ delay: 0.25 + i * 0.3 }}
                />
                {isLast && play && (
                  <>
                    <circle cx={x(p.m)} cy={y(p.cr)} r="6.5" fill="none" stroke={C.satleo} strokeWidth="2" className="pulse-svg" />
                    <circle cx={x(p.m)} cy={y(p.cr)} r="6.5" fill="none" stroke={C.satleo} strokeWidth="2" className="pulse-svg pulse-svg-late" />
                  </>
                )}
                {showValue && (
                  <motion.text
                    x={x(p.m) + lab.dx}
                    y={y(p.cr) + lab.dy}
                    textAnchor={lab.anchor}
                    fontSize={isLast ? 13 : 12}
                    fontWeight={isLast ? 600 : 400}
                    fill={C.text}
                    initial={{ opacity: reduce ? 1 : 0 }}
                    animate={{ opacity: play ? 1 : 0 }}
                    transition={{ delay: 0.35 + i * 0.3 }}
                  >
                    {`Rs ${p.cr} cr`}
                  </motion.text>
                )}
              </g>
            );
          })}
          {ticks.map((t) => (
            <text key={t.label} x={t.x} y={H - pad.b + 20} textAnchor={t.anchor} fontSize="11" fill={C.textSoft}>
              {t.label}
            </text>
          ))}
          <motion.text
            x={x(10)}
            y={y(narrow ? 104 : 118)}
            textAnchor="middle"
            fontSize="13"
            fontWeight="600"
            fill={C.text}
            initial={{ opacity: reduce ? 1 : 0 }}
            animate={{ opacity: play ? 1 : 0 }}
            transition={{ delay: 1.7 }}
          >
            {`${(last.cr / VALUATION[0].cr).toFixed(1)}x the first round`}
          </motion.text>
        </svg>
      </div>
      <p className="mt-2 text-xs text-ink-soft/60">Latest public accounts: revenue Rs 27.86 lakh (FY2024), Rs 3.4 lakh (FY2025, to March 2025).</p>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* 5. Funding rounds                                                   */
/* ------------------------------------------------------------------ */
const ROUNDS = [
  { date: "Dec 2024", note: "announced Apr 2025", round: "First institutional round", amount: "$3.3 million", basis: "press", lead: "Merak Ventures", others: "Huddle Ventures, Java Capital, IIMA Ventures, Gujarat Venture Finance, PointOne Capital, SIDBI; angels Manish Gandhi, Dheer Baldua" },
  { date: "6 Apr 2026", round: "Seed", amount: "$2.2 million", basis: "press", lead: "Unicorn India Ventures", others: "Merak Ventures, Java Capital, IIMA Ventures; angel Manish Gandhi", gap: "about 16 months later" },
  { date: "29 May 2026", round: "Top-up", amount: "Rs 1.4 crore", basis: "filings", lead: "Merak Ventures", others: "At Rs 150 crore post-money", gap: "about 2 months later", latest: true },
];

export function FundingRoundsGraphic() {
  const { ref, play, reduce } = usePlay();
  return (
    <div ref={ref}>
      <p className="text-xs text-ink-soft/70">Amounts as reported (press or filings). Filings total Rs 45.9 crore of equity.</p>
      <ol className="relative mt-6 ml-2 border-l border-white/15">
        {ROUNDS.map((r, i) => (
          <motion.li
            key={r.date}
            className="relative pb-7 pl-7 last:pb-0"
            initial={{ opacity: reduce ? 1 : 0, x: reduce ? 0 : -8 }}
            animate={{ opacity: play ? 1 : 0, x: play ? 0 : -8 }}
            transition={{ duration: 0.5, delay: i * 0.35, ease }}
          >
            <span className="absolute -left-[7px] top-1">
              {r.latest ? <PulseDot color={C.satleo} size={13} /> : <span className="block h-[13px] w-[13px] rounded-full border-2" style={{ borderColor: C.blue, background: "#131518" }} />}
            </span>
            {r.gap && <p className="mb-1 text-[11px] uppercase tracking-wide text-ink-soft/50">{r.gap}</p>}
            <p className="text-xs font-semibold uppercase tracking-wide text-ink-soft/80">
              {r.date}
              {r.note && <span className="font-normal normal-case tracking-normal text-ink-soft/60">{` (${r.note})`}</span>}
            </p>
            <p className="mt-1 text-base font-semibold text-ink">
              {r.round}: <span style={{ color: r.latest ? C.satleo : C.blue }}>{r.amount}</span>
              <span className="text-xs font-normal text-ink-soft/60">{` (${r.basis})`}</span>
            </p>
            <p className="mt-1 text-sm text-ink-soft">
              <span className="text-ink">Lead: {r.lead}.</span> {r.others}
            </p>
          </motion.li>
        ))}
      </ol>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* 6. Ownership                                                        */
/* ------------------------------------------------------------------ */
const HOLDERS = [
  { name: "Shravan Bhati (founder)", pct: 33.66, color: "#f2c14e", group: "Founders" },
  { name: "Urmil Bakhai (founder)", pct: 9.48, color: "#d9a43a", group: "Founders" },
  { name: "Dr Ranendu Ghosh (founder)", pct: 4.27, color: "#b8862c", group: "Founders" },
  { name: "Merak Ventures", pct: 12.5, color: "#6e9bee" },
  { name: "Unicorn India Ventures", pct: 10.0, color: "#4a7fe8" },
  { name: "Huddle Ventures", pct: 6.57, color: "#3fbfb0" },
  { name: "Gujarat Venture Finance", pct: 4.38, color: "#2f9a8e" },
  { name: "Other funds", pct: 6.27, color: "#9a7fe0", detail: "Java Capital 2.63%, PointOne 1.39%, SIDBI 1.09%, IIMA Ventures 0.99%, Infinyte Club 0.17%" },
  { name: "Angels", pct: 4.51, color: "#c96fa6", detail: "Manish Gandhi 3.12%, Dheer Baldua 1.39%" },
  { name: "ESOP pool", pct: 8.37, color: "#8a94a3" },
];

export function OwnershipGraphic() {
  const { ref, play, reduce } = usePlay();
  const [active, setActive] = useState(null);
  const R = 80;
  const CIRC = 2 * Math.PI * R;
  const total = HOLDERS.reduce((s, h) => s + h.pct, 0);
  let acc = 0;
  const segs = HOLDERS.map((h, i) => {
    const start = acc / total;
    acc += h.pct;
    return { ...h, start, frac: h.pct / total, i };
  });
  const shown = active != null ? HOLDERS[active] : null;
  return (
    <div ref={ref}>
      <p className="text-xs text-ink-soft/70">Shareholding after the May 2026 round, including the ESOP pool. Tap or hover a holder to highlight it.</p>
      <div className="mt-5 grid items-center gap-6 sm:grid-cols-[220px_1fr]">
        <div className="relative mx-auto h-[220px] w-[220px]">
          <svg viewBox="0 0 220 220" width="220" height="220" role="img" aria-label="Ownership: founders 47.41%, Merak 12.5%, Unicorn India 10%, Huddle 6.57%, GVFL 4.38%, other funds 6.27%, angels 4.51%, ESOP 8.37%">
            <g transform="rotate(-90 110 110)">
              <circle cx="110" cy="110" r={R} fill="none" stroke={C.grid} strokeWidth="26" />
              {segs.map((s) => (
                <motion.circle
                  key={s.name}
                  cx="110"
                  cy="110"
                  r={R}
                  fill="none"
                  stroke={s.color}
                  strokeWidth={active === s.i ? 32 : 26}
                  strokeDashoffset={-s.start * CIRC}
                  style={{ opacity: active == null || active === s.i ? 1 : 0.35, transition: "opacity 200ms, stroke-width 200ms" }}
                  initial={{ strokeDasharray: `${reduce ? Math.max(s.frac * CIRC - 1.5, 0.5) : 0} ${CIRC}` }}
                  animate={{ strokeDasharray: `${play ? Math.max(s.frac * CIRC - 1.5, 0.5) : 0} ${CIRC}` }}
                  transition={{ duration: 0.5, delay: 0.1 + s.i * 0.12, ease }}
                  onMouseEnter={() => setActive(s.i)}
                  onMouseLeave={() => setActive(null)}
                />
              ))}
            </g>
          </svg>
          <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center px-10 text-center">
            <span className="text-2xl font-semibold tabular-nums text-ink">{shown ? `${shown.pct.toFixed(2)}%` : "47.41%"}</span>
            <span className="mt-0.5 text-[11px] leading-tight text-ink-soft">{shown ? shown.name : "Founders"}</span>
          </div>
        </div>
        <ul className="grid gap-1.5">
          {HOLDERS.map((h, i) => (
            <li key={h.name}>
              <button
                type="button"
                onMouseEnter={() => setActive(i)}
                onMouseLeave={() => setActive(null)}
                onFocus={() => setActive(i)}
                onBlur={() => setActive(null)}
                onClick={() => setActive(active === i ? null : i)}
                className={`grid w-full grid-cols-[12px_1fr_auto] items-center gap-2 rounded px-2 py-1 text-left text-sm transition-colors ${active === i ? "bg-white/5" : ""}`}
              >
                <span className="h-3 w-3 rounded-sm" style={{ background: h.color }} />
                <span className="text-ink-soft">
                  {h.name}
                  {h.detail && <span className="block text-[11px] text-ink-soft/60">{h.detail}</span>}
                </span>
                <span className="tabular-nums text-ink">{h.pct.toFixed(2)}%</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
      <p className="mt-3 text-xs text-ink-soft/60">Stakes may not add to exactly 100% because of rounding.</p>
    </div>
  );
}
