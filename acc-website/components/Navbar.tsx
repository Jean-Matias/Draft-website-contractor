"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface NavbarProps {
  onOpenForm: () => void;
}

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar({ onOpenForm }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-stone/95 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <div
            className={`font-bold text-xl tracking-tight transition-colors duration-300 ${
              scrolled ? "text-forest-dark" : "text-white"
            }`}
          >
            <span className="font-display text-2xl">American Custom</span>
            <span className="block text-xs tracking-[0.25em] uppercase font-sans font-semibold opacity-80">
              Concrete
            </span>
          </div>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium tracking-wide transition-colors duration-300 hover:text-sand ${
                scrolled ? "text-charcoal" : "text-white"
              }`}
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={onOpenForm}
            className="bg-sand hover:bg-sand-light text-charcoal font-semibold text-sm px-6 py-2.5 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            Get Free Estimate
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 transition-all duration-300 ${
              mobileOpen ? "rotate-45 translate-y-2" : ""
            } ${scrolled ? "bg-charcoal" : "bg-white"}`}
          />
          <span
            className={`block w-6 h-0.5 transition-all duration-300 ${
              mobileOpen ? "opacity-0" : ""
            } ${scrolled ? "bg-charcoal" : "bg-white"}`}
          />
          <span
            className={`block w-6 h-0.5 transition-all duration-300 ${
              mobileOpen ? "-rotate-45 -translate-y-2" : ""
            } ${scrolled ? "bg-charcoal" : "bg-white"}`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/95 backdrop-blur-md border-t border-surface overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-charcoal font-medium text-lg hover:text-forest transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <button
                onClick={() => {
                  setMobileOpen(false);
                  onOpenForm();
                }}
                className="bg-sand text-charcoal font-semibold px-6 py-3 rounded-full mt-2 hover:bg-sand-light transition-colors"
              >
                Get Free Estimate
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
