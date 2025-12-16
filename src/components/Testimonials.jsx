
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote } from "lucide-react";
import testimonialsData from "../data/testimonials.json";

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonialsData.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="section-padding bg-[#05051a]">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          What People <span className="text-gradient">Say</span>
        </h2>

        <div className="relative min-h-[300px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <Quote size={48} className="text-cyan-400/30 mx-auto mb-6" />
              
              <p className="text-2xl md:text-3xl font-light text-gray-200 mb-8 italic leading-relaxed">
                "{testimonialsData[index].feedback}"
              </p>
              
              <div className="inline-block">
                <h4 className="text-xl font-bold text-white">{testimonialsData[index].name}</h4>
                <p className="text-cyan-400">{testimonialsData[index].role}</p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Dots */}
          <div className="absolute -bottom-10 flex gap-2">
            {testimonialsData.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`w-3 h-3 rounded-full transition-all ${
                  i === index ? "bg-cyan-400 w-8" : "bg-gray-700 hover:bg-gray-500"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
