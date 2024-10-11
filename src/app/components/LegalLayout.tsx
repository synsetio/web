import React from "react";
import Layout from "./Layout";
import Link from "next/link";

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
      <div className="bg-primary-900 min-h-screen py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8">
            <aside className="md:w-1/4">
              <nav className="bg-primary-800 p-6 rounded-lg sticky top-4">
                <h2 className="text-xl font-semibold mb-4 text-secondary-300">
                  Legal Documents
                </h2>
                <ul className="space-y-2">
                  {legalPages.map((page) => (
                    <li key={page.href}>
                      <Link
                        href={page.href}
                        className={`block py-2 px-4 rounded transition-colors ${
                          title === page.title
                            ? "bg-secondary-600 text-white"
                            : "text-gray-300 hover:bg-primary-700"
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
              <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="prose prose-lg max-w-none">{children}</div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default LegalLayout;
