import { Link } from "react-router-dom";
import SEO from "../components/SEO";

// Terms of use and research disclaimer. The investment-advice wording keeps
// the site clearly outside SEBI's Investment Advisers and Research Analysts
// Regulations: the reports discuss unlisted companies and public policy, make
// no buy, sell or hold recommendation on any listed security, and are not
// offered for a fee. If a future report covers a listed or soon-to-be-listed
// security, revisit this page and the SEBI position before publishing.
const LAST_UPDATED = "25 October 2026";
const CONTACT_EMAIL = "sharmakhuswant16@gmail.com";

function Section({ title, children }) {
  return (
    <section>
      <h2 className="font-serif text-xl font-semibold text-ink">{title}</h2>
      <div className="mt-3 space-y-3 leading-relaxed text-ink-soft">{children}</div>
    </section>
  );
}

export default function Terms() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16 sm:py-20">
      <SEO
        title="Terms of Use and Disclaimer | Khuswant Sharma"
        description="Terms of use for khuswantsharma.com: independent research for information only, not investment advice, with notes on accuracy, corrections, conflicts, trademarks and copyright."
        path="/terms"
      />
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-navy">Terms</p>
      <h1 className="mt-2 font-serif text-3xl font-semibold text-ink sm:text-4xl">
        Terms of Use and Disclaimer
      </h1>
      <p className="mt-4 text-sm text-ink-soft/70">Last updated: {LAST_UPDATED}</p>

      <div className="mt-10 space-y-10">
        <Section title="About this website">
          <p>
            khuswantsharma.com is the personal website of Khuswant Sharma, New Delhi, India. It publishes
            independent research and analysis for general information and education. By using it, you
            agree to these terms.
          </p>
        </Section>

        <Section title="Not investment advice">
          <p>
            Nothing on this website is investment, financial, legal or tax advice, or a recommendation or
            offer to buy, sell or hold any security, fund or other asset. I am not registered with the
            Securities and Exchange Board of India (SEBI) as an investment adviser or research analyst,
            and I do not offer advice or research for a fee.
          </p>
          <p>
            The reports discuss private companies, markets and public policy. Scenarios, valuations and
            return figures are illustrative and based on stated assumptions; they are not forecasts or
            promises of any return. Do your own research, and speak to a qualified, registered adviser
            before making any investment decision.
          </p>
        </Section>

        <Section title="Accuracy and corrections">
          <p>
            I build each report from public sources, which are linked or listed in it, and I date every
            report. Information can change after publication, and sources can be wrong. I do not
            guarantee that any content is complete, accurate or current.
          </p>
          <p>
            If you find an error, please write to{" "}
            <a href={`mailto:${CONTACT_EMAIL}`} className="font-medium text-navy hover:underline">
              {CONTACT_EMAIL}
            </a>
            . Companies covered in a report are welcome to correct facts about themselves. I correct
            verified errors and record the change in the report&rsquo;s version note.
          </p>
        </Section>

        <Section title="Independence and conflicts">
          <p>
            This research is my own work. It is not paid for, sponsored or commissioned by anyone, and no
            company or investor reviews it before publication. Each report discloses any relevant
            relationship, including my role as a Private Equity Fellow at the Indian Venture and
            Alternate Capital Association (IVCA). The views here are mine alone and do not represent
            IVCA, its members or any other organisation.
          </p>
        </Section>

        <Section title="Names, logos and trademarks">
          <p>
            Company names, logos and trademarks shown on this website belong to their owners. I use them
            only to identify the companies, institutions and products being discussed. Their use does not
            mean any endorsement of, or by, this website. If you own a mark and want it removed or
            shown differently, please write to me.
          </p>
        </Section>

        <Section title="Copyright">
          <p>
            Unless stated otherwise, the text, charts and graphics on this website are &copy; Khuswant
            Sharma. You may quote short extracts and share links, as long as you credit &ldquo;Khuswant
            Sharma, khuswantsharma.com&rdquo; and link to the original page. Please do not republish
            whole reports or present them as your own without written permission. Material from other
            sources remains the property of its owners and is credited where it appears.
          </p>
        </Section>

        <Section title="Links to other websites">
          <p>
            Reports link to outside sources so you can check the work. I do not control those websites
            and am not responsible for their content or privacy practices.
          </p>
        </Section>

        <Section title="Limitation of liability">
          <p>
            This website is provided &ldquo;as is&rdquo;. To the extent the law allows, I am not liable for
            any loss or damage arising from the use of, or reliance on, anything published here.
          </p>
        </Section>

        <Section title="Privacy">
          <p>
            How personal data is handled is explained in the{" "}
            <Link to="/privacy" className="text-navy hover:underline">
              Privacy Policy
            </Link>
            .
          </p>
        </Section>

        <Section title="Governing law and changes">
          <p>
            These terms are governed by the laws of India, and the courts at New Delhi have jurisdiction.
            I may update these terms; the date at the top shows the latest version.
          </p>
        </Section>
      </div>
    </div>
  );
}
