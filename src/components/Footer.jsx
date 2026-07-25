import { MailIcon, LinkedInIcon, GitHubIcon, TwitterIcon } from "./icons";

const links = [
  { href: "mailto:sharmakhuswant16@gmail.com", label: "Email", Icon: MailIcon },
  { href: "https://linkedin.com/in/khuswant-sharma-31078a214", label: "LinkedIn", Icon: LinkedInIcon },
  { href: "https://github.com/KhuswantS", label: "GitHub", Icon: GitHubIcon },
  { href: "https://x.com/imkhuswant", label: "Twitter", Icon: TwitterIcon },
];

export default function Footer() {
  return (
    <footer className="border-t border-hairline bg-paper">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 py-10 text-center">
        <div className="flex items-center gap-5">
          {links.map(({ href, label, Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              aria-label={label}
              className="text-ink-soft transition-colors hover:text-navy"
            >
              <Icon className="h-5 w-5" />
            </a>
          ))}
        </div>
        <p className="text-xs text-ink-soft/70">
          &copy; {new Date().getFullYear()} Khuswant Sharma. Independent research, not investment advice.
        </p>
      </div>
    </footer>
  );
}
