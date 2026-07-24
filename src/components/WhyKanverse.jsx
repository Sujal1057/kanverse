"use client";

import { motion } from "framer-motion";

const VALUES = [
  {
    title: "Designed by hand",
    body: "No drag-and-drop builders. Every invitation is composed from scratch — the layout, the type, the spacing — by a designer who cares about the details.",
  },
  {
    title: "Built around your story",
    body: "Your photos, your words, your timeline. We don't drop content into a generic frame. The design grows from what makes your celebration yours.",
  },
  {
    title: "Beautiful on every screen",
    body: "From a desktop at work to a phone in bed at midnight — your invitation looks intentional everywhere it's opened.",
  },
  {
    title: "Ready in 48 hours",
    body: "Once you've shared your details, our team gets to work. Most invitation websites are live and ready to share within two days.",
  },
  {
    title: "Private and secure",
    body: "Your photos, guest list, and personal details are encrypted and never shared. Your celebration stays between you and your guests.",
  },
];

export default function WhyKanverse() {
  return (
    <section
      id="experience"
      className="py-28 lg:py-40 px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto border-t border-kanverse-border"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
        {/* Left: Image — sticky on scroll */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9 }}
          className="lg:col-span-5 lg:sticky lg:top-28 lg:self-start"
        >
          <div className="aspect-[3/4] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1606216794074-735e91aa2c92?auto=format&fit=crop&q=80&w=800"
              alt="Design process at Kanverse"
              className="w-full h-full object-cover"
            />
          </div>
          <p className="mt-4 text-[12px] text-kanverse-subtle italic">
            Every project begins with understanding the people behind the celebration.
          </p>
        </motion.div>

        {/* Right: Content */}
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="mb-14 lg:mb-20"
          >
            <p className="text-[13px] uppercase tracking-[0.15em] text-kanverse-muted mb-5">
              Why Kanverse
            </p>
            <h2 className="font-serif text-[32px] sm:text-[40px] lg:text-[48px] text-kanverse-text leading-[1.1] tracking-[-0.015em]">
              We don't sell templates.
              <br />
              We design invitations.
            </h2>
          </motion.div>

          <div className="space-y-0">
            {VALUES.map((value, idx) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: idx * 0.06 }}
                className="py-7 lg:py-9 border-b border-kanverse-border last:border-b-0"
              >
                <h3 className="font-serif text-[20px] lg:text-[22px] text-kanverse-text leading-snug mb-2">
                  {value.title}
                </h3>
                <p className="text-[14px] text-kanverse-muted leading-[1.7] max-w-lg">
                  {value.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
