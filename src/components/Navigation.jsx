"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";

const NAV_LINKS = [
  { name: "Collections", href: "#occasions" },
  { name: "Templates", href: "#collections" },
  { name: "The Experience", href: "#experience" },
  { name: "Review", href: "#review" },
];

export default function Navigation({ onStartProject }) {
  const [scrolled, setScrolled] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [mobileMenuOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-[#FAF9F5] ${
          scrolled
            ? "h-16 border-b border-kanverse-border shadow-[0_4px_20px_rgba(0,0,0,0.02)]"
            : "h-20 lg:h-24 border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto h-full px-6 sm:px-10 lg:px-16 flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#"
            className="group flex items-center gap-2 focus:outline-none"
            aria-label="Kanverse Homepage"
          >
            <span className="font-serif text-lg sm:text-xl font-light tracking-[0.28em] text-kanverse-text uppercase transition-opacity duration-300 group-hover:opacity-75">
              KANVERSE
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-kanverse-text opacity-40 group-hover:opacity-80 transition-opacity" />
          </a>

          {/* Desktop Navigation Links */}
          <nav
            className="hidden md:flex items-center gap-8 lg:gap-12"
            aria-label="Main Navigation"
          >
            {NAV_LINKS.map((link, idx) => {
              const isHovered = hoveredLink === idx;
              const isAnotherHovered = hoveredLink !== null && !isHovered;

              return (
                <a
                  key={link.name}
                  href={link.href}
                  onMouseEnter={() => setHoveredLink(idx)}
                  onMouseLeave={() => setHoveredLink(null)}
                  className={`relative py-1 text-[11px] uppercase tracking-[0.18em] font-medium transition-all duration-300 ${
                    isAnotherHovered ? "opacity-35" : "opacity-90 hover:opacity-100"
                  } text-kanverse-text`}
                >
                  {link.name}
                  {/* Subtle expansion underline on hover */}
                  <motion.span
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: isHovered ? 1 : 0 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute bottom-0 left-0 right-0 h-[1px] bg-kanverse-text origin-center"
                  />
                </a>
              );
            })}
          </nav>

          {/* Actions (Desktop & Mobile trigger) */}
          <div className="flex items-center gap-4 sm:gap-6">
            {/* Login Link */}
            <a
              href="#"
              className="hidden lg:inline-flex text-[11px] uppercase tracking-[0.18em] font-medium text-kanverse-text opacity-75 hover:opacity-100 transition-opacity"
            >
              Login
            </a>

            {/* Primary CTA */}
            <button
              onClick={onStartProject}
              className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 bg-kanverse-text text-[#FAF9F5] text-[11px] uppercase tracking-[0.2em] font-medium transition-all duration-300 hover:bg-[#2A2826] hover:shadow-md group"
            >
              <span>Get Started</span>
              <ArrowUpRight className="w-3.5 h-3.5 ml-1.5 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>

            {/* Mobile Hamburger Trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden flex items-center gap-2 p-2 text-kanverse-text focus:outline-none"
              aria-label="Toggle Menu"
            >
              <span className="text-[11px] uppercase tracking-[0.2em] font-medium">
                {mobileMenuOpen ? "Close" : "Menu"}
              </span>
              <div className="w-5 h-3 flex flex-col justify-between py-0.5">
                <span
                  className={`w-full h-[1px] bg-kanverse-text transition-transform duration-300 ${
                    mobileMenuOpen ? "rotate-45 translate-y-[5px]" : ""
                  }`}
                />
                <span
                  className={`w-full h-[1px] bg-kanverse-text transition-transform duration-300 ${
                    mobileMenuOpen ? "-rotate-45 -translate-y-[5px]" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Fullscreen Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-[#FAF9F5] flex flex-col justify-between px-8 py-12 md:hidden"
          >
            {/* Top Bar Spacer */}
            <div className="h-16 flex items-center justify-between border-b border-kanverse-border/40">
              <span className="text-xs uppercase tracking-[0.25em] text-kanverse-muted">
                Kanverse
              </span>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-kanverse-text"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Mobile Nav Stack */}
            <div className="flex flex-col gap-6 my-auto">
              {NAV_LINKS.map((link, idx) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  initial={{ y: 25, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 15, opacity: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.08 * idx,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="group flex items-baseline justify-between py-2 border-b border-kanverse-border/30"
                >
                  <span className="font-serif text-3xl text-kanverse-text font-light tracking-wide group-hover:pl-2 transition-all">
                    {link.name}
                  </span>
                  <span className="text-xs font-mono text-kanverse-muted">
                    0{idx + 1}
                  </span>
                </motion.a>
              ))}
            </div>

            {/* Bottom Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.5 }}
              className="flex flex-col gap-4 pt-6 border-t border-kanverse-border"
            >
              <a
                href="#"
                onClick={() => setMobileMenuOpen(false)}
                className="text-center py-3 text-xs uppercase tracking-[0.2em] text-kanverse-muted border border-kanverse-border"
              >
                Login
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (onStartProject) onStartProject();
                }}
                className="w-full py-4 bg-kanverse-text text-[#FAF9F5] text-xs uppercase tracking-[0.22em] font-medium flex items-center justify-center gap-2"
              >
                <span>Get Started</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.2em] text-kanverse-muted pt-2">
                <span>Handcrafted Digital Invitations</span>
                <span>© 2026</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
