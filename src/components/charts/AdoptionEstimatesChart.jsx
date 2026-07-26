import { useRef } from 'react';
import { useInView } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell, LabelList } from 'recharts';

// Drop this into Section 1, "The measurement problem." The point of this
// chart is the caption underneath it, not the bars — make sure that
// caption ships with it wherever it's used.
//
// Usage: <AdoptionEstimatesChart />

const data = [
  {
    name: 'KYC-verified,\ndomestic platforms',
    value: 39.3,
    source: 'RBI, via FIU-IND registrations',
    fill: 'var(--color-accent, #16223D)',
  },
  {
    name: 'Modelled estimate\n(Chainalysis)',
    value: 119,
    source: 'Grassroots Adoption Index, disputed by RBI',
    fill: 'var(--color-accent-2, #4C5877)',
  },
  {
    name: 'Estimated offshore\nplatform users',
    value: 120,
    source: 'Cited by MP Raghav Chadha, Budget 2026-27 debate',
    fill: 'var(--color-muted-strong, #A6ADBF)',
  },
];

// Category names carry embedded "\n" line breaks (see data above) so they fit
// in the available width without overlapping on narrow viewports.
function WrappedAxisTick({ x, y, payload }) {
  const lines = String(payload.value).split('\n');
  return (
    <g transform={`translate(${x},${y})`}>
      <text textAnchor="middle" fontSize={11} fill="var(--color-muted, #5B564E)">
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
      style={{ backgroundColor: 'var(--color-bg, #F7F3EA)', border: '1px solid var(--color-border, #DCD5C4)' }}
    >
      <p className="font-semibold">{d.value}M</p>
      <p className="mt-0.5 opacity-70">{d.source}</p>
    </div>
  );
}

export default function AdoptionEstimatesChart() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <figure ref={ref} className="w-full my-8">
      <div className="h-72 sm:h-80">
        {isInView && (
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} margin={{ top: 24, right: 16, left: 0, bottom: 20 }}>
              <XAxis
                dataKey="name"
                tick={<WrappedAxisTick />}
                tickLine={false}
                axisLine={{ stroke: 'var(--color-border, #DCD5C4)' }}
                interval={0}
              />
              <YAxis
                tick={{ fontSize: 11 }}
                tickLine={false}
                axisLine={false}
                label={{ value: 'Million users', angle: -90, position: 'insideLeft', fontSize: 11 }}
              />
              <Tooltip content={<CustomTooltip />} cursor={{ fill: 'var(--color-border, #DCD5C4)', opacity: 0.35 }} />
              <Bar dataKey="value" radius={[4, 4, 0, 0]} maxBarSize={72} animationDuration={900} animationEasing="ease-out">
                {data.map((d, i) => (
                  <Cell key={i} fill={d.fill} />
                ))}
                <LabelList dataKey="value" position="top" formatter={(v) => `${v}M`} fontSize={12} fontWeight={600} />
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        )}
      </div>
      <figcaption className="mt-3 text-xs leading-relaxed" style={{ color: 'var(--color-muted, #5B564E)' }}>
        These three figures are not measuring the same thing and should not be averaged or
        compared directly. The 39.3 million figure is a count of verified accounts on
        registered domestic platforms. The 119 million figure is a modelled estimate from
        private blockchain analytics, which the RBI has publicly disputed. The offshore
        estimate is a parliamentary citation, not an audited count. Source: see Section 1
        and the method note.
      </figcaption>
    </figure>
  );
}
