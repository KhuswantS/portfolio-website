import { useRef } from "react";
import { useInView } from "framer-motion";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const PIE_COLORS = ["var(--color-chart-1)", "var(--color-chart-2)", "var(--color-chart-3)", "var(--color-chart-4)"];

function ChartTooltip({ active, payload, label }) {
  if (!active || !payload?.length) return null;
  return (
    <div className="rounded-md border border-navy/10 bg-white px-3 py-2 shadow-md">
      {label && <p className="text-xs font-medium text-ink-soft">{label}</p>}
      {payload.map((entry) => (
        <p key={entry.name} className="text-sm font-semibold text-ink">
          {entry.value}
          {entry.name && payload.length > 1 && (
            <span className="ml-1 text-xs font-normal text-ink-soft">{entry.name}</span>
          )}
        </p>
      ))}
    </div>
  );
}

export default function ReportChart({ chartType, title, data, dataKey, labelKey }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <figure
      ref={ref}
      className="not-prose my-10 rounded-lg border border-navy/10 bg-white p-6 shadow-sm sm:p-8"
    >
      {title && (
        <figcaption className="mb-6 text-sm font-semibold uppercase tracking-wide text-ink-soft">
          {title}
        </figcaption>
      )}
      <div className="h-72 w-full">
        {isInView && (
          <ResponsiveContainer width="100%" height="100%">
            {chartType === "line" ? (
              <LineChart data={data} margin={{ top: 8, right: 16, left: -16, bottom: 0 }}>
                <CartesianGrid stroke="var(--color-hairline)" strokeDasharray="0" vertical={false} />
                <XAxis
                  dataKey={labelKey}
                  tick={{ fill: "var(--color-ink-soft)", fontSize: 12 }}
                  axisLine={{ stroke: "var(--color-hairline)" }}
                  tickLine={false}
                />
                <YAxis
                  tick={{ fill: "var(--color-ink-soft)", fontSize: 12 }}
                  axisLine={false}
                  tickLine={false}
                  width={40}
                />
                <Tooltip content={<ChartTooltip />} cursor={{ stroke: "var(--color-hairline)" }} />
                <Line
                  type="monotone"
                  dataKey={dataKey}
                  stroke="var(--color-chart-1)"
                  strokeWidth={2}
                  dot={{ r: 4, fill: "var(--color-chart-1)", stroke: "var(--color-paper)", strokeWidth: 2 }}
                  activeDot={{ r: 6, stroke: "var(--color-paper)", strokeWidth: 2 }}
                  animationDuration={1100}
                  animationEasing="ease-out"
                />
              </LineChart>
            ) : chartType === "bar" ? (
              <BarChart data={data} margin={{ top: 8, right: 16, left: -16, bottom: 0 }}>
                <CartesianGrid stroke="var(--color-hairline)" strokeDasharray="0" vertical={false} />
                <XAxis
                  dataKey={labelKey}
                  tick={{ fill: "var(--color-ink-soft)", fontSize: 12 }}
                  axisLine={{ stroke: "var(--color-hairline)" }}
                  tickLine={false}
                />
                <YAxis
                  tick={{ fill: "var(--color-ink-soft)", fontSize: 12 }}
                  axisLine={false}
                  tickLine={false}
                  width={40}
                />
                <Tooltip content={<ChartTooltip />} cursor={{ fill: "var(--color-navy)", fillOpacity: 0.05 }} />
                <Bar
                  dataKey={dataKey}
                  fill="var(--color-chart-1)"
                  radius={[4, 4, 0, 0]}
                  maxBarSize={48}
                  animationDuration={900}
                  animationEasing="ease-out"
                />
              </BarChart>
            ) : (
              <PieChart>
                <Tooltip content={<ChartTooltip />} />
                <Legend
                  verticalAlign="bottom"
                  height={36}
                  formatter={(value) => <span className="text-xs text-ink-soft">{value}</span>}
                />
                <Pie
                  data={data}
                  dataKey={dataKey}
                  nameKey={labelKey}
                  innerRadius="45%"
                  outerRadius="75%"
                  paddingAngle={2}
                  animationDuration={1000}
                  animationEasing="ease-out"
                >
                  {data.map((entry, index) => (
                    <Cell
                      key={entry[labelKey]}
                      fill={PIE_COLORS[index % PIE_COLORS.length]}
                      stroke="var(--color-paper)"
                      strokeWidth={2}
                    />
                  ))}
                </Pie>
              </PieChart>
            )}
          </ResponsiveContainer>
        )}
      </div>
    </figure>
  );
}
