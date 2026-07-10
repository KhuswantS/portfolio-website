import { useState } from "react";

const initialForm = { name: "", email: "", message: "" };

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
    <div className="mx-auto max-w-4xl px-6 py-16 sm:py-20">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">Contact</p>
      <h1 className="mt-2 text-3xl font-bold tracking-tight text-navy-dark sm:text-4xl">
        Get In Touch
      </h1>
      <p className="mt-4 max-w-xl text-navy-dark/70">
        Have a research idea, a correction, or want to talk shop? Reach out directly or
        use the form below.
      </p>

      <div className="mt-12 grid gap-10 sm:grid-cols-5">
        <div className="sm:col-span-2">
          <div className="space-y-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-gold">Email</p>
              <a
                href="mailto:sharmakhuswant16@gmail.com"
                className="mt-1 block font-medium text-navy-dark hover:text-navy"
              >
                sharmakhuswant16@gmail.com
              </a>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-gold">LinkedIn</p>
              <a
                href="https://linkedin.com/in/khuswant-sharma-31078a214"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 block font-medium text-navy-dark hover:text-navy"
              >
                linkedin.com/in/khuswant-sharma-31078a214
              </a>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-gold">GitHub</p>
              <a
                href="https://github.com/KhuswantS"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 block font-medium text-navy-dark hover:text-navy"
              >
                github.com/KhuswantS
              </a>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="sm:col-span-3 space-y-5">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-navy-dark">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={form.name}
              onChange={handleChange}
              className="mt-1.5 w-full rounded-md border border-navy/15 bg-white px-4 py-2.5 text-sm text-navy-dark focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-navy-dark">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={form.email}
              onChange={handleChange}
              className="mt-1.5 w-full rounded-md border border-navy/15 bg-white px-4 py-2.5 text-sm text-navy-dark focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-navy-dark">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              value={form.message}
              onChange={handleChange}
              className="mt-1.5 w-full rounded-md border border-navy/15 bg-white px-4 py-2.5 text-sm text-navy-dark focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30"
            />
          </div>

          <button
            type="submit"
            className="rounded-md bg-navy px-8 py-3 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-navy-light"
          >
            Send Message
          </button>

          {submitted && (
            <p className="text-sm font-medium text-navy">
              Thanks for reaching out &mdash; I&rsquo;ll get back to you shortly.
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
