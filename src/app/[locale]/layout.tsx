import type { Metadata } from "next";
import localFont from "next/font/local";
import "../globals.css";
import SmoothScroll from "../components/SmoothScroll";
import NoiseOverlay from "../components/NoiseOverlay";
import ChatWidget from "../../components/Chat/ChatWidget";
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
    default: "Synsetio | Autonomous AI Workforce for Business",
    template: "%s | Synsetio",
  },
  description:
    "Scale your business with an autonomous AI workforce. Synsetio equips you with sovereign agents that automate operations, sales, and support 24/7.",
  keywords: [
    "autonomous AI workforce",
    "business automation",
    "AI agents for business",
    "sovereign AI",
    "automated revenue",
    "SME AI adoption",
    "AI scaling",
    "digital workforce",
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
    title: "Synsetio | Autonomous AI Workforce",
    description:
      "Scale your business with an autonomous AI workforce. 24/7 operations, verifiable execution, and growth without headcount.",
    siteName: "Synsetio",
    images: [
      {
        url: `${BASE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Synsetio - Autonomous AI Workforce",
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
    title: "Synsetio | Autonomous AI Workforce",
    description:
      "Scale your business with an autonomous AI workforce. 24/7 operations, verifiable execution.",
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
      "Synsetio equips businesses with autonomous AI agents. We deploy sovereign digital workforces that automate operations and drive growth.",
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
    description: "Autonomous AI Workforce for Business",
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
      "Autonomous AI workforce solutions including custom agents, private hosting, and automated revenue operations.",
    offers: [
      {
        "@type": "Offer",
        name: "Custom Agent Teams",
        description: "Specialized AI agents for specific business workflows",
      },
      {
        "@type": "Offer",
        name: "Private AI Hosting",
        description: "Secure infrastructure for your AI models",
      },
      {
        "@type": "Offer",
        name: "Automated Revenue Ops",
        description: "Self-driving systems for lead generation and outreach",
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
            <ChatWidget />
          </SmoothScroll>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
