import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ArrowUpRight, Code2 } from "lucide-react";
import projectsData from "../data/projects.json";
import SectionHeader from "./SectionHeader";

const CATEGORIES = ["All", "Web", "AI", "Automation"];

export default function Projects() {
  const [filter, setFilter] = useState("All");

  const filteredProjects = projectsData.filter(
    (p) => filter === "All" || p.category === filter
  );

  return (
    <section id="projects" className="section-padding">
      <div className="flex flex-col md:flex-row justify-between md:items-end gap-8 mb-14">
        <SectionHeader
          eyebrow="04 — Work"
          title="Featured"
          highlight="Projects"
          subtitle="A selection of things I've designed, built, and shipped — from full-stack platforms to AI and automation."
        />

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-1.5 p-1.5 glass rounded-xl bg-black/40 self-start md:self-auto shrink-0">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 rounded-lg text-sm font-medium transition-all ${
                filter === cat
                  ? "bg-gradient-to-r from-cyan-500 to-cyan-400 text-black shadow-lg"
                  : "text-gray-400 hover:text-white hover:bg-white/5"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, index) => (
            <motion.a
              layout
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4, delay: (index % 3) * 0.08 }}
              key={project.name}
              className="group relative flex flex-col glass rounded-2xl p-6 border border-white/10 hover:border-cyan-400/30 hover:-translate-y-1.5 hover:shadow-[0_20px_50px_-20px_rgba(0,242,255,0.25)] transition-all duration-500"
            >
              <div className="flex justify-between items-start mb-5">
                <div className="p-2.5 bg-white/5 rounded-xl text-cyan-400 group-hover:bg-cyan-400/10 transition-colors">
                  <Code2 size={22} />
                </div>
                <span className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/5 text-gray-400 border border-white/10">
                  {project.category}
                </span>
              </div>

              <h3 className="text-lg font-bold mb-2.5 group-hover:text-cyan-400 transition-colors flex items-center gap-1.5">
                {project.name}
                <ArrowUpRight
                  size={16}
                  className="opacity-0 -translate-y-0.5 group-hover:opacity-100 group-hover:translate-y-0 transition-all text-cyan-400"
                />
              </h3>

              <p className="text-gray-400 text-sm mb-5 flex-grow leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-1.5 mb-5">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-[11px] font-mono text-cyan-300/90 bg-cyan-900/20 border border-cyan-500/10 px-2 py-0.5 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-2 pt-4 border-t border-white/5 text-sm font-medium text-gray-400 group-hover:text-white transition-colors">
                <Github size={16} /> View on GitHub
              </div>
            </motion.a>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
