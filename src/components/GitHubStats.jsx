
import React from "react";
import { motion } from "framer-motion";

export default function GitHubStats() {
  return (
    <section className="section-padding">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">
          Open Source <span className="text-gradient">Contribution</span>
        </h2>
        <p className="text-gray-400">My activity and statistics from GitHub.</p>
      </div>

      <div className="flex flex-col gap-6 max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="flex flex-col md:flex-row gap-6 justify-center"
        >
          <img 
            src="https://github-readme-stats.vercel.app/api?username=Anikesh0001&show_icons=true&theme=default&hide_border=true&bg_color=030014&title_color=00f2ff&icon_color=7000ff&text_color=ffffff" 
            alt="Anikesh's GitHub Stats"
            className="w-full md:w-1/2 rounded-xl shadow-lg border border-white/10"
          />
          <img 
            src="https://github-readme-streak-stats.herokuapp.com/?user=Anikesh0001&theme=default&hide_border=true&background=030014&ring=7000ff&fire=00f2ff&currStreakLabel=7000ff" 
            alt="Anikesh's Streak"
            className="w-full md:w-1/2 rounded-xl shadow-lg border border-white/10"
          />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="flex justify-center"
        >
          <img 
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=Anikesh0001&layout=compact&theme=default&hide_border=true&bg_color=030014&title_color=00f2ff&text_color=ffffff" 
            alt="Top Languages"
            className="w-full max-w-lg rounded-xl shadow-lg border border-white/10"
          />
        </motion.div>
      </div>
    </section>
  );
}
