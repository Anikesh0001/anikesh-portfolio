
import React from "react";
import { motion } from "framer-motion";
import skillsData from "../data/skills.json";

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

export default function Skills() {
  const categories = Object.keys(skillsData);

  return (
    <section id="skills" className="section-padding">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">
          Tech <span className="text-gradient">Arsenal</span>
        </h2>
        <p className="text-gray-400">
          Tools and technologies I use to craft digital experiences.
        </p>
      </div>

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
                <h3 className="text-xl font-bold capitalize">{category}</h3>
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
