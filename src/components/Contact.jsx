import React, { useState } from "react";
import { Mail, MapPin, Send, Github, Linkedin } from "lucide-react";
import { PROFILE } from "../data/constants";
import TerminalSection from "./TerminalSection";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `Portfolio contact from ${form.name || "someone"}`
    );
    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name}${form.email ? ` (${form.email})` : ""}`
    );
    // Opens the visitor's mail client pre-filled; no backend required.
    window.location.href = `mailto:${PROFILE.email}?subject=${subject}&body=${body}`;
  };

  return (
    <footer id="contact" className="bg-gradient-to-t from-black to-[#030014] pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-gradient-to-br from-cyan-400/10 to-purple-600/10 rounded-3xl p-8 md:p-16 border border-white/10 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/20 rounded-full blur-[90px]" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-500/20 rounded-full blur-[90px]" />

          <div className="relative z-10 max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="h-px w-8 bg-gradient-to-r from-cyan-400 to-purple-600" />
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-cyan-400">
                05 — Contact
              </span>
              <span className="h-px w-8 bg-gradient-to-l from-cyan-400 to-purple-600" />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-5 tracking-tight">
              Let's build something
            </h2>
            <p className="text-gray-400 mb-10 text-base md:text-lg">
              I'm looking for internship and new-grad opportunities, and I'm always
              happy to talk about an interesting project or collaboration.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10">
              <a
                href={PROFILE.social.email}
                className="flex items-center gap-3 px-6 py-3.5 rounded-xl glass hover:bg-white/10 transition-all w-full sm:w-auto justify-center"
              >
                <Mail className="text-cyan-400 w-5 h-5" />
                <span>{PROFILE.email}</span>
              </a>
              <div className="flex items-center gap-3 px-6 py-3.5 rounded-xl glass w-full sm:w-auto justify-center">
                <MapPin className="text-purple-400 w-5 h-5" />
                <span>{PROFILE.location}</span>
              </div>
            </div>

            <form
              onSubmit={handleSubmit}
              className="space-y-4 text-left glass p-6 rounded-2xl"
            >
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  type="text"
                  placeholder="Your name"
                  className="w-full bg-black/30 border border-white/10 rounded-lg p-3 text-white placeholder-gray-500 focus:border-cyan-400 focus:outline-none transition-colors"
                />
                <input
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  type="email"
                  placeholder="Your email"
                  className="w-full bg-black/30 border border-white/10 rounded-lg p-3 text-white placeholder-gray-500 focus:border-cyan-400 focus:outline-none transition-colors"
                />
              </div>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                placeholder="Your message"
                rows="4"
                className="w-full bg-black/30 border border-white/10 rounded-lg p-3 text-white placeholder-gray-500 focus:border-cyan-400 focus:outline-none transition-colors"
              />
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-cyan-400 to-purple-600 text-white font-semibold py-3 rounded-lg hover:shadow-[0_0_20px_rgba(0,242,255,0.4)] transition-all flex items-center justify-center gap-2"
              >
                Send Message <Send size={18} />
              </button>
            </form>
          </div>
        </div>

        {/* Terminal Experience Section */}
        <div className="mt-20">
          <h3 className="text-xl font-bold mb-6 text-center text-gray-400">
            Prefer the command line? Try the terminal
          </h3>
          <TerminalSection />
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 text-center text-gray-500 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
          <p>
            © {new Date().getFullYear()} {PROFILE.name}. Built with React, Tailwind
            & Framer Motion.
          </p>
          <div className="flex gap-4">
            <a
              href={PROFILE.social.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hover:text-cyan-400 transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href={PROFILE.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-cyan-400 transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href={PROFILE.social.email}
              aria-label="Email"
              className="hover:text-cyan-400 transition-colors"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
