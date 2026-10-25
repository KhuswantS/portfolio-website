import { Link } from "react-router-dom";
import SEO from "../components/SEO";

// Written to meet the notice, contact, rights and grievance requirements of
// India's Digital Personal Data Protection Act, 2023 and DPDP Rules, 2025
// (Rules 3, 6, 7, 8, 9 and 14), and the transparency duties of the EU and UK
// GDPR for any visitor in those regions. Keep this page in step with what the
// site actually does: if a new tool, form or cookie is added, update it here
// first. See docs/compliance.md for the checklist.
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

function Ext({ href, children }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="text-navy hover:underline">
      {children}
    </a>
  );
}

const Mail = () => (
  <a href={`mailto:${CONTACT_EMAIL}`} className="font-medium text-navy hover:underline">
    {CONTACT_EMAIL}
  </a>
);

const rows = [
  {
    what: "Contact form",
    data: "Your name, email address and message",
    why: "To read and reply to your message",
    basis: "You chose to send it to me for that purpose",
    kept: "At least one year, then deleted (see below)",
  },
  {
    what: "Email you send me directly",
    data: "Your email address, name and whatever you write",
    why: "To read and reply to your email",
    basis: "You chose to send it to me for that purpose",
    kept: "At least one year, then deleted (see below)",
  },
  {
    what: "Visiting any page",
    data: "Anonymous page-view statistics: page, referring site, country or region, browser, operating system and device type. No cookies, no IP address stored",
    why: "To see which pages are read and fix what does not work",
    basis: "My legitimate interest in running a useful website",
    kept: "Vercel discards the daily visitor hash after 24 hours; only totals remain",
  },
  {
    what: "Page speed",
    data: "Anonymous loading-speed measurements for each page",
    why: "To keep the website fast",
    basis: "My legitimate interest in running a useful website",
    kept: "Aggregated by Vercel; no personal identifiers",
  },
  {
    what: "Hosting",
    data: "Technical request data, such as your IP address and browser, which every web server receives",
    why: "To deliver the pages to you and protect the site from abuse",
    basis: "Necessary to run the website securely",
    kept: "Short-lived server logs held by Vercel under its own policy",
  },
];

export default function Privacy() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16 sm:py-20">
      <SEO
        title="Privacy Policy | Khuswant Sharma"
        description="What khuswantsharma.com collects (only what you send through the contact form, plus anonymous, cookieless statistics), why, for how long, and your rights under India's DPDP Act and the GDPR."
        path="/privacy"
      />
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-navy">Privacy</p>
      <h1 className="mt-2 font-serif text-3xl font-semibold text-ink sm:text-4xl">Privacy Policy</h1>
      <p className="mt-4 text-sm text-ink-soft/70">Last updated: {LAST_UPDATED}</p>

      <div className="mt-10 space-y-10">
        <Section title="In short">
          <p>
            This is a personal research website. There are no user accounts, no payments, no ads and no
            cookies. The only personal data I receive is what you choose to send me through the contact
            form or by email. I use it only to reply to you. I never sell it, rent it or use it for
            marketing.
          </p>
        </Section>

        <Section title="Who is responsible for your data">
          <p>
            Khuswant Sharma, New Delhi, India, runs this website and decides how its data is used. Under
            India&rsquo;s Digital Personal Data Protection Act, 2023 that makes me the &ldquo;Data
            Fiduciary&rdquo; (the &ldquo;controller&rdquo; under the GDPR). For any question about your
            data, write to me at <Mail />. I am the person who answers these questions.
          </p>
        </Section>

        <Section title="What I collect, why, and for how long">
          <div className="overflow-x-auto rounded-lg border border-navy/15">
            <table className="w-full min-w-[640px] border-collapse text-left text-sm">
              <thead>
                <tr className="bg-navy/10">
                  {["Where", "What data", "Why", "Legal basis", "How long"].map((h) => (
                    <th key={h} scope="col" className="border-b border-navy/15 px-3 py-2.5 font-semibold text-ink">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((r) => (
                  <tr key={r.what} className="border-b border-navy/10 align-top last:border-0">
                    <td className="px-3 py-2.5 font-medium text-ink">{r.what}</td>
                    <td className="px-3 py-2.5">{r.data}</td>
                    <td className="px-3 py-2.5">{r.why}</td>
                    <td className="px-3 py-2.5">{r.basis}</td>
                    <td className="px-3 py-2.5">{r.kept}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p>
            Please do not send sensitive information, such as bank or card details, passwords, ID
            numbers or health details, through the form or by email. I do not need it, and I will
            delete it if it arrives.
          </p>
        </Section>

        <Section title="Cookies and tracking">
          <p>
            This website sets no cookies and uses no advertising, social-media or cross-site trackers.
            The page-view statistics come from Vercel Web Analytics, which counts visits without cookies
            and without storing your IP address; it recognises a visit using a hash that it discards
            after 24 hours. Because nothing is stored on your device, there is no cookie banner.
          </p>
        </Section>

        <Section title="Who else handles your data">
          <p>These services process data for me, only to provide the functions described above:</p>
          <ul className="list-disc space-y-1.5 pl-5">
            <li>
              <strong className="text-ink">Formspree</strong> (contact form delivery and storage).{" "}
              <Ext href="https://formspree.io/legal/privacy-policy">Formspree privacy policy</Ext>
            </li>
            <li>
              <strong className="text-ink">Vercel</strong> (website hosting, Web Analytics and Speed
              Insights). <Ext href="https://vercel.com/legal/privacy-policy">Vercel privacy policy</Ext>
            </li>
            <li>
              <strong className="text-ink">Google</strong> (Gmail, where messages arrive and replies are
              sent from). <Ext href="https://policies.google.com/privacy">Google privacy policy</Ext>
            </li>
          </ul>
          <p>
            These providers may store data on servers outside India, including in the United States.
            India&rsquo;s DPDP Act allows this unless the Government restricts transfers to a particular
            country, and I will follow any such restriction. I do not share your data with anyone else,
            except where Indian law requires it.
          </p>
        </Section>

        <Section title="How long I keep it">
          <p>
            India&rsquo;s DPDP Rules, 2025 require that personal data and related logs are kept for at
            least one year. I keep contact-form messages and emails for one year from the date I receive
            them. I review them every three months and delete anything older than one year, unless we
            are still in conversation or the law requires me to keep it longer. You can ask me to delete
            your message sooner; I will do so where the law allows.
          </p>
        </Section>

        <Section title="How I protect it">
          <p>
            The website is served only over encrypted HTTPS, with strict browser security settings. The
            Formspree, Vercel and email accounts that hold messages are protected with strong passwords
            and two-step verification, and only I can access them.
          </p>
          <p>
            If a data breach ever affects your personal data, I will tell you without delay, explaining
            what happened, what it could mean for you and what I am doing about it. I will also report it
            to the Data Protection Board of India as the law requires.
          </p>
        </Section>

        <Section title="Your rights">
          <p>You can ask me, at any time and free of charge, to:</p>
          <ul className="list-disc space-y-1.5 pl-5">
            <li>tell you what personal data I hold about you, how I use it and who it was shared with;</li>
            <li>correct, complete or update it;</li>
            <li>delete it;</li>
            <li>stop using it, if you no longer want me to reply or keep it (withdrawing consent is as easy as giving it);</li>
            <li>nominate another person to exercise these rights for you if you die or become unable to;</li>
            <li>
              if you are in the EU, the UK or a similar region: restrict or object to its use, or receive
              a copy in a portable format.
            </li>
          </ul>
          <p>
            To use any of these rights, email <Mail /> with the subject &ldquo;Privacy request&rdquo; from
            the address you used to contact me, so I can confirm it is you. I will reply within 30 days,
            and any grievance will be resolved within 90 days at the most, as the DPDP Rules require.
          </p>
        </Section>

        <Section title="Complaints">
          <p>
            If you are not satisfied with my reply, you can complain to the Data Protection Board of
            India once its complaint process is open; under the DPDP Act you should first raise it with me.
            If you are in the EU or the UK, you can also complain to your local data protection
            authority.
          </p>
        </Section>

        <Section title="Children">
          <p>
            This website is meant for adults. If you are under 18, please do not use the contact form or
            send me personal data without a parent or guardian. If I learn that I have received personal
            data from a child without a parent&rsquo;s consent, I will delete it.
          </p>
        </Section>

        <Section title="Changes to this policy">
          <p>
            If the way this website handles data changes, I will update this page first and change the
            date at the top. For a significant change, I will add a note on this page explaining it.
          </p>
        </Section>

        <Section title="Contact">
          <p>
            Khuswant Sharma, New Delhi, India. Email: <Mail />. See also the{" "}
            <Link to="/terms" className="text-navy hover:underline">
              Terms of Use and Disclaimer
            </Link>
            .
          </p>
        </Section>
      </div>
    </div>
  );
}
