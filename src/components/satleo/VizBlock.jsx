import { useId, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { renderInline } from "../../lib/inline";
import CompanyMark, { companyKey } from "./CompanyMark";

function TableIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.6">
      <rect x="1.5" y="2.5" width="13" height="11" rx="1.5" />
      <path d="M1.5 6.5h13M1.5 10h13M6 6.5v7" />
    </svg>
  );
}

function ChartIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
      <path d="M2 14h12" />
      <path d="M4.5 11V8M8 11V4M11.5 11V6.5" strokeWidth="2.2" />
    </svg>
  );
}

export function DataTable({ headers, rows, marks = false, className = "" }) {
  return (
    <div className={`overflow-x-auto rounded-lg border border-navy/15 ${className}`}>
      <table className="w-full min-w-[520px] border-collapse text-left text-sm">
        <thead>
          <tr className="bg-navy/10">
            {headers.map((h, i) => (
              <th key={i} scope="col" className="border-b border-navy/15 px-4 py-3 font-semibold text-ink">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, r) => (
            <tr key={r} className="border-b border-navy/10 last:border-0 even:bg-white/[0.02]">
              {row.map((cell, c) => {
                const key = marks && c === 0 ? companyKey(cell) : null;
                return (
                  <td key={c} className="px-4 py-3 align-top leading-relaxed text-ink-soft">
                    {key ? (
                      <span className="inline-flex items-center gap-2">
                        <CompanyMark name={key} />
                        <span>{renderInline(cell)}</span>
                      </span>
                    ) : (
                      renderInline(cell)
                    )}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// A table that can flip into a graphic. Both views carry the same numbers;
// the graphic never adds data the table does not have. While the graphic is
// showing, the table stays in the page for screen readers and search engines.
export default function VizBlock({ title, caption, headers, rows, marks = false, defaultView = "table", graphicLabel, children }) {
  const [view, setView] = useState(defaultView);
  const id = useId();

  const Btn = ({ value, icon, label }) => (
    <button
      type="button"
      onClick={() => setView(value)}
      aria-pressed={view === value}
      aria-controls={id}
      className={`inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy-light ${
        view === value ? "bg-navy text-white shadow-sm" : "text-ink-soft hover:text-ink"
      }`}
    >
      {icon}
      {label}
    </button>
  );

  return (
    <section className="my-10 lg:-mx-16" aria-label={title || graphicLabel}>
      <div className="mb-3 flex flex-wrap items-center justify-between gap-3">
        {title ? <h3 className="font-sans text-base font-semibold text-ink">{title}</h3> : <span />}
        <div role="group" aria-label="Choose view" className="inline-flex rounded-lg border border-navy/20 bg-paper-dim p-0.5">
          <Btn value="table" icon={<TableIcon />} label="Table" />
          <Btn value="graphic" icon={<ChartIcon />} label="Graphic" />
        </div>
      </div>

      <div id={id}>
        <AnimatePresence mode="wait" initial={false}>
          {view === "table" ? (
            <motion.div key="t" initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }} transition={{ duration: 0.22 }}>
              <DataTable headers={headers} rows={rows} marks={marks} />
            </motion.div>
          ) : (
            <motion.div
              key="g"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.22 }}
              className="rounded-lg border border-navy/15 bg-paper-dim p-4 sm:p-6"
            >
              {children}
            </motion.div>
          )}
        </AnimatePresence>
        {view === "graphic" && (
          <div className="sr-only">
            <DataTable headers={headers} rows={rows} />
          </div>
        )}
      </div>

      {caption && <p className="mt-3 text-xs leading-relaxed text-ink-soft/70">{renderInline(caption)}</p>}
    </section>
  );
}
