"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const FAQ_DATA = [
  {
    question: "Why should I choose a digital invitation website instead of a traditional invitation?",
    answer: "A digital invitation creates a memorable experience. It lets your guests explore your celebration through photos, music, event details, maps, countdowns, and RSVP—all in one beautifully designed website."
  },
  {
    question: "Will my invitation look unique, or will it feel like everyone else's?",
    answer: "Every KANVERSE invitation is thoughtfully crafted with premium layouts and personalization options to ensure your celebration has its own identity."
  },
  {
    question: "Is it difficult to customize my invitation?",
    answer: "Not at all. Simply share your details, photos, and preferences—we'll take care of everything and deliver a polished invitation that's ready to share."
  },
  {
    question: "Can I see my invitation before it's finalized?",
    answer: "Yes. You'll receive a preview and can request changes before the final version is delivered, so you're completely satisfied."
  },
  {
    question: "What if I need changes after delivery?",
    answer: "We understand plans change. Minor updates to event details can be accommodated based on your selected package."
  },
  {
    question: "Will my invitation work for all guests?",
    answer: "Yes. Every invitation is optimized for mobile, tablet, and desktop, so your guests can access it easily from any device."
  },
  {
    question: "How quickly will my invitation be ready?",
    answer: "Delivery depends on the design and customization level, but we always aim to deliver as quickly as possible without compromising quality."
  },
  {
    question: "Is my personal information and event data secure?",
    answer: "Absolutely. Your photos, names, and event details are handled with care and used only for creating your invitation."
  },
  {
    question: "What if I don't find a design I love?",
    answer: "No problem. We also create fully custom invitation websites tailored to your vision, style, and celebration."
  },
  {
    question: "Why do customers choose KANVERSE?",
    answer: "Because we focus on creating memorable digital experiences—not just invitation pages. Every website is designed with attention to detail, smooth interactions, elegant typography, and a premium user experience that leaves a lasting impression on your guests."
  }
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? -1 : index));
  };

  return (
    <section className="py-24 md:py-32 px-6 md:px-12 w-full bg-white text-black relative">
      {/* Decorative Top Line */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-black/10" />
      
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row">
        
        {/* Left Side: Header & Intro */}
        <div className="w-full md:w-1/3 flex flex-col items-start md:pr-16 md:border-r border-black/10 pt-8 md:pt-0 relative">
          {/* Subtle crosshair decorative element on desktop */}
          <div className="hidden md:block absolute top-0 -right-[4px] text-[#166534] text-xs leading-none select-none">+</div>
          <span className="font-sans text-[10px] md:text-xs tracking-[0.2em] uppercase border border-black/20 px-3 py-1 rounded-full mb-6 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#166534]" />
            FAQ
          </span>
          <h2 className="font-serif text-[clamp(2.5rem,4vw,3.5rem)] leading-[1] tracking-tighter mb-6">
            Answers &<br/> Assurances
          </h2>
          <p className="font-sans text-sm md:text-base leading-relaxed text-black/60 max-w-sm">
            Everything you need to know about creating a memorable digital experience for your celebration.
          </p>
        </div>

        {/* Right Side: Accordion */}
        <div className="w-full md:w-2/3 md:pl-16 mt-16 md:mt-0 border-t md:border-t-0 border-black/10">
          {FAQ_DATA.map((item, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div 
                key={idx} 
                className="border-b border-black/10 overflow-hidden"
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full py-8 flex items-center justify-between group focus:outline-none text-left"
                >
                  <h3 className={`font-serif text-lg md:text-xl transition-colors duration-500 ease-out pr-8 ${isOpen ? "text-[#166534]" : "text-black/60 group-hover:text-black"}`}>
                    {item.question}
                  </h3>
                  
                  <div className={`flex-shrink-0 relative w-5 h-5 flex items-center justify-center transition-colors duration-500 ${isOpen ? "text-[#166534]" : "text-black/50 group-hover:text-black"}`}>
                    <motion.div
                      initial={false}
                      animate={{ rotate: isOpen ? 180 : 0, opacity: isOpen ? 0 : 1 }}
                      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                      className="absolute inset-0 flex items-center justify-center"
                    >
                      <Plus size={20} strokeWidth={1.5} />
                    </motion.div>
                    
                    <motion.div
                      initial={false}
                      animate={{ rotate: isOpen ? 0 : -180, opacity: isOpen ? 1 : 0 }}
                      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                      className="absolute inset-0 flex items-center justify-center"
                    >
                      <Minus size={20} strokeWidth={1.5} />
                    </motion.div>
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ 
                        height: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
                        opacity: { duration: 0.4, ease: "linear", delay: 0.1 }
                      }}
                    >
                      <div className="pb-8 pr-12">
                        <p className="font-sans text-sm md:text-base leading-relaxed text-black/70">
                          {item.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
