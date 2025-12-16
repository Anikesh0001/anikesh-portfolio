
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send, Sparkles, Bot } from "lucide-react";
import { PROFILE } from "../data/constants";

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hi! I'm Anikesh's Virtual Assistant. Ask me about his skills, projects, or how to contact him!", isBot: true }
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const generateResponse = (text) => {
    const lowerText = text.toLowerCase();
    
    if (lowerText.includes("hello") || lowerText.includes("hi") || lowerText.includes("hey")) {
      return "Hello! How can I assist you today?";
    }
    if (lowerText.includes("contact") || lowerText.includes("email") || lowerText.includes("reach")) {
      return `You can reach Anikesh at ${PROFILE.email}. He is always open to interesting opportunities!`;
    }
    if (lowerText.includes("project") || lowerText.includes("work") || lowerText.includes("built")) {
      return "Anikesh has built several impressive projects including an AI Proctoring System, a Sales Chatbot, and a Hospital Management System. Check out the Projects section above!";
    }
    if (lowerText.includes("skill") || lowerText.includes("stack") || lowerText.includes("tech")) {
      return "Anikesh is proficient in the MERN stack (MongoDB, Express, React, Node.js), Python, AI/ML libraries like TensorFlow/PyTorch, and automation tools like n8n.";
    }
    if (lowerText.includes("resume") || lowerText.includes("cv")) {
      return "You can view and download his resume by clicking the 'Resume' button in the top right corner of the navbar.";
    }
    if (lowerText.includes("education") || lowerText.includes("degree")) {
      return "He is pursuing a dual degree: B.E. in Computer Science at VVCE Mysore and a BS in Data Science from IIT Madras.";
    }
    
    return "That's an interesting question! While I'm just a simple bot, I'd suggest looking through the portfolio sections or emailing Anikesh directly for more specific details.";
  };

  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMsg = input;
    setMessages((prev) => [...prev, { text: userMsg, isBot: false }]);
    setInput("");
    setIsTyping(true);

    // Simulate think time
    setTimeout(() => {
      const response = generateResponse(userMsg);
      setMessages((prev) => [...prev, { text: response, isBot: true }]);
      setIsTyping(false);
    }, 1000);
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 p-4 rounded-full bg-gradient-to-r from-cyan-400 to-purple-600 text-white shadow-lg hover:shadow-[0_0_20px_rgba(112,0,255,0.5)] transition-all hover:scale-110"
      >
        {isOpen ? <X /> : <MessageSquare />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-24 right-6 w-80 md:w-96 bg-[#0a0a0a] border border-white/10 rounded-2xl shadow-2xl overflow-hidden z-50 flex flex-col h-[500px]"
          >
            {/* Header */}
            <div className="p-4 bg-gradient-to-r from-cyan-900/50 to-purple-900/50 border-b border-white/5 flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-400 to-purple-600 flex items-center justify-center text-sm font-bold">
                <Bot size={18} className="text-white" />
              </div>
              <div>
                <h4 className="font-bold text-white">Portfolio Assistant</h4>
                <div className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-xs text-gray-400">Online</span>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 p-4 overflow-y-auto space-y-4">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.isBot ? "justify-start" : "justify-end"}`}>
                  <div className={`max-w-[85%] p-3 rounded-xl text-sm leading-relaxed ${msg.isBot ? "bg-white/10 text-gray-200" : "bg-purple-600 text-white"}`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white/10 p-3 rounded-xl flex gap-1">
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100" />
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200" />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <form onSubmit={handleSend} className="p-3 border-t border-white/10 flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask something..."
                className="flex-1 bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-cyan-400"
              />
              <button type="submit" className="p-2 bg-cyan-400 text-black rounded-lg hover:bg-cyan-300 transition-colors">
                <Send size={18} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
