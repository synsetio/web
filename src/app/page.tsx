"use client";

import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Features from "./components/Features";
import Vision from "./components/Vision";
import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-primary-900">
      <Header />
      <main className="flex-grow pt-20">
        <Hero />
        <About />
        <Features />
        <Vision />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}
