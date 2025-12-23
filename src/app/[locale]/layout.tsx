import type { Metadata } from "next";
import localFont from "next/font/local";
import "../globals.css";
import SmoothScroll from "../components/SmoothScroll";
import NoiseOverlay from "../components/NoiseOverlay";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const BASE_URL = "https://synsetio.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Synsetio | Sovereign AI Infrastructure for Enterprise",
    template: "%s | Synsetio",
  },
  description:
    "Synsetio builds sovereign AI infrastructure for enterprises. Deploy autonomous agents, secure LLM hosting, and blockchain-verified intelligence. French engineering, global scale.",
  keywords: [
    "sovereign AI",
    "enterprise AI infrastructure",
    "autonomous agents",
    "agentic economy",
    "AI agents",
    "LLM hosting",
    "blockchain AI",
    "AI automation",
    "enterprise automation",
    "French AI company",
    "Paris AI startup",
  ],
  authors: [{ name: "Synsetio", url: BASE_URL }],
  creator: "Synsetio",
  publisher: "Synsetio",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    url: BASE_URL,
    title: "Synsetio | Sovereign AI Infrastructure",
    description:
      "Deploy autonomous AI agents with sovereign infrastructure. Enterprise-grade, blockchain-verified, globally scalable.",
    siteName: "Synsetio",
    images: [
      {
        url: `${BASE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Synsetio - Sovereign AI Infrastructure",
      },
    ],
    locale: "en_US",
    alternateLocale: [
      "fr_FR",
      "es_ES",
      "de_DE",
      "pt_BR",
      "zh_CN",
      "ja_JP",
      "ar_SA",
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@synsetio",
    creator: "@synsetio",
    title: "Synsetio | Sovereign AI Infrastructure",
    description: "Deploy autonomous AI agents with sovereign infrastructure.",
    images: [`${BASE_URL}/og-image.png`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/logo.png",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.json",
  alternates: {
    canonical: BASE_URL,
    languages: {
      en: `${BASE_URL}/en`,
      fr: `${BASE_URL}/fr`,
      es: `${BASE_URL}/es`,
      de: `${BASE_URL}/de`,
      pt: `${BASE_URL}/pt`,
      zh: `${BASE_URL}/zh`,
      ja: `${BASE_URL}/ja`,
      ar: `${BASE_URL}/ar`,
    },
    types: {
      "application/xml": [{ url: "/sitemap.xml", title: "Sitemap" }],
    },
  },
  category: "technology",
};

function JsonLd() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Synsetio",
    url: BASE_URL,
    logo: `${BASE_URL}/logo.png`,
    description:
      "Synsetio builds sovereign AI infrastructure for enterprises. We deploy autonomous agents, secure LLM hosting, and blockchain-verified intelligence systems.",
    foundingDate: "2024",
    founders: [{ "@type": "Person", name: "Synsetio Team" }],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Paris",
      addressCountry: "FR",
    },
    sameAs: ["https://x.com/synsetio", "https://linkedin.com/company/synsetio"],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      email: "contact@synsetio.com",
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Synsetio",
    url: BASE_URL,
    description: "Sovereign AI Infrastructure for Enterprise",
    potentialAction: {
      "@type": "SearchAction",
      target: `${BASE_URL}/blog?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "AI Infrastructure",
    provider: {
      "@type": "Organization",
      name: "Synsetio",
    },
    areaServed: "Worldwide",
    description:
      "Enterprise AI infrastructure including autonomous agents, sovereign LLM hosting, and blockchain integration.",
    offers: [
      {
        "@type": "Offer",
        name: "Enterprise Agent Architecture",
        description: "Custom agentic swarms for high-value business workflows",
      },
      {
        "@type": "Offer",
        name: "Sovereign LLM Hosting",
        description: "Private infrastructure for fine-tuned AI models",
      },
      {
        "@type": "Offer",
        name: "Blockchain Integration",
        description: "On-chain identity and settlement for AI agents",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
    </>
  );
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <head>
        <JsonLd />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        <meta name="theme-color" content="#000000" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NextIntlClientProvider messages={messages}>
          <SmoothScroll>
            <NoiseOverlay />
            {children}
          </SmoothScroll>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
