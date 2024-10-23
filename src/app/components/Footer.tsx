import { SynsetioLogo } from "./icons";

import { content } from "../data/home-page";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Company",
      links: [
        { label: "Our Mission", href: "/#mission" },
        { label: "Services", href: "/#services" },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Privacy Policy", href: "/privacy-policy" },
        { label: "Terms of Service", href: "/terms-of-service" },
        { label: "Cookie Policy", href: "/cookie-policy" },
      ],
    },
  ];

  return (
    <footer className="bg-[#0A2463] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <SynsetioLogo
                width={48}
                height={48}
                className="mr-3 fill-white"
              />
              <span className="text-2xl font-bold">Synsetio</span>
            </div>
            <p className="text-gray-300 mb-6">{content.footer.description}</p>
          </div>
          <div className="grid grid-cols-2 gap-8">
            {footerSections.map((section) => (
              <div key={section.title}>
                <h4 className="text-lg font-semibold mb-4 text-[#21CE99]">
                  {section.title}
                </h4>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-gray-300 hover:text-[#21CE99] transition-colors"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p className="text-sm text-gray-400">
            &copy; {currentYear} Synsetio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
