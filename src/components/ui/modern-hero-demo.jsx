"use client";

import React from 'react';
import { HeroCollage } from '@/components/ui/modern-hero-section';

export default function HeroCollageDemo() {
  const stats = [
    { value: '120+', label: 'Completed Experiences' },
    { value: '100%', label: 'Mobile Optimized' },
    { value: '48 Hours', label: 'Average Delivery' },
    { value: 'Unlimited', label: 'Creative Possibilities' },
  ];

  const unsplashImages = [
    // Central Image: Wedding
    'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&q=80',
    // Top-Left: Birthday
    'https://images.unsplash.com/photo-1558636508-e0db3814bd1d?w=500&q=80',
    // Top-Right: Anniversary
    'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=500&q=80',
    // Bottom-Right: Proposal
    'https://images.unsplash.com/photo-1518599904199-0ca897819ddb?w=600&q=80',
    // Far-Right: Baby Shower
    'https://images.unsplash.com/photo-1519689680058-324335c77eba?w=500&q=80',
    // Bottom-Left: Engagement
    'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=500&q=80',
    // Far-Left: Custom Experience
    'https://images.unsplash.com/photo-1516961642265-531546e84af2?w=500&q=80',
  ];

  return (
    <div className="w-full relative z-20 bg-white">
      <HeroCollage
        title={
          <>
            Crafted for <span className="text-[#166534]">Moments That Matter.</span>
          </>
        }
        subtitle="Thoughtfully designed digital experiences for weddings, birthdays, and every celebration in between. We create stunning websites that leave a lasting impression on every guest."
        stats={stats}
        images={unsplashImages}
      />
    </div>
  );
}
