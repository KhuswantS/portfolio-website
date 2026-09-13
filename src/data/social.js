import { MailIcon, LinkedInIcon, GitHubIcon, TwitterIcon } from "../components/icons";

// Single source of truth for social/contact links - used by Footer (site-wide
// nav) and by the Person JSON-LD schema on About.jsx (sameAs), so the two
// never drift out of sync.
export const socialLinks = [
  { href: "mailto:sharmakhuswant16@gmail.com", label: "Email", Icon: MailIcon },
  { href: "https://linkedin.com/in/khuswant-sharma-31078a214", label: "LinkedIn", Icon: LinkedInIcon },
  { href: "https://github.com/KhuswantS", label: "GitHub", Icon: GitHubIcon },
  { href: "https://x.com/imkhuswant", label: "Twitter", Icon: TwitterIcon },
];
