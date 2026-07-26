import { useState } from "react";
import { Link } from "react-router-dom";
import { SiPython, SiClaude } from "react-icons/si";
import { IoLogoTableau, IoLogoMicrosoft } from "react-icons/io5";
import { RiFileExcel2Fill, RiFilePpt2Fill, RiFileWord2Fill, RiOpenaiFill } from "react-icons/ri";
import { TbDatabase } from "react-icons/tb";

// Excel, Power BI, PowerPoint, Word form one office-tools cluster and stay in
// this exact order as the first row; the rest follow in the same grid.
const technicalTools = [
  { label: "Excel (Advanced)", Icon: RiFileExcel2Fill },
  { label: "Power BI (learning)", Icon: IoLogoMicrosoft },
  { label: "PowerPoint", Icon: RiFilePpt2Fill },
  { label: "Word", Icon: RiFileWord2Fill },
  { label: "Tableau", Icon: IoLogoTableau },
  { label: "Python", Icon: SiPython },
  { label: "SQL", Icon: TbDatabase },
  { label: "Claude & Claude Code", Icon: SiClaude },
  { label: "ChatGPT", Icon: RiOpenaiFill },
];

const coreCompetencies = [
  "PE/VC ecosystem & industry mapping",
  "Stakeholder engagement & partner relations",
  "Qualitative & regulatory research",
  "Financial modeling (in progress - CFA Level I candidate)",
  "Presentation & investor-facing content development",
];

const education = [
  { school: "BMS (Hons.), St. Xavier's University, Kolkata", period: "2025" },
  { school: "CFA Level I, CFA Institute", period: "Candidate, appearing November 2026" },
];

const researchProjects = [
  {
    text: "Tax Without Recognition: India's Virtual Digital Asset Regime and the July 2026 Rupture (published research report)",
    href: "/research/tax-without-recognition",
  },
  { text: "Awareness & Understanding of Cryptocurrency Among Retail Investors" },
];

const gallery = [
  "/images/gallery/gallery-1.svg",
  "/images/gallery/gallery-2.svg",
  "/images/gallery/gallery-3.svg",
  "/images/gallery/gallery-4.svg",
];

function ToolBadge({ label, Icon }) {
  return (
    <div className="hover-lift flex items-center gap-3 rounded-lg border border-navy/10 bg-white px-4 py-3 shadow-sm">
      <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-md bg-navy/8 text-navy">
        <Icon className="h-5 w-5" />
      </span>
      <span className="text-sm font-medium text-ink">{label}</span>
    </div>
  );
}

function CompetencyChip({ label }) {
  return (
    <div className="hover-lift flex items-center rounded-full border border-navy/10 bg-white px-5 py-3 shadow-sm">
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
          <p className="text-lg leading-relaxed text-ink-soft">
            I&rsquo;m an early-career finance professional building toward a career on
            the buy-side - private equity, venture capital, and eventually a
            fund-principal role. Right now, I&rsquo;m a PE Fellow at the Indian Venture
            and Alternate Capital Association (IVCA), India&rsquo;s apex industry body
            for private equity and venture capital, where I&rsquo;m gaining hands-on
            exposure to fund structures, capital deployment trends, and the dynamics
            between LPs, GPs, and regulators, while conducting sector research on
            India&rsquo;s private markets. I hold a BMS (Hons.) from St. Xavier&rsquo;s
            University, Kolkata, and am currently preparing for the CFA Level I exam
            (November 2026); on the educational side, an MBA from a top institution is
            a longer-term milestone I&rsquo;m working toward.
          </p>
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

        <div className="hover-lift mt-8 rounded-lg border border-navy/10 bg-white p-6 shadow-sm sm:p-8">
          <div className="flex flex-wrap items-center gap-4">
            <img src="/images/IVCA-Logo.png" alt="IVCA" className="h-14 w-14 rounded-lg object-contain" />
            <div>
              <h3 className="font-serif text-lg font-semibold text-ink">PE Fellow</h3>
              <p className="text-sm text-ink-soft">
                Indian Venture and Alternate Capital Association (IVCA)
              </p>
              <p className="text-xs uppercase tracking-wide text-ink-soft/60">Feb 2026 - Present</p>
            </div>
          </div>

          <ul className="mt-6 space-y-2.5 text-sm leading-relaxed text-ink-soft">
            <li>&bull; Coordinate day-to-day communication and follow-ups with IVCA&rsquo;s network of PE/VC member funds, institutional LPs, and industry stakeholders</li>
            <li>&bull; Support investor relations for the association, helping member firms stay engaged with IVCA&rsquo;s initiatives, research, and events</li>
            <li>&bull; Assist with sector research and market tracking, building working exposure to fund structures, capital deployment trends, and private market dynamics</li>
            <li>&bull; Help coordinate IVCA&rsquo;s flagship platform (IVCA Conclave), supporting stakeholder outreach and post-event follow-through</li>
          </ul>

          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {gallery.map((src, i) => (
              <img
                key={src}
                src={src}
                alt={`IVCA gallery ${i + 1}`}
                className="hover-lift aspect-[4/3] w-full rounded-md object-cover shadow-sm"
              />
            ))}
          </div>
        </div>
      </div>

      <div className="mt-16 flex flex-col items-center gap-5 border-t border-hairline pt-16 text-center">
        <p className="text-sm text-ink-soft">
          You&rsquo;ve read the summary. For the full picture, download my CV below.
        </p>
        <a
          href="/cv/Khuswant_Sharma.pdf"
          download
          className="hover-lift inline-flex items-center gap-2.5 rounded-md bg-navy px-10 py-4 text-base font-semibold uppercase tracking-wide text-white shadow-sm hover:bg-navy-light"
        >
          Download CV
          <span aria-hidden="true">&darr;</span>
        </a>
      </div>
    </div>
  );
}
