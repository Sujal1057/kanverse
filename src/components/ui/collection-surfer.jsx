"use client";

import React, { useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionValue,
  useMotionValueEvent,
  AnimatePresence
} from "framer-motion";

const ITEMS = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800",
    title: "The Genesis",
    description: "Where every beautiful story begins. Our signature collection crafted for unforgettable moments.",
    category: "WEDDING",
    count: "24",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?auto=format&fit=crop&q=80&w=800",
    title: "Golden Hour",
    description: "Bathed in warm, natural light. Perfect for evening celebrations and intimate gatherings.",
    category: "ANNIVERSARY",
    count: "18",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=800",
    title: "Midnight Blue",
    description: "Deep, moody, and deeply romantic. A sophisticated aesthetic for modern romance.",
    category: "ENGAGEMENT",
    count: "32",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&q=80&w=800",
    title: "Wildflower",
    description: "Organic, free-flowing, and deeply connected to nature's untamed beauty.",
    category: "BIRTHDAY",
    count: "12",
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&q=80&w=800",
    title: "Classic Canvas",
    description: "Timeless minimalism that lets your celebration speak for itself.",
    category: "BRIDAL",
    count: "40",
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800",
    title: "Velvet Rose",
    description: "Rich textures and passionate hues for bold, unforgettable celebrations.",
    category: "WEDDING",
    count: "28",
  },
  {
    id: 7,
    image: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?auto=format&fit=crop&q=80&w=800",
    title: "Ocean Breeze",
    description: "Light, airy, and effortlessly elegant. Designed for destination celebrations.",
    category: "HONEYMOON",
    count: "16",
  },
  {
    id: 8,
    image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=800",
    title: "Ethereal Glow",
    description: "Soft focus, dreamlike aesthetics for a truly magical atmosphere.",
    category: "WEDDING",
    count: "36",
  }
];

export default function CollectionSurfer({
  items = ITEMS,
  variant = "magnetic",
}) {
  const containerRef = useRef(null);
  const duplicatedItems = [...items, ...items];
  
  // We determine exactly how many pixels of scrolling we want per photo
  const scrollPerItem = 200;
  const loopDistance = items.length * scrollPerItem;

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    mass: 0.1,
    stiffness: 100,
    damping: 20,
  });

  const stepX = 240;
  const stepY = -84;
  const stepZ = -288;

  // Map the 0 -> 1 progress of the locked container exactly to the total transform distance
  const x = useTransform(smoothProgress, [0, 1], [0, -items.length * stepX]);
  const y = useTransform(smoothProgress, [0, 1], [0, -items.length * stepY]);
  const z = useTransform(smoothProgress, [0, 1], [0, -items.length * stepZ]);
  
  const [activeIndex, setActiveIndex] = useState(0);

  // Derive the active index dynamically based on the 0 -> 1 progress
  useMotionValueEvent(smoothProgress, "change", (latest) => {
    let index = Math.floor(latest * items.length);
    if (index >= items.length) index = items.length - 1;
    if (index < 0) index = 0;
    setActiveIndex(index);
  });
  
  const activeItem = items[activeIndex] || items[0];

  const mouseX = useMotionValue(-10000);
  const mouseY = useMotionValue(-10000);

  const handleMouseMove = (e) => {
    if (variant === "simple") return;
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);
  };

  const handleMouseLeave = () => {
    if (variant === "simple") return;
    mouseX.set(-10000);
    mouseY.set(-10000);
  };

  return (
    <div ref={containerRef} className="relative w-full" style={{ height: `calc(${loopDistance}px + 100vh)` }}>
      <div 
        className="sticky top-[20vh] md:top-[10vh] w-full h-[60vh] md:h-[80vh] overflow-hidden flex items-center justify-center perspective-container z-10 bg-[#1A1918] text-white rounded-3xl shadow-2xl"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
      {/* Synchronized Left-Side Content */}
      <div className="absolute top-[8vw] md:top-[4vw] left-[6vw] md:left-[4vw] z-50 pointer-events-none w-full max-w-xl pr-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeItem.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <div className="flex items-center gap-4 mb-4">
                <span className="font-sans text-[10px] md:text-xs tracking-[0.2em] uppercase border border-white/20 px-3 py-1 rounded-full backdrop-blur-md bg-white/5 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#166534]" />
                  {activeItem.category}
                </span>
                <span className="font-sans text-[10px] md:text-xs tracking-widest text-white/50">
                  {String(activeIndex + 1).padStart(2, '0')} / {String(items.length).padStart(2, '0')}
                </span>
              </div>
              
              <h2 className="font-serif font-bold text-[clamp(2.5rem,5vw,5rem)] leading-[0.9] tracking-tighter mb-6 mix-blend-difference text-white">
                {activeItem.title}
              </h2>
              
              <p className="font-sans text-sm md:text-base leading-relaxed text-white/70 max-w-md mix-blend-difference">
                {activeItem.description}
              </p>
              
              <div className="mt-8">
                <span className="font-serif italic text-xl md:text-2xl text-white/90">
                  {activeItem.count}
                </span>
                <span className="font-sans text-xs tracking-widest uppercase text-white/50 ml-3">
                  Templates
                </span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="absolute bottom-[3vw] right-[3vw] z-50 font-sans text-xs tracking-wider uppercase text-[#166534] opacity-90">
          scroll to surf
        </div>

        <div className="absolute inset-0 overflow-hidden rounded-3xl" style={{ clipPath: "inset(0 round 1.5rem)" }}>
          <div
            className="absolute inset-0 flex items-center justify-center"
            style={{
              perspective: "2000px",
              perspectiveOrigin: "10% 10%",
            }}
          >
          <motion.div
            className="relative w-0 h-0"
            style={{
              x,
              y,
              z,
              transformStyle: "preserve-3d",
            }}
          >
            {duplicatedItems.map((item, i) => (
              <Card
                key={`${item.id}-${i}`}
                item={item}
                i={i}
                stepX={stepX}
                stepY={stepY}
                stepZ={stepZ}
                mouseX={mouseX}
                mouseY={mouseY}
                scrollSpring={smoothProgress}
                variant={variant}
                totalItems={items.length}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
    </div>
  );
}

function Card({
  item,
  i,
  stepX,
  stepY,
  stepZ,
  mouseX,
  mouseY,
  scrollSpring,
  variant,
  totalItems
}) {
  const ref = useRef(null);

  const distance = useTransform([mouseX, mouseY, scrollSpring], ([x, y]) => {
    if (!ref.current || variant === "simple") return 200;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const dist = Math.sqrt(Math.pow(x - centerX, 2) + Math.pow(y - centerY, 2));
    return dist;
  });

  const targetScale = useTransform(distance, [0, 400], [1.5, 1]);
  const springScale = useSpring(targetScale, {
    mass: 0.5,
    stiffness: 300,
    damping: 20,
  });

  const targetUplift = useTransform(distance, [0, 400], [-100, 0]);
  const springUplift = useSpring(targetUplift, {
    mass: 0.5,
    stiffness: 300,
    damping: 20,
  });

  const transform = useTransform([springScale, springUplift], ([s, u]) => {
    let scaleValue = 1;
    let upliftValue = 0;

    if (variant === "magnetic") {
      scaleValue = Number(s);
    } else if (variant === "uplift") {
      upliftValue = Number(u);
    }

    const baseX = i * stepX;
    const baseY = i * stepY;
    const baseZ = i * stepZ;

    return `translate3d(${baseX}px, ${baseY + upliftValue}px, ${baseZ}px) rotateY(-50deg) scale(${scaleValue})`;
  });

  return (
    <motion.div
      ref={ref}
      className="absolute w-[240px] md:w-[300px] h-[320px] md:h-[400px] bg-neutral-900 overflow-hidden shadow-2xl transition-colors duration-500 ease-out group"
      style={{
        transform,
        transformStyle: "preserve-3d",
      }}
    >
      <div className="absolute -top-6 -left-4 text-white font-sans text-xs opacity-50 transition-opacity group-hover:opacity-100">
        {String((i % totalItems) + 1).padStart(2, "0")}
      </div>

      <div className="relative w-full h-full brightness-75 group-hover:brightness-100 transition-all duration-300">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent pointer-events-none" />
    </motion.div>
  );
}
