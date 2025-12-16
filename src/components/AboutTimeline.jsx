
import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Code2, Trophy, Briefcase } from "lucide-react";

const TIMELINE_DATA = [
  {
    year: "2023 - Present",
    title: "B.E. Computer Science",
    place: "Vidyavardhaka College of Engineering",
    description: "Building strong foundations in algorithms, system design, and software engineering. Consistent academic performer with 9.1 CGPA.",
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
    year: "2025",
    title: "HackOrbit 2025",
    place: "National Hackathon Finalist",
    description: "Led a team to develop an innovative solution for real-world problems. Recognized for technical excellence and rapid prototyping.",
    icon: Trophy,
    color: "text-yellow-400"
  },
  {
    year: "2024",
    title: "Full Stack Development",
    place: "Self-Driven",
    description: "built multiple complex projects including LeetCode clone and Hospital Management System. Mastered React, Node.js, and Flask.",
    icon: Code2,
    color: "text-green-400"
  }
];

import { Brain } from "lucide-react"; // Import missing icon

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
