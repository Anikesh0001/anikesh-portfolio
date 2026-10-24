
import React from "react";
import { motion } from "framer-motion";
import skillsData from "../data/skills.json";
import SectionHeader from "./SectionHeader";

// Manual icon mapping since JSON can't store icon components
import { Code2, Globe, Database, Terminal, Cpu, PenTool } from "lucide-react";

// Helper to map categories to icons
const getIcon = (category) => {
  const map = {
    frontend: Globe,
    backend: Terminal,
    ai: Cpu,
    database: Database,
    tools: PenTool
  };
  return map[category] || Code2;
};

// Display labels (keeps acronyms like "AI" uppercase).
const getLabel = (category) => {
  const map = {
    frontend: "Frontend",
    backend: "Backend",
    ai: "AI & ML",
    database: "Database",
    tools: "Tools & DevOps",
  };
  return map[category] || category;
};

export default function Skills() {
  const categories = Object.keys(skillsData);

  return (
    <section id="skills" className="section-padding">
      <SectionHeader
        eyebrow="03 — Stack"
        title="Skills &"
        highlight="Tools"
        subtitle="The languages, frameworks, and tools I reach for to build and ship full-stack applications."
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category, index) => {
          const Icon = getIcon(category);
          return (
            <motion.div
              key={category}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="glass p-8 rounded-2xl group hover:border-cyan-400/50 transition-colors"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-white/5 text-cyan-400 group-hover:scale-110 transition-transform">
                  <Icon size={24} />
                </div>
                <h3 className="text-xl font-bold">{getLabel(category)}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {skillsData[category].map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-2 text-sm rounded-lg bg-[#030014] border border-white/5 text-gray-300 hover:text-white hover:border-cyan-400/30 hover:shadow-[0_0_15px_rgba(0,242,255,0.15)] transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
