"use client";

import { motion } from "framer-motion";

const COLLECTIONS = [
  {
    name: "Weddings",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=900",
    size: "large",
  },
  {
    name: "Birthdays",
    image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&q=80&w=900",
    size: "large",
  },
  {
    name: "Anniversaries",
    image: "https://images.unsplash.com/photo-1529636798458-92182e662485?auto=format&fit=crop&q=80&w=600",
    size: "small",
  },
  {
    name: "Baby Showers",
    image: "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?auto=format&fit=crop&q=80&w=600",
    size: "small",
  },
  {
    name: "Housewarming",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=600",
    size: "small",
  },
  {
    name: "Proposals",
    image: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&q=80&w=600",
    size: "small",
  },
];

export default function FeaturedCollections() {
  const large = COLLECTIONS.filter((c) => c.size === "large");
  const small = COLLECTIONS.filter((c) => c.size === "small");

  return (
    <section id="occasions" className="py-28 lg:py-40 px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto">
      {/* Header — different pattern from hero, no kicker line */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
        className="mb-16 lg:mb-20 max-w-3xl"
      >
        <h2 className="font-serif text-[32px] sm:text-[40px] lg:text-[52px] text-kanverse-text leading-[1.1] tracking-[-0.015em] mb-5">
          Browse by occasion
        </h2>
        <p className="text-[15px] text-kanverse-muted leading-[1.7] max-w-lg">
          Each collection is designed around the details that make your event unique — from tone and typography to colour and rhythm.
        </p>
      </motion.div>

      {/* Top Row: 2 Large */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 lg:gap-4 mb-3 lg:mb-4">
        {large.map((c, idx) => (
          <motion.a
            key={c.name}
            href="#"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: idx * 0.1, ease: [0.25, 1, 0.5, 1] }}
            className="group relative aspect-[3/2] overflow-hidden bg-kanverse-card block"
          >
            <img
              src={c.image}
              alt={c.name}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-[1.2s] ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/5 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8 flex items-end justify-between">
              <span className="font-serif text-2xl sm:text-3xl text-white">
                {c.name}
              </span>
              <span className="text-[11px] uppercase tracking-[0.12em] text-white/0 group-hover:text-white/70 transition-colors duration-500">
                View →
              </span>
            </div>
          </motion.a>
        ))}
      </div>

      {/* Bottom Row: 4 Small */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4">
        {small.map((c, idx) => (
          <motion.a
            key={c.name}
            href="#"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.7, delay: idx * 0.08, ease: [0.25, 1, 0.5, 1] }}
            className="group relative aspect-[3/4] overflow-hidden bg-kanverse-card block"
          >
            <img
              src={c.image}
              alt={c.name}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-[1.2s] ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/5 to-transparent" />
            <div className="absolute bottom-0 left-0 p-5 lg:p-6">
              <span className="font-serif text-lg sm:text-xl text-white">
                {c.name}
              </span>
            </div>
          </motion.a>
        ))}
      </div>

      {/* Additional occasions — simple text, not a card */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 text-[13px] text-kanverse-muted"
      >
        <span>Also available:</span>
        {["Corporate Events", "Custom Celebrations"].map((name) => (
          <a
            key={name}
            href="#"
            className="border-b border-kanverse-border hover:border-kanverse-text hover:text-kanverse-text transition-colors duration-300 pb-0.5"
          >
            {name}
          </a>
        ))}
      </motion.div>
    </section>
  );
}
