import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, LabelList } from 'recharts';

// The actual Recharts render - lazy-loaded by CBDCvsUPIChart.jsx so Recharts
// never ships to pages that don't render a report.

const data = [
  { name: 'Digital Rupee (e₹) pilot', value: 12, unit: 'million users', detail: 'Cumulative since Dec 2022, per RBI Governor, 2 Jul 2026' },
  { name: 'UPI', value: 400, unit: 'million+ users', detail: 'Monthly active base, order of magnitude' },
];

function CustomTooltip({ active, payload }) {
  if (!active || !payload?.length) return null;
  const d = payload[0].payload;
  return (
    <div
      className="rounded-md px-3 py-2 text-xs shadow-md"
      style={{ backgroundColor: 'var(--color-bg, #0b0c0e)', border: '1px solid var(--color-border, #24272c)' }}
    >
      <p className="font-semibold">{d.value}{d.name.startsWith('UPI') ? '+' : ''} {d.unit}</p>
      <p className="mt-0.5 opacity-70">{d.detail}</p>
    </div>
  );
}

export default function CBDCvsUPIChartBody() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={data} layout="vertical" margin={{ top: 8, right: 40, left: 16, bottom: 8 }}>
        <XAxis type="number" scale="log" domain={[1, 500]} tick={{ fontSize: 11, fill: 'var(--color-muted, #c6c8cb)' }} tickLine={false} axisLine={{ stroke: 'var(--color-border, #24272c)' }} />
        <YAxis type="category" dataKey="name" tick={{ fontSize: 12, fill: 'var(--color-muted, #c6c8cb)' }} tickLine={false} axisLine={false} width={140} />
        <Tooltip content={<CustomTooltip />} cursor={{ fill: 'var(--color-border, #24272c)', opacity: 0.35 }} />
        <Bar dataKey="value" radius={[0, 4, 4, 0]} maxBarSize={36} fill="var(--color-accent, #4a7fe8)" animationDuration={900} animationEasing="ease-out">
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
  );
}
