import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import SmoothScroll from "./components/SmoothScroll";
import NoiseOverlay from "./components/NoiseOverlay";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Synsetio - Collective Intelligence, Global Impact",
  description:
    "Shaping tomorrow's world through AI-powered businesses, seamless blockchain solutions, and user-controlled digital identities.",
  keywords: [
    "AI",
    "Blockchain",
    "Self-Sovereign Identity",
    "Business Automation",
    "Innovation",
  ],
  authors: [{ name: "Synsetio Team" }],
  openGraph: {
    type: "website",
    url: "https://synsetio.com",
    title: "Synsetio - Revolutionizing Business with AI and Blockchain",
    description:
      "Empowering innovators to create world-changing ventures with AI, blockchain, and SSI technologies.",
    siteName: "Synsetio",
    images: [
      {
        url: "https://synsetio.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Synsetio - Collective Intelligence, Global Impact",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        <link rel="robots" type="text/plain" href="/robots.txt" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SmoothScroll>
          <NoiseOverlay />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
