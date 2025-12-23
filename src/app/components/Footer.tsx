"use client";

import { SynsetioLogo } from "./icons";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";

const SOCIAL_LINKS = [
  {
    name: "X",
    href: "https://x.com/synsetio",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/company/synsetio",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
];

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
          <div className="mt-4 md:mt-0 flex items-center space-x-4">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-black transition-colors"
                aria-label={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
