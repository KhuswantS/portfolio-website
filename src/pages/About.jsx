import { useState } from "react";
import { Link } from "react-router-dom";
import { SiPython, SiClaude, SiGithub } from "react-icons/si";
import { IoLogoTableau, IoLogoMicrosoft } from "react-icons/io5";
import { RiFileExcel2Fill, RiFilePpt2Fill, RiFileWord2Fill, RiOpenaiFill } from "react-icons/ri";
import { TbDatabase } from "react-icons/tb";
import SEO from "../components/SEO";
import JsonLd from "../components/JsonLd";
import { personSchema } from "../data/person";

// Excel, Power BI, PowerPoint, Word form one office-tools cluster and stay in
// this exact order as the first row; data/dev tools follow, then AI assistants
// last. All render through the same ToolBadge, so the grid stays uniform.
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
  "Fund research & engagement (PE, VC, private credit)",
  "Startup analysis: market sizing, unit economics, cap tables",
  "Primary-source research & investment memos",
  "Webinar & event programming with fund partners",
  "Financial statement analysis (CFA Level I candidate)",
];

const education = [
  { school: "BMS (Hons.), St. Xavier's University, Kolkata", period: "2022 - 2025" },
  { school: "CFA Level I, CFA Institute", period: "Candidate, appearing November 2026" },
];

const researchProjects = [
  {
    text: "SatLeo Labs: investment memo on an Indian thermal-imaging satellite startup (Report 002, October 2026)",
    href: "/research/satleo-labs-investment-memo",
  },
  {
    text: "Tax Without Recognition: India's Virtual Digital Asset Regime (Report 001, July 2026)",
    href: "/research/tax-without-recognition",
  },
];

function ToolBadge({ label, Icon }) {
  return (
    <div className="hover-lift flex items-center gap-3 rounded-lg border border-navy/10 bg-paper-dim px-4 py-3 shadow-sm">
      <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-md bg-navy/8 text-navy">
        <Icon className="h-5 w-5" />
      </span>
      <span className="text-sm font-medium text-ink">{label}</span>
    </div>
  );
}

function CompetencyChip({ label }) {
  return (
    <div className="hover-lift flex items-center rounded-full border border-navy/10 bg-paper-dim px-5 py-3 shadow-sm">
      <span className="text-sm font-medium text-ink">{label}</span>
    </div>
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
              I&rsquo;m a Private Equity Fellow at IVCA (Indian Venture and Alternate Capital
              Association), India&rsquo;s apex body for 500+ private equity, venture capital and
              alternate capital funds.
            </p>
            <p>
              At IVCA, I work with fund partners every week. I research PE, VC and private credit
              funds and engage them on IVCA&rsquo;s platforms, curate #WhatsNext webinars with fund
              partners as speakers, and design the websites for our summits.
            </p>
            <p>
              Outside work, I publish independent investment research on this site: a report on
              India&rsquo;s virtual digital asset tax regime, built from primary sources, and an
              investment memo on SatLeo Labs, an Indian deep tech startup. I&rsquo;m a CFA Level I
              candidate (November 2026), looking for analyst roles in VC, PE and private credit.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-16 space-y-8 border-t border-hairline pt-16">
        <h2 className="font-serif text-2xl font-semibold text-ink sm:text-3xl">Skills</h2>

        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-ink-soft">Technical Tools</p>
          <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {technicalTools.map((tool) => (
              <ToolBadge key={tool.label} label={tool.label} Icon={tool.Icon} />
            ))}
          </div>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-ink-soft">Core Competencies</p>
          <div className="mt-4 flex flex-wrap gap-3">
            {coreCompetencies.map((skill) => (
              <CompetencyChip key={skill} label={skill} />
            ))}
          </div>
        </div>
      </div>

      <div className="mt-16 grid gap-12 border-t border-hairline pt-16 sm:grid-cols-2">
        <div>
          <h2 className="font-serif text-2xl font-semibold text-ink sm:text-3xl">Education</h2>
          <ul className="mt-5 space-y-3">
            {education.map((item) => (
              <li key={item.school} className="text-sm leading-relaxed text-ink-soft">
                <span className="font-medium text-ink">{item.school}</span>
                <span className="block text-xs uppercase tracking-wide text-ink-soft/60">
                  {item.period}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-serif text-2xl font-semibold text-ink sm:text-3xl">Research Projects</h2>
          <ul className="mt-5 space-y-3">
            {researchProjects.map((project) => (
              <li key={project.text} className="text-sm leading-relaxed text-ink-soft">
                {project.href ? (
                  <Link to={project.href} className="font-medium text-navy hover:underline">
                    {project.text}
                  </Link>
                ) : (
                  project.text
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-16 border-t border-hairline pt-16">
        <h2 className="font-serif text-2xl font-semibold text-ink sm:text-3xl">Experience</h2>

        <div className="hover-lift mt-8 rounded-lg border border-navy/10 bg-paper-dim p-6 shadow-sm sm:p-8">
          <div className="flex items-start gap-4">
            {/* Light chip is deliberate: the IVCA wordmark is dark ink on
                transparent and would vanish on the dark card without it. */}
            <img
              src="/images/IVCA-Logo.png"
              alt="IVCA logo"
              className="h-11 w-11 flex-shrink-0 rounded-md bg-white object-contain p-1"
            />
            <div>
              <h3 className="font-serif text-lg font-semibold text-ink">Private Equity Fellow</h3>
              <p className="text-sm text-ink-soft">
                Indian Venture and Alternate Capital Association (IVCA)
              </p>
              <p className="text-xs uppercase tracking-wide text-ink-soft/60">Feb 2026 - Present</p>
            </div>
          </div>

          <p className="mt-6 text-xs uppercase tracking-wide text-ink-soft/60">Private Equity Ecosystem Team &middot; New Delhi</p>
          <ul className="mt-3 space-y-2.5 text-sm leading-relaxed text-ink-soft">
            <li>&bull; <span className="font-medium text-ink">Webinars:</span> curate topics for IVCA&rsquo;s #WhatsNext webinars and bring fund partners onto the panels, from first outreach to the live session. The June 2026 private credit webinar had partners from Kotak Alternate, Neo, Stride Ventures, Aavishkaar, Ascertis, Lighthouse Canton and Kroll, and drew 308 registrations and 205 peak live attendees.</li>
            <li>&bull; <span className="font-medium text-ink">Fund research and engagement:</span> research PE, VC and private credit funds before every conversation and set up calls with their partners to engage them on IVCA&rsquo;s platforms (#TheContext, Fund in Focus, Private Equity Pulse, Milestone Makers). Keep 50+ funds in active discussion, with new pieces going live every week.</li>
            <li>&bull; <span className="font-medium text-ink">Event websites:</span> designed the websites for IVCA Private Credit Summit 2026 and Secondaries Conference 2026, replacing the old single-page event template with new multi-page layouts. Planned the structure and UI/UX and briefed the build team.</li>
            <li>&bull; <span className="font-medium text-ink">Events and vendors:</span> managed vendors for the IVCA Conclave, Private Credit Summit and Buyouts Summit, from sourcing and negotiation to delivery, and coordinated speakers and partners for flagship summits.</li>
            <li>&bull; <span className="font-medium text-ink">Market exposure:</span> through calls, webinars and summits, work directly with fund partners, LPs, law firms and advisors on themes such as private credit, growth capital, secondaries and AIF regulation.</li>
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
