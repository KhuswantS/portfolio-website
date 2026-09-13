import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpIcon } from "./icons";
import { socialLinks } from "../data/social";

const BACK_TO_TOP_THRESHOLD = 480;

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
      className={`hover-lift fixed bottom-6 right-6 z-40 flex h-11 w-11 items-center justify-center rounded-full border border-navy/10 bg-paper-dim text-navy shadow-sm transition-opacity duration-300 ${
        visible ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
    >
      <ArrowUpIcon className="h-5 w-5" />
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
