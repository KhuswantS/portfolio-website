import { lazy, Suspense, useRef } from 'react';
import { useInView } from 'framer-motion';
import ChartPlaceholder from './ChartPlaceholder';

// Drop this into Section 1, "The measurement problem." The point of this
// chart is the caption underneath it, not the bars — make sure that
// caption ships with it wherever it's used.
//
// Usage: <AdoptionEstimatesChart />
//
// Recharts (~350KB+) lives only in AdoptionEstimatesChartBody, loaded lazily
// so it never ships to pages that don't render a report. isInView is always
// false during prerendering (no IntersectionObserver in Node), so the lazy
// import is never even reached server-side - this figcaption is the only
// part of this component that needs to exist in the static HTML, and it's
// outside the isInView gate so it always renders eagerly.
const AdoptionEstimatesChartBody = lazy(() => import('./AdoptionEstimatesChartBody'));

export default function AdoptionEstimatesChart() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <figure ref={ref} className="w-full my-8">
      <div className="h-72 sm:h-80">
        {isInView && (
          <Suspense fallback={<ChartPlaceholder />}>
            <AdoptionEstimatesChartBody />
          </Suspense>
        )}
      </div>
      <figcaption className="mt-3 text-xs leading-relaxed" style={{ color: 'var(--color-muted, #c6c8cb)' }}>
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
