import { useState } from "react";
import { NavLink } from "react-router-dom";

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

  return (
    <header className="sticky top-0 z-50 border-b border-hairline bg-paper/90 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <NavLink to="/" end className="flex items-center gap-3">
          <img
            src="/images/logo-monogram-white.png"
            alt="Khuswant Sharma logo"
            className="h-10 w-auto flex-shrink-0"
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
          onClick={() => setOpen((v) => !v)}
          className="flex flex-col gap-1.5 md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span className={`h-0.5 w-6 bg-ink transition-transform ${open ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`h-0.5 w-6 bg-ink transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className={`h-0.5 w-6 bg-ink transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </nav>

      {open && (
        <ul className="flex flex-col gap-1 border-t border-hairline bg-paper px-6 pb-4 md:hidden">
          {links.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                end={link.to === "/"}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `block py-2 text-sm font-medium ${isActive ? "text-navy" : "text-ink-soft"}`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
