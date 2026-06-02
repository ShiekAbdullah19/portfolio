import "./Skills.css";

import { motion } from "framer-motion";

function Skills() {

  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node.js",
    "MongoDB",
    "Express.js",
    "Tailwind CSS",
    "Git & GitHub",
    "Responsive Design",
    "REST API",
    "Vercel Deployment"
  ];

  return (

    <motion.section
      className="skills"
      id="skills"

      initial={{ opacity: 0, y: 100 }}

      whileInView={{ opacity: 1, y: 0 }}

      transition={{ duration: 1 }}

      viewport={{ once: true }}
    >

      <h1>My Skills</h1>

      <p className="skills-text">
        Technologies and tools I use to build modern,
        scalable and responsive web applications.
      </p>

      <div className="skills-container">

        {skills.map((skill, index) => (

          <div className="skill-card" key={index}>

            {skill}

          </div>

        ))}

      </div>

    </motion.section>

  );
}

export default Skills;