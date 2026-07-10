import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { articles, categories } from "../data/articles";

const formatDate = (iso) =>
  new Date(iso).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });

export default function Research() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");

  const filtered = useMemo(() => {
    return articles.filter((article) => {
      const matchesCategory = category === "All" || article.category === category;
      const matchesQuery =
        query.trim() === "" ||
        article.title.toLowerCase().includes(query.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(query.toLowerCase());
      return matchesCategory && matchesQuery;
    });
  }, [query, category]);

  return (
    <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">Research</p>
      <h1 className="mt-2 text-3xl font-bold tracking-tight text-navy-dark sm:text-4xl">
        Notes &amp; Deep Dives
      </h1>
      <p className="mt-4 max-w-2xl text-navy-dark/70">
        Independent research on emerging markets, fintech, and the companies worth
        watching before the story is fully priced in.
      </p>

      <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search articles..."
          className="w-full rounded-md border border-navy/15 bg-white px-4 py-2.5 text-sm text-navy-dark placeholder:text-navy-dark/40 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30 sm:max-w-xs"
        />

        <div className="flex flex-wrap gap-2">
          {["All", ...categories].map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setCategory(cat)}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                category === cat
                  ? "bg-navy text-white"
                  : "bg-white text-navy-dark/70 ring-1 ring-inset ring-navy/15 hover:bg-navy/5"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((article) => (
          <Link
            key={article.slug}
            to={`/research/${article.slug}`}
            className="group flex flex-col rounded-lg border border-navy/10 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
          >
            <span className="w-fit rounded-full bg-gold/15 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-navy">
              {article.category}
            </span>
            <h2 className="mt-4 text-lg font-semibold text-navy-dark group-hover:text-navy">
              {article.title}
            </h2>
            <p className="mt-2 text-sm text-navy-dark/50">{formatDate(article.date)}</p>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-navy-dark/70">
              {article.excerpt}
            </p>
            <span className="mt-4 text-sm font-semibold text-navy group-hover:text-gold">
              Read full article &rarr;
            </span>
          </Link>
        ))}

        {filtered.length === 0 && (
          <p className="col-span-full py-12 text-center text-navy-dark/50">
            No articles match your search.
          </p>
        )}
      </div>
    </div>
  );
}
