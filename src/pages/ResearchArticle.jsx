import { Link, useParams } from "react-router-dom";
import { articles } from "../data/articles";

const formatDate = (iso) =>
  new Date(iso).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });

export default function ResearchArticle() {
  const { slug } = useParams();
  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    return (
      <div className="mx-auto max-w-3xl px-6 py-24 text-center">
        <h1 className="text-2xl font-bold text-navy-dark">Article not found</h1>
        <Link to="/research" className="mt-6 inline-block font-semibold text-navy hover:text-gold">
          &larr; Back to Research
        </Link>
      </div>
    );
  }

  return (
    <article className="mx-auto max-w-3xl px-6 py-16 sm:py-20">
      <Link to="/research" className="text-sm font-semibold text-navy hover:text-gold">
        &larr; Back to Research
      </Link>

      <span className="mt-6 block w-fit rounded-full bg-gold/15 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-navy">
        {article.category}
      </span>
      <h1 className="mt-4 text-3xl font-bold tracking-tight text-navy-dark sm:text-4xl">
        {article.title}
      </h1>
      <p className="mt-3 text-sm text-navy-dark/50">{formatDate(article.date)}</p>

      <div className="prose-content mt-8 space-y-5 text-base leading-relaxed text-navy-dark/80">
        {article.content.split("\n\n").map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>
    </article>
  );
}
