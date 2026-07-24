"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const NAV_LINKS = [
  { label: "Collections", href: "#occasions" },
  { label: "Templates", href: "#collections" },
  { label: "The Experience", href: "#experience" },
  { label: "Review", href: "#review" },
];

const EXPLORE_LINKS = [
  { label: "Wedding Ideas", href: "#" },
  { label: "Birthday Inspiration", href: "#" },
  { label: "Planning Tips", href: "#" },
  { label: "Contact", href: "#" },
];

const LEGAL_LINKS = [
  { label: "Privacy", href: "#" },
  { label: "Terms", href: "#" },
  { label: "Refunds", href: "#" },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSent(true);
      setEmail("");
      setTimeout(() => setSent(false), 4000);
    }
  };

  return (
    <footer className="bg-[#F0EDE5] border-t border-kanverse-border">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-20 lg:py-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <span className="font-serif text-[18px] tracking-[0.2em] text-kanverse-text block mb-4">
              KANVERSE
            </span>
            <p className="text-[13px] text-kanverse-muted leading-[1.7] max-w-xs">
              Handcrafted invitation websites for weddings, birthdays, and
              the celebrations that matter most.
            </p>
          </div>

          {/* Navigate */}
          <div>
            <span className="text-[11px] uppercase tracking-[0.15em] text-kanverse-subtle block mb-4">
              Navigate
            </span>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[13px] text-kanverse-muted hover:text-kanverse-text transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Explore */}
          <div>
            <span className="text-[11px] uppercase tracking-[0.15em] text-kanverse-subtle block mb-4">
              Explore
            </span>
            <ul className="space-y-2.5">
              {EXPLORE_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[13px] text-kanverse-muted hover:text-kanverse-text transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <span className="text-[11px] uppercase tracking-[0.15em] text-kanverse-subtle block mb-4">
              Stay in touch
            </span>
            <p className="text-[13px] text-kanverse-muted leading-[1.7] mb-4">
              Design inspiration and early access, delivered occasionally.
            </p>
            <form onSubmit={handleSubmit}>
              <div className="flex border-b border-kanverse-text/20">
                <input
                  type="email"
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 bg-transparent py-2 text-[13px] text-kanverse-text placeholder:text-kanverse-subtle focus:outline-none"
                />
                <button
                  type="submit"
                  className="px-3 py-2 text-[11px] uppercase tracking-[0.1em] text-kanverse-muted hover:text-kanverse-text transition-colors"
                >
                  →
                </button>
              </div>
              {sent && (
                <motion.p
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-[12px] text-kanverse-muted mt-2"
                >
                  Thank you — we'll be in touch.
                </motion.p>
              )}
            </form>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-kanverse-border/70">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-5">
            {["Instagram", "Pinterest"].map((s) => (
              <a
                key={s}
                href="#"
                className="text-[11px] text-kanverse-subtle hover:text-kanverse-text transition-colors"
              >
                {s}
              </a>
            ))}
          </div>
          <div className="flex flex-wrap items-center gap-4">
            {LEGAL_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[11px] text-kanverse-subtle hover:text-kanverse-muted transition-colors"
              >
                {link.label}
              </a>
            ))}
            <span className="text-[11px] text-kanverse-border">
              © 2026 Kanverse
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
