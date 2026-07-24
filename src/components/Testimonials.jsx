"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const TESTIMONIALS = [
  {
    quote:
      "We didn't want a PDF invite or a WhatsApp forward. Kanverse gave us a proper website — with our photos, our story, our music. Our families couldn't stop talking about it.",
    name: "Priya & Arjun Mehta",
    detail: "Wedding · Mumbai, 2025",
    image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&q=80&w=600",
  },
  {
    quote:
      "I'm a designer myself, and I was impressed. The typography, the layout, the way our photos were placed — it felt like someone actually spent time on it. Because they did.",
    name: "Sarah Chen",
    detail: "Anniversary · Singapore, 2025",
    image: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&q=80&w=600",
  },
  {
    quote:
      "Our guests kept asking us who designed the invitation. Some of them thought we'd hired an agency. It was just Kanverse — and it was ready in two days.",
    name: "Neha & Rohan Kapoor",
    detail: "Baby Shower · Delhi, 2026",
    image: "https://images.unsplash.com/photo-1492725764893-90b379c2b6e7?auto=format&fit=crop&q=80&w=600",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const testimonial = TESTIMONIALS[current];

  const next = () => setCurrent((p) => (p + 1) % TESTIMONIALS.length);
  const prev = () => setCurrent((p) => (p - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);

  return (
    <section id="review" className="py-28 lg:py-40 px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto border-t border-kanverse-border">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
        {/* Left: Quote */}
        <div className="lg:col-span-7">
          <p className="text-[13px] uppercase tracking-[0.15em] text-kanverse-muted mb-10">
            From our clients
          </p>

          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
            >
              <blockquote className="font-serif text-[22px] sm:text-[26px] lg:text-[30px] text-kanverse-text leading-[1.35] tracking-[-0.01em] mb-8">
                "{testimonial.quote}"
              </blockquote>

              <div>
                <span className="text-[14px] font-medium text-kanverse-text block">
                  {testimonial.name}
                </span>
                <span className="text-[13px] text-kanverse-muted">
                  {testimonial.detail}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center gap-3 mt-10">
            <button
              onClick={prev}
              className="w-9 h-9 border border-kanverse-border flex items-center justify-center hover:border-kanverse-text transition-colors text-kanverse-muted hover:text-kanverse-text text-sm"
              aria-label="Previous"
            >
              ←
            </button>
            <span className="text-[12px] text-kanverse-subtle tabular-nums">
              {current + 1} / {TESTIMONIALS.length}
            </span>
            <button
              onClick={next}
              className="w-9 h-9 border border-kanverse-border flex items-center justify-center hover:border-kanverse-text transition-colors text-kanverse-muted hover:text-kanverse-text text-sm"
              aria-label="Next"
            >
              →
            </button>
          </div>
        </div>

        {/* Right: Photo */}
        <div className="lg:col-span-5">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="aspect-[4/5] overflow-hidden"
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-full h-full object-cover"
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
