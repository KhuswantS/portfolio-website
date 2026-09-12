import { StrictMode } from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import App from "./App.jsx";

// Used only by scripts/prerender.mjs (built as a separate SSR bundle via the
// Vite JS API, run in Node, never shipped to the browser). Kept out of
// main.jsx/App.jsx's own graph so nothing here reaches the client bundle.
export function render(url) {
  return renderToString(
    <StrictMode>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </StrictMode>
  );
}
