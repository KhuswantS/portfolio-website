import { useMemo, useState } from "react";
import ReportCard from "../components/ReportCard";
import { reports, categories } from "../data/reports";

const searchableText = (report) =>
  [
    report.title,
    report.hook,
    ...report.content.filter((b) => b.type === "paragraph" || b.type === "heading").map((b) => b.text),
  ]
    .join(" ")
    .toLowerCase();

export default function Research() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return [...reports]
      .sort((a, b) => new Date(b.date) - new Date(a.date))
      .filter((report) => {
        const matchesCategory = category === "All" || report.category === category;
        const matchesQuery = q === "" || searchableText(report).includes(q);
        return matchesCategory && matchesQuery;
      });
  }, [query, category]);

  return (
    <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-navy">Research</p>
      <h1 className="mt-2 font-serif text-3xl font-semibold text-ink sm:text-4xl">
        The Research Library
      </h1>
      <p className="mt-4 max-w-2xl text-ink-soft">
        Independent research on emerging markets, fintech, and the companies worth
        watching before the story is fully priced in.
      </p>

      <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search reports..."
          className="w-full rounded-md border border-navy/15 bg-white px-4 py-2.5 text-sm text-ink placeholder:text-ink-soft/50 focus:border-navy focus:outline-none focus:ring-2 focus:ring-navy/15 sm:max-w-xs"
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
                  : "bg-white text-ink-soft ring-1 ring-inset ring-navy/15 hover:bg-navy/5"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((report) => (
          <ReportCard key={report.slug} report={report} />
        ))}

        {filtered.length === 0 && (
          <p className="col-span-full py-12 text-center text-ink-soft/70">
            No reports match your search.
          </p>
        )}
      </div>
    </div>
  );
}
