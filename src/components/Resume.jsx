import React, { useState } from "react";
import { motion } from "framer-motion";
import { FileText, Download, Eye } from "lucide-react";
import ResumeModal from "./ResumeModal";

export default function Resume() {
  const [showResume, setShowResume] = useState(false);

  const getAssetPath = (path) => {
    const baseUrl = import.meta.env.BASE_URL;
    const cleanPath = path.startsWith("/") ? path.substring(1) : path;
    const cleanBaseUrl = baseUrl.endsWith("/") ? baseUrl : baseUrl + "/";
    return cleanBaseUrl + cleanPath;
  };

  return (
    <section id="resume" className="section-padding relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-400/10 rounded-full blur-[120px] -z-10" />

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Glass Card Container */}
          <div className="glass p-12 rounded-2xl border border-white/10 text-center relative overflow-hidden group">
            {/* Hover Gradient Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative z-10">
              <div className="inline-block p-4 rounded-full bg-gradient-to-br from-cyan-400/20 to-purple-600/20 mb-6 border border-white/10">
                <FileText className="w-8 h-8 text-cyan-400" />
              </div>

              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                My <span className="text-gradient">Resume</span>
              </h2>
              
              <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto font-light">
                Download my resume or view it online to learn more about my experience and skills.
              </p>

              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <button
                  onClick={() => setShowResume(true)}
                  className="px-8 py-4 rounded-full bg-gradient-to-r from-cyan-400 to-purple-600 text-white font-bold flex items-center justify-center gap-3 hover:shadow-[0_0_30px_rgba(0,242,255,0.4)] transition-all hover:-translate-y-1 group/btn"
                >
                  <Eye className="w-5 h-5 group-hover/btn:scale-110 transition-transform" />
                  View Resume
                </button>

                <a
                  href={getAssetPath("resume.pdf")}
                  download
                  className="px-8 py-4 rounded-full glass border border-white/20 hover:bg-white/10 transition-all hover:-translate-y-1 flex items-center justify-center gap-3 font-bold group/btn"
                >
                  <Download className="w-5 h-5 text-cyan-400 group-hover/btn:scale-110 transition-transform" />
                  Download PDF
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <ResumeModal isOpen={showResume} onClose={() => setShowResume(false)} />
    </section>
  );
}
