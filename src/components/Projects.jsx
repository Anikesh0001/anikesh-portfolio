
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, Code2 } from "lucide-react";
import projectsData from "../data/projects.json";

const CATEGORIES = ["All", "AI", "Web", "Automation"];

export default function Projects() {
  const [filter, setFilter] = useState("All");

  const filteredProjects = projectsData.filter((project) => {
    if (filter === "All") return true;
    // Simple logic to guess category based on tech stack or title
    // Real implementation would ideally have a 'category' field in JSON
    // Adjusting logic to infer:
    const searchStr = (project.name + project.description + project.tech.join(" ")).toLowerCase();
    if (filter === "AI") return searchStr.includes("ai " ) || searchStr.includes("model") || searchStr.includes("ml") || searchStr.includes("procto") || searchStr.includes("llm");
    if (filter === "Web") return searchStr.includes("react") || searchStr.includes("web") || searchStr.includes("flask") || searchStr.includes("node");
    if (filter === "Automation") return searchStr.includes("n8n") || searchStr.includes("automation") || searchStr.includes("bot");
    return false;
  });

  return (
    <section id="projects" className="section-padding">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
        <div>
          <h2 className="text-4xl font-bold mb-4">Featured <span className="text-gradient">Projects</span></h2>
          <div className="h-1 w-20 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full" />
        </div>
        
        {/* Filter Tabs */}
        <div className="flex gap-2 p-1 glass rounded-xl bg-black/40">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-lg text-sm font-medium transition-all ${
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

      <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence>
          {filteredProjects.map((project, index) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              key={project.name}
              className="group glass rounded-2xl overflow-hidden hover:shadow-[0_0_40px_rgba(0,242,255,0.1)] transition-all duration-500"
            >
              <div className="p-8 h-full flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-3 bg-white/5 rounded-xl text-cyan-400">
                    <Code2 size={24} />
                  </div>
                  <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <a href={project.link} target="_blank" className="p-2 hover:bg-white/10 rounded-full text-white transition-colors">
                      <Github size={20} />
                    </a>
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-3 group-hover:text-cyan-400 transition-colors">
                  {project.name}
                </h3>
                
                <p className="text-gray-400 text-sm mb-6 flex-grow leading-relaxed">
                  {project.description}
                </p>

                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="text-xs font-mono text-cyan-300 bg-cyan-900/20 px-2 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3 pt-4 border-t border-white/5">
                     <a href={project.link} target="_blank" className="w-full py-2 rounded-lg bg-white/5 hover:bg-cyan-500 hover:text-black transition-all text-center text-sm font-bold flex items-center justify-center gap-2">
                       <Github size={16} /> View Code
                     </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
