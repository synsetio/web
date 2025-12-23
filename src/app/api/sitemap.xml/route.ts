import { NextResponse } from "next/server";
import { content } from "../../data/home-page";
import { locales } from "../../../i18n/request";

const BASE_URL = "https://synsetio.com";

function generateSiteMap() {
  const { resources } = content.features;

  return `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
    ${locales
      .map(
        (locale) => `
      <url>
        <loc>${BASE_URL}/${locale}</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
        ${locales
          .map(
            (lang) =>
              `<xhtml:link rel="alternate" hreflang="${lang}" href="${BASE_URL}/${lang}"/>`,
          )
          .join("")}
        <xhtml:link rel="alternate" hreflang="x-default" href="${BASE_URL}/en"/>
      </url>
      <url>
        <loc>${BASE_URL}/${locale}/blog</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>0.9</priority>
        ${locales
          .map(
            (lang) =>
              `<xhtml:link rel="alternate" hreflang="${lang}" href="${BASE_URL}/${lang}/blog"/>`,
          )
          .join("")}
        <xhtml:link rel="alternate" hreflang="x-default" href="${BASE_URL}/en/blog"/>
      </url>
      ${["privacy-policy", "terms-of-service", "cookie-policy"]
        .map(
          (path) => `
        <url>
          <loc>${BASE_URL}/${locale}/${path}</loc>
          <lastmod>${new Date().toISOString()}</lastmod>
          <changefreq>monthly</changefreq>
          <priority>0.8</priority>
          ${locales
            .map(
              (lang) =>
                `<xhtml:link rel="alternate" hreflang="${lang}" href="${BASE_URL}/${lang}/${path}"/>`,
            )
            .join("")}
          <xhtml:link rel="alternate" hreflang="x-default" href="${BASE_URL}/en/${path}"/>
        </url>
      `,
        )
        .join("")}
      ${resources
        .map((resource) => {
          return `
        <url>
            <loc>${BASE_URL}/${locale}/blog/${resource.id}</loc>
            <lastmod>${new Date().toISOString()}</lastmod>
            <changefreq>monthly</changefreq>
            <priority>0.7</priority>
            ${locales
              .map(
                (lang) =>
                  `<xhtml:link rel="alternate" hreflang="${lang}" href="${BASE_URL}/${lang}/blog/${resource.id}"/>`,
              )
              .join("")}
            <xhtml:link rel="alternate" hreflang="x-default" href="${BASE_URL}/en/blog/${resource.id}"/>
        </url>
      `;
        })
        .join("")}
    `,
      )
      .join("")}
  </urlset>
`;
}

export async function GET() {
  const body = generateSiteMap();

  return new NextResponse(body, {
    status: 200,
    headers: {
      "Cache-control": "public, s-maxage=86400, stale-while-revalidate",
      "Content-Type": "application/xml",
    },
  });
}
