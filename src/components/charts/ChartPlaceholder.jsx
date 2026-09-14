// Suspense fallback for the lazy-loaded chart bodies. The wrapping fixed-
// height div in each shell already rules out layout shift; this just closes
// the small window where the lazy chunk (cached after the first chart on a
// page, so only ever a real wait once) is still being fetched/evaluated, so
// a slow connection sees a soft placeholder instead of a bare gap.
export default function ChartPlaceholder() {
  return <div className="h-full w-full animate-pulse rounded-md bg-paper-dim" />;
}
