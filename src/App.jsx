import React from "react";
import Typing from "react-typing-effect";

export default function App() {
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

  return (
    <main className="bg-gradient-to-br from-[#0e1b2c] to-[#091d33] text-white min-h-screen font-sans scroll-smooth">
      {/* Hero Section */}
      <section className="text-center py-10 px-4">
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
      <section className="max-w-3xl mx-auto py-10 px-6">
        <h2 className="text-3xl font-bold mb-4 border-b border-cyan-400 inline-block pb-2">
          About Me
        </h2>
        <p className="text-lg text-gray-300 leading-relaxed">
          🎓 Dual Degree:
          <br />
          ▪ B.E. in Information Science @ VVCE Mysore
          <br />
          ▪ Online BSc in Data Science @ IIT Madras
          <br />
          💻 Passionate about Data Science, Problem Solving & Web Dev
          <br />
          💡 75+ Leetcode problems solved, multiple GitHub projects built
        </p>
      </section>

      {/* Skills Section */}
      <section className="bg-[#0c1525] py-10 px-6">
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

      {/* Projects Section */}
      <section className="py-10 px-6">
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

      {/* Footer */}
      <footer className="text-center text-sm text-gray-500 py-6 border-t border-cyan-800">
        Made with 💙 by Anikesh Kumar | © {new Date().getFullYear()}
      </footer>
    </main>
  );
}
