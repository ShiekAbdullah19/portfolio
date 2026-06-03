import "./Projects.css";

import ecommerceImg from "../assets/ecommerce.png";
import portfolioImg from "../assets/portfolio.png";

import { motion } from "framer-motion";

function Projects() {

  const projects = [

    {
      title: "Ecommerce Website",

      description:
        "Built a modern full stack ecommerce website using MERN Stack with responsive UI and authentication.",

      image: ecommerceImg,

      github: "https://github.com/ShiekAbdullah19/Halleyx-Project.git",

      live: "https://google.com",

      tech: ["React", "Node.js", "MongoDB"]
    },

    {
      title: "Portfolio Website",

      description:
        "Created a premium responsive portfolio website using React and modern UI animations.",

      image: portfolioImg,

      github: "https://github.com/ShiekAbdullah19/portfolio.git",

      live: "https://portfolio-lilac-psi-4295372cxd.vercel.app/",

      tech: ["React", "CSS", "Vercel"]
    }
  ];

  return (

    <motion.section
      className="projects"
      id="projects"

      initial={{ opacity: 0, y: 100 }}

      whileInView={{ opacity: 1, y: 0 }}

      transition={{ duration: 1 }}

      viewport={{ once: true }}
    >

      <h1>Projects</h1>

      <p className="projects-text">
        Some of the real-world projects I developed
        using modern web technologies.
      </p>

      <div className="projects-container">

        {projects.map((project, index) => (

          <div className="project-card" key={index}>

            <img src={project.image} alt="project" />

            <h2>{project.title}</h2>

            <p>{project.description}</p>

            <div className="tech-stack">

              {project.tech.map((item, i) => (

                <span key={i}>{item}</span>

              ))}

            </div>

            <div className="project-buttons">

              <a href={project.github} target="_blank">

                <button>GitHub</button>

              </a>

              <a href={project.live} target="_blank">

                <button>Live Demo</button>

              </a>

            </div>

          </div>

        ))}

      </div>

    </motion.section>

  );
}

export default Projects;