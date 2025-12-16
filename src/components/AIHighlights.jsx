
import React from "react";
import { motion } from "framer-motion";
import { Brain, ExternalLink, Cpu, Eye, MessageSquare, Mail } from "lucide-react";

const AI_PROJECTS = [
  {
    name: "ProctoVision",
    description: "AI-based real-time exam proctoring system featuring advanced object detection and pose estimation to ensure exam integrity.",
    tech: "TensorFlow.js + React",
    icon: Eye,
    color: "from-blue-500 to-cyan-400",
    link: "https://github.com/Anikesh0001/ProctoVision"
  },
  {
    name: "HackRx System",
    description: "Intelligent document QA system powered by LLMs (Gemini) and Pinecone vector database for semantic search.",
    tech: "Gemini + Pinecone",
    icon: Brain,
    color: "from-purple-500 to-pink-500",
    link: "https://github.com/Anikesh0001/hackrx"
  },
  {
    name: "Sales Chatbot",
    description: "Context-aware conversational AI designed to handle complex product inquiries and drive sales automation.",
    tech: "NLP + Python",
    icon: MessageSquare,
    color: "from-orange-500 to-red-500",
    link: "https://github.com/Anikesh0001/sales_chatbot"
  },
  {
    name: "Gmail AI Assistant",
    description: "Automated email management system using n8n workflows to categorize/draft responses via OpenAI.",
    tech: "OpenAI + n8n",
    icon: Mail,
    color: "from-green-500 to-emerald-400",
    link: "https://github.com/Anikesh0001/gmail-ai-assistant-n8n"
  }
];

export default function AIHighlights() {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="text-center mb-16 relative z-10">
        <h2 className="text-4xl font-bold mb-4">
          Featured <span className="text-gradient">AI Solutions</span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Cutting-edge artificial intelligence projects pushing the boundaries of automation and computer vision.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 relative z-10">
        {AI_PROJECTS.map((project, index) => (
          <motion.a
            href={project.link}
            target="_blank"
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group relative block"
          >
            <div className={`absolute inset-0 bg-gradient-to-r ${project.color} rounded-2xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-500`} />
            <div className="relative bg-[#0a0a0a]/90 border border-white/10 p-8 rounded-2xl h-full hover:translate-y-[-5px] transition-transform duration-300">
              <div className="flex justify-between items-start mb-6">
                <div className={`p-3 rounded-lg bg-gradient-to-br ${project.color} bg-opacity-10`}>
                  <project.icon className="text-white w-6 h-6" />
                </div>
                <ExternalLink className="text-gray-500 group-hover:text-white transition-colors" />
              </div>
              
              <h3 className="text-2xl font-bold mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all">
                {project.name}
              </h3>
              
              <p className="text-gray-400 mb-6 leading-relaxed">
                {project.description}
              </p>

              <div className="flex items-center gap-2 text-sm font-mono text-gray-300">
                <Cpu size={14} />
                <span>{project.tech}</span>
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
