// Renders a JSON-LD structured data block. Works wherever it's placed in the
// tree - unlike <title>/<meta>, search engines parse <script type=
// "application/ld+json"> anywhere in the document, so this needs no special
// handling in scripts/prerender.mjs.
export default function JsonLd({ data }) {
  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
