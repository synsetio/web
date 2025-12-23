"use client";

import { SynsetioLogo } from "./icons";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslations, useLocale } from "next-intl";

const LOCALES = [
  { code: "en", label: "English", flag: "🇬🇧" },
  { code: "fr", label: "Français", flag: "🇫🇷" },
  { code: "es", label: "Español", flag: "🇪🇸" },
  { code: "de", label: "Deutsch", flag: "🇩🇪" },
  { code: "pt", label: "Português", flag: "🇧🇷" },
  { code: "zh", label: "中文", flag: "🇨🇳" },
  { code: "ja", label: "日本語", flag: "🇯🇵" },
  { code: "ar", label: "العربية", flag: "🇸🇦" },
] as const;

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
  const pathname = usePathname();

  const switchLocale = (newLocale: string) => {
    const segments = pathname.split("/");
    segments[1] = newLocale;
    return segments.join("/");
  };

  const footerSections = [
    {
      title: t("sections.product"),
      links: [
        { label: "Features", href: `/${locale}#features` },
        { label: "Services", href: `/${locale}#services` },
      ],
    },
    {
      title: t("sections.resources"),
      links: [{ label: "Blog", href: `/${locale}/blog` }],
    },
    {
      title: t("sections.company"),
      links: [
        { label: "About Us", href: `/${locale}#mission` },
        { label: "Careers", href: `/${locale}/careers` },
        { label: "Contact", href: `/${locale}#contact` },
      ],
    },
    {
      title: t("sections.legal"),
      links: [
        { label: "Privacy Policy", href: `/${locale}/privacy-policy` },
        { label: "Terms of Service", href: `/${locale}/terms-of-service` },
        { label: "Cookie Policy", href: `/${locale}/cookie-policy` },
      ],
    },
  ];

  return (
    <footer className="bg-white border-t border-neutral-100 pt-20 pb-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-20">
          <div className="lg:col-span-2">
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
            <p className="text-neutral-500 text-lg leading-relaxed max-w-sm mb-8">
              {t("description")}
            </p>

            {/* Newsletter Placeholder */}
            <div className="mb-8">
              <h5 className="font-bold text-black mb-3 text-sm uppercase tracking-wider">
                {t("newsletter.title")}
              </h5>
              <div className="flex gap-2 max-w-sm">
                <input
                  type="email"
                  aria-label="Email address"
                  placeholder={t("newsletter.placeholder")}
                  className="flex-1 bg-neutral-50 border border-neutral-200 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-black transition-colors"
                />
                <button className="bg-black text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-neutral-800 transition-colors">
                  {t("newsletter.button")}
                </button>
              </div>
            </div>

            <div className="flex gap-4">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-neutral-50 p-2 rounded-full text-neutral-600 hover:bg-black hover:text-white transition-all duration-300"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {footerSections.map((section) => (
            <div key={section.title} className="lg:col-span-1">
              <h4 className="text-sm font-bold uppercase tracking-wider mb-6 text-black">
                {section.title}
              </h4>
              <ul className="space-y-4">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-neutral-500 hover:text-black transition-colors block"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-neutral-100">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-neutral-400 text-sm order-2 md:order-1">
              &copy; {currentYear} Synsetio. All rights reserved.
            </p>

            <div className="flex flex-wrap justify-center gap-2 order-1 md:order-2">
              {LOCALES.map((l) => (
                <Link
                  key={l.code}
                  href={switchLocale(l.code)}
                  className={`px-3 py-1.5 text-sm rounded-full transition-all duration-300 border ${
                    locale === l.code
                      ? "bg-black text-white border-black"
                      : "bg-white text-neutral-600 border-neutral-200 hover:border-black hover:text-black"
                  }`}
                >
                  <span className="mr-2">{l.flag}</span>
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
