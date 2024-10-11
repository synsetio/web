"use client";

import About from "./components/About";
import CallToActionContact from "./components/CallToActionContact";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Vision from "./components/Vision";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-primary-900">
      <Header />
      <main className="flex-grow">
        <Hero />
        <About />
        <Features />
        <Vision />
        <CallToActionContact />
      </main>
      <Footer />
    </div>
  );
}
