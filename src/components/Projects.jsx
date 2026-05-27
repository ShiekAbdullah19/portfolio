import ecommerceImg from "../assets/ecommerce.png";
import portfolioImg from "../assets/portfolio.png";
import { motion } from "framer-motion";

function Projects() {

  const projects = [

    {
      title: "Ecommerce Website",

      description:
        "Built a full stack ecommerce website using MERN stack.",

      image: ecommerceImg,

      github: "https://github.com/",

      live: "https://google.com"
    },

    {
      title: "Portfolio Website",

      description:
        "Created a modern responsive portfolio website using React.",

      image: portfolioImg,

      github: "https://github.com/",

      live: "https://google.com"
    }
  ];
  return (
    <motion.div
      className="projects"
      id="projects"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <h1>Projects</h1>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt="project" />
            <h2>{project.title}</h2>
            <p>{project.description}</p>
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
    </motion.div>

  );
}

export default Projects;