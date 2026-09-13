import SEO from "../components/SEO";

export default function Privacy() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16 sm:py-20">
      <SEO
        title="Privacy Policy | Khuswant Sharma"
        description="How khuswantsharma.com handles visitor data: cookieless Vercel Analytics, a Formspree-powered contact form, and nothing else."
        path="/privacy"
      />
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-navy">Privacy</p>
      <h1 className="mt-2 font-serif text-3xl font-semibold text-ink sm:text-4xl">Privacy Policy</h1>
      <p className="mt-4 text-sm text-ink-soft/70">Last updated: September 13, 2026</p>

      <div className="mt-10 space-y-10">
        <section>
          <h2 className="font-serif text-xl font-semibold text-ink">Overview</h2>
          <p className="mt-3 leading-relaxed text-ink-soft">
            This is a personal research and portfolio site. It has no user accounts, no
            e-commerce, and no advertising. This page describes, plainly, the only two
            ways any data about you touches this site.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-xl font-semibold text-ink">What is collected</h2>
          <ul className="mt-3 space-y-3 leading-relaxed text-ink-soft">
            <li>
              <span className="font-medium text-ink">Contact form submissions.</span> If you
              fill out and submit the form on the{" "}
              <a href="/contact" className="text-navy hover:underline">Contact</a> page, the
              name, email address, and message you provide are sent to Khuswant Sharma via{" "}
              <a
                href="https://formspree.io/legal/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-navy hover:underline"
              >
                Formspree
              </a>
              , a third-party form backend. Nothing is submitted unless you actively fill
              out and send the form.
            </li>
            <li>
              <span className="font-medium text-ink">Anonymous, cookieless analytics.</span>{" "}
              This site uses Vercel Web Analytics and Vercel Speed Insights to see
              aggregate traffic and page-performance data - page views, general location,
              device type, and load times. Both are cookieless by design: visitors are
              identified only by a hash of the request that cannot be used to track you
              across other sites, no personal identifiers are collected, and the data
              cannot be used to reconstruct an individual browsing session.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="font-serif text-xl font-semibold text-ink">What is not collected</h2>
          <ul className="mt-3 space-y-2 leading-relaxed text-ink-soft">
            <li>&bull; No user accounts, logins, or profiles</li>
            <li>&bull; No tracking cookies of any kind</li>
            <li>&bull; No advertising or retargeting networks</li>
            <li>&bull; No sale or sharing of your data with anyone other than Formspree, and only for the message you choose to send</li>
          </ul>
        </section>

        <section>
          <h2 className="font-serif text-xl font-semibold text-ink">How contact form data is used</h2>
          <p className="mt-3 leading-relaxed text-ink-soft">
            Contact form submissions are used only to read and respond to your message.
            They are processed by Formspree and delivered to Khuswant Sharma's email
            inbox; they are not added to a mailing list, used for marketing, or shared
            with any other party. Formspree's own handling of that data is governed by
            their{" "}
            <a
              href="https://formspree.io/legal/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-navy hover:underline"
            >
              privacy policy
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="font-serif text-xl font-semibold text-ink">Questions</h2>
          <p className="mt-3 leading-relaxed text-ink-soft">
            For any question about this policy or your data, email{" "}
            <a href="mailto:sharmakhuswant16@gmail.com" className="text-navy hover:underline">
              sharmakhuswant16@gmail.com
            </a>
            .
          </p>
        </section>
      </div>
    </div>
  );
}
