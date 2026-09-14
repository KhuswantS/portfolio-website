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
      <p className="mt-4 text-sm text-ink-soft/70">Last updated: September 14, 2026</p>

      <div className="mt-10 space-y-10">
        <section>
          <h2 className="font-serif text-xl font-semibold text-ink">Overview</h2>
          <p className="mt-3 leading-relaxed text-ink-soft">
            This website belongs to Khuswant Sharma. It shares independent investment
            research and contact details. There are no user accounts, nothing is sold
            here, and there are no ads.
          </p>
          <p className="mt-3 leading-relaxed text-ink-soft">
            This page explains, in plain terms, what happens to your information when
            you visit.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-xl font-semibold text-ink">What this website collects</h2>
          <p className="mt-3 leading-relaxed text-ink-soft">
            If you use the{" "}
            <a href="/contact" className="text-navy hover:underline">Contact</a> form:
            your name, email address, and message are sent through Formspree, a
            third-party service, so they reach my inbox. Formspree also keeps its own
            copy of these messages. You can read their{" "}
            <a
              href="https://formspree.io/legal/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-navy hover:underline"
            >
              privacy policy
            </a>{" "}
            for more detail.
          </p>
          <p className="mt-3 leading-relaxed text-ink-soft">
            If you just browse the website: Vercel Analytics records basic, anonymous
            information, like which pages are visited and how fast they load, so I can
            understand how the website is being used. This does not use cookies, and it
            cannot identify you personally.
          </p>
          <p className="mt-3 font-medium leading-relaxed text-ink">
            That is the complete list. Nothing else is collected.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-xl font-semibold text-ink">What this website does not do</h2>
          <ul className="mt-3 space-y-2 leading-relaxed text-ink-soft">
            <li>&bull; No user accounts or logins</li>
            <li>&bull; No cookies that track you across visits</li>
            <li>&bull; No advertising of any kind</li>
            <li>&bull; Your information is never sold or shared beyond what is stated above</li>
          </ul>
        </section>

        <section>
          <h2 className="font-serif text-xl font-semibold text-ink">Questions</h2>
          <p className="mt-3 leading-relaxed text-ink-soft">
            If you have any questions about your data, write to{" "}
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
