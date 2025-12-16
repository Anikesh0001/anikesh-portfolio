import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          className="fixed bottom-24 right-6 z-40 flex flex-col items-center gap-2"
        >
          {/* Progress Ring Button */}
          <button
            onClick={scrollToTop}
            className="relative w-12 h-12 rounded-full flex items-center justify-center bg-[#030014]/80 backdrop-blur-md border border-white/10 shadow-[0_0_20px_rgba(0,242,255,0.3)] group hover:-translate-y-1 transition-transform duration-300"
          >
            {/* SVG Progress Circle */}
            <svg className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none">
               <circle
                  cx="24"
                  cy="24"
                  r="22"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  className="text-white/10"
               />
               <motion.circle
                  cx="24"
                  cy="24"
                  r="22"
                  stroke="url(#gradient)"
                  strokeWidth="2"
                  fill="none"
                  strokeDasharray="138" // 2 * pi * 22
                  strokeDashoffset={0}
                  style={{ pathLength: scaleX }}
               />
               <defs>
                 <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                   <stop offset="0%" stopColor="#22d3ee" /> {/* Cyan */}
                   <stop offset="100%" stopColor="#a855f7" /> {/* Purple */}
                 </linearGradient>
               </defs>
            </svg>
            
            <ArrowUp className="w-5 h-5 text-white group-hover:text-cyan-400 transition-colors" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
