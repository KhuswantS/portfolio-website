import { useState } from "react";
import { MailIcon, LinkedInIcon, GitHubIcon, TwitterIcon } from "../components/icons";

const initialForm = { name: "", email: "", message: "" };

const contactLinks = [
  {
    label: "Email",
    value: "sharmakhuswant16@gmail.com",
    href: "mailto:sharmakhuswant16@gmail.com",
    Icon: MailIcon,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/khuswant-sharma-31078a214",
    href: "https://linkedin.com/in/khuswant-sharma-31078a214",
    Icon: LinkedInIcon,
  },
  {
    label: "GitHub",
    value: "github.com/KhuswantS",
    href: "https://github.com/KhuswantS",
    Icon: GitHubIcon,
  },
  {
    label: "Twitter",
    value: "x.com/imkhuswant",
    href: "https://x.com/imkhuswant",
    Icon: TwitterIcon,
  },
];

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setForm(initialForm);
  };

  return (
    <div className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-navy">Contact</p>
      <h1 className="mt-2 font-serif text-3xl font-semibold text-ink sm:text-4xl">
        Get in Touch
      </h1>
      <p className="mt-4 max-w-xl text-ink-soft">
        Have a research idea, a correction, or want to talk shop? Reach out directly or
        use the form below.
      </p>

      <div className="mt-12 grid gap-12 sm:grid-cols-5">
        <div className="space-y-6 sm:col-span-2">
          {contactLinks.map(({ label, value, href, Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="flex items-start gap-3 group"
            >
              <Icon className="mt-0.5 h-5 w-5 flex-shrink-0 text-navy" />
              <span>
                <span className="block text-xs font-semibold uppercase tracking-wider text-ink-soft">
                  {label}
                </span>
                <span className="mt-0.5 block text-sm font-medium text-ink group-hover:text-navy">
                  {value}
                </span>
              </span>
            </a>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 sm:col-span-3">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-ink">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={form.name}
              onChange={handleChange}
              className="mt-1.5 w-full rounded-md border border-navy/15 bg-white px-4 py-2.5 text-sm text-ink focus:border-navy focus:outline-none focus:ring-2 focus:ring-navy/15"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-ink">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={form.email}
              onChange={handleChange}
              className="mt-1.5 w-full rounded-md border border-navy/15 bg-white px-4 py-2.5 text-sm text-ink focus:border-navy focus:outline-none focus:ring-2 focus:ring-navy/15"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-ink">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              value={form.message}
              onChange={handleChange}
              className="mt-1.5 w-full rounded-md border border-navy/15 bg-white px-4 py-2.5 text-sm text-ink focus:border-navy focus:outline-none focus:ring-2 focus:ring-navy/15"
            />
          </div>

          <button
            type="submit"
            className="hover-lift rounded-md bg-navy px-8 py-3 text-sm font-semibold uppercase tracking-wide text-white hover:bg-navy-light"
          >
            Send Message
          </button>

          {submitted && (
            <p className="text-sm font-medium text-navy">
              Thanks for reaching out - I&rsquo;ll get back to you shortly.
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
