import React from 'react';

import Footer from "./Footer";
import Header from "./Header";
import CookieConsentBanner from './CookieConsent';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-20">
        {children}
      </main>
      <Footer />
      <CookieConsentBanner />
    </div>
  );
}