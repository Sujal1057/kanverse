"use client";

import React from 'react';
import { cn } from '@/lib/utils'; // Assumes a 'cn' utility for classnames

// Keyframes for the floating animation
const animationStyle = `
  @keyframes float-up {
    0% { transform: translateY(0px); box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25); }
    50% { transform: translateY(-15px); box-shadow: 0 35px 60px -15px rgba(0, 0, 0, 0.3); }
    100% { transform: translateY(0px); box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25); }
  }
  .animate-float-up {
    animation: float-up 6s ease-in-out infinite;
  }
`;

const HeroCollage = React.forwardRef(
  ({ className, title, subtitle, stats, images, ...props }, ref) => {
    // We need exactly 7 images for this layout
    const displayImages = images.slice(0, 7);

    return (
      <>
        <style>{animationStyle}</style>
        <section
          ref={ref}
          className={cn(
            'relative w-full bg-background font-sans py-8 md:py-12 overflow-hidden',
            className
          )}
          {...props}
        >
          {/* Main Content */}
          <div className="container relative z-10 mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-serif tracking-tighter text-black">
              {title}
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-sm md:text-base text-black/60 font-sans leading-relaxed">
              {subtitle}
            </p>
          </div>

          {/* Image Collage - Precision Centered Canvas */}
          <div className="relative z-0 mt-6 md:mt-8 h-[150px] sm:h-[240px] md:h-[330px] lg:h-[390px] flex items-center justify-center w-full overflow-hidden">
            {/* The scaled canvas that locks the cluster layout perfectly across all devices */}
            <div className="relative w-[1000px] h-[600px] scale-[0.25] sm:scale-[0.4] md:scale-[0.55] lg:scale-[0.65] flex-shrink-0 origin-center">
              
              {/* Central Image (Girl) */}
              {displayImages[0] && (
                <img
                  src={displayImages[0]}
                  alt="Main feature"
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ml-0 mt-0 w-[360px] aspect-[4/5] object-cover rounded-2xl shadow-2xl z-20 animate-float-up"
                  style={{ animationDelay: '0s' }}
                />
              )}
              
              {/* Top-Left (Bread) */}
              {displayImages[1] && (
                <img
                  src={displayImages[1]}
                  alt="Feature 2"
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -ml-[180px] -mt-[160px] w-[220px] aspect-square object-cover rounded-xl shadow-lg z-10 animate-float-up"
                  style={{ animationDelay: '-1.2s' }}
                />
              )}
              
              {/* Top-Right (Flowers) */}
              {displayImages[2] && (
                <img
                  src={displayImages[2]}
                  alt="Feature 3"
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ml-[160px] -mt-[180px] w-[220px] aspect-square object-cover rounded-xl shadow-lg z-10 animate-float-up"
                  style={{ animationDelay: '-2.5s' }}
                />
              )}
              
              {/* Bottom-Right (Mountains) */}
              {displayImages[3] && (
                <img
                  src={displayImages[3]}
                  alt="Feature 4"
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ml-[180px] mt-[160px] w-[280px] aspect-[4/3] object-cover rounded-xl shadow-lg z-30 animate-float-up"
                  style={{ animationDelay: '-3.5s' }}
                />
              )}
               
              {/* Far-Right (Car) */}
              {displayImages[4] && (
                <img
                  src={displayImages[4]}
                  alt="Feature 5"
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ml-[360px] mt-[20px] w-[220px] aspect-[3/4] object-cover rounded-xl shadow-lg z-10 animate-float-up"
                   style={{ animationDelay: '-4.8s' }}
                />
              )}
              
              {/* Bottom-Left (Lotion) */}
              {displayImages[5] && (
                <img
                  src={displayImages[5]}
                  alt="Feature 6"
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -ml-[200px] mt-[140px] w-[240px] aspect-[2/3] object-cover rounded-xl shadow-lg z-30 animate-float-up"
                   style={{ animationDelay: '-5.2s' }}
                />
              )}
              
              {/* Far-Left (Umbrellas) */}
              {displayImages[6] && (
                <img
                  src={displayImages[6]}
                  alt="Feature 7"
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -ml-[380px] -mt-[40px] w-[200px] aspect-[3/4] object-cover rounded-xl shadow-lg z-10 animate-float-up"
                   style={{ animationDelay: '-6s' }}
                />
              )}
            </div>
          </div>

          {/* Stats Section */}
          <div className="container relative z-10 mx-auto mt-6 md:mt-8 px-4">
            <div className="flex flex-col items-center justify-center gap-6 sm:flex-row sm:gap-12">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <p className="text-4xl font-serif tracking-tight text-black">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-xs uppercase tracking-widest font-medium text-black/50">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </>
    );
  }
);

HeroCollage.displayName = 'HeroCollage';

export { HeroCollage };
