import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import MagneticButton from "./react-bits/MagneticButton";

import { SynsetioLogo } from "./icons";

const HOME_NAV_ITEMS = [
  { href: "#about", label: "About" },
  { href: "#features", label: "Features" },
  { href: "#vision", label: "Vision" },
  { href: "/blog", label: "Blog" },
  { href: "#contact", label: "Contact us", isButton: true },
];

const NAV_ITEMS = [
  { href: "/", label: "Home" },
  { href: "/blog", label: "Blog" },
  { href: "#contact", label: "Contact us", isButton: true },
];

const NavItem = ({
  href,
  label,
  isButton = false,
}: {
  href: string;
  label: string;
  isButton?: boolean;
}) => (
  <li>
    {isButton ? (
      <Link href={href}>
        <MagneticButton className="bg-black text-white px-5 py-2 rounded-full text-sm font-medium">
          {label}
        </MagneticButton>
      </Link>
    ) : (
      <Link
        href={href}
        className="text-neutral-600 text-sm font-medium hover:text-black transition-colors clickable"
      >
        {label}
      </Link>
    )}
  </li>
);

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [navItems, setNavItems] = useState(HOME_NAV_ITEMS);
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();
  const pathname = usePathname();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  useEffect(() => {
    if (
      pathname.startsWith("/blog") ||
      ["/privacy-policy", "/terms-of-service", "/cookie-policy"].includes(
        pathname as string,
      )
    ) {
      setNavItems(NAV_ITEMS);
    } else {
      setNavItems(HOME_NAV_ITEMS);
    }
  }, [pathname]);

  return (
    <motion.header
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-neutral-100"
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link
          href="/"
          className="flex items-center cursor-pointer hover:opacity-80 transition-opacity"
        >
          <SynsetioLogo width={32} height={32} className="mr-3 fill-black" />
          <h1 className="text-xl font-bold text-black tracking-tight">
            Synsetio
          </h1>
        </Link>

        <nav className="hidden md:block">
          <ul className="flex items-center space-x-8">
            {navItems.map((item) => (
              <NavItem key={item.label} {...item} />
            ))}
          </ul>
        </nav>

        <button
          className="md:hidden text-black focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {isMenuOpen && (
        <motion.nav
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-white border-b border-neutral-100"
        >
          <ul className="py-4 px-6 space-y-4">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={
                    item.isButton
                      ? "block w-full text-center px-4 py-3 text-white bg-black rounded-lg hover:bg-neutral-800"
                      : "block px-2 py-2 text-neutral-600 hover:text-black font-medium"
                  }
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </motion.nav>
      )}
    </motion.header>
  );
}
