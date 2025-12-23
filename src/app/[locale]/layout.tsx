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

export const metadata: Metadata = {
  title: "Synsetio - Engineered for the Agentic Economy",
  description:
    "Synsetio equips forward-thinking enterprises with sovereign AI infrastructure. Paris • Global.",
  keywords: [
    "AI",
    "Agentic Economy",
    "Sovereign AI",
    "Enterprise AI",
    "Blockchain",
    "Autonomous Agents",
  ],
  authors: [{ name: "Synsetio" }],
  openGraph: {
    type: "website",
    url: "https://synsetio.com",
    title: "Synsetio - Engineered for the Agentic Economy",
    description:
      "We equip enterprises with sovereign AI infrastructure to compete in the next era of global commerce.",
    siteName: "Synsetio",
    images: [
      {
        url: "https://synsetio.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Synsetio - Engineered for the Agentic Economy",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    site: "@synsetio",
    creator: "@synsetio",
  },
  icons: {
    icon: "/logo.png",
    apple: "/apple-touch-icon.png",
  },
  alternates: {
    types: {
      "application/xml": [{ url: "/sitemap.xml", title: "Sitemap" }],
    },
  },
};

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
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        <link rel="robots" type="text/plain" href="/robots.txt" />
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
