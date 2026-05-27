import { motion } from "framer-motion";
function About() {
  return (
    <motion.div
  className="about"
  id="about"

  initial={{ opacity: 0, y: 100 }}

  whileInView={{ opacity: 1, y: 0 }}

  transition={{ duration: 1 }}

  viewport={{ once: true }}
>

      <h1>About Me</h1>

      <p>
        I am a passionate Full Stack Developer learning MERN Stack
        and building modern web applications.
      </p>

    </motion.div>
  );
}

export default About;