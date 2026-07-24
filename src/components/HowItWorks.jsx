"use client";

import { motion } from "framer-motion";

const STEPS = [
  {
    title: "Pick a collection",
    body: "Browse occasions — weddings, birthdays, anniversaries — and find the collection that fits your celebration.",
  },
  {
    title: "Choose your template",
    body: "Select a design from our curated library. Each template has its own personality, typography, and colour palette.",
  },
  {
    title: "Make it yours",
    body: "Add your photos, your story, your event details. Change colours, update text, upload videos — it's your invitation.",
  },
  {
    title: "Add what you need",
    body: "RSVP tracking, countdown timers, photo galleries, custom domains — pick the extras that matter to you.",
  },
  {
    title: "Review and pay",
    body: "Preview your invitation, make final adjustments, and check out securely. No hidden fees.",
  },
  {
    title: "We finish the rest",
    body: "Our design team reviews everything, polishes the details, and delivers your invitation website — usually within 48 hours.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-28 lg:py-40 px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto border-t border-kanverse-border">
      {/* Header — centered, simple */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7 }}
        className="text-center max-w-xl mx-auto mb-20 lg:mb-28"
      >
        <h2 className="font-serif text-[32px] sm:text-[40px] lg:text-[48px] text-kanverse-text leading-[1.1] tracking-[-0.015em] mb-5">
          How it works
        </h2>
        <p className="text-[15px] text-kanverse-muted leading-[1.7]">
          Six steps from idea to a finished invitation website your guests will remember.
        </p>
      </motion.div>

      {/* Steps — clean numbered list, no zigzag gimmick */}
      <div className="max-w-3xl mx-auto">
        {STEPS.map((step, idx) => (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: idx * 0.05 }}
            className="grid grid-cols-[40px_1fr] gap-6 py-8 lg:py-10 border-b border-kanverse-border last:border-b-0"
          >
            {/* Step Number */}
            <span className="font-serif text-[28px] lg:text-[32px] text-kanverse-border leading-none pt-0.5">
              {idx + 1}
            </span>

            {/* Content */}
            <div>
              <h3 className="font-serif text-[19px] lg:text-[21px] text-kanverse-text leading-snug mb-1.5">
                {step.title}
              </h3>
              <p className="text-[14px] text-kanverse-muted leading-[1.7]">
                {step.body}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
