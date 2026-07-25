"use client";

import { useRef, useState, useEffect, useLayoutEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import InquiryModal from "../components/InquiryModal";
import LogoIntro from "../components/LogoIntro";
import { PhotoGallery } from "@/components/ui/gallery";

gsap.registerPlugin(ScrollTrigger);

const storySlides = [
  {
    id: 1,
    heading: "We believe your celebration begins the moment the invitation is opened.",
    description: "Rejecting the rigid, template-driven approach to digital invitations, we craft bespoke online experiences. Typography, motion, and white space are meticulously balanced to reflect the tone of your day.",
    cta: "Discover our process",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=900"
  },
  {
    id: 2,
    heading: "A seamless experience across all devices.",
    description: "Your guests will experience a flawless, immersive journey whether they are on their phone, tablet, or desktop. Every interaction is designed to feel native and premium.",
    cta: "View capabilities",
    image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=900"
  },
  {
    id: 3,
    heading: "RSVPs and details handled with elegance.",
    description: "Forget clunky forms. Our custom RSVP flows integrate perfectly with your design, making it a joy for your guests to confirm their attendance and view itinerary details.",
    cta: "See an example",
    image: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?auto=format&fit=crop&q=80&w=900"
  }
];

export default function Page() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [introComplete, setIntroComplete] = useState(false);
  const containerRef = useRef(null);
  const section2Ref = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const texts = gsap.utils.toArray('.story-text');
      const images = gsap.utils.toArray('.story-image');
      
      if (!texts.length || !images.length) return;

      // Initial state: hide everything except first slide
      gsap.set(texts.slice(1), { autoAlpha: 0, y: 30 });
      gsap.set(images.slice(1), { autoAlpha: 0 });
      gsap.set(texts[0], { autoAlpha: 1, y: 0 });
      gsap.set(images[0], { autoAlpha: 1 });
      
      let currentIdx = 0;
      let currentTween = null;
      
      function goToSlide(index, direction) {
        if (index === currentIdx) return;
        
        if (currentTween) currentTween.kill();
        
        const tl = gsap.timeline();
        currentTween = tl;
        
        // fade out current
        tl.to(texts[currentIdx], { autoAlpha: 0, y: direction > 0 ? -30 : 30, duration: 0.5, ease: "power2.inOut" }, 0)
          .to(images[currentIdx], { autoAlpha: 0, duration: 0.5, ease: "power2.inOut" }, 0)
        // fade in next
          .fromTo(texts[index], { autoAlpha: 0, y: direction > 0 ? 30 : -30 }, { autoAlpha: 1, y: 0, duration: 0.5, ease: "power2.inOut" }, 0)
          .fromTo(images[index], { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.5, ease: "power2.inOut" }, 0);
          
        currentIdx = index;
      }

      ScrollTrigger.create({
        trigger: section2Ref.current,
        start: "top top",
        end: `+=${storySlides.length * 100}%`,
        pin: true,
        snap: {
          snapTo: storySlides.length > 1 ? 1 / (storySlides.length - 1) : 0,
          duration: { min: 0.3, max: 0.6 },
          ease: "power2.inOut"
        },
        onUpdate: (self) => {
          // Determine the closest slide based on scroll progress
          const index = Math.round(self.progress * (storySlides.length - 1));
          if (index !== currentIdx) {
            goToSlide(index, index > currentIdx ? 1 : -1);
          }
        }
      });
    }, section2Ref);
    
    return () => ctx.revert();
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });



  const handleIntroComplete = () => {
    setIntroComplete(true);
  };

  return (
    <>
      {/* Logo Intro Animation */}
      <LogoIntro onComplete={handleIntroComplete} />

      {/* Navbar — always in DOM so intro can target #navbar-logo for position calc */}
      <nav
        className="fixed top-0 left-0 w-full z-50 px-6 py-5 flex justify-between items-center border-b border-black/10"
        style={{
          backgroundColor: introComplete ? "rgba(255,255,255,0.85)" : "transparent",
          backdropFilter: introComplete ? "blur(12px)" : "none",
          WebkitBackdropFilter: introComplete ? "blur(12px)" : "none",
          borderColor: introComplete ? "rgba(51,49,46,0.1)" : "transparent",
          transition: "background-color 0.6s ease, border-color 0.6s ease, backdrop-filter 0.6s ease",
        }}
      >
        <div
          className="flex gap-8 text-[11px] uppercase tracking-[0.15em]"
          style={{
            opacity: introComplete ? 1 : 0,
            transition: "opacity 0.5s ease 0.1s",
          }}
        >
          <a href="#" className="hover:opacity-50 transition-opacity">Collections</a>
          <a href="#" className="hover:opacity-50 transition-opacity">Experience</a>
        </div>
        <div className="absolute left-1/2 -translate-x-1/2">
          {/* Navbar logo — hidden initially, shown after intro animation lands */}
          <div
            id="navbar-logo"
            style={{ opacity: 0 }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/kanverse-logo.svg"
              alt="Kanverse"
              style={{
                height: "30px",
                width: "auto",
                display: "block",
              }}
              draggable={false}
            />
          </div>
        </div>
        <div
          className="flex gap-8 text-[11px] uppercase tracking-[0.15em]"
          style={{
            opacity: introComplete ? 1 : 0,
            transition: "opacity 0.5s ease 0.1s",
          }}
        >
          <button onClick={() => setIsModalOpen(true)} className="hover:opacity-50 transition-opacity">Inquire</button>
        </div>
      </nav>

      <main
        ref={containerRef}
        className="bg-white text-black selection:bg-[#166534] selection:text-white min-h-screen font-sans"
      >

        {/* Hero: Photo Gallery */}
        <section className="min-h-screen flex flex-col justify-between pt-24 pb-8 px-6">
          <div className="flex-1 flex flex-col justify-center items-center">
            {introComplete && (
              <PhotoGallery animationDelay={0.3} />
            )}
          </div>

          {/* Hero Marquee */}
          <div className="w-full border-t border-b border-black/10 py-3 overflow-hidden relative flex">
            <motion.div
              animate={{ x: [0, -1035] }}
              transition={{ repeat: Infinity, ease: "linear", duration: 15 }}
              className="flex whitespace-nowrap text-[11px] uppercase tracking-[0.2em] text-black"
            >
              {[...Array(10)].map((_, i) => (
                <span key={i} className="mx-8 flex items-center gap-8">
                  <span>Bespoke Digital Design</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#166534]" />
                </span>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Editorial Split Section (MPI style layout) */}
        <section ref={section2Ref} className="h-screen w-full relative bg-white">
          <div className="h-full w-full flex items-center px-6">
            <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              
              {/* Left text block */}
              <div className="flex flex-col justify-center relative h-[350px]">
                {storySlides.map((slide, index) => (
                  <div key={slide.id} className="story-text absolute inset-0 flex flex-col justify-center pointer-events-none">
                    <h2 className="font-serif text-[40px] leading-[1.1] tracking-tighter mb-8 pointer-events-auto">
                      {slide.heading}
                    </h2>
                    <p className="text-[13px] leading-[1.8] text-black/70 mb-12 pointer-events-auto">
                      {slide.description}
                    </p>
                    <button onClick={() => setIsModalOpen(true)} className="group relative inline-flex overflow-hidden pb-1 self-start pointer-events-auto">
                      <span className="text-[11px] uppercase tracking-[0.2em] relative z-10">{slide.cta}</span>
                      <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#166534] origin-left scale-x-100 group-hover:scale-x-0 transition-transform duration-700 ease-[0.16,1,0.3,1]" />
                      <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#166534] origin-right scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-[0.16,1,0.3,1] delay-100" />
                    </button>
                  </div>
                ))}
              </div>

              {/* Right side - Phone Mockup */}
              <div className="flex justify-center items-center">
                <div className="relative w-full max-w-[320px] aspect-[9/19] mx-auto">
                  {/* Screen content (behind the transparent phone frame) */}
                  <div className="absolute top-[4%] bottom-[4%] left-[6%] right-[6%] overflow-hidden rounded-[3rem] z-0 bg-black/5 scale-[0.95]">
                    {storySlides.map((slide, index) => (
                      <img
                        key={slide.id}
                        src={slide.image}
                        alt={`Screen ${index + 1}`}
                        className="story-image absolute inset-0 w-full h-full object-cover"
                      />
                    ))}
                  </div>
                  {/* Transparent Phone Frame */}
                  <img
                    src="/phone.png"
                    alt="Phone Display"
                    className="relative w-full h-full object-contain pointer-events-none z-10"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Full width divider image */}
        <section className="py-24">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2 }}
            className="w-full h-[60vh] md:h-[80vh]"
          >
            <img src="https://images.unsplash.com/photo-1464349153735-7db50ed83c84?auto=format&fit=crop&q=80&w=2000" alt="Detail" className="w-full h-full object-cover grayscale-[20%]" />
          </motion.div>
        </section>

        {/* Massive Dark Footer (MPI Signature) */}
        <footer className="bg-[#1A1918] text-white pt-32 pb-8 px-6 rounded-t-[3rem] mt-24">
          <div className="max-w-7xl mx-auto flex flex-col items-center">
            <h2 className="font-serif text-[12vw] leading-[0.85] tracking-tighter text-center mb-16">
              Let's begin.
            </h2>

            <button onClick={() => setIsModalOpen(true)} className="group relative inline-flex overflow-hidden pb-1 mb-32">
              <span className="text-[12px] uppercase tracking-[0.2em] relative z-10 text-white">Inquire Now</span>
              <span className="absolute bottom-0 left-0 w-full h-[1px] bg-white origin-left scale-x-100 group-hover:scale-x-0 transition-transform duration-700 ease-[0.16,1,0.3,1]" />
              <span className="absolute bottom-0 left-0 w-full h-[1px] bg-white origin-right scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-[0.16,1,0.3,1] delay-100" />
            </button>

            <div className="w-full flex justify-between items-end text-[11px] uppercase tracking-[0.2em] border-t border-white/10 pt-8">
              <span className="opacity-50">© 2026 Kanverse</span>
              <div className="flex gap-8">
                <a href="#" className="hover:opacity-50 transition-opacity">Instagram</a>
                <a href="#" className="hover:opacity-50 transition-opacity">Pinterest</a>
              </div>
            </div>
          </div>
        </footer>

        <InquiryModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </main>
    </>
  );
}
