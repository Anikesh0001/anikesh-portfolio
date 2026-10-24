import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { PROFILE } from "../data/constants";
import { Github, Linkedin, ArrowRight, Download, MapPin } from "lucide-react";
import Typing from "react-typing-effect";

const STATS = [
  { value: "200+", label: "DSA problems" },
  { value: "6+", label: "Hackathons" },
  { value: "8.96", label: "CGPA" },
];

export default function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX - window.innerWidth / 2) / 25,
        y: (e.clientY - window.innerHeight / 2) / 25,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center pt-24 pb-16 relative overflow-hidden">
      {/* Background parallax glows */}
      <motion.div
        style={{ y: y1, x: -50 }}
        className="absolute top-20 left-10 w-72 h-72 bg-purple-600/25 rounded-full blur-[120px]"
      />
      <motion.div
        style={{ y: y2, x: 50 }}
        className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-400/15 rounded-full blur-[120px]"
      />

      <div className="max-w-7xl w-full mx-auto px-6 grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center relative z-10">
        {/* Left — copy */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-300 mb-6 text-xs font-medium">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            Open to internships & new grad roles
          </div>

          <h1 className="text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight mb-5">
            Anikesh <span className="text-gradient">Kumar</span>
          </h1>

          <div className="text-lg md:text-2xl text-gray-300 mb-6 font-mono h-8">
            <Typing
              text={[
                "Full Stack Developer",
                "Python & Flask on the backend",
                "Vue.js on the frontend",
                "AI & Data Science learner",
              ]}
              speed={70}
              eraseSpeed={40}
              eraseDelay={2200}
              typingDelay={400}
            />
          </div>

          <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-xl mb-8">
            I build complete web apps from the database up to the UI — currently a
            Full Stack Developer at DataWeave, with a background in machine
            learning and a habit of shipping projects end to end.
          </p>

          <div className="flex items-center gap-2 text-sm text-gray-500 mb-8">
            <MapPin className="w-4 h-4 text-purple-400" />
            {PROFILE.location}
          </div>

          <div className="flex flex-wrap gap-4 items-center">
            <a
              href="#projects"
              className="px-7 py-3 rounded-full bg-gradient-to-r from-cyan-400 to-purple-600 text-white font-semibold flex items-center gap-2 hover:shadow-[0_0_30px_rgba(0,242,255,0.4)] transition-all hover:-translate-y-0.5"
            >
              View my work <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href={import.meta.env.BASE_URL + "resume.pdf?v=20261025"}
              download
              className="px-6 py-3 rounded-full glass border border-white/15 hover:bg-white/10 transition-all flex items-center gap-2 font-medium"
            >
              <Download className="w-4 h-4 text-emerald-400" /> Resume
            </a>
            <div className="flex gap-2">
              <a
                href={PROFILE.social.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-3 rounded-full glass border border-white/15 hover:bg-white/10 hover:-translate-y-0.5 transition-all"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={PROFILE.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-3 rounded-full glass border border-white/15 hover:bg-white/10 hover:-translate-y-0.5 transition-all text-blue-400"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Real stats */}
          <div className="flex gap-8 mt-12 pt-8 border-t border-white/10 max-w-md">
            {STATS.map((s) => (
              <div key={s.label}>
                <div className="text-2xl md:text-3xl font-bold text-gradient">
                  {s.value}
                </div>
                <div className="text-xs text-gray-500 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right — portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          style={{ x: mousePosition.x, y: mousePosition.y }}
          className="relative hidden lg:block"
        >
          <div className="relative w-80 h-80 xl:w-96 xl:h-96 mx-auto group">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-[2rem] blur-2xl opacity-40 group-hover:opacity-60 transition-opacity duration-500" />
            <div className="absolute -inset-3 rounded-[2.5rem] border border-white/10" />
            <img
              src="https://github.com/Anikesh0001.png"
              alt={PROFILE.name}
              width="384"
              height="384"
              fetchpriority="high"
              className="w-full h-full object-cover rounded-[2rem] border border-white/15 shadow-2xl relative z-10"
            />

            {/* Grounded floating chips */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-6 -right-6 z-20 bg-[#0a0a1a]/95 backdrop-blur-md border border-white/10 border-l-2 border-l-cyan-400 px-4 py-3 rounded-xl shadow-xl whitespace-nowrap"
            >
              <p className="text-[11px] leading-tight text-gray-400 mb-0.5">Currently at</p>
              <p className="text-sm leading-tight font-bold text-white">DataWeave</p>
            </motion.div>

            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-8 -left-8 z-20 bg-[#0a0a1a]/95 backdrop-blur-md border border-white/10 border-l-2 border-l-purple-500 px-4 py-3 rounded-xl shadow-xl whitespace-nowrap"
            >
              <p className="text-[11px] leading-tight text-gray-400 mb-0.5">Winner</p>
              <p className="text-sm leading-tight font-bold text-white">Hack the Hackers</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
