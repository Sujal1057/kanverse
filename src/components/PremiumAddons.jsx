"use client";

import { motion } from "framer-motion";

const ADDONS = [
  { name: "RSVP Management", body: "Guests reply directly from your invitation. You see responses in real time." },
  { name: "Countdown Timer", body: "A quiet, elegant timer that builds anticipation as the day approaches." },
  { name: "Photo Gallery", body: "Upload your favourite photos and display them in a curated layout." },
  { name: "Video Invitation", body: "Add a short video that plays when your guests open the invitation." },
  { name: "QR Code", body: "A scannable code for print materials — menus, save-the-dates, table cards." },
  { name: "Custom Domain", body: "Host your invitation on your own web address, like priya-and-arjun.com." },
  { name: "Priority Delivery", body: "Need it faster? Get your finished invitation within 24 hours." },
  { name: "Guest Analytics", body: "See who opened your invitation, when, and whether they've replied." },
  { name: "Guest List", body: "Manage names, meal preferences, plus-ones, and seating — all in one place." },
];

export default function PremiumAddons() {
  return (
    <section className="py-28 lg:py-40 px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto border-t border-kanverse-border">
      {/* Header — left-aligned, no kicker */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7 }}
        className="mb-16 lg:mb-20 grid grid-cols-1 lg:grid-cols-2 gap-4"
      >
        <h2 className="font-serif text-[32px] sm:text-[40px] lg:text-[48px] text-kanverse-text leading-[1.1] tracking-[-0.015em]">
          Make it yours
        </h2>
        <p className="text-[15px] text-kanverse-muted leading-[1.7] lg:pt-3 max-w-md">
          Every invitation comes with the essentials. These add-ons let you go further.
        </p>
      </motion.div>

      {/* Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
      >
        {ADDONS.map((addon, idx) => (
          <motion.div
            key={addon.name}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.5, delay: idx * 0.04 }}
            className="group py-8 lg:py-10 pr-8 border-b border-kanverse-border sm:[&:nth-child(2n)]:pl-8 lg:[&:nth-child(2n)]:pl-0 lg:[&:nth-child(3n-1)]:px-8 lg:[&:nth-child(3n)]:pl-8"
          >
            <h3 className="text-[16px] font-medium text-kanverse-text mb-2">
              {addon.name}
            </h3>
            <p className="text-[13px] text-kanverse-muted leading-[1.7]">
              {addon.body}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
