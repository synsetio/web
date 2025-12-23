"use client";

import { SynsetioLogo } from "./icons";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const t = useTranslations("HomePage.footer");
  const locale = useLocale();

  const footerSections = [
    {
      title: "Company",
      links: [
        { label: "Our Mission", href: `/${locale}#mission` },
        { label: "Services", href: `/${locale}#services` },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Privacy Policy", href: `/${locale}/privacy-policy` },
        { label: "Terms of Service", href: `/${locale}/terms-of-service` },
        { label: "Cookie Policy", href: `/${locale}/cookie-policy` },
      ],
    },
  ];

  return (
    <footer className="bg-white border-t border-neutral-100 py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <Link href={`/${locale}`} className="flex items-center mb-6 group">
              <SynsetioLogo
                width={40}
                height={40}
                className="mr-3 fill-black transition-transform group-hover:scale-110"
              />
              <span className="text-2xl font-bold text-black tracking-tight">
                Synsetio
              </span>
            </Link>
            <p className="text-neutral-500 text-lg leading-relaxed max-w-sm">
              {t("description")}
            </p>
          </div>

          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="text-sm font-bold uppercase tracking-wider mb-6 text-black">
                {section.title}
              </h4>
              <ul className="space-y-4">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-neutral-500 hover:text-black transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-neutral-100 flex flex-col md:flex-row justify-between items-center text-sm text-neutral-400">
          <p>&copy; {currentYear} Synsetio. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <a href="#" className="hover:text-black transition-colors">
              Twitter
            </a>
            <a href="#" className="hover:text-black transition-colors">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
