import React from "react";
import { motion } from "framer-motion";
import { Trophy, Medal, Award, Star, Flag, Target } from "lucide-react";
import SectionHeader from "./SectionHeader";

// Honest, verifiable recognition — stronger than anonymous testimonials.
const RECOGNITION = [
  {
    icon: Trophy,
    title: "Winner",
    detail: "Hack the Hackers Hackathon — GSSSIETW",
    color: "text-yellow-400",
    ring: "from-yellow-500/20",
  },
  {
    icon: Medal,
    title: "1st Rank",
    detail: "Ai-Thon — Global Coding Conquest",
    color: "text-cyan-400",
    ring: "from-cyan-500/20",
  },
  {
    icon: Award,
    title: "Finalist",
    detail: "National Hackathon — MITS",
    color: "text-purple-400",
    ring: "from-purple-500/20",
  },
  {
    icon: Star,
    title: "Best Co-curricular Award",
    detail: "5th Semester — VVCE, Mysuru",
    color: "text-emerald-400",
    ring: "from-emerald-500/20",
  },
  {
    icon: Flag,
    title: "Participant",
    detail: "National Road Safety Hackathon — IIT Madras",
    color: "text-pink-400",
    ring: "from-pink-500/20",
  },
  {
    icon: Target,
    title: "200+ DSA Problems",
    detail: "Solved across competitive coding platforms",
    color: "text-orange-400",
    ring: "from-orange-500/20",
  },
];

export default function Testimonials() {
  return (
    <section id="recognition" className="section-padding bg-[#05051a]">
      <SectionHeader
        eyebrow="— Recognition"
        title="Wins &"
        highlight="Highlights"
        subtitle="Competitions, awards, and milestones I've earned along the way."
        align="center"
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {RECOGNITION.map((item, index) => (
          <motion.div
            key={item.title + item.detail}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
            className="group relative glass rounded-2xl p-6 border border-white/10 hover:border-white/20 hover:-translate-y-1 transition-all duration-400 overflow-hidden"
          >
            <div
              className={`absolute -top-10 -right-10 w-32 h-32 rounded-full bg-gradient-to-br ${item.ring} to-transparent blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
            />
            <div className="relative z-10">
              <div className={`p-3 rounded-xl bg-white/5 inline-flex mb-4 ${item.color}`}>
                <item.icon size={24} />
              </div>
              <h3 className="text-lg font-bold text-white mb-1">{item.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{item.detail}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
