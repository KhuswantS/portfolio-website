import { useState } from "react";
import { SiPython, SiClaude, SiGithub } from "react-icons/si";
import { IoLogoTableau, IoLogoMicrosoft } from "react-icons/io5";
import { RiFileExcel2Fill, RiFilePpt2Fill, RiFileWord2Fill, RiOpenaiFill } from "react-icons/ri";
import { TbDatabase } from "react-icons/tb";
import SEO from "../components/SEO";
import JsonLd from "../components/JsonLd";
import { personSchema } from "../data/person";

// Excel, Power BI, PowerPoint, Word form one office-tools cluster and stay in
// this exact order as the first row; data/dev tools follow, then AI assistants
// last. All render as the same small pill.
const technicalTools = [
  { label: "Excel (Advanced)", Icon: RiFileExcel2Fill },
  { label: "Power BI (learning)", Icon: IoLogoMicrosoft },
  { label: "PowerPoint", Icon: RiFilePpt2Fill },
  { label: "Word", Icon: RiFileWord2Fill },
  { label: "Tableau", Icon: IoLogoTableau },
  { label: "Python (Basic)", Icon: SiPython },
  { label: "SQL (Basic)", Icon: TbDatabase },
  { label: "Git/GitHub", Icon: SiGithub },
  { label: "Claude & Claude Code", Icon: SiClaude },
  { label: "ChatGPT", Icon: RiOpenaiFill },
];

const coreCompetencies = [
  "Cap tables & dilution",
  "Bottom-up market sizing",
  "Revenue-multiple valuation & scenarios",
  "Competitive benchmarking",
  "Fund & ecosystem research (PE, VC, private credit)",
  "Investment memo writing",
  "Financial statement analysis (CFA Level I)",
];

// CFA first, then the degree. If a logo path is null, a monogram chip shows instead.
const education = [
  {
    title: "CFA Level I Candidate",
    school: "CFA Institute",
    period: "Appearing November 2026",
    logo: "/images/education/cfa-institute.png",
    mono: "CFA",
  },
  {
    title: "Bachelor of Management Studies (Honours)",
    school: "St. Xavier's University, Kolkata",
    period: "2022 - 2025",
    logo: "/images/education/st-xaviers-kolkata.png",
    mono: "SXU",
  },
];

function ToolPill({ label, Icon }) {
  return (
    <li className="flex items-center gap-2 rounded-full border border-hairline bg-paper px-3 py-1.5 text-sm text-ink">
      <Icon className="h-4 w-4 flex-shrink-0 text-navy-light" aria-hidden="true" />
      {label}
    </li>
  );
}

export default function About() {
  // Hover (desktop mouse) and this tap-toggle (touch) are independent triggers
  // for the same reveal state - neither reads from or resets the other.
  const [isRevealed, setIsRevealed] = useState(false);

  return (
    <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
      <SEO
        title="About | Khuswant Sharma"
        description="Khuswant Sharma is a Private Equity Fellow at IVCA and a CFA Level I candidate. He researches and engages PE, VC and private credit funds and publishes independent investment research."
        path="/about"
      />
      <JsonLd data={personSchema} />
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-navy">About</p>
      <h1 className="mt-2 font-serif text-3xl font-semibold text-ink sm:text-4xl">
        Professional Summary
      </h1>

      <div className="mt-12 grid gap-12 sm:grid-cols-5 sm:items-center">
        <div className="group sm:col-span-2">
          <div
            role="button"
            tabIndex={0}
            aria-pressed={isRevealed}
            aria-label="Toggle photo reveal"
            onClick={() => setIsRevealed((v) => !v)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                setIsRevealed((v) => !v);
              }
            }}
            className="mx-auto aspect-[4/5] w-full max-w-xs cursor-pointer overflow-hidden rounded-2xl shadow-lg"
            style={{
              maskImage: "linear-gradient(to bottom, black 75%, transparent 100%)",
              WebkitMaskImage: "linear-gradient(to bottom, black 75%, transparent 100%)",
            }}
          >
            <img
              src="/images/IMG_4824.jpg"
              alt="Khuswant Sharma"
              className={`h-full w-full object-cover transition-all duration-500 ${
                isRevealed ? "grayscale-0" : "grayscale hover:grayscale-0"
              }`}
            />
          </div>
          <p
            className={`mt-5 whitespace-nowrap text-center font-serif text-3xl font-semibold text-ink transition-opacity duration-300 ease-out sm:text-4xl ${
              isRevealed ? "opacity-100" : "opacity-0 group-hover:opacity-100"
            }`}
          >
            Khuswant Sharma
          </p>
        </div>

        <div className="sm:col-span-3">
          <div className="space-y-4 text-lg leading-relaxed text-ink-soft">
            <p>
              I analyse Indian startups and private markets, and publish the work with full
              sources. My latest memo, on SatLeo Labs, rebuilds the company&rsquo;s cap table from
              MCA filings, sizes its market bottom-up and tests what its Rs 150 crore valuation
              needs to return.
            </p>
            <p>
              At IVCA, India&rsquo;s apex body for 500+ PE, VC and alternate capital funds, I
              research funds and their strategies, work with their partners on IVCA&rsquo;s
              platforms and pick the market themes for our webinars. CFA Level I candidate
              (November 2026), looking for analyst roles in VC, PE and private credit.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-16 space-y-8 border-t border-hairline pt-16">
        <h2 className="font-serif text-2xl font-semibold text-ink sm:text-3xl">Skills</h2>

        <div className="grid gap-8 rounded-lg border border-navy/10 bg-paper-dim p-6 shadow-sm sm:grid-cols-5 sm:gap-10 sm:p-7">
          <div className="sm:col-span-3">
            <p className="text-xs font-semibold uppercase tracking-wider text-ink-soft/70">Core skills</p>
            <ul className="mt-4 grid gap-x-6 gap-y-3 sm:grid-cols-2">
              {coreCompetencies.map((skill) => (
                <li key={skill} className="flex items-start gap-2.5 text-sm leading-snug text-ink">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-navy" aria-hidden="true" />
                  {skill}
                </li>
              ))}
            </ul>
          </div>
          <div className="sm:col-span-2 sm:border-l sm:border-hairline sm:pl-10">
            <p className="text-xs font-semibold uppercase tracking-wider text-ink-soft/70">Tools</p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {technicalTools.map((tool) => (
                <ToolPill key={tool.label} label={tool.label} Icon={tool.Icon} />
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-16 border-t border-hairline pt-16">
        <h2 className="font-serif text-2xl font-semibold text-ink sm:text-3xl">Education</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {education.map((item) => (
            <div
              key={item.school}
              className="flex items-center gap-4 rounded-lg border border-navy/10 bg-paper-dim px-5 py-4 shadow-sm"
            >
              {/* White chip, as with the IVCA logo: most institution logos are
                  dark ink on transparent and would vanish on the dark card. */}
              <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center overflow-hidden rounded-md bg-white p-0.5">
                {item.logo ? (
                  <img src={item.logo} alt={`${item.school} logo`} className="h-full w-full object-contain" />
                ) : (
                  <span className="font-serif text-sm font-semibold text-navy-dark" aria-hidden="true">
                    {item.mono}
                  </span>
                )}
              </span>
              <div>
                <h3 className="text-base font-semibold leading-snug text-ink">{item.title}</h3>
                <p className="text-sm text-ink-soft">
                  {item.school}
                  <span className="block text-ink-soft/60 sm:inline">
                    <span className="hidden sm:inline"> &middot; </span>
                    {item.period}
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16 border-t border-hairline pt-16">
        <h2 className="font-serif text-2xl font-semibold text-ink sm:text-3xl">Experience</h2>

        <div className="mt-8 rounded-lg border border-navy/10 bg-paper-dim p-6 shadow-sm sm:p-7">
          <div className="flex items-center gap-4">
            {/* Light chip is deliberate: the IVCA wordmark is dark ink on
                transparent and would vanish on the dark card without it. */}
            <img
              src="/images/IVCA-Logo.png"
              alt="IVCA logo"
              className="h-10 w-10 flex-shrink-0 rounded-md bg-white object-contain p-0.5"
            />
            <div>
              <h3 className="text-base font-semibold leading-snug text-ink">Private Equity Fellow</h3>
              <p className="text-sm text-ink-soft">
                Indian Venture and Alternate Capital Association (IVCA)
                <span className="block text-ink-soft/60 sm:inline">
                  <span className="hidden sm:inline"> &middot; </span>
                  Feb 2026 - Present
                </span>
              </p>
            </div>
          </div>

          <p className="mt-5 text-xs uppercase tracking-wide text-ink-soft/60">Private Equity Ecosystem Team &middot; New Delhi</p>
          <ul className="mt-3 space-y-2.5 text-sm leading-relaxed text-ink-soft">
            <li>&bull; <span className="font-medium text-ink">Fund and ecosystem research:</span> research PE, VC and private credit funds on strategy, sector focus and portfolio, and engage their partners on IVCA&rsquo;s platforms. Have worked with 50+ funds in various ways; 21 pieces published so far.</li>
            <li>&bull; <span className="font-medium text-ink">Market themes:</span> identify live investment themes for IVCA&rsquo;s #WhatsNext webinars (private credit; growth capital in AIFs) and build panels of fund partners from firms such as Kotak Alternate, Neo, Stride Ventures and Aavishkaar.</li>
            <li>&bull; <span className="font-medium text-ink">Execution:</span> ran vendor sourcing and price negotiation for 3 flagship events (IVCA Conclave, Private Credit Summit, Buyouts Summit) and designed the structure and UI/UX of two summit websites.</li>
          </ul>
        </div>
      </div>

      <div className="mt-16 flex flex-col items-center gap-5 border-t border-hairline pt-16 text-center">
        <p className="text-sm text-ink-soft">
          You&rsquo;ve read the summary. For the full picture, download my CV below.
        </p>
        <a
          href="/cv/Khuswant_Sharma.pdf"
          download
          className="hover-lift inline-flex items-center gap-2.5 rounded-md bg-navy-dark px-10 py-4 text-base font-semibold uppercase tracking-wide text-white shadow-sm hover:bg-navy"
        >
          Download CV
          <span aria-hidden="true">&darr;</span>
        </a>
      </div>
    </div>
  );
}
