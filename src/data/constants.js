
import { 
  Github, 
  Linkedin, 
  Mail, 
  MapPin, 
  ExternalLink, 
  Code2, 
  Terminal, 
  Cpu, 
  Database, 
  Globe 
} from "lucide-react";

export const PROFILE = {
  name: "Anikesh Kumar",
  title: "Full-Stack Developer | Data Science Enthusiast",
  email: "anikeshkr0001@gmail.com",
  location: "Mysuru, India",
  description: "I build high-performance web applications and intelligent AI solutions. Passionate about solving complex problems with clean, scalable code.",
  social: {
    github: "https://github.com/Anikesh0001",
    linkedin: "https://www.linkedin.com/in/anikesh-kumar-289aaa290",
    email: "mailto:anikeshkr0001@gmail.com",
  },
};

export const EDUCATION = [
  {
    institution: "Vidyavardhaka College of Engineering",
    degree: "Bachelor of Engineering in Computer Science",
    duration: "2023 - 2027",
    location: "Mysore, Karnataka",
    score: "CGPA: 9.1/10.00",
  },
  {
    institution: "Indian Institute of Technology Madras (IIT Madras)",
    degree: "BS in Data Science and Applications",
    duration: "Pursuing",
    location: "Remote",
    score: "Foundation Level Completed",
  },
];

export const SKILLS = [
  {
    category: "Languages",
    icon: Code2,
    items: ["Python", "Java", "C", "TypeScript", "JavaScript", "HTML/CSS"],
  },
  {
    category: "Frontend",
    icon: Globe,
    items: ["React", "Tailwind CSS", "Bootstrap", "Framer Motion"],
  },
  {
    category: "Backend",
    icon: Terminal,
    items: ["Node.js", "Express", "Flask", "Postman"],
  },
  {
    category: "AI / Data Science",
    icon: Cpu,
    items: [
      "NumPy & Pandas",
      "Scikit-Learn",
      "Matplotlib",
      "EDA",
      "Regression Models",
      "Time Series Forecasting",
    ],
  },
  {
    category: "Tools & DevOps",
    icon: Database,
    items: ["Git & GitHub", "MongoDB", "SQL (SQLite)", "N8N Automation", "VS Code"],
  },
];

export const PROJECTS = [
  {
    title: "Hospital Management System",
    date: "Dec 2025",
    description: "Comprehensive web-based hospital management solution managing patient records, appointments, doctor schedules, and inventory with role-based access control.",
    tech: ["Flask", "Python", "SQLite", "Bootstrap", "Jinja2"],
    link: "https://github.com/Anikesh0001/hms_mad1",
  },
  {
    title: "Leet — Online Coding Contest Platform",
    date: "July 2025",
    description: "Full-stack competitive programming platform with integrated browser-based editor, automated judging, real-time proctoring, and varying difficulty levels.",
    tech: ["React (Vite)", "Node.js", "Supabase", "TypeScript", "YOLOv8"],
    link: "https://github.com/Anikesh0001/Leet",
  },
  {
    title: "AI-Powered Sales Chatbot",
    date: "March 2025",
    description: "Intelligent conversational AI system designed to handle product inquiries and sales queries using NLP for context-aware responses.",
    tech: ["TypeScript", "React", "NLP", "Dialogflow"],
    link: "https://github.com/Anikesh0001/sales_chatbot",
  },
  {
    title: "Gmail AI Assistant",
    date: "Aug 2025",
    description: "Intelligent email automation system using n8n workflows and OpenAI API to categorize, prioritize, and draft responses for Gmail.",
    tech: ["n8n", "OpenAI API", "Gmail API", "Automation"],
    link: "https://github.com/Anikesh0001/gmail-ai-assistant-n8n",
  },
  {
    title: "Road Safety System",
    date: "Hackathon Project",
    description: "Image-processing based road-safety detection system built for Hackathon.",
    tech: ["Image Processing", "Python", "OpenCV"],
    link: "https://github.com/Anikesh0001/road_safety",
  },
  {
    title: "HackRx – Query Retrieval System",
    date: "HackRx Hackathon",
    description: "LLM-powered intelligent document question–answering system using Gemini and Pinecone.",
    tech: ["LLM", "Gemini API", "Pinecone", "Python"],
    link: "https://github.com/Anikesh0001/hackrx",
  },
];

export const ACHIEVEMENTS = [
  "Solved 100+ LeetCode DSA problems, showcasing logical ability.",
  "Finalist in National-Level Hackathon at MITS, demonstrating innovative problem-solving.",
  "Participant in Smart India Hackathon (SIH), contributing to real-world solution prototyping.",
  "Completed Foundation Level of BS Degree in Data Science from IIT Madras.",
];
