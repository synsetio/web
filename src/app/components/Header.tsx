import Link from "next/link";
import { useState } from "react";

import { SynseticLogo } from "./icons";

const NAV_ITEMS = [
  { href: "#about", label: "About" },
  { href: "#features", label: "Features" },
  { href: "#vision", label: "Vision" },
  { href: "#contact", label: "Contact us", isButton: true },
];

// Add type annotations to the NavItem props
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
    <a
      href={href}
      className={
        isButton
          ? "bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-colors"
          : "text-gray-600 hover:text-blue-600 transition-colors"
      }
    >
      {label}
    </a>
  </li>
);

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md fixed w-full z-10">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link
          href="/"
          className="flex items-center cursor-pointer hover:opacity-80 transition-opacity"
        >
          <SynseticLogo
            width={40}
            height={40}
            className="mr-2 fill-[url(#blue-green-gradient)]"
          />
          <svg width="0" height="0">
            <linearGradient
              id="blue-green-gradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#3B82F6" />
              <stop offset="100%" stopColor="#10B981" />
            </linearGradient>
          </svg>
          <h1 className="text-2xl font-bold text-gray-800">Synsetic</h1>
        </Link>

        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            {NAV_ITEMS.map((item) => (
              <NavItem key={item.label} {...item} />
            ))}
          </ul>
        </nav>
        <button
          className="md:hidden text-gray-600 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
      {isMenuOpen && (
        <nav className="md:hidden bg-white shadow-md">
          <ul className="py-2">
            {NAV_ITEMS.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className={
                    item.isButton
                      ? "block px-4 py-2 text-white bg-blue-600 hover:bg-blue-700"
                      : "block px-4 py-2 text-gray-600 hover:bg-gray-100"
                  }
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
