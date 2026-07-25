"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import gsap from "gsap";

/**
 * LogoIntro — Premium logo assembly animation
 *
 * Uses the actual uploaded logo image (kanverse-logo.svg).
 * The logo is a single raster image containing "kanverse" wordmark + green square dot.
 *
 * Animation strategy:
 * - Use a single <img> element with clip-path animation to create the reveal
 * - Phase 1: Clip-path reveals wordmark portion left-to-right (stops before green dot)
 * - Phase 2: Clip-path expands to reveal green dot with a slight scale pulse
 * - Phase 3: Hold — fully revealed logo rests centered
 * - Phase 4: Logo shrinks & translates to navbar position; overlay fades out
 *
 * The green dot in the uploaded logo occupies roughly the rightmost 5-8% of the image.
 */
export default function LogoIntro({ onComplete }) {
  const overlayRef = useRef(null);
  const logoWrapperRef = useRef(null);
  const logoImgRef = useRef(null);
  const tlRef = useRef(null);
  const [shouldRender, setShouldRender] = useState(true);

  const runAnimation = useCallback(() => {
    const overlay = overlayRef.current;
    const logoWrapper = logoWrapperRef.current;
    const logoImg = logoImgRef.current;

    if (!overlay || !logoWrapper || !logoImg) return;

    // Lock scrolling
    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";

    const tl = gsap.timeline({
      onComplete: () => {
        // Unlock scrolling
        document.documentElement.style.overflow = "";
        document.body.style.overflow = "";


        // Show navbar logo
        const navbarLogo = document.getElementById("navbar-logo");
        if (navbarLogo) {
          navbarLogo.style.opacity = "1";
        }

        // Remove intro from DOM after a brief moment
        setTimeout(() => {
          setShouldRender(false);
          if (onComplete) onComplete();
        }, 50);
      },
    });

    tlRef.current = tl;

    // ─── Initial states ───────────────────────────
    // Logo starts invisible, centered, at display scale
    gsap.set(logoWrapper, {
      opacity: 1,
      scale: 1,
      x: 0,
      y: 0,
    });

    // Clip-path: hide everything initially (clip from right side = 100%)
    gsap.set(logoImg, {
      clipPath: "inset(0 100% 0 0)",
      opacity: 1,
      y: 14,
    });

    gsap.set(overlay, { opacity: 1 });

    // Hide navbar logo during intro
    const navbarLogo = document.getElementById("navbar-logo");
    if (navbarLogo) {
      navbarLogo.style.opacity = "0";
    }

    // ═══════════════════════════════════════════════
    // Phase 1: Wordmark reveal — clip opens L→R
    // Reveals approximately 92% of image (wordmark only, dot still hidden)
    // Subtle upward drift for elegance
    // ═══════════════════════════════════════════════
    tl.to(
      logoImg,
      {
        clipPath: "inset(0 8% 0 0)", // stops just before the green dot
        y: 0,
        duration: 0.9,
        ease: "power3.out",
      },
      0.3 // small initial delay for breathing room
    );

    // ═══════════════════════════════════════════════
    // Phase 2: Green dot reveal — clip fully opens
    // Slightly delayed to create the "assembling" feel
    // ═══════════════════════════════════════════════
    tl.to(
      logoImg,
      {
        clipPath: "inset(0 0% 0 0)",
        duration: 0.4,
        ease: "power2.out",
      },
      ">-0.05" // tiny overlap with the end of phase 1
    );

    // Subtle scale pulse on the whole logo when dot appears (like a "click into place" feel)
    tl.fromTo(
      logoWrapper,
      { scale: 1 },
      {
        scale: 1.015,
        duration: 0.15,
        ease: "power1.out",
        yoyo: true,
        repeat: 1,
      },
      "<+0.1" // starts slightly into the dot reveal
    );

    // ═══════════════════════════════════════════════
    // Phase 3: Hold — fully assembled logo, centered
    // ═══════════════════════════════════════════════
    tl.to({}, { duration: 0.7 }); // 0.7s pause

    // ═══════════════════════════════════════════════
    // Phase 4: Shrink to navbar + reveal homepage
    // ═══════════════════════════════════════════════
    const shrinkLabel = "shrink";
    tl.addLabel(shrinkLabel);

    tl.to(
      logoWrapper,
      {
        scale: () => {
          const navLogoEl = document.getElementById("navbar-logo");
          if (!navLogoEl) return 0.22;
          const navRect = navLogoEl.getBoundingClientRect();
          const wrapperRect = logoWrapper.getBoundingClientRect();
          return Math.max(navRect.height / wrapperRect.height, 0.18);
        },
        x: () => {
          const navLogoEl = document.getElementById("navbar-logo");
          if (!navLogoEl) return 0;
          const navRect = navLogoEl.getBoundingClientRect();
          // We know the wrapper is perfectly centered in viewport
          return navRect.left + navRect.width / 2 - window.innerWidth / 2;
        },
        y: () => {
          const navLogoEl = document.getElementById("navbar-logo");
          if (!navLogoEl) return -window.innerHeight * 0.42;
          const navRect = navLogoEl.getBoundingClientRect();
          return navRect.top + navRect.height / 2 - window.innerHeight / 2;
        },
        duration: 1.0,
        ease: "power3.inOut",
      },
      shrinkLabel
    );

    // Overlay fades out slightly after shrink starts
    tl.to(
      overlay,
      {
        opacity: 0,
        duration: 0.7,
        ease: "power2.inOut",
      },
      `${shrinkLabel}+=0.25`
    );

    // Logo wrapper fades out at the very end (as navbar logo takes over)
    tl.to(
      logoWrapper,
      {
        opacity: 0,
        duration: 0.25,
        ease: "power1.out",
      },
      `${shrinkLabel}+=0.85`
    );
  }, [onComplete]);

  useEffect(() => {

    // Wait for image to load before starting animation
    const img = logoImgRef.current;
    if (!img) return;

    let fallbackTimer = null;

    const startWhenReady = () => {
      // Double rAF ensures layout is computed
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          runAnimation();
        });
      });
    };

    if (img.complete) {
      startWhenReady();
    } else {
      img.addEventListener("load", startWhenReady, { once: true });
      // Fallback: start after 2s even if image hasn't loaded
      fallbackTimer = setTimeout(startWhenReady, 2000);
    }

    return () => {
      if (fallbackTimer) clearTimeout(fallbackTimer);
      if (img) img.removeEventListener("load", startWhenReady);
      if (tlRef.current) {
        tlRef.current.kill();
      }
    };
  }, [runAnimation, onComplete]);

  if (!shouldRender) return null;

  return (
    <div
      ref={overlayRef}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        backgroundColor: "#ffffff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        pointerEvents: "none",
      }}
    >
      <div
        ref={logoWrapperRef}
        className="intro-logo-container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          opacity: 1,
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          ref={logoImgRef}
          src="/kanverse-logo.svg"
          alt="Kanverse"
          style={{
            height: "clamp(48px, 8vw, 96px)",
            width: "auto",
            display: "block",
            userSelect: "none",
            pointerEvents: "none",
            opacity: 0,
          }}
          draggable={false}
        />
      </div>
    </div>
  );
}
