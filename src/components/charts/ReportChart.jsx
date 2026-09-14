import { lazy, Suspense, useRef } from "react";
import { useInView } from "framer-motion";
import ChartPlaceholder from "./ChartPlaceholder";

// Recharts lives only in ReportChartBody, loaded lazily so it never ships to
// pages that don't render a report. isInView is always false during
// prerendering, so the lazy import is never reached server-side - the title
// figcaption is outside the isInView gate and always renders eagerly.
const ReportChartBody = lazy(() => import("./ReportChartBody"));

export default function ReportChart({ chartType, title, data, dataKey, labelKey }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <figure
      ref={ref}
      className="not-prose my-10 rounded-lg border border-navy/10 bg-paper-dim p-6 shadow-sm sm:p-8"
    >
      {title && (
        <figcaption className="mb-6 text-sm font-semibold uppercase tracking-wide text-ink-soft">
          {title}
        </figcaption>
      )}
      <div className="h-72 w-full">
        {isInView && (
          <Suspense fallback={<ChartPlaceholder />}>
            <ReportChartBody chartType={chartType} data={data} dataKey={dataKey} labelKey={labelKey} />
          </Suspense>
        )}
      </div>
    </figure>
  );
}
