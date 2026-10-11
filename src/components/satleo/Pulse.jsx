// A soft ring that keeps pulsing around a milestone (for example the latest
// valuation). Pure CSS so it costs nothing; switched off under reduced motion.
export function PulseDot({ color, size = 12, className = "" }) {
  return (
    <span className={`relative inline-flex ${className}`} style={{ width: size, height: size }} aria-hidden="true">
      <span className="pulse-ring absolute inset-0 rounded-full" style={{ background: color }} />
      <span className="relative inline-flex rounded-full" style={{ width: size, height: size, background: color }} />
    </span>
  );
}
