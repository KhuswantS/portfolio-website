import { Link, useParams } from "react-router-dom";
import { reports } from "../data/reports";
import { formatDate } from "../lib/format";
import SEO, { SITE_URL } from "../components/SEO";
import JsonLd from "../components/JsonLd";
import { personSchema } from "../data/person";
import ReportChart from "../components/charts/ReportChart";
import AdoptionEstimatesChart from "../components/charts/AdoptionEstimatesChart";
import RegulatoryTimeline from "../components/charts/RegulatoryTimeline";
import CBDCvsUPIChart from "../components/charts/CBDCvsUPIChart";
import { renderInline } from "../lib/inline";
import VizBlock, { DataTable } from "../components/satleo/VizBlock";
import { FUNDING, VALUATION } from "../components/satleo/data";
import { lazy, Suspense } from "react";

// Graphics load only on report pages that use them, keeping the shared bundle small.
const g = (name) => lazy(() => import("../components/satleo/graphics").then((m) => ({ default: m[name] })));
const CompetitorFundingGraphic = g("CompetitorFundingGraphic");
const ThermalCompaniesGraphic = g("ThermalCompaniesGraphic");
const RevenueGraphic = g("RevenueGraphic");
const ValuationGraphic = g("ValuationGraphic");
const FundingRoundsGraphic = g("FundingRoundsGraphic");
const OwnershipGraphic = g("OwnershipGraphic");

const CUSTOM_COMPONENTS = {
  AdoptionEstimatesChart,
  RegulatoryTimeline,
  CBDCvsUPIChart,
};

// Table/graphic switches. Tables that came from the memo carry their own
// headers/rows; the two former charts get a table built from the same data
// the graphic draws, so both views always show identical numbers.
const VIZ = {
  CompetitorFunding: {
    graphic: CompetitorFundingGraphic,
    marks: true,
    title: "The three leading rivals have raised 11 to 22 times more than SatLeo",
    headers: ["Company", "Total equity raised, US$ million (Tracxn)", "Multiple of SatLeo's $5.5 million"],
    rows: FUNDING.map((r) => [r.name, `$${r.usd}M`, r.name === "SatLeo" ? "1x" : `${Math.round(r.usd / 5.5)}x`]),
  },
  ThermalCompanies: { graphic: ThermalCompaniesGraphic, marks: true, widths: [16, 16, 24, 20, 24] },
  RevenueAccounts: { graphic: RevenueGraphic },
  ValuationSeries: {
    graphic: ValuationGraphic,
    title: "SatLeo's valuation series rose about 3.9 times in 17 months",
    headers: ["Share allotment", "Valuation (Rs crore)"],
    rows: VALUATION.map((p) => [p.label, String(p.cr)]),
  },
  FundingRounds: { graphic: FundingRoundsGraphic },
  Ownership: { graphic: OwnershipGraphic },
};

const renderInlineText = renderInline;

function ReportBlock({ block, index }) {
  switch (block.type) {
    case "heading":
      return (
        <h2 key={index} className="mt-12 mb-4 font-serif text-2xl font-semibold text-ink sm:text-3xl">
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
          className="pullquote my-10 border-l-2 border-navy pl-6 font-serif text-xl leading-snug text-ink"
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
    case "subheading":
      return (
        <h3 key={index} className="mt-10 mb-2 font-sans text-lg font-semibold text-ink">
          {block.text}
        </h3>
      );
    case "note":
      return (
        <p key={index} className="mt-3 text-xs leading-relaxed text-ink-soft/70">
          {renderInlineText(block.text)}
        </p>
      );
    case "list": {
      const Tag = block.style === "ordered" ? "ol" : "ul";
      const cls =
        block.style === "ordered"
          ? "list-decimal pl-6 marker:text-ink-soft/70"
          : block.style === "check"
            ? "list-none pl-0"
            : "list-disc pl-6 marker:text-navy";
      return (
        <Tag key={index} className={`mt-4 space-y-2.5 text-base leading-relaxed text-ink-soft ${cls}`}>
          {block.items.map((item, i) => (
            <li key={i} className={block.style === "check" ? "flex gap-3" : "pl-1"}>
              {block.style === "check" && (
                <span aria-hidden="true" className="mt-1.5 inline-block h-4 w-4 shrink-0 rounded border border-navy-light/70" />
              )}
              <span>{renderInlineText(item)}</span>
            </li>
          ))}
        </Tag>
      );
    }
    case "richtable":
      return (
        <div key={index} className="my-8">
          <DataTable headers={block.headers} rows={block.rows} widths={block.widths} />
        </div>
      );
    case "viz": {
      const v = VIZ[block.name];
      if (!v) return null;
      const Graphic = v.graphic;
      return (
        <VizBlock
          key={index}
          title={v.title || block.title}
          caption={block.caption}
          headers={block.headers || v.headers}
          rows={block.rows || v.rows}
          marks={v.marks}
          widths={v.widths}
        >
          <Suspense fallback={<div className="h-64" aria-hidden="true" />}>
            <Graphic />
          </Suspense>
        </VizBlock>
      );
    }
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

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: report.title,
    description: report.hook,
    datePublished: report.date,
    author: { "@type": "Person", name: personSchema.name, url: personSchema.url },
    image: `${SITE_URL}/og-image.png`,
    mainEntityOfPage: `${SITE_URL}/research/${report.slug}`,
  };

  return (
    <article className={`mx-auto ${report.wide ? "max-w-3xl" : "max-w-2xl"} px-6 py-16 sm:py-20`}>
      <SEO
        title={`${report.title} | Khuswant Sharma`}
        description={report.hook}
        path={`/research/${report.slug}`}
      />
      <JsonLd data={articleSchema} />
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
        {report.dataAsOf && <span> &middot; Data as of {formatDate(report.dataAsOf)}</span>}
      </p>

      {report.hero && (
        <img
          src={report.hero}
          alt={report.heroAlt || ""}
          width="800"
          height="600"
          className="mt-8 w-full rounded-lg border border-navy/10"
        />
      )}

      <a
        href={report.pdf || `/reports/${report.slug}.pdf`}
        className="hover-lift mt-6 inline-flex items-center gap-2 rounded-md bg-navy-dark px-6 py-2.5 text-sm font-semibold uppercase tracking-wide text-white shadow-sm hover:bg-navy"
        download
      >
        Download PDF
        <span aria-hidden="true">&darr;</span>
      </a>

      <div className="mt-10 border-t border-hairline pt-10 [&>*:first-child]:mt-0">
        {report.content.map((block, i) => (
          <ReportBlock key={i} block={block} index={i} />
        ))}
      </div>
    </article>
  );
}
