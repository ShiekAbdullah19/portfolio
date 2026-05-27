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
    "Tailwind CSS"
  ];

  return (

    <motion.div
      className="skills"
      id="skills"

      initial={{ opacity: 0, y: 100 }}

      whileInView={{ opacity: 1, y: 0 }}

      transition={{ duration: 1 }}

      viewport={{ once: true }}
    >

      <h1>My Skills</h1>

      <div className="skills-container">

        {skills.map((skill, index) => (

          <div className="skill-card" key={index}>

            {skill}

          </div>

        ))}

      </div>

    </motion.div>

  );
}

export default Skills;