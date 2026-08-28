"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { siteConfig } from "@/config/site";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Experience", href: "/experience" },
  { name: "Education", href: "/education" },
  { name: "Certifications", href: "/certifications" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo / Name */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="font-serif text-xl font-medium text-navy-900 tracking-tight">
              {siteConfig.name}
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  pathname === link.href ? "text-medical-teal" : "text-navy-600 hover:text-medical-blue"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <a
              href={`https://wa.me/${siteConfig.contact.whatsappNumber}?text=Hello Dr. Safeer, I would like to enquire about scheduling an appointment.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-2.5 border border-transparent text-sm font-medium rounded-md text-white bg-medical-blue hover:bg-navy-800 transition-colors shadow-sm"
            >
              Book Appointment
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-navy-600 hover:text-navy-900 hover:bg-slate-100 focus:outline-none"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-200">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  pathname === link.href
                    ? "text-medical-teal bg-slate-50"
                    : "text-navy-600 hover:text-medical-blue hover:bg-slate-50"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <a
              href={`https://wa.me/${siteConfig.contact.whatsappNumber}?text=Hello Dr. Safeer, I would like to enquire about scheduling an appointment.`}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center mt-4 px-4 py-3 border border-transparent text-base font-medium rounded-md text-white bg-medical-blue hover:bg-navy-800 transition-colors shadow-sm"
            >
              Book Appointment
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
