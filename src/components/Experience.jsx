import React from "react";
import { motion } from "framer-motion";
import { Briefcase, MapPin, Calendar, ExternalLink, ChevronRight } from "lucide-react";

export default function Experience() {
  const experience = {
    company: "DataWeave",
    role: "Full Stack Developer",
    period: "Present",
    location: "Bengaluru, India",
    companyUrl: "https://dataweave.com",
    bullets: [
      "Work on the DSA (Digital Shelf Analytics) platform, contributing to Python backend services handling data versioning, crawl scheduling, and the pipeline from collection to publishing.",
      "Investigate production issues by tracing accounts and versions across pipeline stages on internal monitoring dashboards, then identify root causes and document findings.",
      "Add automated tests and test stubs for existing modules following team conventions, raising PRs on Bitbucket that go through peer review.",
    ],
    technologies: [
      "Python",
      "SQL",
      "RabbitMQ",
      "REST APIs",
      "Redash",
      "Git",
      "Bitbucket",
      "Jira",
      "Linux",
    ],
  };

  return (
    <section id="experience" className="section-padding relative">
      {/* Ambient background glows */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16 relative z-10"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4">
          <Briefcase className="w-3.5 h-3.5" />
          <span>Professional Experience</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
          Work <span className="text-gradient">Experience</span>
        </h2>
        <div className="h-1 w-20 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full mx-auto" />
      </motion.div>

      {/* Card Container */}
      <div className="max-w-4xl mx-auto relative group">
        {/* Subtle gradient glow behind the card */}
        <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 via-purple-600/20 to-cyan-400/20 rounded-3xl blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-700 -z-10" />

        {/* Main Experience Glass Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative glass rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-10 border border-white/10 overflow-hidden hover:shadow-[0_0_40px_rgba(0,242,255,0.15)] transition-all duration-500"
        >
          {/* Left gradient accent border */}
          <div className="absolute left-0 top-0 bottom-0 w-1.5 md:w-2 bg-gradient-to-b from-cyan-400 to-purple-600" />

          {/* Header Row: Company, Role, Location, Duration & Status Badge */}
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-8">
            <div className="space-y-2">
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={experience.companyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl sm:text-3xl md:text-4xl font-bold text-white hover:text-cyan-400 transition-colors inline-flex items-center gap-2 group/link"
                >
                  <span>{experience.company}</span>
                  <ExternalLink className="w-5 h-5 text-gray-400 group-hover/link:text-cyan-400 transition-colors" />
                </a>
              </div>

              <p className="text-lg md:text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-400">
                {experience.role}
              </p>

              {/* Location & Period */}
              <div className="flex flex-wrap items-center gap-4 text-xs md:text-sm text-gray-400 pt-1">
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-purple-400" />
                  <span>{experience.location}</span>
                </div>
                <span className="hidden sm:inline text-gray-600">•</span>
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-cyan-400" />
                  <span>{experience.period}</span>
                </div>
              </div>
            </div>

            {/* Pulsing Active Employment Badge */}
            <div className="self-start md:self-auto flex items-center">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold tracking-wide shadow-[0_0_15px_rgba(16,185,129,0.2)]">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span>Current</span>
              </div>
            </div>
          </div>

          {/* Bullet Points */}
          <div className="mb-8">
            <h4 className="text-xs uppercase tracking-wider text-gray-400 font-semibold mb-4">
              Key Responsibilities & Impact
            </h4>
            <div className="space-y-4">
              {experience.bullets.map((bullet, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-3.5 text-gray-300 text-sm md:text-base leading-relaxed group/item"
                >
                  <div className="mt-1 flex-shrink-0 p-1 rounded-md bg-cyan-400/10 text-cyan-400 group-hover/item:bg-cyan-400/20 group-hover/item:text-cyan-300 transition-colors">
                    <ChevronRight className="w-4 h-4" />
                  </div>
                  <p className="flex-1 text-gray-300">
                    {bullet}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Tech Stack Pills */}
          <div className="pt-6 border-t border-white/10">
            <h4 className="text-xs uppercase tracking-wider text-gray-400 font-semibold mb-3">
              Technologies & Tools
            </h4>
            <div className="flex flex-wrap gap-2 md:gap-2.5">
              {experience.technologies.map((tech, index) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="px-3.5 py-1.5 rounded-full text-xs md:text-sm font-medium bg-cyan-900/20 text-cyan-300 border border-cyan-500/20 hover:border-cyan-400/50 hover:bg-cyan-900/40 hover:scale-105 transition-all duration-200 cursor-default"
                >
                  {tech}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
