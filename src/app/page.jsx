"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import InquiryModal from "../components/InquiryModal";

export default function Page() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <main ref={containerRef} className="bg-[#EAE8E3] text-[#33312E] selection:bg-[#33312E] selection:text-[#EAE8E3] min-h-screen font-sans">
      
      {/* Navbar exactly like MPI (ultra minimal, hairlines) */}
      <nav className="fixed top-0 left-0 w-full z-50 px-6 py-5 flex justify-between items-center border-b border-[#33312E]/10 mix-blend-multiply">
        <div className="flex gap-8 text-[11px] uppercase tracking-[0.15em]">
          <a href="#" className="hover:opacity-50 transition-opacity">Collections</a>
          <a href="#" className="hover:opacity-50 transition-opacity">Experience</a>
        </div>
        <div className="absolute left-1/2 -translate-x-1/2">
           <span className="font-serif text-[18px] tracking-tight">Kanverse</span>
        </div>
        <div className="flex gap-8 text-[11px] uppercase tracking-[0.15em]">
          <button onClick={() => setIsModalOpen(true)} className="hover:opacity-50 transition-opacity">Inquire</button>
        </div>
      </nav>

      {/* Hero: Massive edge-to-edge typography (MPI signature) */}
      <section className="h-screen flex flex-col justify-between pt-32 pb-8 px-6">
        <div className="flex-1 flex flex-col justify-center items-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-[15vw] leading-[0.8] tracking-tighter text-[#33312E] w-full text-center whitespace-nowrap"
          >
            KANVERSE
          </motion.h1>
          <motion.p
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ duration: 1.5, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
             className="mt-8 text-[12px] uppercase tracking-[0.3em] text-[#33312E]/60 max-w-sm text-center leading-loose"
          >
            Digital invitations crafted with the care of physical stationery.
          </motion.p>
        </div>

        {/* Hero Marquee */}
        <div className="w-full border-t border-b border-[#33312E]/10 py-3 overflow-hidden relative flex">
           <motion.div
             animate={{ x: [0, -1035] }}
             transition={{ repeat: Infinity, ease: "linear", duration: 15 }}
             className="flex whitespace-nowrap text-[11px] uppercase tracking-[0.2em] text-[#33312E]"
           >
             {[...Array(10)].map((_, i) => (
                <span key={i} className="mx-8 flex items-center gap-8">
                  <span>Bespoke Digital Design</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#33312E]/30" />
                </span>
             ))}
           </motion.div>
        </div>
      </section>

      {/* Editorial Split Section (MPI style layout) */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
           {/* Left text block */}
           <div className="lg:col-span-4 lg:sticky lg:top-32 self-start">
              <h2 className="font-serif text-[40px] leading-[1.1] tracking-tighter mb-8">
                We believe your celebration begins the moment the invitation is opened.
              </h2>
              <p className="text-[13px] leading-[1.8] text-[#33312E]/70 mb-12">
                Rejecting the rigid, template-driven approach to digital invitations, we craft bespoke online experiences. Typography, motion, and white space are meticulously balanced to reflect the tone of your day.
              </p>
              <button onClick={() => setIsModalOpen(true)} className="group relative inline-flex overflow-hidden pb-1">
                  <span className="text-[11px] uppercase tracking-[0.2em] relative z-10">Discover our process</span>
                  <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#33312E] origin-left scale-x-100 group-hover:scale-x-0 transition-transform duration-700 ease-[0.16,1,0.3,1]" />
                  <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#33312E] origin-right scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-[0.16,1,0.3,1] delay-100" />
              </button>
           </div>

           {/* Right staggered images */}
           <div className="lg:col-span-8 flex flex-col gap-32">
              <motion.div 
                 initial={{ opacity: 0, y: 50 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true, margin: "-100px" }}
                 transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                 className="w-full aspect-[4/5] bg-black/5"
              >
                 <img src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1200" alt="Detail" className="w-full h-full object-cover grayscale-[10%]" />
              </motion.div>
              
              <motion.div 
                 initial={{ opacity: 0, y: 50 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true, margin: "-100px" }}
                 transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                 className="w-3/4 self-end aspect-[3/4] bg-black/5"
              >
                 <img src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=900" alt="Detail" className="w-full h-full object-cover grayscale-[10%]" />
              </motion.div>
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
      <footer className="bg-[#1A1918] text-[#EAE8E3] pt-32 pb-8 px-6 rounded-t-[3rem] mt-24">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          <h2 className="font-serif text-[12vw] leading-[0.85] tracking-tighter text-center mb-16">
            Let's begin.
          </h2>
          
          <button onClick={() => setIsModalOpen(true)} className="group relative inline-flex overflow-hidden pb-1 mb-32">
              <span className="text-[12px] uppercase tracking-[0.2em] relative z-10 text-[#EAE8E3]">Inquire Now</span>
              <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#EAE8E3] origin-left scale-x-100 group-hover:scale-x-0 transition-transform duration-700 ease-[0.16,1,0.3,1]" />
              <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#EAE8E3] origin-right scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-[0.16,1,0.3,1] delay-100" />
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
  );
}
