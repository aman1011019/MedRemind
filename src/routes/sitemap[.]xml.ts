import { createFileRoute } from "@tanstack/react-router";

// Sitemap is served as a static file from public/sitemap.xml
// This route exists only as a SPA placeholder — Cloudflare Pages
// serves the static file directly before the SPA handles it.
export const Route = createFileRoute("/sitemap.xml")({
  component: () => null,
});
