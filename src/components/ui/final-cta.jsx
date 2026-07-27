"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Smartphone, HeartHandshake } from "lucide-react";

export default function FinalCta({ onInquiryClick }) {
  const scrollToCollections = (e) => {
    e.preventDefault();
    const element = document.getElementById("collections");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1], // premium custom easing
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section className="w-full bg-[#FAFAFA] md:bg-white py-24 md:py-32 px-6 relative overflow-hidden flex justify-center border-t border-black/5">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-3xl w-full flex flex-col items-center text-center relative z-10"
      >
        <motion.span variants={itemVariants} className="text-[11px] uppercase tracking-[0.2em] font-medium text-[#166534] mb-6">
          Ready to Begin?
        </motion.span>
        
        <motion.h2 variants={itemVariants} className="font-serif text-4xl md:text-5xl lg:text-6xl tracking-tighter text-black mb-6 md:mb-8 leading-[1.1]">
          Let's Create Something They'll Never Forget.
        </motion.h2>
        
        <motion.p variants={itemVariants} className="text-sm md:text-base text-black/60 max-w-2xl leading-relaxed mb-10 md:mb-12 font-sans">
          Whether you're planning a wedding, celebrating a birthday, launching a special event, or bringing a completely unique idea to life, KANVERSE is here to transform your vision into a beautiful digital experience. Let's create something meaningful together.
        </motion.p>
        
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-6 sm:gap-10 mb-16">
          {/* Primary Button */}
          <button
            onClick={onInquiryClick}
            className="px-8 py-4 bg-[#166534] text-white text-[12px] uppercase tracking-[0.15em] hover:bg-[#114d27] transition-colors duration-500 w-full sm:w-auto"
          >
            Start Your Project
          </button>
          
          {/* Secondary Text Link */}
          <button
            onClick={scrollToCollections}
            className="group relative overflow-hidden pb-1 text-[12px] uppercase tracking-[0.15em] text-black w-full sm:w-auto"
          >
            <span className="relative z-10">Explore Our Collections</span>
            <span className="absolute bottom-0 left-0 w-full h-[1px] bg-black/30 origin-left scale-x-100 group-hover:scale-x-0 transition-transform duration-700 ease-[0.16,1,0.3,1]" />
            <span className="absolute bottom-0 left-0 w-full h-[1px] bg-black origin-right scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-[0.16,1,0.3,1] delay-100" />
          </button>
        </motion.div>
        
        {/* Trust Points */}
        <motion.div variants={itemVariants} className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 w-full pt-10 md:pt-12 border-t border-black/5">
          <div className="flex items-center gap-3">
            <Sparkles strokeWidth={1.5} size={16} className="text-[#166534]" />
            <span className="text-[12px] md:text-sm text-black/70">Personalized for Every Occasion</span>
          </div>
          <div className="flex items-center gap-3">
            <Smartphone strokeWidth={1.5} size={16} className="text-[#166534]" />
            <span className="text-[12px] md:text-sm text-black/70">Mobile-First Experience</span>
          </div>
          <div className="flex items-center gap-3">
            <HeartHandshake strokeWidth={1.5} size={16} className="text-[#166534]" />
            <span className="text-[12px] md:text-sm text-black/70">Dedicated Support Throughout</span>
          </div>
        </motion.div>

      </motion.div>
    </section>
  );
}
