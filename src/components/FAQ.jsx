"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FAQ_ITEMS = [
  {
    q: "What does a Kanverse invitation cost?",
    a: "Invitation websites start at ₹2,999. The final price depends on which template you choose and which add-ons you include. There are no hidden charges — you see the total before you pay.",
  },
  {
    q: "How long does it take?",
    a: "Most invitations are delivered within 48 hours after you submit your details. If you need it sooner, our Priority Delivery option guarantees a 24-hour turnaround.",
  },
  {
    q: "Can you design something completely custom?",
    a: "Yes. If none of our templates fit what you're looking for, we offer bespoke commissions — designed from scratch around your vision, your palette, and your story.",
  },
  {
    q: "Where is my invitation hosted?",
    a: "We host every invitation on fast, reliable infrastructure with a global CDN. Your website loads quickly regardless of where your guests are. Hosting is included for one year.",
  },
  {
    q: "Can I use my own domain name?",
    a: "Absolutely. With the Custom Domain add-on, you can use something like priya-and-arjun.com instead of a Kanverse subdomain.",
  },
  {
    q: "What if I need changes after delivery?",
    a: "We include complimentary revisions within 7 days of delivery. After that, our support team is available via email and WhatsApp for any adjustments you need.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (idx) => setOpenIndex((prev) => (prev === idx ? null : idx));

  return (
    <section className="py-28 lg:py-40 px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto border-t border-kanverse-border">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
        {/* Left: Heading */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-4 lg:sticky lg:top-28 lg:self-start"
        >
          <h2 className="font-serif text-[32px] sm:text-[40px] lg:text-[44px] text-kanverse-text leading-[1.1] tracking-[-0.015em] mb-4">
            Common questions
          </h2>
          <p className="text-[14px] text-kanverse-muted leading-[1.7]">
            If something isn't covered here, reach out — we're happy to help.
          </p>
        </motion.div>

        {/* Right: Accordion */}
        <div className="lg:col-span-8">
          {FAQ_ITEMS.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5, delay: idx * 0.04 }}
              className="border-b border-kanverse-border"
            >
              <button
                onClick={() => toggle(idx)}
                className="w-full py-6 lg:py-7 flex items-start justify-between gap-6 text-left group"
                aria-expanded={openIndex === idx}
              >
                <span className="text-[16px] lg:text-[17px] font-medium text-kanverse-text pr-4 leading-snug">
                  {item.q}
                </span>
                <span className="shrink-0 w-5 h-5 flex items-center justify-center text-kanverse-muted text-lg mt-0.5">
                  {openIndex === idx ? "−" : "+"}
                </span>
              </button>

              <AnimatePresence initial={false}>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="pb-7 text-[14px] text-kanverse-muted leading-[1.7] max-w-xl pr-10">
                      {item.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
