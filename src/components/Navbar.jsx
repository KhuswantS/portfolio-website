import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { CloseIcon } from "./icons";

const links = [
  { to: "/", label: "Home" },
  { to: "/research", label: "Research" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    `text-sm font-medium tracking-wide transition-colors ${
      isActive ? "text-navy" : "text-ink-soft hover:text-navy"
    }`;

  const close = () => setOpen(false);

  // Lock background scroll while the drawer is open, and let Escape close it.
  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  return (
    <>
    <header className="sticky top-0 z-50 border-b border-hairline bg-paper/90 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <NavLink to="/" end className="flex items-center gap-3">
          <img
            src="/images/logo-monogram-white-centered.png"
            alt="Khuswant Sharma logo"
            className="h-9 w-auto flex-shrink-0"
          />
          <span className="h-9 w-px flex-shrink-0 bg-hairline" aria-hidden="true" />
          <span className="flex flex-col leading-tight">
            <span className="font-serif text-lg font-semibold tracking-[0.01em] text-ink">
              Khuswant Sharma
            </span>
            <span className="mt-0.5 text-[10px] font-medium uppercase tracking-[0.16em] text-ink-soft">
              Independent Investment Research
            </span>
          </span>
        </NavLink>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <li key={link.to}>
              <NavLink to={link.to} end={link.to === "/"} className={linkClass}>
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={() => setOpen(true)}
          className="flex flex-col gap-1.5 md:hidden"
          aria-label="Open menu"
          aria-expanded={open}
        >
          <span className="h-0.5 w-6 bg-ink" />
          <span className="h-0.5 w-6 bg-ink" />
          <span className="h-0.5 w-6 bg-ink" />
        </button>
      </nav>
    </header>

    {/* Rendered as a sibling of <header>, not a child - the header's own
        backdrop-blur was creating a compositing/containing-block context
        that let page content bleed through the drawer's own background on
        real mobile browsers, even though the drawer's fill was opaque. */}
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={close}
            className="fixed inset-0 z-[60] bg-black/50 md:hidden"
            aria-hidden="true"
          />
          <motion.div
            key="drawer"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.28, ease: "easeOut" }}
            role="dialog"
            aria-modal="true"
            aria-label="Site menu"
            className="fixed inset-y-0 right-0 z-[70] flex w-72 max-w-[80vw] flex-col border-l border-hairline bg-paper-dim px-6 py-4 md:hidden"
          >
            <div className="flex items-center justify-end">
              <button
                type="button"
                onClick={close}
                aria-label="Close menu"
                className="flex h-9 w-9 items-center justify-center rounded-md text-ink-soft transition-colors hover:text-navy"
              >
                <CloseIcon className="h-5 w-5" />
              </button>
            </div>
            <ul className="mt-6 flex flex-col gap-1">
              {links.map((link) => (
                <li key={link.to}>
                  <NavLink
                    to={link.to}
                    end={link.to === "/"}
                    onClick={close}
                    className={({ isActive }) =>
                      `block py-2.5 text-base font-medium ${isActive ? "text-navy" : "text-ink-soft"}`
                    }
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </motion.div>
        </>
      )}
    </AnimatePresence>
    </>
  );
}
