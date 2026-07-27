import { motion } from 'framer-motion';

// Drop this into your report reader template for Section 3, "How the regime
// was assembled." Uses CSS variables so it inherits your existing site
// tokens — swap the var() fallbacks below for your real palette if these
// vars aren't already defined globally.
//
// Usage: <RegulatoryTimeline />

const events = [
  { date: '2017-11', label: 'Inter-ministerial committee formed', detail: 'Government constitutes a committee under the Secretary, DEA, to propose action on virtual currencies.' },
  { date: '2018-04', label: 'RBI banking circular', detail: 'RBI directs regulated entities to stop dealing with crypto businesses, severing banking access.' },
  { date: '2019-07', label: 'Ban bill drafted, never enacted', detail: 'Inter-ministerial committee recommends a ban; draft bill is published and shelved.' },
  { date: '2020-03', label: 'Supreme Court strikes down the circular', detail: 'IAMAI v. RBI: the 2018 circular is set aside for disproportionality, but RBI\u2019s regulatory authority is affirmed.' },
  { date: '2022-04', label: 'Flat 30% tax introduced', detail: 'Finance Act 2022 inserts Section 115BBH: 30% tax on VDA transfer gains, no loss offset.' },
  { date: '2023-03', label: 'Brought under PMLA', detail: 'VDA service providers become reporting entities under anti-money-laundering law.' },
  { date: '2026-05', label: '7th committee sitting', detail: 'Exchanges testify; chairman flags large capital outflows through crypto.' },
  { date: '2026-07-02', label: 'RBI argues for containment', detail: 'RBI tells Parliament it favours a posture leaning toward prohibition.' },
  { date: '2026-07-23', label: '36th Report tabled', detail: 'Committee recommends an interim SRO-led framework under SEBI or RBI.' },
];

export default function RegulatoryTimeline() {
  return (
    <div
      className="w-full py-8"
      style={{ '--rt-line': 'var(--color-border, #DCD5C4)', '--rt-accent': 'var(--color-accent, #5C2333)', '--rt-text': 'var(--color-text, #231F1B)', '--rt-muted': 'var(--color-muted, #5B564E)' }}
    >
      <div className="relative pl-6 sm:pl-8">
        <div
          className="absolute left-[7px] sm:left-[11px] top-2 bottom-2 w-px"
          style={{ backgroundColor: 'var(--rt-line)' }}
        />
        <ol className="space-y-8">
          {events.map((e, i) => (
            <motion.li
              key={e.date + e.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              className="relative"
            >
              <span
                className="absolute -left-6 sm:-left-8 top-1.5 h-3 w-3 rounded-full ring-4"
                style={{
                  backgroundColor: 'var(--rt-accent)',
                  ringColor: 'var(--color-bg, #fff)',
                }}
              />
              <time
                className="block text-xs uppercase tracking-wide font-medium"
                style={{ color: 'var(--rt-muted)' }}
              >
                {formatDate(e.date)}
              </time>
              <h4 className="mt-1 text-base sm:text-lg font-semibold" style={{ color: 'var(--rt-text)' }}>
                {e.label}
              </h4>
              <p className="mt-1 text-sm leading-relaxed" style={{ color: 'var(--rt-muted)' }}>
                {e.detail}
              </p>
            </motion.li>
          ))}
        </ol>
      </div>
    </div>
  );
}

function formatDate(iso) {
  const [y, m, d] = iso.split('-');
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const monthLabel = months[parseInt(m, 10) - 1];
  return d ? `${d} ${monthLabel} ${y}` : `${monthLabel} ${y}`;
}
