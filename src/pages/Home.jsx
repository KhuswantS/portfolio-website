import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ReportCard from "../components/ReportCard";
import AnimatedCounter from "../components/AnimatedCounter";
import { reports, categories } from "../data/reports";

const NAME = "Khuswant Sharma";

const nameContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.045, delayChildren: 0.15 },
  },
};

const nameChar = {
  hidden: { opacity: 0, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

const featured = [...reports]
  .sort((a, b) => new Date(b.date) - new Date(a.date))
  .slice(0, 5);

const stats = [
  { label: "Reports Published", value: reports.length, suffix: "" },
  { label: "Sectors Covered", value: categories.length, suffix: "" },
  {
    label: "Sources Cited",
    value: reports.reduce((sum, r) => sum + (r.sourceCount || 0), 0),
    suffix: "",
  },
];

export default function Home() {
  return (
    <div>
      <section className="mx-auto flex max-w-4xl flex-col items-center px-6 py-28 text-center sm:py-36">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-sm font-semibold uppercase tracking-[0.2em] text-navy"
        >
          Independent Investment Research
        </motion.p>

        <motion.h1
          variants={nameContainer}
          initial="hidden"
          animate="visible"
          className="mt-6 font-serif text-5xl font-semibold text-ink sm:text-6xl md:text-7xl"
          style={{ letterSpacing: "0.015em" }}
        >
          {NAME.split(" ").map((word, wi, words) => (
            <span key={wi} className="inline-block whitespace-nowrap">
              {word.split("").map((char, ci) => (
                <motion.span key={ci} variants={nameChar} style={{ display: "inline-block" }}>
                  {char}
                </motion.span>
              ))}
              {wi < words.length - 1 && " "}
            </span>
          ))}
        </motion.h1>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.9, delay: 0.95, ease: "easeOut" }}
          style={{ transformOrigin: "left" }}
          className="mt-7 h-px w-28 bg-navy"
        />

        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mt-7 max-w-2xl text-base leading-relaxed text-ink-soft sm:text-lg"
        >
          I research high-growth investment opportunities in emerging markets, with a
          focus on India&rsquo;s fintech and technology ecosystem - fundamental
          due diligence, investment theses, and the companies worth watching before the
          market catches on.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          className="mt-8"
        >
          <Link
            to="/research"
            className="hover-lift inline-flex items-center gap-2 rounded-md bg-navy px-8 py-3 text-sm font-semibold uppercase tracking-wide text-white shadow-sm hover:bg-navy-light"
          >
            Read My Research
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </motion.div>
      </section>

      <section className="border-t border-hairline py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-8 flex items-end justify-between">
            <h2 className="font-serif text-2xl font-semibold text-ink sm:text-3xl">
              Featured Research
            </h2>
            <Link to="/research" className="text-sm font-semibold text-navy hover:underline">
              View all &rarr;
            </Link>
          </div>

          <div className="-mx-6 flex snap-x snap-mandatory gap-6 overflow-x-auto px-6 pb-4">
            {featured.map((report) => (
              <ReportCard
                key={report.slug}
                report={report}
                className="w-[280px] flex-shrink-0 snap-start sm:w-[320px]"
              />
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-hairline bg-paper-dim/60 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="font-serif text-2xl font-semibold text-ink sm:text-3xl">What I Do</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-ink-soft">
            I conduct independent due diligence on emerging-market companies and
            sectors, building falsifiable investment theses rather than hot takes.
            Each report combines primary research, financial modeling, and a
            clear-eyed view of the risks that could break the thesis.
          </p>

          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label}>
                <AnimatedCounter
                  value={stat.value}
                  suffix={stat.suffix}
                  className="font-serif text-4xl font-semibold text-navy sm:text-5xl"
                />
                <p className="mt-2 text-sm font-medium uppercase tracking-wide text-ink-soft">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-hairline py-16 sm:py-20">
        <div className="mx-auto flex max-w-4xl flex-col items-center px-6 text-center">
          <h2 className="font-serif text-2xl font-semibold text-ink sm:text-3xl">
            Explore the Research Library
          </h2>
          <p className="mt-4 max-w-xl text-ink-soft">
            Equity analysis, startup deep-dives, sector reports, and the models
            behind them - all in one place.
          </p>
          <Link
            to="/research"
            className="hover-lift mt-8 inline-flex items-center gap-2 rounded-md border border-navy px-8 py-3 text-sm font-semibold uppercase tracking-wide text-navy hover:bg-navy hover:text-white"
          >
            Browse the Library
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
