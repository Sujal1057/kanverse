"use client"

import React, { useEffect, useState } from "react"
import { motion, useScroll, useMotionValueEvent } from "framer-motion"
import Link from "next/link"
import { cn } from "@/lib/utils"

export function NavBar({ leftItems = [], rightNode, logo, className }) {
  const [activeTab, setActiveTab] = useState(leftItems[0]?.name)
  const [navVisible, setNavVisible] = useState(true)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious()
    if (latest > previous && latest > 50) {
      setNavVisible(false)
    } else {
      setNavVisible(true)
    }
  })

  const renderItem = (item) => {
    const Icon = item.icon
    const isActive = activeTab === item.name

    return (
      <Link
        key={item.name}
        href={item.url}
        onClick={() => setActiveTab(item.name)}
        className={cn(
          "relative cursor-pointer text-[11px] uppercase tracking-[0.15em] font-medium px-6 py-2 rounded-full transition-colors",
          "text-black/60 hover:text-black",
          isActive && "bg-black/5 text-black",
        )}
      >
        <span className="hidden md:inline">{item.name}</span>
        <span className="md:hidden">
          {Icon && <Icon size={18} strokeWidth={2.5} />}
        </span>
        {isActive && (
          <motion.div
            layoutId="lamp"
            className="absolute inset-0 w-full bg-[#166534]/5 rounded-full -z-10"
            initial={false}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30,
            }}
          >
            <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-[#166534] rounded-t-full">
              <div className="absolute w-12 h-6 bg-[#166534]/20 rounded-full blur-md -top-2 -left-2" />
              <div className="absolute w-8 h-6 bg-[#166534]/20 rounded-full blur-md -top-1" />
              <div className="absolute w-4 h-4 bg-[#166534]/20 rounded-full blur-sm top-0 left-2" />
            </div>
          </motion.div>
        )}
      </Link>
    )
  }

  return (
    <>
      {/* MOBILE LOGO HEADER (Top) */}
      <motion.div
        className="md:hidden fixed top-6 inset-x-0 z-[999] flex justify-center pointer-events-none"
        initial={{ y: 0, opacity: 1 }}
        animate={{ y: navVisible ? 0 : -100, opacity: navVisible ? 1 : 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <div className="bg-white/40 border border-black/5 backdrop-blur-xl py-2 px-6 rounded-full shadow-[0_4px_24px_rgba(0,0,0,0.06)] pointer-events-auto">
          {logo}
        </div>
      </motion.div>

      {/* MOBILE NAVBAR PILL (Bottom) */}
      <motion.div
        className="md:hidden fixed bottom-6 inset-x-0 z-[999] flex justify-center pointer-events-none"
        initial={{ y: 0, opacity: 1 }}
        animate={{ y: navVisible ? 0 : 100, opacity: navVisible ? 1 : 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <div className="flex items-center justify-between bg-white/40 border border-black/5 backdrop-blur-xl py-1.5 px-4 rounded-full shadow-[0_4px_24px_rgba(0,0,0,0.06)] w-[90vw] max-w-[360px] pointer-events-auto">
          {/* Left Side */}
          <div className="flex items-center gap-1">
            {leftItems.length > 0 && leftItems.map(renderItem)}
          </div>
          {/* Right Side */}
          <div className="flex items-center gap-1">
            {rightNode}
          </div>
        </div>
      </motion.div>

      {/* DESKTOP LAYOUT (Top) */}
      <motion.div
        className="hidden md:flex fixed top-6 inset-x-0 z-[999] justify-center pointer-events-none"
        initial={{ y: 0, opacity: 1 }}
        animate={{ y: navVisible ? 0 : -100, opacity: navVisible ? 1 : 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <div className="grid grid-cols-[1fr_auto_1fr] items-center bg-white/40 border border-black/5 backdrop-blur-xl py-1.5 px-2 rounded-full shadow-[0_4px_24px_rgba(0,0,0,0.06)] pointer-events-auto">
          {/* Left Side */}
          <div className="flex items-center justify-start gap-1">
            {leftItems.length > 0 && leftItems.map(renderItem)}
          </div>
          {/* Center Logo */}
          {logo && (
            <div className="px-6 flex items-center justify-center">
              {logo}
            </div>
          )}
          {/* Right Side */}
          <div className="flex items-center justify-end gap-1 pr-4 pl-2">
            {rightNode}
          </div>
        </div>
      </motion.div>
    </>
  )
}
