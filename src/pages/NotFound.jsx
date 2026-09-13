import { Link } from "react-router-dom";
import SEO from "../components/SEO";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-2xl flex-col items-center px-6 py-28 text-center sm:py-36">
      <SEO
        title="Page Not Found | Khuswant Sharma"
        description="The page you're looking for doesn't exist."
        path="/404"
      />
      <img
        src="/images/logo-monogram-white-centered.png"
        alt="Khuswant Sharma logo"
        className="h-14 w-auto opacity-80"
      />
      <p className="mt-8 font-serif text-6xl font-semibold text-navy sm:text-7xl">404</p>
      <h1 className="mt-4 font-serif text-2xl font-semibold text-ink sm:text-3xl">
        Page not found
      </h1>
      <p className="mt-4 max-w-md text-ink-soft">
        The page you&rsquo;re looking for doesn&rsquo;t exist, or may have moved.
      </p>
      <Link
        to="/"
        className="hover-lift mt-8 inline-flex items-center gap-2 rounded-md bg-navy-dark px-8 py-3 text-sm font-semibold uppercase tracking-wide text-white shadow-sm hover:bg-navy"
      >
        Back to Home
      </Link>
    </div>
  );
}
