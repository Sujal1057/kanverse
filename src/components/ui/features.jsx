"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Check, 
  Clock, 
  Calendar, 
  MapPin, 
  Camera, 
  Music, 
  Globe, 
  Smartphone, 
  Share2, 
  Lock, 
  Palette, 
  Sparkles 
} from "lucide-react";

const FEATURES_DATA = [
  {
    icon: Check,
    title: "RSVP",
    description: "Allow guests to confirm attendance instantly without phone calls."
  },
  {
    icon: Clock,
    title: "Countdown Timer",
    description: "Build excitement with a beautiful live countdown to your special day."
  },
  {
    icon: Calendar,
    title: "Event Timeline",
    description: "Display every celebration in the correct order—from Haldi to Reception."
  },
  {
    icon: MapPin,
    title: "Google Maps",
    description: "Help every guest reach the venue with one tap."
  },
  {
    icon: Camera,
    title: "Photo Gallery",
    description: "Share beautiful memories and moments in an elegant gallery."
  },
  {
    icon: Music,
    title: "Background Music",
    description: "Set the mood with carefully chosen music for your celebration."
  },
  {
    icon: Globe,
    title: "Custom Domain",
    description: "Use your own personalized website address for a premium experience."
  },
  {
    icon: Smartphone,
    title: "Mobile First",
    description: "Designed to look beautiful on every phone, tablet, and desktop."
  },
  {
    icon: Share2,
    title: "WhatsApp Sharing",
    description: "Share your invitation instantly with family and friends."
  },
  {
    icon: Lock,
    title: "Password Protection",
    description: "Keep your invitation private when needed."
  },
  {
    icon: Palette,
    title: "Personalized Design",
    description: "Customize colors, typography, photos, and event details to match your celebration."
  },
  {
    icon: Sparkles,
    title: "Premium Animations",
    description: "Elegant interactions and smooth motion create a memorable first impression."
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
      duration: 0.6
    }
  }
};

export default function FeaturesSection() {
  return (
    <section className="py-16 md:py-0 px-6 md:px-12 w-full bg-white text-black relative md:h-screen md:min-h-[700px] flex flex-col justify-center">
      {/* Top Architectural Line */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-black/10" />

      <div className="max-w-[90rem] w-full mx-auto">
        
        {/* Header Section (Left aligned, editorial style) */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 md:mb-16">
          <div className="w-full md:w-1/2">
            <span className="font-sans text-[10px] tracking-[0.2em] uppercase border border-black/20 px-3 py-1 rounded-full mb-6 inline-flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#166534]" />
              The Details
            </span>
            <h2 className="font-serif text-[clamp(2rem,4vw,4.5rem)] leading-[0.9] tracking-tighter">
              Everything you<br /> need.
            </h2>
          </div>
          <div className="w-full md:w-1/3 mt-8 md:mt-0 pb-2">
            <p className="font-sans text-sm md:text-base leading-relaxed text-black/60">
              Thoughtfully crafted to create a seamless experience for you and every guest—from the first click to the final celebration.
            </p>
          </div>
        </div>

        {/* Minimalist Editorial Grid - Flush Architectural Table */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 border-t border-l border-black/10"
        >
          {FEATURES_DATA.map((feature, idx) => {
            const Icon = feature.icon;
            const indexStr = String(idx + 1).padStart(2, '0');
            
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="group relative p-4 md:p-6 lg:p-8 border-b border-r border-black/10 flex flex-col justify-start lg:justify-center bg-white"
              >
                <div className="flex justify-between items-start mb-2 md:mb-3 lg:mb-4">
                  <span className="font-sans text-[9px] md:text-[10px] tracking-widest text-black/30 group-hover:text-[#166534] transition-colors duration-500">
                    {indexStr}
                  </span>
                  <Icon size={12} strokeWidth={1.5} className="text-black/30 group-hover:text-[#166534] transition-colors duration-500 w-3 h-3 md:w-4 md:h-4" />
                </div>
                
                <h3 className="font-serif text-base md:text-xl lg:text-2xl mb-1.5 md:mb-2 text-black group-hover:text-[#166534] transition-colors duration-500 leading-tight">
                  {feature.title}
                </h3>
                
                <p className="font-sans text-[10px] md:text-xs leading-snug md:leading-relaxed text-black/60 max-w-[95%]">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
