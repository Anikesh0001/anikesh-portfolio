import React, { useState, useRef, useEffect } from "react";
import { Terminal, Maximize2, Minus, X } from "lucide-react";
import { PROFILE } from "../data/constants";

export default function TerminalSection() {
  const [input, setInput] = useState("");
  const inputRef = useRef(null);
  const containerRef = useRef(null);

  const initialText = `
    _          _ _               _     
   / \\   _ __ (_) | _____  ___| |__  
  / _ \\ | '_ \\| | |/ / _ \\/ __| '_ \\ 
 / ___ \\| | | | |   <  __/\\__ \\ | | |
/_/   \\_\\_| |_|_|_|\\_\\___||___/_| |_|

Welcome to my terminal portfolio!
Type 'help' to see a list of available commands.
`;

  const [history, setHistory] = useState([
    { type: "output", text: initialText }
  ]);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [history]);

  const handleCommand = (e) => {
    if (e.key === "Enter") {
      const activeCmd = input.trim().toLowerCase();
      
      let response = "";
      
      switch (activeCmd) {
        case "help":
          response = `Available commands:
  about      - about Anikesh Kumar
  clear      - clear the terminal
  echo       - print out anything
  education  - my education background
  email      - send an email to me
  experience - my work experience
  gui        - exit terminal mode
  projects   - view projects that I've coded
  skills     - check out my skills
  sudo       - ?????
  whoami     - about current user`;
          break;
        case "about":
          response = `Hi! I'm Anikesh Kumar, a Full Stack Developer currently working at DataWeave, Bengaluru. I build complete web applications from database to UI using Python/Flask, Vue.js, React, and more. I've solved 200+ DSA problems and won multiple hackathons including Hack the Hackers and Ai-Thon Global Coding Conquest.`;
          break;
        case "clear":
          setHistory([]);
          setInput("");
          return;
        case "education":
          response = `🎓 B.E. Information Science - VVCE Mysore\n🎓 B.Sc Data Science & Applications - IIT Madras`;
          break;
        case "email":
          response = `Opening your mail client... (anikeshkr0001@gmail.com)`;
          setTimeout(() => {
            window.location.href = `mailto:${PROFILE?.email || 'anikeshkr0001@gmail.com'}`;
          }, 1000);
          break;
        case "gui":
          response = `You are already in GUI mode! Scroll up to explore more.`;
          break;
        case "projects":
          response = `My top projects:\n- Placement Portal V2 (Flask + Vue.js + JWT + Celery)\n- Hospital Management System (Flask + SQL)\n- Google Maps Scraper (Python + Selenium)\n- AniMusic (HTML/CSS/JS Music App)\n- ProctoVision (AI Exam Proctoring)\n- Gmail AI Assistant (n8n + OpenAI)\n\nType 'experience' for work details.`;
          break;
        case "skills":
          response = `Languages: Python, Java, C, JavaScript\nFrontend: Vue.js, React, HTML5, CSS3, Tailwind\nBackend: Flask, Node.js, Express, REST APIs, JWT, Celery, Redis\nAI/ML: Machine Learning, Deep Learning, CV, NLP, LLM Integration\nDatabases: SQL, SQLite, MongoDB, Firebase\nTools: Git, Bitbucket, Postman, Jira, Linux, n8n`;
          break;
        case "sudo":
          response = `nice try, but you don't have root privileges.`;
          break;
        case "whoami":
          response = `visitor`;
          break;
        case "experience":
          response = `💼 DataWeave — Full Stack Developer (Current)\n   Bengaluru, India\n\n   • Python backend services for Digital Shelf Analytics\n   • Production debugging & pipeline monitoring\n   • Automated testing & peer-reviewed PRs\n   • Stack: Python, SQL, RabbitMQ, REST APIs, Git`;
          break;
        case "":
          response = "";
          break;
        default:
          if (activeCmd.startsWith("echo ")) {
            response = activeCmd.substring(5);
          } else {
            response = `Command not found: ${activeCmd}. Type 'help' to view available commands.`;
          }
      }

      setHistory(prev => [
        ...prev,
        { type: "input", text: `visitor@anikesh.dev:~$ ${input}` },
        ...(response ? [{ type: "output", text: response }] : [])
      ]);
      setInput("");
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto mt-16 rounded-xl overflow-hidden shadow-2xl border border-white/10 bg-[#1c1c1e]">
      {/* Window Header */}
      <div className="bg-[#2d2d30] px-4 py-3 flex items-center justify-between border-b border-black/50">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
          <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
          <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
        </div>
        <div className="flex items-center gap-2 text-gray-400 text-xs font-mono">
          <Terminal size={14} /> terminal.anikesh.dev
        </div>
        <div className="flex gap-3 text-gray-500">
          <Minus size={14} className="hover:text-white cursor-pointer" />
          <Maximize2 size={14} className="hover:text-white cursor-pointer" />
          <X size={14} className="hover:text-white cursor-pointer" />
        </div>
      </div>

      {/* Terminal Body */}
      <div 
        ref={containerRef}
        className="p-6 h-[400px] overflow-y-auto bg-[#1e1e1e] font-mono text-sm shadow-inner cursor-text"
        onClick={() => inputRef.current?.focus()}
      >
        {history.map((line, index) => (
          <div 
            key={index} 
            className={`mb-2 whitespace-pre-wrap ${line.type === 'input' ? 'text-yellow-400 font-semibold' : 'text-green-400'}`}
          >
            {line.text}
          </div>
        ))}

        <div className="flex text-yellow-400 font-semibold mt-2">
          <span className="mr-2">visitor@anikesh.dev:~$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleCommand}
            className="flex-1 bg-transparent text-green-400 outline-none border-none font-mono"
          />
        </div>
      </div>
    </div>
  );
}
