import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <section className="relative overflow-hidden bg-navy text-white">
        <div
          className="pointer-events-none absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 20%, #d4af37 0, transparent 35%), radial-gradient(circle at 80% 60%, #d4af37 0, transparent 35%)",
          }}
        />
        <div className="relative mx-auto flex max-w-4xl flex-col items-center px-6 py-28 text-center sm:py-36">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-gold">
            Independent Investment Research
          </p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Khuswant Sharma
          </h1>
          <p className="mt-5 text-lg font-medium text-white/85 sm:text-xl">
            Investment Analyst | Deep Dives Into Emerging Markets &amp; Fintech
          </p>
          <p className="mt-8 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
            I research high-growth investment opportunities in emerging markets, with a
            focus on India&rsquo;s fintech and tech ecosystem. I conduct fundamental due
            diligence, build investment theses, and identify undervalued opportunities
            before the market catches on.
          </p>
          <Link
            to="/research"
            className="mt-10 inline-flex items-center gap-2 rounded-md bg-gold px-8 py-3 text-sm font-semibold uppercase tracking-wide text-navy-dark shadow-lg transition-transform hover:-translate-y-0.5 hover:bg-gold-light"
          >
            View My Research
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <div className="grid gap-8 sm:grid-cols-3">
          {[
            {
              label: "Focus",
              value: "Emerging Markets & Fintech",
            },
            {
              label: "Method",
              value: "Fundamental Due Diligence",
            },
            {
              label: "Currently",
              value: "Pursuing CFA Level 1",
            },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-lg border border-navy/10 bg-white p-6 text-center shadow-sm"
            >
              <p className="text-xs font-semibold uppercase tracking-wider text-gold">
                {item.label}
              </p>
              <p className="mt-2 text-lg font-semibold text-navy-dark">{item.value}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
