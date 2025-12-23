"use client";

import CallToActionContact from "./components/CallToActionContact";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Mission from "./components/Mission";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-black">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Mission />
        <Features />
        <Services />
        <CallToActionContact />
      </main>
      <Footer />
    </div>
  );
}
