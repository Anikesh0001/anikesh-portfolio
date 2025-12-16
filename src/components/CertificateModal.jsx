import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn, ZoomOut, Download, ExternalLink } from "lucide-react";

export default function CertificateModal({ isOpen, onClose, certificate }) {
  const [scale, setScale] = useState(1);

  if (!isOpen || !certificate) return null;

  const getAssetPath = (path) => {
    const baseUrl = import.meta.env.BASE_URL;
    const cleanPath = path.startsWith("/") ? path.substring(1) : path;
    const cleanBaseUrl = baseUrl.endsWith("/") ? baseUrl : baseUrl + "/";
    return cleanBaseUrl + cleanPath;
  };

  const fileUrl = getAssetPath(certificate.file);
  const isPDF = certificate.file.toLowerCase().endsWith(".pdf");

  const handleZoomIn = () => setScale((prev) => Math.min(prev + 0.2, 3));
  const handleZoomOut = () => setScale((prev) => Math.max(prev - 0.2, 0.5));

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="bg-[#1a1a1a] w-full max-w-5xl h-[85vh] rounded-2xl border border-white/10 flex flex-col overflow-hidden relative shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex justify-between items-center p-4 border-b border-white/10 bg-[#0a0a0a] z-50">
            <div>
              <h3 className="text-xl font-bold text-white truncate max-w-md">
                {certificate.title}
              </h3>
              <p className="text-sm text-gray-400">{certificate.issuer}</p>
            </div>
            
            <div className="flex items-center gap-3">
              {!isPDF && (
                <div className="hidden sm:flex gap-2">
                  <button 
                    onClick={handleZoomOut}
                    className="p-2 hover:bg-white/10 rounded-lg transition-colors text-gray-400 hover:text-white"
                  >
                    <ZoomOut size={20} />
                  </button>
                  <button 
                    onClick={handleZoomIn}
                    className="p-2 hover:bg-white/10 rounded-lg transition-colors text-gray-400 hover:text-white"
                  >
                    <ZoomIn size={20} />
                  </button>
                </div>
              )}
              
              <a 
                href={fileUrl} 
                download
                className="p-2 hover:bg-white/10 rounded-lg transition-colors text-cyan-400 hover:text-cyan-300"
                title="Download"
              >
                <Download size={20} />
              </a>

              <a 
                href={fileUrl} 
                target="_blank"
                rel="noreferrer"
                className="p-2 hover:bg-white/10 rounded-lg transition-colors text-gray-400 hover:text-white sm:hidden"
                title="Open in new tab"
              >
                <ExternalLink size={20} />
              </a>

              <button 
                onClick={onClose} 
                className="p-2 bg-white/10 hover:bg-red-500/20 text-white hover:text-red-400 rounded-lg transition-all"
              >
                <X size={20} />
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 bg-[#121212] overflow-auto flex items-center justify-center p-4 relative">
            {isPDF ? (
              <iframe 
                src={fileUrl} 
                className="w-full h-full rounded-lg border border-white/5"
                title={certificate.title}
              />
            ) : (
              <div className="overflow-auto w-full h-full flex items-center justify-center">
                <motion.img 
                  animate={{ scale }}
                  drag
                  dragConstraints={{ left: -200, right: 200, top: -200, bottom: 200 }}
                  src={fileUrl} 
                  alt={certificate.title}
                  className="max-w-full max-h-full object-contain rounded-lg shadow-lg cursor-grab active:cursor-grabbing"
                />
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
