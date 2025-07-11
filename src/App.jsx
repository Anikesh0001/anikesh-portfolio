import React, { useState, useRef, useEffect } from "react";
import Typing from "react-typing-effect";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [lines, setLines] = useState([
    "Welcome to my terminal-style portfolio!",
    "Type 'help' to see available commands.",
  ]);
  const [input, setInput] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, [lines]);

  const toggleTheme = () => setDarkMode(!darkMode);

  const skills = [
    { name: "Python", level: 90 },
    { name: "C", level: 80 },
    { name: "Java", level: 70 },
    { name: "HTML/CSS/JS", level: 85 },
    { name: "Tailwind", level: 75 },
    { name: "Git", level: 80 },
    { name: "NumPy / Pandas", level: 85 },
  ];

  const projects = [
    {
      title: "Sales Chatbot",
      url: "https://github.com/Anikesh0001/sales_chatbot",
      tech: ["Python", "NLTK"],
    },
    {
      title: "Instagram Clone",
      url: "https://github.com/Anikesh0001/Instagram_clone",
      tech: ["HTML", "CSS"],
    },
    {
      title: "Amazon Clone",
      url: "https://github.com/Anikesh0001/amazon-clone",
      tech: ["HTML", "CSS", "JS"],
    },
    {
      title: "PPT Generator",
      url: "https://github.com/Anikesh0001/ppt_generator",
      tech: ["Python"],
    },
  ];

  const testimonials = [
    {
      name: "John Doe",
      text: "Anikesh is a fantastic developer who brings ideas to life quickly and with quality.",
    },
    {
      name: "Jane Smith",
      text: "Professional, skilled, and always meets deadlines. Highly recommended!",
    },
  ];

  const achievements = [
    "✔ Solved 75+ LeetCode problems",
    "✔ Built 10+ full-stack projects",
    "✔ Contributed to open-source repositories",
  ];

  const commandMap = {
    help: `\n📄 Available commands:
about       - Learn about me
projects    - View my projects
skills      - See my technical skills
education   - My educational background
contact     - How to reach me
clear       - Clear the terminal`,

    about: `👋 Hello, I'm Anikesh Kumar!

I'm a Full-Stack Developer and AI enthusiast passionate about building impactful software solutions.

Background:
- Dual Degree Student:
  ▪ B.E. in Information Science @ VVCE Mysore
  ▪ B.Sc in Data Science @ IIT Madras
- Built multiple projects like Sales Chatbot, Amazon Clone, Instagram Clone, etc.
- Proficient in Python, React, Tailwind, and AI tools
- Solved 75+ LeetCode problems and contributed to open-source

Feel free to explore more using the 'projects', 'skills', or 'contact' commands!`,

    education: `🎓 Education:
- Bachelor of Engineering in Information Science @ VVCE Mysore
- Bachelor of Science in Data Science @ IIT Madras`,

    contact: `📬 Contact Info:
- Email: anikeshkr0001@gmail.com
- GitHub: https://github.com/Anikesh0001
- Instagram: https://instagram.com/Anikesh_op`,

    projects: projects.map((p) => `🔹 ${p.title} - ${p.url}`).join("\n"),

    skills: skills.map((s) => `✔ ${s.name} - ${s.level}%`).join("\n"),

    clear: "clear",
  };

  const handleCommand = (e) => {
    if (e.key === "Enter") {
      const command = input.trim().toLowerCase();
      const output = commandMap[command] || `Command not found: ${command}`;
      const newLines =
        command === "clear"
          ? []
          : [...lines, <span className="text-green-300">&gt; {command}</span>];
      setLines(
        command === "clear"
          ? []
          : [
              ...newLines,
              <Typing
                key={Date.now()}
                text={[output]}
                speed={15}
                eraseDelay={9999999}
                className="text-white"
              />,
            ]
      );
      setInput("");
    }
  };

  return (
    <main
      className={`$ {
        darkMode ? "bg-gradient-to-br from-[#0e1b2c] to-[#091d33] text-white" : "bg-white text-gray-900"
      } min-h-screen font-sans scroll-smooth transition-all duration-500`}
    >
      <button
        onClick={toggleTheme}
        className="fixed top-4 right-4 z-50 bg-cyan-400 text-white px-3 py-1 rounded shadow hover:bg-cyan-600"
      >
        {darkMode ? "☀️ Light" : "🌙 Dark"}
      </button>

      {/* Hero Section */}
      <section className="text-center py-10 px-4" data-aos="fade-down">
        <img
          src="https://i.ibb.co/BKywNpbN/Whats-App-Image-2025-07-06-at-23-37-01.jpg"
          alt="Anikesh Kumar"
          className="w-32 h-32 rounded-full mx-auto border-4 border-cyan-400 shadow-md animate-pulse"
        />
        <h1 className="text-4xl font-bold mt-4 text-cyan-400">Anikesh Kumar</h1>
        <Typing
          text={["Full-Stack Developer", "Python Enthusiast", "DSA Lover"]}
          speed={100}
          eraseSpeed={50}
          eraseDelay={2000}
          className="text-lg text-gray-300 mt-2"
        />
        <div className="mt-4 flex justify-center gap-4">
          <a href="https://github.com/Anikesh0001" target="_blank">
            <img
              src="https://img.shields.io/badge/GitHub-000?logo=github&logoColor=white"
              className="h-8 hover:scale-110 transition-transform"
            />
          </a>
          <a href="https://instagram.com/Anikesh_op" target="_blank">
            <img
              src="https://img.shields.io/badge/Instagram-E4405F?logo=instagram&logoColor=white"
              className="h-8 hover:scale-110 transition-transform"
            />
          </a>
        </div>
      </section>

      {/* About Section */}
      <section className="max-w-3xl mx-auto py-10 px-6" data-aos="fade-up">
        <h2 className="text-3xl font-bold mb-4 border-b border-cyan-400 inline-block pb-2">
          About Me
        </h2>
        <p className="text-lg text-gray-300 leading-relaxed">
          🎓 Dual Degree:
          <br />▪ B.E. in Information Science @ VVCE Mysore
          <br />▪ Online BSc in Data Science @ IIT Madras
          <br />
          💻 Passionate about Data Science, Problem Solving & Web Dev
          <br />
          💡 75+ Leetcode problems solved, multiple GitHub projects built
        </p>
      </section>

      {/* Skills Section */}
      <section className="bg-[#0c1525] py-10 px-6" data-aos="fade-left">
        <h2 className="text-3xl font-bold text-center text-cyan-300 mb-6">
          💡 Skills
        </h2>
        <div className="max-w-3xl mx-auto">
          {skills.map((skill, index) => (
            <div key={index} className="mb-4">
              <div className="flex justify-between text-sm text-gray-300">
                <span>{skill.name}</span>
                <span>{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div
                  className="bg-cyan-400 h-2 rounded-full"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-10 px-6 max-w-3xl mx-auto" data-aos="fade-right">
        <h2 className="text-3xl font-bold mb-4 border-b border-cyan-400 inline-block pb-2">
          🏆 Achievements
        </h2>
        <ul className="list-disc list-inside text-gray-300 text-lg">
          {achievements.map((ach, i) => (
            <li key={i}>{ach}</li>
          ))}
        </ul>
      </section>

      {/* Projects Section */}
      <section className="py-10 px-6" data-aos="fade-up">
        <h2 className="text-3xl font-bold text-center text-cyan-300 mb-6">
          🚀 Projects
        </h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {projects.map((project, i) => (
            <a
              key={i}
              href={project.url}
              className="bg-[#1b2b3c] p-6 rounded-lg hover:bg-cyan-800 transition transform hover:scale-105"
              target="_blank"
            >
              <h3 className="text-xl font-semibold text-white mb-2">
                {project.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, j) => (
                  <span
                    key={j}
                    className="bg-cyan-600 px-3 py-1 text-sm rounded-full text-white"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <p className="text-sm text-gray-400 mt-3">View on GitHub →</p>
            </a>
          ))}
        </div>
      </section>

      {/* ⭐ Testimonials Section */}
      <section className="py-10 px-6 max-w-4xl mx-auto" data-aos="zoom-in">
        <h2 className="text-3xl font-bold text-center text-cyan-300 mb-6">
          ⭐ Testimonials
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-[#1a2738] p-4 rounded-xl shadow hover:shadow-lg transition"
            >
              <p className="text-gray-300 italic">“{t.text}”</p>
              <p className="mt-3 text-cyan-400 font-semibold">- {t.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Terminal Section */}
      <section className="bg-black text-green-400 font-mono px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl mb-4 text-green-300">Terminal Portfolio</h2>
          {lines.map((line, i) => (
            <div key={i} className="whitespace-pre-wrap">
              {line}
            </div>
          ))}
          <div className="flex">
            <span className="mr-2 text-blue-400">anikesh@portfolio:~$</span>
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleCommand}
              className="bg-transparent outline-none text-green-300 w-full"
              autoFocus
            />
          </div>
        </div>
      </section>

      <footer className="text-center text-sm text-gray-500 py-6 border-t border-cyan-800">
        Made with 💙 by Anikesh Kumar | © {new Date().getFullYear()}
      </footer>
    </main>
  );
}
