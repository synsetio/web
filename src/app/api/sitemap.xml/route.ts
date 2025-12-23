import { NextResponse } from "next/server";
import { content } from "../../data/home-page";

const BASE_URL = "https://synsetio.com";
const LOCALES = ["en", "fr", "es", "de", "pt", "zh", "ja", "ar"];

function generateSiteMap() {
  const { resources } = content.features;
  const now = new Date().toISOString();

  const staticPages = [
    { path: "", priority: "1.0", changefreq: "daily" },
    { path: "/blog", priority: "0.9", changefreq: "weekly" },
    { path: "/privacy-policy", priority: "0.5", changefreq: "monthly" },
    { path: "/terms-of-service", priority: "0.5", changefreq: "monthly" },
    { path: "/cookie-policy", priority: "0.5", changefreq: "monthly" },
  ];

  const blogPosts = resources.map((resource) => ({
    path: `/blog/${encodeURIComponent(resource.title.toLowerCase().replace(/ /g, "-"))}`,
    priority: "0.7",
    changefreq: "monthly",
  }));

  const allPages = [...staticPages, ...blogPosts];

  const urls = allPages.flatMap((page) =>
    LOCALES.map((locale) => {
      const loc = `${BASE_URL}/${locale}${page.path}`;
      const alternates = LOCALES.map(
        (l) =>
          `<xhtml:link rel="alternate" hreflang="${l}" href="${BASE_URL}/${l}${page.path}"/>`,
      ).join("\n        ");

      return `
    <url>
      <loc>${loc}</loc>
      <lastmod>${now}</lastmod>
      <changefreq>${page.changefreq}</changefreq>
      <priority>${page.priority}</priority>
      ${alternates}
      <xhtml:link rel="alternate" hreflang="x-default" href="${BASE_URL}/en${page.path}"/>
    </url>`;
    }),
  );

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset 
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xhtml="http://www.w3.org/1999/xhtml"
>
  ${urls.join("")}
</urlset>`;
}

export async function GET() {
  const body = generateSiteMap();

  return new NextResponse(body, {
    status: 200,
    headers: {
      "Cache-Control": "public, s-maxage=86400, stale-while-revalidate",
      "Content-Type": "application/xml",
    },
  });
}
