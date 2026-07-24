"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useState } from "react";

export default function InquiryModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    occasion: "Wedding",
    date: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 3000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-kanverse-text/30"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.35, ease: [0.25, 1, 0.5, 1] }}
            className="relative w-full max-w-xl bg-kanverse-bg border border-kanverse-border p-8 sm:p-10 z-10"
          >
            <button
              onClick={onClose}
              className="absolute top-5 right-5 p-1.5 text-kanverse-muted hover:text-kanverse-text transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-7">
                <div>
                  <h3 className="font-serif text-[24px] sm:text-[28px] text-kanverse-text leading-snug mb-2">
                    Tell us about your celebration
                  </h3>
                  <p className="text-[13px] text-kanverse-muted leading-[1.6]">
                    Share a few details and we'll get back to you within a day.
                  </p>
                </div>

                <div className="space-y-5">
                  <div>
                    <label className="block text-[12px] text-kanverse-muted mb-1.5">
                      Your name
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="First and last name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-transparent border-b border-kanverse-border py-2 text-[14px] text-kanverse-text focus:outline-none focus:border-kanverse-text transition-colors placeholder:text-kanverse-subtle"
                    />
                  </div>

                  <div>
                    <label className="block text-[12px] text-kanverse-muted mb-1.5">
                      Email
                    </label>
                    <input
                      required
                      type="email"
                      placeholder="you@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-transparent border-b border-kanverse-border py-2 text-[14px] text-kanverse-text focus:outline-none focus:border-kanverse-text transition-colors placeholder:text-kanverse-subtle"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-[12px] text-kanverse-muted mb-1.5">
                        Occasion
                      </label>
                      <select
                        value={formData.occasion}
                        onChange={(e) => setFormData({ ...formData, occasion: e.target.value })}
                        className="w-full bg-transparent border-b border-kanverse-border py-2 text-[14px] text-kanverse-text focus:outline-none focus:border-kanverse-text transition-colors"
                      >
                        <option value="Wedding">Wedding</option>
                        <option value="Birthday">Birthday</option>
                        <option value="Anniversary">Anniversary</option>
                        <option value="Baby Shower">Baby Shower</option>
                        <option value="Housewarming">Housewarming</option>
                        <option value="Other">Something else</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[12px] text-kanverse-muted mb-1.5">
                        When is the event?
                      </label>
                      <input
                        type="text"
                        placeholder="Approximate date"
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        className="w-full bg-transparent border-b border-kanverse-border py-2 text-[14px] text-kanverse-text focus:outline-none focus:border-kanverse-text transition-colors placeholder:text-kanverse-subtle"
                      />
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto px-7 py-3.5 bg-kanverse-text text-[#FAF9F5] text-[12px] uppercase tracking-[0.15em] font-medium hover:bg-kanverse-accent transition-colors duration-300"
                >
                  Send Request
                </button>
              </form>
            ) : (
              <div className="py-10 text-center space-y-3">
                <h4 className="font-serif text-[24px] text-kanverse-text">
                  Thank you, {formData.name || "friend"}.
                </h4>
                <p className="text-[13px] text-kanverse-muted leading-[1.6]">
                  We'll review your details and reach out within 24 hours.
                </p>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
