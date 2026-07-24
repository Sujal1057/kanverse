"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function FinalCTA({ onStartProject }) {
  return (
    <section className="bg-kanverse-text">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-28 lg:py-40 text-center"
      >
        <h2 className="font-serif text-[32px] sm:text-[44px] lg:text-[56px] text-[#FAF9F5] leading-[1.1] tracking-[-0.015em] mb-6 max-w-3xl mx-auto">
          Your guests deserve more than a group chat forward.
        </h2>

        <p className="text-[15px] text-[#FAF9F5]/50 leading-[1.7] max-w-md mx-auto mb-10">
          Start with a collection, choose a template, and we'll handle the rest.
        </p>

        <button
          onClick={onStartProject}
          className="group inline-flex items-center gap-2.5 px-8 py-4 bg-[#FAF9F5] text-kanverse-text text-[12px] uppercase tracking-[0.15em] font-medium hover:bg-[#F0EDE5] transition-colors duration-300"
        >
          <span>Begin Your Invitation</span>
          <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transition-opacity" />
        </button>
      </motion.div>
    </section>
  );
}
