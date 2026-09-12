const SITE_URL = "https://khuswantsharma.com";
const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.png`;

// Renders <title>/<meta>/<link> directly in the tree. React 19 hoists these
// host elements into the real document <head> on the client (no library
// needed); the prerender script (scripts/prerender.mjs) extracts the same
// tags out of the SSR string output and splices them into each generated
// page's <head>, since renderToString has no <head> to hoist into.
export default function SEO({ title, description, path = "/", image = DEFAULT_OG_IMAGE }) {
  const url = `${SITE_URL}${path}`;

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </>
  );
}
