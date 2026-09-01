// components/Navbar.jsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone } from "lucide-react";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Products", href: "/products" },
  { name: "About Us", href: "/aboutUs" },
  { name: "Contact Us", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    async function checkAuth() {
      try {
        const res = await fetch("/api/admin/check");
        const data = await res.json();
        setIsAdmin(data.authenticated);
      } catch (err) {
        setIsAdmin(false);
      }
    }
    checkAuth();
  }, [pathname]);

  const allLinks = isAdmin
    ? [...navLinks, { name: "Admin Panel", href: "/admin/panel" }]
    : navLinks;

    // console.log(allLinks)

  return (
    <nav className="w-full bg-white shadow-sm relative z-50">
      <div className=" mx-auto px-4 sm:px-6 lg:px-16">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="RMD Vet Biotech"
              width={48}
              height={48}
              className="w-11 h-11 sm:w-12 sm:h-12 object-contain shrink-0"
              priority
            />
            <div className="flex flex-col leading-tight">
              <span className="font-extrabold text-green-900 text-sm sm:text-lg tracking-tight">
                RMD VET BIOTECH
              </span>
              <span className="text-yellow-600 text-[8px] sm:text-xs font-semibold tracking-wide">
                SCIENCE FOR ANIMAL HEALTH
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-8">
            {allLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                // className={`font-bold text-sm transition-colors ${
                //   link.name === "Home"
                //     ? "text-green-900 bg-green-50 px-4 py-2 rounded-full"
                //     : "text-gray-700 hover:text-green-800"
                // }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <a
            href="tel:9467005060"
            className="hidden lg:flex items-center gap-2 bg-green-900 hover:bg-green-800 text-white px-5 py-2.5 rounded-full font-semibold transition-colors"
          >
            <Phone size={16} />
            9467005060
          </a>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-green-900"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-4 pb-6 pt-2">
          <div className="flex flex-col gap-1">
            {allLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={font-medium py-3 px-3 rounded-lg transition-colors }
              >
                {link.name}
              </Link>
            ))}
            <a
              href="tel:9467005060"
              className="flex items-center justify-center gap-2 bg-green-900 hover:bg-green-800 text-white px-5 py-3 rounded-full font-semibold mt-3"
            >
              <Phone size={16} />
              9467005060
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
