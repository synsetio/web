import React from "react";
import Layout from "./Layout";
import Link from "next/link";
import { motion } from "framer-motion";

interface LegalLayoutProps {
  children: React.ReactNode;
  title: string;
}

const LegalLayout: React.FC<LegalLayoutProps> = ({ children, title }) => {
  const legalPages = [
    { title: "Privacy Policy", href: "/privacy-policy" },
    { title: "Terms of Service", href: "/terms-of-service" },
    { title: "Cookie Policy", href: "/cookie-policy" },
  ];

  return (
    <Layout>
      <div className="min-h-screen py-16">
        <div className="container mx-auto px-6 max-w-6xl">
          <motion.div
            className="flex flex-col md:flex-row gap-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <aside className="md:w-1/4">
              <nav className="sticky top-32">
                <h2 className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-6">
                  Legal
                </h2>
                <ul className="space-y-4">
                  {legalPages.map((page) => (
                    <li key={page.href}>
                      <Link
                        href={page.href}
                        className={`block text-lg transition-colors ${
                          title === page.title
                            ? "text-black font-semibold border-l-2 border-black pl-4"
                            : "text-neutral-500 hover:text-black pl-4 border-l-2 border-transparent"
                        }`}
                      >
                        {page.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </aside>
            <main className="md:w-3/4">
              <h1 className="text-4xl md:text-5xl font-bold mb-12 text-black tracking-tight">
                {title}
              </h1>
              <div className="prose prose-neutral prose-lg max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-a:text-black prose-a:no-underline hover:prose-a:underline">
                {children}
              </div>
            </main>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};

export default LegalLayout;
