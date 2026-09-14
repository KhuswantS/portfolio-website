import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell, LabelList } from 'recharts';

// The actual Recharts render - lazy-loaded by AdoptionEstimatesChart.jsx so
// Recharts never ships to pages that don't render a report. Keep this file
// free of any content that needs to exist in the prerendered HTML (that
// lives in the eager shell instead).

const data = [
  {
    name: 'KYC-verified,\ndomestic platforms',
    value: 39.3,
    source: 'RBI, via FIU-IND registrations',
    fill: 'var(--color-accent, #4a7fe8)',
  },
  {
    name: 'Modelled estimate\n(Chainalysis)',
    value: 119,
    source: 'Grassroots Adoption Index, disputed by RBI',
    fill: 'var(--color-accent-2, #6b96ee)',
  },
  {
    name: 'Estimated offshore\nplatform users',
    value: 120,
    source: 'Cited by MP Raghav Chadha, Budget 2026-27 debate',
    fill: 'var(--color-muted-strong, #a9c0f2)',
  },
];

// Category names carry embedded "\n" line breaks (see data above) so they fit
// in the available width without overlapping on narrow viewports.
function WrappedAxisTick({ x, y, payload }) {
  const lines = String(payload.value).split('\n');
  return (
    <g transform={`translate(${x},${y})`}>
      <text textAnchor="middle" fontSize={11} fill="var(--color-muted, #c6c8cb)">
        {lines.map((line, i) => (
          <tspan key={i} x={0} dy={i === 0 ? 12 : 12}>
            {line}
          </tspan>
        ))}
      </text>
    </g>
  );
}

function CustomTooltip({ active, payload }) {
  if (!active || !payload?.length) return null;
  const d = payload[0].payload;
  return (
    <div
      className="rounded-md px-3 py-2 text-xs shadow-md"
      style={{ backgroundColor: 'var(--color-bg, #0b0c0e)', border: '1px solid var(--color-border, #24272c)' }}
    >
      <p className="font-semibold">{d.value}M</p>
      <p className="mt-0.5 opacity-70">{d.source}</p>
    </div>
  );
}

export default function AdoptionEstimatesChartBody() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={data} margin={{ top: 24, right: 16, left: 0, bottom: 20 }}>
        <XAxis
          dataKey="name"
          tick={<WrappedAxisTick />}
          tickLine={false}
          axisLine={{ stroke: 'var(--color-border, #24272c)' }}
          interval={0}
        />
        <YAxis
          tick={{ fontSize: 11, fill: 'var(--color-muted, #c6c8cb)' }}
          tickLine={false}
          axisLine={false}
          label={{ value: 'Million users', angle: -90, position: 'insideLeft', fontSize: 11, fill: 'var(--color-muted, #c6c8cb)' }}
        />
        <Tooltip content={<CustomTooltip />} cursor={{ fill: 'var(--color-border, #24272c)', opacity: 0.35 }} />
        <Bar dataKey="value" radius={[4, 4, 0, 0]} maxBarSize={72} animationDuration={900} animationEasing="ease-out">
          {data.map((d, i) => (
            <Cell key={i} fill={d.fill} />
          ))}
          <LabelList dataKey="value" position="top" formatter={(v) => `${v}M`} fontSize={12} fontWeight={600} />
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}
