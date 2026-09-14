import { lazy, Suspense, useRef } from 'react';
import { useInView } from 'framer-motion';
import ChartPlaceholder from './ChartPlaceholder';

// Drop this into Section 6, "Does the e-rupee work as a substitute." A
// linear axis renders the e-rupee bar as basically invisible next to UPI,
// which is the honest result but reads as a broken chart — so this uses a
// log scale instead and labels both bars explicitly.
//
// Usage: <CBDCvsUPIChart />
//
// Recharts lives only in CBDCvsUPIChartBody, loaded lazily so it never ships
// to pages that don't render a report. isInView is always false during
// prerendering, so the lazy import is never reached server-side - this
// figcaption is outside the isInView gate and always renders eagerly.
const CBDCvsUPIChartBody = lazy(() => import('./CBDCvsUPIChartBody'));

export default function CBDCvsUPIChart() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <figure ref={ref} className="w-full my-8">
      <div className="h-56 sm:h-64">
        {isInView && (
          <Suspense fallback={<ChartPlaceholder />}>
            <CBDCvsUPIChartBody />
          </Suspense>
        )}
      </div>
      <figcaption className="mt-3 text-xs leading-relaxed" style={{ color: 'var(--color-muted, #c6c8cb)' }}>
        Log scale. After three and a half years, the e-rupee pilot has reached roughly 3% of
        UPI's user base. Figures are order-of-magnitude comparisons, not audited to the same
        reporting period. Source: see Section 6.
      </figcaption>
    </figure>
  );
}
