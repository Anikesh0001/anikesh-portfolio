
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Code2, User, Database, Send, BookOpen, FileText } from "lucide-react";
import ResumeModal from "./ResumeModal";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showResume, setShowResume] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about", icon: User },
    { name: "Skills", href: "#skills", icon: Database },
    { name: "Projects", href: "#projects", icon: Code2 },
    { name: "Contact", href: "#contact", icon: Send },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled ? "bg-[#030014]/80 backdrop-blur-md shadow-lg border-b border-white/10" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#" className="flex items-center gap-2 group">
            <div className="p-2 rounded-lg bg-gradient-to-br from-cyan-400 to-purple-600 group-hover:scale-110 transition-transform">
              <span className="font-bold text-white text-xl">A</span>
            </div>
            <span className="font-bold text-xl tracking-tight text-white group-hover:text-cyan-400 transition-colors">
              Anikesh
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-cyan-400 transition-colors text-sm font-medium flex items-center gap-2 group"
              >
                <link.icon className="w-4 h-4 group-hover:animate-bounce" />
                {link.name}
              </a>
            ))}
            
            <button
              onClick={() => setShowResume(true)}
              className="px-5 py-2 rounded-full border border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 transition-colors flex items-center gap-2 text-sm font-bold"
            >
              <FileText size={16} /> Resume
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-[#030014] border-b border-white/10"
            >
              <div className="flex flex-col gap-4 p-6">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-gray-300 hover:text-cyan-400 py-2 flex items-center gap-3"
                    onClick={() => setIsOpen(false)}
                  >
                    <link.icon className="w-5 h-5" />
                    {link.name}
                  </a>
                ))}
                <button
                  onClick={() => { setShowResume(true); setIsOpen(false); }}
                  className="text-cyan-400 py-2 flex items-center gap-3 font-bold"
                >
                   <FileText size={20} /> View Resume
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      <ResumeModal isOpen={showResume} onClose={() => setShowResume(false)} />
    </>
  );
}
