const skills = [
  "Financial modeling",
  "Due diligence",
  "Fundamental analysis",
  "Market research",
  "Competitive landscape mapping",
  "Python basics",
];

export default function About() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16 sm:py-20">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">About</p>
      <h1 className="mt-2 text-3xl font-bold tracking-tight text-navy-dark sm:text-4xl">
        Professional Summary
      </h1>
      <p className="mt-6 text-lg leading-relaxed text-navy-dark/80">
        I&rsquo;m an investment analyst focused on emerging markets and fintech. I conduct
        fundamental research, due diligence analysis, and build investment theses on
        high-growth sectors. I&rsquo;m pursuing CFA Level 1 (Nov 2026) to deepen my
        financial analysis skills. My background combines formal education in finance
        with hands-on experience evaluating investment opportunities and market trends.
      </p>

      <div className="mt-14 grid gap-10 sm:grid-cols-2">
        <div className="rounded-lg border border-navy/10 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-navy-dark">Background</h2>
          <ul className="mt-4 space-y-2 text-navy-dark/75">
            <li>BMS (Hons.), St. Xavier&rsquo;s University, Kolkata</li>
            <li>Investment Research Focus</li>
          </ul>
        </div>

        <div className="rounded-lg border border-navy/10 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-navy-dark">Currently Learning</h2>
          <ul className="mt-4 space-y-2 text-navy-dark/75">
            <li>CFA Level 1 &mdash; November 2026 exam</li>
          </ul>
        </div>
      </div>

      <div className="mt-10 rounded-lg border border-navy/10 bg-white p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-navy-dark">Skills</h2>
        <div className="mt-4 flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full bg-navy/5 px-4 py-1.5 text-sm font-medium text-navy"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-10 rounded-lg border-l-4 border-gold bg-white p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-navy-dark">Current Work</h2>
        <p className="mt-3 text-navy-dark/75">
          Deep-diving into emerging tech, fintech disruption, and capital markets &mdash;
          tracking the companies and trends before they become consensus.
        </p>
      </div>
    </div>
  );
}
