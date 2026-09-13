// Runs after `vite build`. Builds a throwaway Node SSR bundle of the app
// (src/entry-server.jsx), renders each route to an HTML string with
// react-dom/server + react-router-dom's StaticRouter, and writes the result
// as a real dist/**/index.html file so crawlers get actual markup instead of
// the empty <div id="root"></div> shell. No new runtime dependency: this
// relies only on react-dom/server and react-router-dom, both already in
// package.json.
import { build } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { readFile, writeFile, mkdir, rm } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const distDir = path.join(root, "dist");
const ssrOutDir = path.join(root, "dist-ssr");

const routes = [
  { url: "/", out: "index.html" },
  { url: "/research", out: "research/index.html" },
  { url: "/about", out: "about/index.html" },
  { url: "/contact", out: "contact/index.html" },
  { url: "/privacy", out: "privacy/index.html" },
  { url: "/research/tax-without-recognition", out: "research/tax-without-recognition/index.html" },
  // "*" (NotFound) is intentionally not prerendered - it has no fixed path.
  // Unmatched URLs fall through vercel.json's rewrite to this file (Vercel
  // checks the filesystem before rewrites, so every route above still wins),
  // then React Router matches path="*" client-side.
];

async function buildSsrBundle() {
  await build({
    root,
    plugins: [react(), tailwindcss()],
    logLevel: "warn",
    build: {
      ssr: "src/entry-server.jsx",
      outDir: "dist-ssr",
      emptyOutDir: true,
      rollupOptions: {
        output: { entryFileNames: "entry-server.js" },
      },
    },
  });
}

// <title>/<meta>/<link> emitted by <SEO> land inline in the renderToString
// output (renderToString has no document <head> to hoist into - that's a
// react-dom/client behavior). Pull them back out and place them in the
// template's real <head>.
function extractHeadTags(html) {
  const titleMatch = html.match(/<title>[\s\S]*?<\/title>/);
  const canonicalMatch = html.match(/<link rel="canonical"[^>]*\/>/);
  const metaTags = (html.match(/<meta[^>]*\/>/g) || []).filter(
    (tag) => /name="description"|property="og:|name="twitter:/.test(tag)
  );

  let body = html;
  if (titleMatch) body = body.replace(titleMatch[0], "");
  if (canonicalMatch) body = body.replace(canonicalMatch[0], "");
  for (const tag of metaTags) body = body.replace(tag, "");

  const headTags = [titleMatch?.[0], canonicalMatch?.[0], ...metaTags].filter(Boolean);
  return { body, headTags };
}

function injectIntoTemplate(template, { body, headTags }) {
  let page = template
    .replace(/\s*<title>[\s\S]*?<\/title>/, "")
    .replace(/\s*<meta\s+name="description"[^>]*\/>/, "");

  page = page.replace("</head>", `    ${headTags.join("\n    ")}\n  </head>`);
  page = page.replace('<div id="root"></div>', `<div id="root">${body}</div>`);
  return page;
}

async function main() {
  console.log("[prerender] building SSR bundle...");
  await buildSsrBundle();

  const entryPath = path.join(ssrOutDir, "entry-server.js");
  const { render } = await import(`${entryPath}?t=${Date.now()}`);

  const template = await readFile(path.join(distDir, "index.html"), "utf-8");

  for (const route of routes) {
    const rawHtml = render(route.url);
    const { body, headTags } = extractHeadTags(rawHtml);
    const page = injectIntoTemplate(template, { body, headTags });

    const outPath = path.join(distDir, route.out);
    await mkdir(path.dirname(outPath), { recursive: true });
    await writeFile(outPath, page, "utf-8");
    console.log(`[prerender] ${route.url} -> dist/${route.out}`);
  }

  await rm(ssrOutDir, { recursive: true, force: true });
  console.log("[prerender] done.");
}

main().catch((err) => {
  console.error("[prerender] failed:", err);
  process.exitCode = 1;
});
