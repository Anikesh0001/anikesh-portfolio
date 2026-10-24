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
  title: "Full Stack Developer | AI & Data Science Enthusiast",
  email: "anikeshkumar01work@gmail.com",
  location: "Mysuru, India",
  description: "Full Stack Developer who builds complete web applications from the database up to the UI. Experienced with Python/Flask, Vue.js, React, REST APIs, JWT auth, and background job processing with Celery & Redis. Background in ML and Data Structures.",
  social: {
    github: "https://github.com/Anikesh0001",
    linkedin: "https://www.linkedin.com/in/anikesh-kumar-289aaa290",
    email: "mailto:anikeshkumar01work@gmail.com",
  },
};

export const EDUCATION = [
  {
    institution: "Vidyavardhaka College of Engineering",
    degree: "B.E. Information Science Engineering",
    duration: "2023 - 2027",
    location: "Mysore, Karnataka",
    score: "CGPA: 8.96/10",
  },
  {
    institution: "IIT Madras",
    degree: "BS in Data Science and Applications",
    duration: "Pursuing",
    location: "Remote",
    score: "Foundation Level Completed",
  },
];

export const EXPERIENCE = [
  {
    company: "DataWeave",
    role: "Full Stack Developer",
    duration: "Present",
    location: "Bengaluru, India",
    description: [
      "Work on the DSA (Digital Shelf Analytics) platform, contributing to Python backend services handling data versioning, crawl scheduling, and the pipeline from collection to publishing.",
      "Investigate production issues by tracing accounts and versions across pipeline stages on internal monitoring dashboards, then identify root causes and document findings.",
      "Add automated tests and test stubs for existing modules following team conventions, raising PRs on Bitbucket that go through peer review."
    ],
    tech: ["Python", "SQL", "RabbitMQ", "REST APIs", "Redash", "Git", "Bitbucket", "Jira", "Linux"]
  }
];

export const SKILLS = [
  {
    category: "Languages",
    icon: Code2,
    items: ["Python", "Java", "C", "JavaScript"],
  },
  {
    category: "Frontend",
    icon: Globe,
    items: ["Vue.js", "React", "HTML5", "CSS3", "Tailwind CSS", "Framer Motion"],
  },
  {
    category: "Backend",
    icon: Terminal,
    items: ["Flask", "Node.js", "Express.js", "REST APIs", "JWT Auth", "Celery", "Redis"],
  },
  {
    category: "AI / Machine Learning",
    icon: Cpu,
    items: ["Machine Learning", "Deep Learning", "Computer Vision", "NLP", "LLM Integration", "Regression", "Classification"],
  },
  {
    category: "Databases",
    icon: Database,
    items: ["SQL", "SQLite", "SQLAlchemy", "MongoDB", "Firebase"],
  },
  {
    category: "Tools & DevOps",
    icon: Database,
    items: ["Git", "GitHub", "Bitbucket", "Postman", "VS Code", "Jupyter Notebook", "n8n", "Jira", "Linux", "CI/CD"],
  },
];

export const PROJECTS = [
  {
    title: "Placement Portal V2",
    date: "Jun 2026",
    description: "Full-featured placement management platform with separate student/company/admin portals, JWT authentication, resume uploads, and background job processing using Celery & Redis.",
    tech: ["Python", "Flask", "Vue.js", "SQLite", "JWT", "Redis", "Celery"],
    link: "https://github.com/Anikesh0001/Placement_portal_mad2",
  },
  {
    title: "Google Maps Scraper",
    date: "2025",
    description: "Automated data extraction tool for Google Maps listings. Scrapes business details, reviews, and contact info for market research and lead generation.",
    tech: ["Python", "Selenium", "BeautifulSoup", "Automation"],
    link: "https://github.com/Anikesh0001/Google-Map-Scraper",
  },
  {
    title: "AniMusic",
    date: "2025",
    description: "A beautiful music streaming web application with animated UI, playlist management, and seamless audio playback experience.",
    tech: ["HTML", "CSS", "JavaScript"],
    link: "https://github.com/Anikesh0001/AniMusic",
  },
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
  "Solved 200+ Data Structures and Algorithms problems on coding platforms.",
  "Winner — Hack the Hackers Hackathon, GSSSIETW.",
  "1st Rank — Ai-Thon Global Coding Conquest.",
  "Finalist — National Hackathon, MITS.",
  "Best Co-curricular Award — 5th Semester, VVCE.",
  "Participant — Smart India Hackathon (SIH), contributing to real-world solutions.",
];
