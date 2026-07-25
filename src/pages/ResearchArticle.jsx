import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { reports } from "../data/reports";
import { formatDate } from "../lib/format";
import ReportChart from "../components/charts/ReportChart";
import AdoptionEstimatesChart from "../components/charts/AdoptionEstimatesChart";
import RegulatoryTimeline from "../components/charts/RegulatoryTimeline";
import CBDCvsUPIChart from "../components/charts/CBDCvsUPIChart";

const CUSTOM_COMPONENTS = {
  AdoptionEstimatesChart,
  RegulatoryTimeline,
  CBDCvsUPIChart,
};

// Source paragraphs use markdown-style **bold** lead-ins; render those as <strong>
// without pulling in a full markdown parser for one inline pattern.
function renderInlineText(text) {
  const parts = text.split(/\*\*(.+?)\*\*/g);
  return parts.map((part, i) =>
    i % 2 === 1 ? <strong key={i} className="font-semibold text-ink">{part}</strong> : part
  );
}

function ReportBlock({ block, index }) {
  switch (block.type) {
    case "heading":
      return (
        <h2 key={index} className="mt-12 mb-4 font-serif text-2xl font-semibold text-ink">
          {block.text}
        </h2>
      );
    case "paragraph":
      return (
        <p key={index} className="mt-6 text-base leading-relaxed text-ink-soft">
          {renderInlineText(block.text)}
        </p>
      );
    case "pullquote":
      return (
        <blockquote
          key={index}
          className="my-10 border-l-2 border-navy pl-6 font-serif text-xl italic leading-snug text-ink"
        >
          {block.text}
        </blockquote>
      );
    case "image":
      return (
        <figure key={index} className="my-10">
          <img src={block.src} alt={block.caption || ""} className="w-full rounded-lg" />
          {block.caption && (
            <figcaption className="mt-3 text-sm text-ink-soft/70">{block.caption}</figcaption>
          )}
        </figure>
      );
    case "table":
      return (
        <div key={index} className="my-10">
          {block.title && (
            <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-ink-soft">
              {block.title}
            </p>
          )}
          <div className="overflow-x-auto rounded-lg border border-navy/10">
            <table className="w-full min-w-[480px] border-collapse text-left text-sm">
              <thead>
                <tr className="bg-navy/5">
                  {block.headers.map((h) => (
                    <th key={h} className="border-b border-navy/10 px-4 py-3 font-semibold text-ink">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {block.rows.map((row, rIdx) => (
                  <tr key={rIdx} className="border-b border-navy/10 last:border-0">
                    {row.map((cell, cIdx) => (
                      <td key={cIdx} className="px-4 py-3 text-ink-soft">
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      );
    case "chart":
      return (
        <ReportChart
          key={index}
          chartType={block.chartType}
          title={block.title}
          data={block.data}
          dataKey={block.dataKey}
          labelKey={block.labelKey}
        />
      );
    case "component": {
      const Component = CUSTOM_COMPONENTS[block.name];
      return Component ? <Component key={index} /> : null;
    }
    default:
      return null;
  }
}

export default function ResearchArticle() {
  const { slug } = useParams();
  const report = reports.find((r) => r.slug === slug);

  useEffect(() => {
    const handleContextMenu = (e) => e.preventDefault();
    document.addEventListener("contextmenu", handleContextMenu);
    return () => document.removeEventListener("contextmenu", handleContextMenu);
  }, []);

  if (!report) {
    return (
      <div className="mx-auto max-w-3xl px-6 py-24 text-center">
        <h1 className="font-serif text-2xl font-semibold text-ink">Report not found</h1>
        <Link to="/research" className="mt-6 inline-block font-semibold text-navy hover:underline">
          &larr; Back to Research
        </Link>
      </div>
    );
  }

  return (
    <article className="mx-auto max-w-2xl px-6 py-16 sm:py-20">
      <Link to="/research" className="text-sm font-semibold text-navy hover:underline">
        &larr; Back to Research
      </Link>

      <span className="mt-6 block w-fit rounded-full bg-navy/8 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-navy">
        {report.category}
      </span>
      <h1 className="mt-4 font-serif text-3xl font-semibold leading-tight text-ink sm:text-4xl">
        {report.title}
      </h1>
      {report.subtitle && (
        <p className="mt-2 font-serif text-lg leading-snug text-ink-soft sm:text-xl">{report.subtitle}</p>
      )}
      <p className="mt-3 text-sm text-ink-soft/70">
        {report.author && <span>{report.author} &middot; </span>}
        {formatDate(report.date)}
      </p>

      <a
        href={report.pdf || `/reports/${report.slug}.pdf`}
        className="hover-lift mt-6 inline-flex items-center gap-2 rounded-md bg-navy px-6 py-2.5 text-sm font-semibold uppercase tracking-wide text-white shadow-sm hover:bg-navy-light"
        download
      >
        Download PDF
        <span aria-hidden="true">&darr;</span>
      </a>

      <div className="report-protected mt-10 border-t border-hairline pt-10 [&>*:first-child]:mt-0">
        {report.content.map((block, i) => (
          <ReportBlock key={i} block={block} index={i} />
        ))}
      </div>
    </article>
  );
}
