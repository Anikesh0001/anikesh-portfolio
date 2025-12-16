
import React from "react";
import { EDUCATION, ACHIEVEMENTS } from "../data/constants";
import { GraduationCap, Award } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="section-padding relative">
      <div className="grid md:grid-cols-2 gap-16">
        {/* Education Column */}
        <div>
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <GraduationCap className="text-cyan-400" /> Education
          </h2>
          <div className="space-y-8 border-l-2 border-white/10 pl-8 relative">
            {EDUCATION.map((edu, index) => (
              <div key={index} className="relative">
                <div className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-cyan-400 border-4 border-[#030014]" />
                <h3 className="text-xl font-bold text-white">{edu.institution}</h3>
                <p className="text-cyan-400 font-medium">{edu.degree}</p>
                <div className="flex justify-between text-sm text-gray-400 mt-1">
                  <span>{edu.duration}</span>
                  <span>{edu.score}</span>
                </div>
                <p className="text-sm text-gray-500 mt-1">{edu.location}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements Column */}
        <div>
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <Award className="text-purple-500" /> Achievements
          </h2>
          <div className="grid gap-4">
            {ACHIEVEMENTS.map((ach, index) => (
              <div 
                key={index}
                className="glass p-6 rounded-xl border-l-4 border-l-purple-500 hover:translate-x-2 transition-transform duration-300"
              >
                <p className="text-gray-300 text-sm leading-relaxed">
                  {ach}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
