
import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Cpu, Eye, Mail, Globe, Music } from "lucide-react";
import SectionHeader from "./SectionHeader";

const AI_PROJECTS = [
  {
    name: "Google Maps Scraper",
    description: "Automated data extraction tool for Google Maps. Scrapes business details, reviews, and contact info for market research and lead generation at scale.",
    tech: "Python + Selenium",
    icon: Globe,
    color: "from-green-500 to-emerald-400",
    link: "https://github.com/Anikesh0001/Google-Map-Scraper"
  },
  {
    name: "AniMusic",
    description: "A beautifully animated music streaming web app with playlist management, smooth UI transitions, and a seamless audio playback experience.",
    tech: "HTML + CSS + JS",
    icon: Music,
    color: "from-pink-500 to-purple-500",
    link: "https://github.com/Anikesh0001/AniMusic"
  },
  {
    name: "ProctoVision",
    description: "AI-based real-time exam proctoring system featuring advanced object detection and pose estimation to ensure exam integrity.",
    tech: "TensorFlow.js + React",
    icon: Eye,
    color: "from-blue-500 to-cyan-400",
    link: "https://github.com/Anikesh0001/ProctoVision"
  },
  {
    name: "Gmail AI Assistant",
    description: "Automated email management system using n8n workflows to categorize and draft responses via LLM integration.",
    tech: "OpenAI + n8n",
    icon: Mail,
    color: "from-orange-500 to-red-500",
    link: "https://github.com/Anikesh0001/gmail-ai-assistant-n8n"
  }
];

export default function AIHighlights() {
  return (
    <section className="section-padding relative overflow-hidden">
      <SectionHeader
        eyebrow="01 — Spotlight"
        title="Projects I'm"
        highlight="proud of"
        subtitle="A few standouts across automation, AI, and creative front-end work."
      />

      <div className="grid md:grid-cols-2 gap-8 relative z-10">
        {AI_PROJECTS.map((project, index) => (
          <motion.a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative block"
          >
            <div className={`absolute inset-0 bg-gradient-to-r ${project.color} rounded-2xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-500`} />
            <div className="relative bg-[#0a0a0a]/90 border border-white/10 p-8 rounded-2xl h-full hover:translate-y-[-5px] transition-transform duration-300">
              <div className="flex justify-between items-start mb-6">
                <div className={`p-3 rounded-lg bg-gradient-to-br ${project.color} bg-opacity-10`}>
                  <project.icon className="text-white w-6 h-6" />
                </div>
                <ExternalLink className="text-gray-500 group-hover:text-white transition-colors" />
              </div>
              
              <h3 className="text-2xl font-bold mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all">
                {project.name}
              </h3>
              
              <p className="text-gray-400 mb-6 leading-relaxed">
                {project.description}
              </p>

              <div className="flex items-center gap-2 text-sm font-mono text-gray-300">
                <Cpu size={14} />
                <span>{project.tech}</span>
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
