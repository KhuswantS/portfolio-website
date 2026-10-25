import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { LuArrowUp } from "react-icons/lu";
import { socialLinks } from "../data/social";

const BACK_TO_TOP_THRESHOLD = 480;

function BackToTopButton() {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(window.scrollY / max, 1) : 0);
      setVisible(window.scrollY > BACK_TO_TOP_THRESHOLD);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  // A small round button with a thin ring that fills as you read down the page.
  const R = 20;
  const C = 2 * Math.PI * R;
  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      className={`group fixed bottom-5 right-5 z-40 flex h-11 w-11 items-center justify-center rounded-full border border-hairline bg-paper-dim/85 text-ink-soft shadow-lg backdrop-blur transition-all duration-300 hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy-light sm:bottom-8 sm:right-8 ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"
      }`}
    >
      <svg viewBox="0 0 44 44" className="absolute inset-0 h-full w-full -rotate-90" aria-hidden="true">
        <circle cx="22" cy="22" r={R} fill="none" stroke="currentColor" strokeOpacity="0" strokeWidth="2" />
        <circle
          cx="22"
          cy="22"
          r={R}
          fill="none"
          stroke="var(--color-navy)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray={C}
          strokeDashoffset={C * (1 - progress)}
        />
      </svg>
      <LuArrowUp className="relative h-5 w-5 transition-transform duration-200 group-hover:-translate-y-0.5" aria-hidden="true" />
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
          {" "}&middot;{" "}
          <Link to="/terms" className="underline decoration-ink-soft/30 underline-offset-2 hover:text-navy">
            Terms &amp; Disclaimer
          </Link>
        </p>
      </div>
      <BackToTopButton />
    </footer>
  );
}
