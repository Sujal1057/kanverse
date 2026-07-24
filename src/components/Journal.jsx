"use client";

import { motion } from "framer-motion";

const ARTICLES = [
  {
    title: "What makes a great digital invitation",
    category: "Design",
    date: "July 2026",
    image: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&q=80&w=900",
    featured: true,
  },
  {
    title: "Planning a wedding that feels like you",
    category: "Weddings",
    date: "June 2026",
    image: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&q=80&w=600",
    featured: false,
  },
  {
    title: "Birthday invitations beyond the group chat",
    category: "Ideas",
    date: "May 2026",
    image: "https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&q=80&w=600",
    featured: false,
  },
];

export default function Journal() {
  const featured = ARTICLES.find((a) => a.featured);
  const secondary = ARTICLES.filter((a) => !a.featured);

  return (
    <section
      id="journal"
      className="py-28 lg:py-40 px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto border-t border-kanverse-border"
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7 }}
        className="mb-14 lg:mb-20 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4"
      >
        <h2 className="font-serif text-[32px] sm:text-[40px] lg:text-[48px] text-kanverse-text leading-[1.1] tracking-[-0.015em]">
          Journal
        </h2>
        <a
          href="#"
          className="text-[12px] uppercase tracking-[0.12em] text-kanverse-muted border-b border-kanverse-border hover:border-kanverse-text hover:text-kanverse-text transition-colors duration-300 pb-0.5 shrink-0"
        >
          All articles
        </a>
      </motion.div>

      {/* Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
        {/* Featured */}
        <motion.a
          href="#"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-7 group"
        >
          <div className="relative aspect-[16/10] overflow-hidden bg-kanverse-card mb-5">
            <img
              src={featured.image}
              alt={featured.title}
              className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-[1.2s] ease-out"
            />
          </div>
          <div className="flex items-center gap-3 mb-2">
            <span className="text-[12px] text-kanverse-muted">{featured.category}</span>
            <span className="text-[11px] text-kanverse-subtle">·</span>
            <span className="text-[12px] text-kanverse-subtle">{featured.date}</span>
          </div>
          <h3 className="font-serif text-[22px] lg:text-[26px] text-kanverse-text leading-snug">
            {featured.title}
          </h3>
        </motion.a>

        {/* Secondary */}
        <div className="lg:col-span-5 flex flex-col gap-8">
          {secondary.map((article, idx) => (
            <motion.a
              key={article.title}
              href="#"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: idx * 0.08 }}
              className="group flex gap-5"
            >
              <div className="shrink-0 w-28 sm:w-32 aspect-[4/3] overflow-hidden bg-kanverse-card">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-700 ease-out"
                />
              </div>
              <div className="pt-0.5">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="text-[11px] text-kanverse-muted">{article.category}</span>
                  <span className="text-[10px] text-kanverse-subtle">·</span>
                  <span className="text-[11px] text-kanverse-subtle">{article.date}</span>
                </div>
                <h3 className="font-serif text-[17px] text-kanverse-text leading-snug">
                  {article.title}
                </h3>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
