import "./Projects.css";
import ecommerceImg from "../assets/ecommerce.png";
import portfolioImg from "../assets/portfolio.png";
import gymbrosImg from "../assets/gymbros.png";
import aasifpilotImg from "../assets/aasifpilot.png"
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function Projects() {
  const projects = [
    {
      title: "Aasif Pilot Website",
      description:
        "Aasif Pilot – AI SEO Analyzer & Rank Tracker (MERN Stack, Browserbase, Gemini AI). Developed a high-performance SEO platform integrating stealth web-scraping via Browserbase, Google Gemini AI audits, and autonomous Node-Cron SERP tracking with intuitive historical dashboards.",
      image: aasifpilotImg, // Bro, unkitta aasif pilot image assets irundha inga import panni reference maathiko!
      github: "https://github.com/ShiekAbdullah19/SEO-Ranking-Website", // Unga Github link update panniko bro
      live: "https://seo-ranking-website-indol.vercel.app/", // Live URL testing check-ku potu vachuko bro
      tech: ["MERN Stack", "Browserbase", "Gemini AI", "Node-Cron"]
    },
    {
      title: "Ecommerce Website",
      description:
        "Built a modern full stack ecommerce website using MERN Stack with responsive UI and authentication.",
      image: ecommerceImg,
      github: "https://github.com/ShiekAbdullah19/E---Commerce",
      live: "https://e-commerce-eight-pearl-83.vercel.app/",
      tech: ["React", "Node.js", "MongoDB", "Express.js"]
    },
    {
      title: "Portfolio Website",
      description:
        "Created a premium responsive portfolio website using React and modern UI animations.",
      image: portfolioImg,
      github: "https://github.com/ShiekAbdullah19/portfolio.git",
      live: "https://portfolio-lilac-psi-4295372cxd.vercel.app/",
      tech: ["React", "CSS", "Vercel", "MongoDB"]
    },
    {
      title: "Gymbros Website",
      description:
        "Gymbros, a high-performance, fully responsive premium fitness website.",
      image: gymbrosImg,
      github: "https://github.com/ShiekAbdullah19/Gym-Website-CRM",
      live: "https://gym-website-new-peach.vercel.app/",
      tech: ["HTML", "CSS", "Javascript"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <motion.section
      className="projects"
      id="projects"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.1 }}
    >
      <h1>My <span>Projects</span></h1>

      <p className="projects-text">
        Some of the real-world projects I developed using modern web technologies.
      </p>

      <motion.div 
        className="projects-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {projects.map((project, index) => (
          <motion.div 
            className="project-card" 
            key={index}
            variants={cardVariants}
          >
            <div className="project-image-wrapper">
              <img src={project.image} alt={project.title} />
            </div>

            <div className="project-content">
              <h2>{project.title}</h2>
              <p>{project.description}</p>

              <div className="tech-stack">
                {project.tech.map((item, i) => (
                  <span key={i}>{item}</span>
                ))}
              </div>

              <div className="project-buttons">
                <a href={project.github} target="_blank" rel="noreferrer" className="btn btn-github">
                  <FaGithub /> GitHub
                </a>
                <a href={project.live} target="_blank" rel="noreferrer" className="btn btn-live">
                  <FaExternalLinkAlt /> Live Demo
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}

export default Projects;