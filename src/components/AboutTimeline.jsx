
import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Code2, Trophy, Briefcase, Brain } from "lucide-react";

const TIMELINE_DATA = [
  {
    year: "Present",
    title: "Full Stack Developer",
    place: "DataWeave, Bengaluru",
    description: "Contributing to the Digital Shelf Analytics platform. Working on Python backend services, production debugging, and automated testing.",
    icon: Briefcase,
    color: "text-green-400"
  },
  {
    year: "2023 - Present",
    title: "B.E. Information Science",
    place: "Vidyavardhaka College of Engineering",
    description: "Building strong foundations in algorithms, system design, and software engineering. CGPA: 8.96/10. Won Best Co-curricular Award in 5th Semester.",
    icon: GraduationCap,
    color: "text-cyan-400"
  },
  {
    year: "Pursuing",
    title: "BS in Data Science",
    place: "IIT Madras",
    description: "Specializing in Mathematics, Statistics, and Machine Learning. Completed Foundation Level with distinction.",
    icon: Brain,
    color: "text-purple-400"
  },
  {
    year: "2026",
    title: "Hackathon Champion",
    place: "Multiple National Wins",
    description: "Winner of Hack the Hackers Hackathon. 1st Rank in Ai-Thon Global Coding Conquest. Finalist at National Hackathon, MITS.",
    icon: Trophy,
    color: "text-yellow-400"
  },
  {
    year: "2024 - 2026",
    title: "Full Stack Projects",
    place: "Self-Driven",
    description: "Built Placement Portal V2, Hospital Management System, Google Maps Scraper, and multiple AI-powered applications. 200+ DSA problems solved.",
    icon: Code2,
    color: "text-cyan-300"
  }
];

export default function AboutTimeline() {
  return (
    <section id="about" className="section-padding">
      <h2 className="text-4xl font-bold text-center mb-16">
        My <span className="text-gradient">Journey</span>
      </h2>

      <div className="max-w-3xl mx-auto relative">
        {/* Vertical Line */}
        <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 to-purple-600 opacity-30" />

        {TIMELINE_DATA.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className={`flex items-start gap-8 mb-12 relative ${
              index % 2 === 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Dot */}
            <div className="absolute left-[20px] md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#030014] border-4 border-cyan-400 rounded-full z-10" />

            {/* Content Card */}
            <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pl-12" : "md:pr-12 md:text-right"}`}>
              <div className="glass p-6 rounded-xl hover:bg-white/5 transition-colors group">
                <div className={`flex items-center gap-2 mb-2 ${index % 2 === 0 ? "" : "md:flex-row-reverse md:justify-end"}`}>
                  <span className="text-sm font-mono text-gray-500 bg-white/5 px-2 py-1 rounded">{item.year}</span>
                  <item.icon className={`w-5 h-5 ${item.color}`} />
                </div>
                <h3 className="text-xl font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors">{item.title}</h3>
                <p className="text-sm text-purple-400 mb-3">{item.place}</p>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
