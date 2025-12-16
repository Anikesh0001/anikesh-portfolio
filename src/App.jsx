
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutTimeline from "./components/AboutTimeline";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import AIHighlights from "./components/AIHighlights";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Loader from "./components/Loader";
import Chatbot from "./components/Chatbot";
import Certifications from "./components/Certifications";
import Resume from "./components/Resume";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <Loader onComplete={() => setLoading(false)} />}
      
      {!loading && (
        <div className="relative z-0 bg-[#030014] overflow-x-hidden">
          <Navbar />
          <Hero />
          
          <div className="relative">
            {/* Global Background Glow */}
            <div className="fixed inset-0 pointer-events-none z-[-1]">
              <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-600/10 rounded-full blur-[120px]" />
              <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-cyan-400/10 rounded-full blur-[120px]" />
            </div>
            
            <AIHighlights />
            <AboutTimeline />
            <Skills />
            <Projects />
            <Certifications />
            <Testimonials />
            <Contact />
          </div>
          
          <Chatbot />
          <ScrollToTop />
        </div>
      )}
    </>
  );
}
