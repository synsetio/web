import { NextResponse } from 'next/server';
import { content } from '../../data/home-page';

const BASE_URL = 'https://synsetic.com'; // Replace with your actual domain

function generateSiteMap() {
  const { resources } = content.features;

  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <!-- Add the home page -->
     <url>
       <loc>${BASE_URL}</loc>
       <lastmod>${new Date().toISOString()}</lastmod>
       <changefreq>daily</changefreq>
       <priority>1.0</priority>
     </url>
     <!-- Add static pages -->
     <url>
       <loc>${BASE_URL}/privacy-policy</loc>
       <lastmod>${new Date().toISOString()}</lastmod>
       <changefreq>monthly</changefreq>
       <priority>0.8</priority>
     </url>
     <url>
       <loc>${BASE_URL}/terms-of-service</loc>
       <lastmod>${new Date().toISOString()}</lastmod>
       <changefreq>monthly</changefreq>
       <priority>0.8</priority>
     </url>
     <url>
       <loc>${BASE_URL}/cookie-policy</loc>
       <lastmod>${new Date().toISOString()}</lastmod>
       <changefreq>monthly</changefreq>
       <priority>0.8</priority>
     </url>
     <!-- Add blog page -->
     <url>
       <loc>${BASE_URL}/blog</loc>
       <lastmod>${new Date().toISOString()}</lastmod>
       <changefreq>weekly</changefreq>
       <priority>0.9</priority>
     </url>
     <!-- Add dynamic blog post pages -->
     ${resources
       .map((resource) => {
         return `
       <url>
           <loc>${BASE_URL}/blog/${encodeURIComponent(resource.title.toLowerCase().replace(/ /g, '-'))}</loc>
           <lastmod>${new Date().toISOString()}</lastmod>
           <changefreq>monthly</changefreq>
           <priority>0.7</priority>
       </url>
     `;
       })
       .join('')}
   </urlset>
 `;
}

export async function GET() {
  const body = generateSiteMap();

  return new NextResponse(body, {
    status: 200,
    headers: {
      'Cache-control': 'public, s-maxage=86400, stale-while-revalidate',
      'Content-Type': 'application/xml',
    },
  });
}
