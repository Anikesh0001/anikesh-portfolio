
import React from "react";
import { X, Download, FileText } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const getAssetPath = (path) => {
    const baseUrl = import.meta.env.BASE_URL;
    const cleanPath = path.startsWith("/") ? path.substring(1) : path;
    const cleanBaseUrl = baseUrl.endsWith("/") ? baseUrl : baseUrl + "/";
    return cleanBaseUrl + cleanPath;
  };

  const resumeUrl = getAssetPath("resume.pdf");

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="bg-[#1a1a1a] w-full max-w-4xl h-[85vh] rounded-2xl border border-white/10 flex flex-col overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex justify-between items-center p-4 border-b border-white/10 bg-[#0a0a0a]">
            <h3 className="text-xl font-bold flex items-center gap-2">
              <FileText className="text-cyan-400" /> Resume
            </h3>
            <div className="flex gap-4">
              <a 
                href={resumeUrl} 
                download
                className="flex items-center gap-2 px-4 py-2 bg-cyan-600 rounded-lg hover:bg-cyan-500 transition-colors text-sm font-bold"
              >
                <Download size={16} /> Download
              </a>
              <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-lg transition-colors">
                <X />
              </button>
            </div>
          </div>

          {/* PDF Viewer using iframe */}
          <div className="flex-1 bg-gray-800">
            <iframe 
              src={resumeUrl} 
              className="w-full h-full"
              title="Resume PDF"
            />
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
