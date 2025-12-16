import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Building, ExternalLink, FileText } from "lucide-react";
import CertificateModal from "./CertificateModal";

export default function Certifications() {
  const [certificates, setCertificates] = useState([]);
  const [selectedCert, setSelectedCert] = useState(null);

  useEffect(() => {
    fetch(import.meta.env.BASE_URL + "certificates.json")
      .then((res) => res.json())
      .then((data) => setCertificates(data))
      .catch((err) => console.error("Error loading certificates:", err));
  }, []);

  const getAssetPath = (path) => {
    const baseUrl = import.meta.env.BASE_URL;
    const cleanPath = path.startsWith("/") ? path.substring(1) : path;
    const cleanBaseUrl = baseUrl.endsWith("/") ? baseUrl : baseUrl + "/";
    return cleanBaseUrl + cleanPath;
  };

  const getIssuerIcon = (issuer) => {
    if (issuer.includes("Google")) return "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg";
    if (issuer.includes("Madras")) return null; // Use icon for IIT
    if (issuer.includes("Government") || issuer.includes("Ministry")) return "https://upload.wikimedia.org/wikipedia/commons/5/55/Emblem_of_India.svg";
    return null;
  };

  return (
    <section id="certifications" className="section-padding relative">
       {/* Background Elements */}
       <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-purple-600/5 rounded-full blur-[120px] -z-10" />

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            Certifications & <span className="text-gradient">Achievements</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Verified certifications, academic credentials, and national-level participations.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => {
            const isPDF = cert.file.toLowerCase().endsWith(".pdf");
            const issuerLogo = getIssuerIcon(cert.issuer);

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setSelectedCert(cert)}
                className="glass rounded-2xl border border-white/10 overflow-hidden group cursor-pointer hover:border-cyan-400/30 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)] flex flex-col h-full"
              >
                {/* Thumbnail Area */}
                <div className="relative h-48 w-full bg-gray-900/50 overflow-hidden border-b border-white/5">
                  {isPDF ? (
                    <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-gradient-to-br from-gray-800 to-gray-900 group-hover:scale-105 transition-transform duration-500">
                      {issuerLogo ? (
                        <img src={issuerLogo} alt={cert.issuer} className="h-16 w-auto mb-3 opacity-80" />
                      ) : (
                         <div className="p-4 rounded-full bg-white/5">
                            <Building size={40} className="text-gray-500" />
                         </div>
                      )}
                      <div className="flex items-center gap-2 text-cyan-400 text-sm font-bold bg-black/30 px-3 py-1 rounded-full mt-2 backdrop-blur-sm border border-white/10">
                        <FileText size={14} /> PDF Certificate
                      </div>
                    </div>
                  ) : (
                    <>
                      <img 
                        src={getAssetPath(cert.file)} 
                        alt={cert.title} 
                        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent opacity-60" />
                    </>
                  )}
                  
                  {/* Type Badge */}
                  <div className="absolute top-4 right-4">
                    <span className={`text-[10px] font-bold px-3 py-1 rounded-full border backdrop-blur-md shadow-lg ${
                      cert.type.includes("Participation") ? "border-purple-500/30 text-purple-200 bg-purple-500/20" :
                      cert.type.includes("Professional") ? "border-cyan-500/30 text-cyan-200 bg-cyan-500/20" :
                      "border-yellow-500/30 text-yellow-200 bg-yellow-500/20"
                    }`}>
                      {cert.type}
                    </span>
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-xs font-mono text-gray-500">{cert.year}</span>
                    <span className="text-xs text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                      View <ExternalLink size={12} />
                    </span>
                  </div>

                  <h3 className="text-lg font-bold mb-3 leading-tight group-hover:text-cyan-400 transition-colors">
                    {cert.title}
                  </h3>
                  
                  <div className="flex items-center gap-2 text-xs text-gray-400 mb-4 font-medium">
                    {issuerLogo ? (
                         <img src={issuerLogo} alt="Issuer" className="h-4 w-auto grayscale group-hover:grayscale-0 transition-all" /> 
                    ) : (
                        <Building size={14} />
                    )}
                    <span className="truncate">{cert.issuer}</span>
                  </div>

                  <p className="text-sm text-gray-400 leading-relaxed line-clamp-3 mt-auto border-t border-white/5 pt-4">
                    {cert.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <CertificateModal 
        isOpen={!!selectedCert} 
        onClose={() => setSelectedCert(null)} 
        certificate={selectedCert} 
      />
    </section>
  );
}
