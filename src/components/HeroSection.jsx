"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, ArrowDown } from "lucide-react";

export default function HeroSection({ onStartProject }) {
  return (
    <section className="relative min-h-screen pt-28 lg:pt-36 pb-16 px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto flex flex-col justify-between">
      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start flex-1">
        {/* Left: Copy */}
        <div className="lg:col-span-7 flex flex-col justify-center py-8 lg:py-16">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-[13px] uppercase tracking-[0.2em] text-kanverse-muted mb-8"
          >
            Digital Invitation Websites
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.25, 1, 0.5, 1] }}
            className="font-serif text-[40px] sm:text-[56px] lg:text-[72px] text-kanverse-text leading-[1.05] tracking-[-0.02em] mb-8"
          >
            Your celebration,
            <br />
            designed by hand.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 1, 0.5, 1] }}
            className="text-[15px] sm:text-base text-kanverse-muted leading-[1.7] max-w-md mb-10"
          >
            Kanverse creates invitation websites for weddings, birthdays, and
            milestones — designed with the same care you put into planning the day itself.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="flex flex-wrap items-center gap-5"
          >
            <button
              onClick={onStartProject}
              className="group px-7 py-3.5 bg-kanverse-text text-[#FAF9F5] text-[12px] uppercase tracking-[0.15em] font-medium hover:bg-kanverse-accent transition-colors duration-300 flex items-center gap-2.5"
            >
              <span>Create Your Invitation</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transition-opacity" />
            </button>

            <a
              href="#occasions"
              className="text-[12px] uppercase tracking-[0.15em] font-medium text-kanverse-text border-b border-kanverse-text/30 pb-0.5 hover:border-kanverse-text transition-colors duration-300"
            >
              See Our Work
            </a>
          </motion.div>
        </div>

        {/* Right: Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.25, 1, 0.5, 1] }}
          className="lg:col-span-5 flex justify-center lg:justify-end"
        >
          <div className="relative w-full max-w-md aspect-[3/4] group">
            <div className="absolute inset-0 border border-kanverse-border" />
            <div className="absolute inset-3 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=85&w=1000"
                alt="Wedding celebration"
                className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-[1.5s] ease-out"
              />
            </div>
            {/* Minimal caption */}
            <div className="absolute -bottom-8 left-3 right-3 flex justify-between items-center">
              <span className="text-[11px] text-kanverse-muted">
                Priya & Arjun — Mumbai, 2025
              </span>
              <span className="text-[11px] text-kanverse-subtle">
                Wedding
              </span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="pt-20 flex items-center gap-3 text-kanverse-muted"
      >
        <ArrowDown className="w-3.5 h-3.5 animate-[bounce_2.5s_ease-in-out_infinite]" />
        <span className="text-[11px] uppercase tracking-[0.15em]">Scroll</span>
      </motion.div>
    </section>
  );
}
