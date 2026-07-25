"use client";

import { forwardRef, useState, useEffect } from "react";
import Image from "next/image";
import { motion, useMotionValue } from "framer-motion";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export const PhotoGallery = ({ animationDelay = 0.5 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    // First make the container visible with a fade-in
    const visibilityTimer = setTimeout(() => {
      setIsVisible(true);
    }, animationDelay * 1000);

    // Then start the photo animations after a short delay
    const animationTimer = setTimeout(
      () => {
        setIsLoaded(true);
      },
      (animationDelay + 0.4) * 1000
    );

    return () => {
      clearTimeout(visibilityTimer);
      clearTimeout(animationTimer);
    };
  }, [animationDelay]);

  // Animation variants for the container
  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  // Animation variants for each photo
  const photoVariants = {
    hidden: () => ({
      x: 0,
      y: 0,
      rotate: 0,
      scale: 1,
    }),
    visible: (custom) => ({
      x: custom.x,
      y: custom.y,
      rotate: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 70,
        damping: 12,
        mass: 1,
        delay: custom.order * 0.15,
      },
    }),
  };

  // Wedding-themed photo positions — horizontal spread with organic y offsets
  const photos = [
    {
      id: 1,
      order: 0,
      x: isMobile ? "-110px" : "-320px",
      y: "15px",
      zIndex: 50,
      direction: "left",
      src: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=600",
    },
    {
      id: 2,
      order: 1,
      x: isMobile ? "-55px" : "-160px",
      y: "32px",
      zIndex: 40,
      direction: "left",
      src: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?auto=format&fit=crop&q=80&w=600",
    },
    {
      id: 3,
      order: 2,
      x: "0px",
      y: "8px",
      zIndex: 30,
      direction: "right",
      src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=600",
    },
    {
      id: 4,
      order: 3,
      x: isMobile ? "55px" : "160px",
      y: "22px",
      zIndex: 20,
      direction: "right",
      src: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&q=80&w=600",
    },
    {
      id: 5,
      order: 4,
      x: isMobile ? "110px" : "320px",
      y: "44px",
      zIndex: 10,
      direction: "left",
      src: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&q=80&w=600",
    },
  ];

  return (
    <motion.div 
      className="relative"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="absolute inset-0 max-md:hidden top-[200px] -z-10 h-[300px] w-full bg-transparent bg-[linear-gradient(to_right,black_1px,transparent_1px),linear-gradient(to_bottom,black_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-[0.06] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
      <p className="lg:text-md my-2 text-center text-xs font-light uppercase tracking-widest text-black/50">
        Crafted with intention, delivered with elegance
      </p>
      <h3 className="z-20 mx-auto max-w-4xl justify-center text-black py-2 text-center text-4xl font-serif tracking-tight md:text-5xl lg:text-6xl">
        Every Celebration Deserves a{" "}
        <span className="italic text-black/70">Beautiful Digital Experience.</span>
      </h3>
      <div className="relative mb-4 h-[320px] w-full items-center justify-center lg:flex">
        <motion.div
          className="relative mx-auto flex w-full max-w-7xl justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: isVisible ? 1 : 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <motion.div
            className="relative flex w-full justify-center"
            variants={containerVariants}
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
          >
            <div className="relative h-[220px] w-[220px]">
              {/* Render photos in reverse order so higher z-index photos are rendered later */}
              {[...photos].reverse().map((photo) => (
                <motion.div
                  key={photo.id}
                  className="absolute left-0 top-0"
                  style={{ zIndex: photo.zIndex }}
                  variants={photoVariants}
                  custom={{
                    x: photo.x,
                    y: photo.y,
                    order: photo.order,
                  }}
                >
                  <Photo
                    width={220}
                    height={220}
                    src={photo.src}
                    alt="Wedding celebration"
                    direction={photo.direction}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
      <div className="flex w-full justify-center">
        <Button className="bg-[#166534]/20 backdrop-blur-xl border border-[#166534]/30 shadow-[0_8px_32px_rgba(22,101,52,0.15)] text-[#166534] hover:bg-[#166534]/30 text-[11px] uppercase tracking-[0.15em] px-8 py-6 rounded-full transition-all duration-300">
          Explore Collections
        </Button>
      </div>
    </motion.div>
  );
};

function getRandomNumberInRange(min, max) {
  if (min >= max) {
    throw new Error("Min value should be less than max value");
  }
  return Math.random() * (max - min) + min;
}

const MotionImage = motion(
  forwardRef(function MotionImage(props, ref) {
    return <Image ref={ref} {...props} />;
  })
);

export const Photo = ({
  src,
  alt,
  className,
  direction,
  width,
  height,
  ...props
}) => {
  const [rotation, setRotation] = useState(0);
  const x = useMotionValue(200);
  const y = useMotionValue(200);

  useEffect(() => {
    const randomRotation =
      getRandomNumberInRange(1, 4) * (direction === "left" ? -1 : 1);
    setRotation(randomRotation);
  }, [direction]);

  function handleMouse(event) {
    const rect = event.currentTarget.getBoundingClientRect();
    x.set(event.clientX - rect.left);
    y.set(event.clientY - rect.top);
  }

  const resetMouse = () => {
    x.set(200);
    y.set(200);
  };

  return (
    <motion.div
      drag
      dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
      whileTap={{ scale: 1.2, zIndex: 9999 }}
      whileHover={{
        scale: 1.1,
        rotateZ: 2 * (direction === "left" ? -1 : 1),
        zIndex: 9999,
      }}
      whileDrag={{
        scale: 1.1,
        zIndex: 9999,
      }}
      initial={{ rotate: 0 }}
      animate={{ rotate: rotation }}
      style={{
        width,
        height,
        perspective: 400,
        transform: `rotate(0deg) rotateX(0deg) rotateY(0deg)`,
        zIndex: 1,
        WebkitTouchCallout: "none",
        WebkitUserSelect: "none",
        userSelect: "none",
        touchAction: "none",
      }}
      className={cn(
        className,
        "relative mx-auto shrink-0 cursor-grab active:cursor-grabbing"
      )}
      onMouseMove={handleMouse}
      onMouseLeave={resetMouse}
      draggable={false}
      tabIndex={0}
    >
      <div className="relative h-full w-full overflow-hidden rounded-3xl shadow-sm">
        <MotionImage
          className={cn("rounded-3xl object-cover")}
          fill
          src={src}
          alt={alt}
          {...props}
          draggable={false}
        />
      </div>
    </motion.div>
  );
};
