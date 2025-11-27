import React, { useState, useEffect } from "react";
import {
  Moon,
  Sun,
  ArrowRight,
  ArrowLeft,
  X,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Calendar,
  Briefcase,
  Download, // Add this line
} from "lucide-react";

// Import specific technology/brand icons from react-icons/si
import {
  SiPython,
  SiC,
  SiHtml5,
  SiCss3,
  SiCplusplus,
  SiReact,
  SiCanva,
  SiFigma,
} from "react-icons/si";

// --- NEW IMAGE IMPORTS ---
import KeSapianThumbnail from "./Landing Page.png"; // Replace with your file path
import MindHavenThumbnail from "./Group 22.png"; // Replace with your file path
import CateringzThumbnail from "./Frame 30.png"; // Replace with your file path
// import simpleblogpostThumbnail from './your-fitness-app-thumbnail.png'; // Replace with your file path
// --- END NEW IMAGE IMPORTS ---

// Project 1: KeSapian
import KeSapianDetail1 from "./Home - Chat Page.png"; // Replace with actual path
import KeSapianDetail2 from "./Chat Person Page.png"; // Replace with actual path
import KeSapianDetail3 from "./Add Friend Page.png"; // Replace with actual path
import KeSapianDetail4 from "./Add Friends.png"; // Replace with actual path

// // Project 2: MindHaven
import MindHavenDetail1 from "./Home Page.png";
import MindHavenDetail2 from "./Mood Tracker.png";
import MindHavenDetail3 from "./Subscription Page.png";
import MindHavenDetail4 from "./Community Page.png";
import MindHavenDetail5 from "./Chatbot Page.png";

// // Project 3: Cateringz
import CateringzDetail1 from "./Home.png";
import CateringzDetail2 from "./About Us.png";
import CateringzDetail3 from "./Menu.png";
import CateringzDetail4 from "./Customer.png";

// // Project 4: Fitness Mobile App
// import fitnessDetail1 from './fitness-detail-1.png';
// import fitnessDetail2 from './fitness-detail-2.png';
// import fitnessDetail3 from './fitness-detail-3.png';
// --- END NEW IMPORTS ---

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    setDarkMode(prefersDark);
  }, []);

  // Function to handle CV download
  const handleDownloadCV = () => {
    // Create a link element and trigger download
    const link = document.createElement("a");
    link.href = process.env.PUBLIC_URL + "/Kevin Jeremia - Resume.pdf"; // Path to CV file in public folder
    link.download = "Kevin_Jeremia_Resume.pdf"; // Name of the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // UPDATED SKILLS DATA WITH SPECIFIC SIMPLE ICONS AND THEIR OFFICIAL COLORS
  const skills = [
    { name: "Python", icon: SiPython, color: "text-[#3776AB]" }, // Official Python blue
    { name: "C", icon: SiC, color: "text-[#A8B9CC]" }, // Official C language gray/blue
    { name: "C++", icon: SiCplusplus, color: "text-[#00599C]" }, // Official C++ blue
    { name: "React", icon: SiReact, color: "text-[#61DAFB]" }, // Official React cyan
    { name: "HTML5", icon: SiHtml5, color: "text-[#E34F26]" }, // Official HTML orange
    { name: "CSS3", icon: SiCss3, color: "text-[#1572B6]" }, // Official CSS blue
    { name: "Canva", icon: SiCanva, color: "text-[#00C4CC]" }, // Official Canva teal
    { name: "Figma", icon: SiFigma, color: "text-[]" },
  ];

  const projects = [
    {
      id: 1,
      title: "KeSapian",
      category: "Web Application",
      year: "2025",
      thumbnail: KeSapianThumbnail,
      description:
        "KeSapian is a web app projects designed to help introverts connect and socialize with others. It lets users make friends and join groups based on shared interests while maintaining privacy and comfort. The app aims to create a safe and peaceful social space.",
      fullDescription:
        "A Group Project from Software Engineer course, The app lets users make friends and join groups based on shared interests while keeping their privacy and comfort. KeSapian aims to create a safe and peaceful social space. Built the frontend and backend of the project. Work on the Login and Register Page, Preferences page, and the User Suggestions feature.",
      role: "Front-End and Backend",
      duration: "4 months",
      technologies: ["TSX", "Node.js", "MySQL", "FIgma", "Tailwind CSS"],
      // challenges: "Implementing real-time inventory management and ensuring secure payment processing while maintaining optimal performance.",
      // outcome: "Successfully launched with 10,000+ products and processing $50K+ monthly transactions.",
      images: [
        KeSapianDetail1,
        KeSapianDetail2,
        KeSapianDetail3,
        KeSapianDetail4,
      ],
      link: "#",
    },
    {
      id: 2,
      title: "MindHaven",
      category: "Web Application",
      year: "2025",
      thumbnail: MindHavenThumbnail,
      description:
        "MindHaven is a web and mobile platform focused on burnout recovery through creativity and relaxation.",
      fullDescription:
        "Work on the UI of the Subscription Page and develop the frontend of it using React and Tailwind CSS.",
      role: "Front-End Developer",
      duration: "2 months",
      technologies: ["Figma", "Tailwind", "React"],
      // challenges: "Creating a unique identity that stands out in a crowded tech market while remaining professional and scalable.",
      // outcome: "Brand adopted across all touchpoints, resulting in 40% increase in brand recognition within 6 months.",
      images: [
        MindHavenDetail1,
        MindHavenDetail2,
        MindHavenDetail3,
        MindHavenDetail4,
        MindHavenDetail5,
      ],
      link: "#",
    },
    {
      id: 3,
      title: "Cateringz",
      category: "Web Application",
      year: "2024",
      thumbnail: CateringzThumbnail,
      description: "A Fronted Web Page for a Catering Service paltform.",
      fullDescription:
        "A project developed for my Human and Computer Interaction course, where I use Figma to design the UI, HTML,CSS, and JavaScript to build the front end of a catering service platform called Cateringz. The platform allows users to browse catering options, view menus, and orders.",
      role: "Front-End Developer",
      duration: "1 months",
      technologies: ["HTML", "CSS", "JavaScript", "Figma"],
      // challenges: "Implementing real-time synchronization across multiple users and ensuring data consistency.",
      // outcome: "Used by 500+ teams with 95% user satisfaction rating and average daily active users of 2000+.",
      images: [
        CateringzDetail1,
        CateringzDetail2,
        CateringzDetail3,
        CateringzDetail4,
      ],
      link: "#",
    },
    // {
    //   id: 4,
    //   title: "Simple BlogPost",
    //   category: "UI/UX Design",
    //   year: "2023",
    //   thumbnail: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop",
    //   description: "Health tracking application focused on user wellness",
    //   fullDescription: "Created complete UI/UX design for a fitness tracking mobile application. Conducted user research, developed user personas, created wireframes and high-fidelity mockups, and produced an interactive prototype.",
    //   role: "UI/UX Designer",
    //   duration: "3 months",
    //   technologies: ["Figma", "Prototyping", "User Research", "Design Systems"],
    //   challenges: "Balancing feature-rich functionality with simplicity and ease of use for all fitness levels.",
    //   outcome: "Design implemented by development team, app launched with 4.8 star rating on app stores.",
    //   images: [
    //     "/Pictures1.png",
    //     "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=1200&h=800&fit=crop",
    //     "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=1200&h=800&fit=crop"
    //   ],
    //   link: "#"
    // }
  ];

  const experiences = [
    {
      id: 1,
      role: "Cerative Media Activist",
      company: "IMCB",
      period: "2023 - 2024",
      location: "Campus Oragnization",
      description:
        "Designed and managed information and announcement content for the Instagram feed of the IMCB Student Activity Unit using Canva.",
      achievements: [],
    },
    {
      id: 2,
      role: "Student Participant",
      company: "BINUS - ICDP ",
      period: "2023 - 2023",
      location: "College Short-term Program",
      description:
        "A program that facilitates students and international students to practice and enhance problem-solving skills by connecting academic theories with real-world situations.Interacted with SME stakeholders to understand the challenges they face and collaborated with the group to formulate constructive solutions.",
      achievements: [],
    },
  ];

  const scrollToSection = (section) => {
    setActiveSection(section);
    document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-500 ${
        darkMode ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      {/* Minimalist Navigation (UPDATED WITH BORDER) */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          // Using a solid background for better contrast with the border
          darkMode
            ? "bg-black border-b border-zinc-900"
            : "bg-white border-b border-gray-100"
        }`}
      >
        <div className="max-w-6xl mx-auto px-8 py-6 flex justify-between items-center">
          <button
            onClick={() => scrollToSection("about")}
            className="text-sm tracking-[0.3em] uppercase font-light hover:opacity-60 transition-opacity"
          >
            Portfolio
          </button>

          <div className="flex items-center gap-8 md:gap-12">
            {["about", "skills", "experience", "projects"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`text-sm tracking-wider uppercase font-light hover:opacity-60 transition-opacity hidden md:block ${
                  activeSection === item ? "opacity-100" : "opacity-50"
                }`}
              >
                {item}
              </button>
            ))}

            {/* CV Download Button */}
            <button
              onClick={handleDownloadCV}
              className="text-sm tracking-wider uppercase font-light hover:opacity-60 transition-opacity hidden md:flex items-center gap-2"
            >
              {/* <Download size={16} /> */}
              <span>Download CV</span>
            </button>

            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 hover:opacity-60 transition-opacity"
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>
        </div>
      </nav>

      {/* About Section (UPDATED for image shape and text size) */}
      <section
        id="about"
        className="min-h-screen flex items-center px-8 pt-32 pb-20"
      >
        <div className="max-w-4xl mx-auto w-full">
          <div
            className={`w-24 h-px mb-16 ${darkMode ? "bg-white" : "bg-black"}`}
          />

          {/* Flex Container for Name/Title and Image */}
          <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-12 mb-12">
            {/* Left Column: Name and Title */}
            <div className="md:w-3/5 text-center md:text-left">
              {/* Smaller Name Text */}
              <h1
                className={`text-4xl md:text-5xl mb-2 leading-tight font-heading font-semibold`}
              >
                Kevin Jeremia
              </h1>
              {/* Smaller Title Text, adjusted to stay horizontal */}
              <h1 className="text-3xl md:text-4xl font-light tracking-tight leading-tight">
                Software Engineer{" "}
                <span
                  className={`font-extralight italic ${
                    darkMode ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  & Student
                </span>
              </h1>
            </div>

            <div className="md:w-2/5 flex justify-center md:justify-end">
              <img
                // CRITICAL CHANGE FOR DEPLOYMENT: Use PUBLIC_URL
                src={process.env.PUBLIC_URL + "/profile.jpg"}
                alt="Your Profile"
                className="w-48 h-48 object-cover shadow-lg"
              />
            </div>
          </div>

          <div
            className={`w-24 h-px my-12 ${darkMode ? "bg-white" : "bg-black"}`}
          />

          <div className="max-w-2xl space-y-6">
            <p
              className={`text-xl md:text-2xl font-light leading-relaxed ${
                darkMode ? "text-gray-300" : "text-gray-700"
              }`}
            >
              I'm a Binus University student majoring in Computer Science.
            </p>

            <p
              className={`text-lg font-light leading-relaxed ${
                darkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              I believe in the power of simplicity, intentional design, and
              clean code. My work focuses on creating intuitive interfaces that
              users love and experiences that make a lasting impact.
            </p>

            <p
              className={`text-lg font-light leading-relaxed ${
                darkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              When I'm not designing or coding, you'll find me exploring new
              technologies, learn to build exciting, and staying inspired by
              art, architecture, and the world around me.
            </p>

            <p
              className={`text-lg font-light leading-relaxed ${
                darkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Open to collaboration and always ready to listen to feedback and
              guidance from the team to achieve the best result.
            </p>
          </div>

          <div className="flex gap-6 mt-16">
            {/* GitHub Link (Unchanged placeholder) */}
            <a
              href="https://github.com/pinkepin05"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-60 transition-opacity"
            >
              <Github size={20} />
            </a>
            {/* LinkedIn Link (UPDATED) */}
            <a
              href="https://www.linkedin.com/in/kevin-jeremia/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-60 transition-opacity"
            >
              <Linkedin size={20} />
            </a>
            {/* Email Link (UPDATED) */}
            <a
              href="mailto:kepinjeremia@gmail.com"
              className="hover:opacity-60 transition-opacity"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </section>

      {/* --- SKILLS SECTION (UPDATED with Simple Icons) --- */}
      <section
        id="skills"
        className={`py-32 px-8 ${darkMode ? "bg-zinc-950" : "bg-gray-50"}`}
      >
        <div className="max-w-6xl mx-auto">
          <div className="mb-20">
            <h2 className="text-sm tracking-[0.3em] uppercase font-light mb-4">
              Core Competencies
            </h2>
            <div
              className={`w-12 h-px ${darkMode ? "bg-white" : "bg-black"}`}
            />
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-12">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className={`p-6 flex flex-col items-center justify-center text-center border rounded-lg aspect-square transition-all duration-300 hover:scale-[1.02] ${
                  darkMode
                    ? "bg-zinc-900 border-zinc-800 hover:border-white/50"
                    : "bg-white border-gray-200 hover:border-black/50"
                }`}
              >
                {/* Render the icon dynamically with specific color */}
                <skill.icon size={48} className={`mb-4 ${skill.color}`} />
                <h3 className="text-xl font-light tracking-wide">
                  {skill.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* --- END OF UPDATED SKILLS SECTION --- */}

      {/* Projects Section (Unchanged) */}
      <section id="projects" className="py-32 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-20">
            <h2 className="text-sm tracking-[0.3em] uppercase font-light mb-4">
              Selected Projects
            </h2>
            <div
              className={`w-12 h-px ${darkMode ? "bg-white" : "bg-black"}`}
            />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <button
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="group text-left"
              >
                {/* 1. Container maintains a uniform 4/3 aspect ratio (fixed border size) */}
                <div className="relative overflow-hidden aspect-[4/3] mb-6">
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    // 2. object-contain ensures the whole picture is visible.
                    // 3. Conditional background color fills the container space not used by the image.
                    className={`w-full h-full transition-transform duration-700 group-hover:scale-105 object-contain ${
                      darkMode ? "bg-zinc-800" : "bg-gray-200"
                    }`}
                  />
                  <div
                    className={`absolute inset-0 transition-opacity duration-300 ${
                      darkMode ? "bg-black/20" : "bg-white/20"
                    } opacity-0 group-hover:opacity-100`}
                  />
                </div>

                <p
                  className={`text-xs tracking-widest uppercase font-light mb-2 ${
                    darkMode ? "text-gray-500" : "text-gray-400"
                  }`}
                >
                  {project.category} — {project.year}
                </p>
                <h3 className="text-2xl font-light mb-3 tracking-tight group-hover:opacity-60 transition-opacity">
                  {project.title}
                </h3>
                <p
                  className={`font-light leading-relaxed ${
                    darkMode ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  {project.description}
                </p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8">
          <div
            className={`absolute inset-0 ${
              darkMode ? "bg-black/95" : "bg-white/95"
            } backdrop-blur-sm`}
            onClick={() => setSelectedProject(null)}
          />

          <div
            className={`relative w-full max-w-5xl max-h-[90vh] overflow-y-auto ${
              darkMode ? "bg-zinc-950" : "bg-gray-50"
            } p-8 md:p-12`}
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-8 right-8 hover:opacity-60 transition-opacity"
            >
              <X size={24} />
            </button>

            <div className="space-y-12">
              <div>
                <p
                  className={`text-xs tracking-widest uppercase font-light mb-4 ${
                    darkMode ? "text-gray-500" : "text-gray-400"
                  }`}
                >
                  {selectedProject.category} — {selectedProject.year}
                </p>
                <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-6">
                  {selectedProject.title}
                </h2>
                <p
                  className={`text-xl font-light leading-relaxed ${
                    darkMode ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  {selectedProject.fullDescription}
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <h4 className="text-xs tracking-widest uppercase font-light mb-2">
                    Role
                  </h4>
                  <p
                    className={`font-light ${
                      darkMode ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    {selectedProject.role}
                  </p>
                </div>
                <div>
                  <h4 className="text-xs tracking-widest uppercase font-light mb-2">
                    Duration
                  </h4>
                  <p
                    className={`font-light ${
                      darkMode ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    {selectedProject.duration}
                  </p>
                </div>
                <div>
                  <h4 className="text-xs tracking-widest uppercase font-light mb-2">
                    Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className={`text-xs font-light px-2 py-1 ${
                          darkMode ? "bg-zinc-900" : "bg-white"
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                {/* CHALLENGE SECTION REMOVED:
                
                <div>
                  <h4 className="text-sm font-light mb-3 tracking-wide">Challenge</h4>
                  <p className={`font-light leading-relaxed ${
                    darkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    {selectedProject.challenges}
                  </p>
                </div> 
                */}

                <div>
                  <h4 className="text-sm font-light mb-3 tracking-wide">
                    Outcome
                  </h4>
                  <p
                    className={`font-light leading-relaxed ${
                      darkMode ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    {selectedProject.outcome}
                  </p>
                </div>
              </div>

              {/* --- UPDATED IMAGE DISPLAY FOR PROJECT DETAIL (Optimized for Tall/Mobile Screenshots) --- */}
              <div className="flex flex-wrap justify-center gap-6 mt-8">
                {selectedProject.images.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`${selectedProject.title} screenshot ${index + 1}`}
                    // UPDATED CLASSES: md:w-1/3 width to fit more, h-96 for fixed height
                    // object-contain ensures the entire tall image is visible.
                    className="w-full md:w-1/3 object-cover shadow-md h-96"
                    style={{ objectFit: "contain" }}
                  />
                ))}
              </div>
              {/* --- END UPDATED IMAGE DISPLAY --- */}

              {/* REMOVED: View Live Project link
              <a
                href={selectedProject.link}
                className="inline-flex items-center gap-2 text-sm tracking-wider uppercase hover:opacity-60 transition-opacity"
              >
                View Live Project
                <ExternalLink size={14} />
              </a>
              */}
            </div>
          </div>
        </div>
      )}

      {/* Experience Section (Unchanged) */}
      <section
        id="experience"
        className={`py-32 px-8 ${darkMode ? "bg-zinc-950" : "bg-gray-50"}`}
      >
        <div className="max-w-4xl mx-auto">
          <div className="mb-20">
            <h2 className="text-sm tracking-[0.3em] uppercase font-light mb-4">
              Experience
            </h2>
            <div
              className={`w-12 h-px ${darkMode ? "bg-white" : "bg-black"}`}
            />
          </div>

          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <div key={exp.id} className="relative">
                {index !== experiences.length - 1 && (
                  <div
                    className={`absolute left-0 top-12 bottom-0 w-px ${
                      darkMode ? "bg-zinc-800" : "bg-gray-200"
                    }`}
                  />
                )}

                <div className="relative pl-12">
                  <div
                    className={`absolute left-0 top-2 w-2 h-2 rounded-full ${
                      darkMode ? "bg-white" : "bg-black"
                    }`}
                  />

                  <div className="space-y-4">
                    <div>
                      <h3 className="text-2xl font-light tracking-tight mb-2">
                        {exp.role}
                      </h3>
                      <div
                        className={`flex items-center gap-4 text-sm font-light ${
                          darkMode ? "text-gray-400" : "text-gray-600"
                        }`}
                      >
                        <span className="flex items-center gap-2">
                          <Briefcase size={14} />
                          {exp.company}
                        </span>
                        <span className="flex items-center gap-2">
                          <Calendar size={14} />
                          {exp.period}
                        </span>
                      </div>
                    </div>

                    <p
                      className={`font-light leading-relaxed ${
                        darkMode ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      {exp.description}
                    </p>

                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li
                          key={i}
                          className={`text-sm font-light flex items-start gap-3 ${
                            darkMode ? "text-gray-500" : "text-gray-500"
                          }`}
                        >
                          <span className="mt-2">—</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Minimal Footer (Unchanged) */}
      <footer
        className={`py-12 px-8 text-center border-t ${
          darkMode ? "border-zinc-900" : "border-gray-100"
        }`}
      >
        <p
          className={`text-xs tracking-widest uppercase font-light ${
            darkMode ? "text-gray-600" : "text-gray-400"
          }`}
        >
          © 2025 — Designed & Built with Care
        </p>
      </footer>
    </div>
  );
}
