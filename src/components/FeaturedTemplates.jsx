"use client";

import { useRef } from "react";
import { motion } from "framer-motion";

const TEMPLATES = [
  {
    name: "Villa Florence",
    occasion: "Wedding",
    image: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&q=80&w=700",
  },
  {
    name: "Midnight Bloom",
    occasion: "Birthday",
    image: "https://images.unsplash.com/photo-1464349153735-7db50ed83c84?auto=format&fit=crop&q=80&w=700",
  },
  {
    name: "Golden Hour",
    occasion: "Anniversary",
    image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=700",
  },
  {
    name: "Little Wonder",
    occasion: "Baby Shower",
    image: "https://images.unsplash.com/photo-1544776193-65dc0fa4f960?auto=format&fit=crop&q=80&w=700",
  },
  {
    name: "Threshold",
    occasion: "Housewarming",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=700",
  },
];

export default function FeaturedTemplates() {
  const scrollRef = useRef(null);

  return (
    <section id="collections" className="py-28 lg:py-40 border-t border-kanverse-border">
      <div className="px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="mb-12 lg:mb-16 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4"
        >
          <h2 className="font-serif text-[32px] sm:text-[40px] lg:text-[48px] text-kanverse-text leading-[1.1] tracking-[-0.015em]">
            Featured templates
          </h2>
          <a
            href="#"
            className="text-[12px] uppercase tracking-[0.12em] text-kanverse-muted border-b border-kanverse-border hover:border-kanverse-text hover:text-kanverse-text transition-colors duration-300 pb-0.5 shrink-0"
          >
            View all
          </a>
        </motion.div>
      </div>

      {/* Carousel */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, delay: 0.1 }}
        ref={scrollRef}
        className="flex gap-4 lg:gap-5 overflow-x-auto snap-x snap-mandatory pl-6 sm:pl-10 lg:pl-16 pr-6 pb-4 scrollbar-hide"
      >
        {TEMPLATES.map((template, idx) => (
          <a
            key={template.name}
            href="#"
            className="group shrink-0 w-[260px] sm:w-[300px] lg:w-[340px] snap-start"
          >
            <div className="relative aspect-[3/4] overflow-hidden bg-kanverse-card mb-4">
              <img
                src={template.image}
                alt={`${template.name} — ${template.occasion}`}
                className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-[1.2s] ease-out"
              />
            </div>
            <div className="flex items-baseline justify-between">
              <div>
                <h3 className="font-serif text-[17px] text-kanverse-text leading-snug">
                  {template.name}
                </h3>
                <span className="text-[12px] text-kanverse-muted">
                  {template.occasion}
                </span>
              </div>
              <span className="text-[11px] text-kanverse-subtle opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Preview →
              </span>
            </div>
          </a>
        ))}
      </motion.div>
    </section>
  );
}
