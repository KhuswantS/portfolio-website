import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, LabelList } from 'recharts';

// Drop this into Section 6, "Does the e-rupee work as a substitute." A
// linear axis renders the e-rupee bar as basically invisible next to UPI,
// which is the honest result but reads as a broken chart — so this uses a
// log scale instead and labels both bars explicitly.
//
// Usage: <CBDCvsUPIChart />

const data = [
  { name: 'Digital Rupee (e\u20B9) pilot', value: 12, unit: 'million users', detail: 'Cumulative since Dec 2022, per RBI Governor, 2 Jul 2026' },
  { name: 'UPI', value: 400, unit: 'million+ users', detail: 'Monthly active base, order of magnitude' },
];

function CustomTooltip({ active, payload }) {
  if (!active || !payload?.length) return null;
  const d = payload[0].payload;
  return (
    <div
      className="rounded-md px-3 py-2 text-xs shadow-md"
      style={{ backgroundColor: 'var(--color-bg, #F7F3EA)', border: '1px solid var(--color-border, #DCD5C4)' }}
    >
      <p className="font-semibold">{d.value}{d.name.startsWith('UPI') ? '+' : ''} {d.unit}</p>
      <p className="mt-0.5 opacity-70">{d.detail}</p>
    </div>
  );
}

export default function CBDCvsUPIChart() {
  return (
    <figure className="w-full my-8">
      <div className="h-56 sm:h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} layout="vertical" margin={{ top: 8, right: 40, left: 16, bottom: 8 }}>
            <XAxis type="number" scale="log" domain={[1, 500]} tick={{ fontSize: 11 }} tickLine={false} axisLine={{ stroke: 'var(--color-border, #DCD5C4)' }} />
            <YAxis type="category" dataKey="name" tick={{ fontSize: 12 }} tickLine={false} axisLine={false} width={140} />
            <Tooltip content={<CustomTooltip />} cursor={{ fill: 'var(--color-border, #DCD5C4)', opacity: 0.35 }} />
            <Bar dataKey="value" radius={[0, 4, 4, 0]} maxBarSize={36} fill="var(--color-accent, #16223D)">
              <LabelList
                dataKey="value"
                position="right"
                formatter={(v, entry) => `${v}${entry && entry.name === 'UPI' ? 'M+' : 'M'}`}
                fontSize={12}
                fontWeight={600}
              />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
      <figcaption className="mt-3 text-xs leading-relaxed" style={{ color: 'var(--color-muted, #5B564E)' }}>
        Log scale. After three and a half years, the e-rupee pilot has reached roughly 3% of
        UPI's user base. Figures are order-of-magnitude comparisons, not audited to the same
        reporting period. Source: see Section 6.
      </figcaption>
    </figure>
  );
}
