
import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { PROFILE } from "../data/constants";
import { Github, Linkedin, ArrowRight, Download } from "lucide-react";
import Typing from "react-typing-effect";

export default function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX - window.innerWidth / 2) / 20,
        y: (e.clientY - window.innerHeight / 2) / 20,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
      {/* Background Floating Blobs */}
      <motion.div 
        style={{ y: y1, x: -50 }}
        className="absolute top-20 left-10 w-72 h-72 bg-purple-600/30 rounded-full blur-[100px] animate-pulse" 
      />
      <motion.div 
        style={{ y: y2, x: 50 }}
        className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-400/20 rounded-full blur-[100px] animate-pulse" 
      />

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block px-4 py-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 text-cyan-300 mb-6 font-mono text-sm">
            Based in {PROFILE.location}
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            Hi, I'm <br />
            <span className="text-gradient">{PROFILE.name}</span>
          </h1>
          
          <div className="text-xl md:text-2xl text-gray-400 mb-8 font-mono h-8">
            <Typing
              text={[
                "AI Engineer", 
                "Full-Stack Developer", 
                "Automation Expert", 
                "ML Engineer"
              ]}
              speed={100}
              eraseSpeed={50}
              eraseDelay={2000}
              typingDelay={500}
            />
          </div>

          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="px-8 py-3 rounded-full bg-gradient-to-r from-cyan-400 to-purple-600 text-white font-bold flex items-center gap-2 hover:shadow-[0_0_30px_rgba(0,242,255,0.4)] transition-all hover:-translate-y-1"
            >
              View Work <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href={PROFILE.social.github}
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 rounded-full glass border border-white/20 hover:bg-white/10 transition-all flex items-center gap-2"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href={PROFILE.social.linkedin}
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 rounded-full glass border border-white/20 hover:bg-white/10 transition-all flex items-center gap-2 text-blue-400"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ x: mousePosition.x, y: mousePosition.y }}
          className="relative hidden lg:block"
        >
          <div className="relative w-96 h-96 mx-auto group">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full blur-2xl opacity-50 group-hover:opacity-75 transition-opacity duration-500" />
            <img
              src="https://github.com/Anikesh0001.png" 
              alt={PROFILE.name}
              className="w-full h-full object-cover rounded-full border-4 border-white/10 shadow-2xl relative z-10 transition-transform duration-500"
            />
            
            {/* 3D Floating Elements */}
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-0 -right-4 z-20 glass p-3 rounded-xl flex items-center gap-2 shadow-lg border-l-4 border-l-cyan-400"
            >
              <div className="text-xs font-bold text-gray-300">
                AI & ML <br/> Expert
              </div>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-10 -left-10 z-20 glass p-3 rounded-xl flex items-center gap-3 shadow-lg border-r-4 border-r-purple-500"
            >
              <div className="text-2xl">⚡</div>
              <div className="text-xs">
                <p className="font-bold">Fast &</p>
                <p className="text-gray-400">Scalable</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
