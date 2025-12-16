
import React from "react";
import { Mail, MapPin, Send } from "lucide-react";
import { PROFILE } from "../data/constants";

export default function Contact() {
  return (
    <footer id="contact" className="bg-gradient-to-t from-black to-[#030014] pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="bg-gradient-to-r from-cyan-400/10 to-purple-600/10 rounded-3xl p-8 md:p-16 border border-white/10 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/20 rounded-full blur-[80px]" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-500/20 rounded-full blur-[80px]" />
          
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">Ready to start a project?</h2>
            <p className="text-gray-400 mb-8 text-lg">
              I'm always open to discussing product design work or partnership opportunities.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
              <a 
                href={PROFILE.social.email}
                className="flex items-center gap-3 px-8 py-4 rounded-xl glass hover:bg-white/10 transition-all w-full sm:w-auto justify-center"
              >
                <Mail className="text-cyan-400" />
                <span>{PROFILE.email}</span>
              </a>
              <div className="flex items-center gap-3 px-8 py-4 rounded-xl glass hover:bg-white/10 transition-all w-full sm:w-auto justify-center">
                <MapPin className="text-purple-500" />
                <span>{PROFILE.location}</span>
              </div>
            </div>

            <form className="space-y-4 text-left glass p-6 rounded-2xl">
                <div className="grid md:grid-cols-2 gap-4">
                    <input type="text" placeholder="Name" className="w-full bg-black/30 border border-white/10 rounded-lg p-3 text-white focus:border-cyan-400 focus:outline-none transition-colors" />
                    <input type="email" placeholder="Email" className="w-full bg-black/30 border border-white/10 rounded-lg p-3 text-white focus:border-cyan-400 focus:outline-none transition-colors" />
                </div>
                <textarea placeholder="Message" rows="4" className="w-full bg-black/30 border border-white/10 rounded-lg p-3 text-white focus:border-cyan-400 focus:outline-none transition-colors"></textarea>
                <button className="w-full bg-gradient-to-r from-cyan-400 to-purple-600 text-white font-bold py-3 rounded-lg hover:shadow-[0_0_20px_rgba(0,242,255,0.4)] transition-all flex items-center justify-center gap-2">
                    Send Message <Send size={18} />
                </button>
            </form>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 text-center text-gray-500 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} {PROFILE.name}. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-cyan-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-cyan-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
