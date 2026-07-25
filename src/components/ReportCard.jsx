import { Link } from "react-router-dom";
import { formatDate } from "../lib/format";

export default function ReportCard({ report, className = "" }) {
  return (
    <Link
      to={`/research/${report.slug}`}
      className={`hover-lift group flex flex-col overflow-hidden rounded-lg border border-navy/10 bg-white shadow-sm ${className}`}
    >
      <div className="aspect-[4/3] w-full overflow-hidden bg-paper-dim">
        <img
          src={report.thumbnail}
          alt=""
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <span className="w-fit rounded-full bg-navy/8 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-navy">
          {report.category}
        </span>
        <h3 className="mt-4 font-serif text-lg font-semibold leading-snug text-ink group-hover:text-navy">
          {report.title}
        </h3>
        <p className="mt-2 text-xs uppercase tracking-wide text-ink-soft/60">
          {formatDate(report.date)}
        </p>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-soft">{report.hook}</p>
        <span className="mt-4 text-sm font-semibold text-navy">
          Read the report <span aria-hidden="true">&rarr;</span>
        </span>
      </div>
    </Link>
  );
}
