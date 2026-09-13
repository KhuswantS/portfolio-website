import { socialLinks } from "./social";

// Shared Person identity, referenced by the Person schema on About.jsx and
// as the `author` of the Article schema on ResearchArticle.jsx.
export const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Khuswant Sharma",
  jobTitle: "Private Equity Fellow",
  worksFor: {
    "@type": "Organization",
    name: "Indian Venture and Alternate Capital Association (IVCA)",
  },
  url: "https://khuswantsharma.com",
  sameAs: socialLinks.filter((link) => link.href.startsWith("http")).map((link) => link.href),
};
