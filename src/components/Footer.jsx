import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpIcon } from "./icons";
import { socialLinks } from "../data/social";

const BACK_TO_TOP_THRESHOLD = 480;
const BUTTON_SIZE = 72;

function BackToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > BACK_TO_TOP_THRESHOLD);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      style={{ height: BUTTON_SIZE, width: BUTTON_SIZE }}
      className={`hover-lift fixed bottom-6 right-6 z-40 flex items-center justify-center rounded-full border-2 border-navy bg-paper-dim shadow-sm transition-opacity duration-300 ${
        visible ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
    >
      {/* Curved "BACK TO TOP" label along the top third of the circle, plus a
          centered up arrow. Plain CSS can't bend text along a path, so this
          is an inline SVG <textPath> riding a dome-shaped arc (not a full
          circle - text on the bottom half of a circle renders upside down). */}
      <svg viewBox={`0 0 ${BUTTON_SIZE} ${BUTTON_SIZE}`} className="absolute inset-0 h-full w-full" aria-hidden="true">
        <path id="backToTopArc" d="M 12.6,22.5 A 27,27 0 0 1 59.4,22.5" fill="none" />
        <text fontSize="6.5" fontWeight="700" style={{ letterSpacing: "0.3px" }} className="fill-navy uppercase">
          <textPath href="#backToTopArc" startOffset="50%" textAnchor="middle" lengthAdjust="spacingAndGlyphs" textLength="48">
            Back to top
          </textPath>
        </text>
      </svg>
      <ArrowUpIcon
        className="relative text-ink"
        style={{ height: BUTTON_SIZE * 0.4, width: BUTTON_SIZE * 0.4 }}
      />
    </button>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-hairline bg-paper">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-6 py-10 text-center">
        <div className="flex items-center gap-5">
          {socialLinks.map(({ href, label, Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              aria-label={label}
              className="text-ink-soft transition-colors hover:text-navy"
            >
              <Icon className="h-5 w-5" />
            </a>
          ))}
        </div>
        <p className="text-xs text-ink-soft/70">
          &copy; {new Date().getFullYear()} Khuswant Sharma. Independent research, not investment advice.
          {" "}
          <Link to="/privacy" className="underline decoration-ink-soft/30 underline-offset-2 hover:text-navy">
            Privacy Policy
          </Link>
        </p>
      </div>
      <BackToTopButton />
    </footer>
  );
}
