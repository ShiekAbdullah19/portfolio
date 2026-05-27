import myPhoto from "../assets/myphoto.jpg";
import "./Hero.css";

import { motion } from "framer-motion";

import { Typewriter } from "react-simple-typewriter";

import resume from "../assets/resume.pdf";

import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaWhatsapp,
  FaEnvelope,
  FaArrowRight
} from "react-icons/fa";

function Hero() {

  return (

    <section className="hero-section" id="home">

      <motion.div
        className="container"

        initial={{ opacity: 0, y: 80 }}

        animate={{ opacity: 1, y: 0 }}

        transition={{ duration: 1 }}
      >

        <div className="left">

          <h3 className="hello-text">
            Hello, I'm
          </h3>

          <h1>
            Shiek Abdullah
          </h1>

          <h2 className="typing-text">

            <Typewriter
              words={[
                "Full Stack Developer",
                "MERN Stack Developer",
                "Frontend Developer",
                "React Developer"
              ]}

              loop={true}

              cursor

              cursorStyle="|"

              typeSpeed={90}

              deleteSpeed={50}

              delaySpeed={1500}
            />

          </h2>

          <p className="hero-description">

            Passionate Full Stack Developer focused on creating
            modern, responsive, and user-friendly web applications
            with clean UI and smooth user experience.

          </p>

          <div className="hero-buttons">

            <a href={resume} download>

              <button className="resume-btn">

                Download Resume

              </button>

            </a>

            <a href="#projects">

              <button className="project-btn">

                View Projects <FaArrowRight />

              </button>

            </a>

          </div>

          <div className="social-icons">

            <a
              href="https://github.com/ShiekAbdullah19"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram />
            </a>

            <a
              href="https://wa.me/919342891618"
              target="_blank"
              rel="noreferrer"
            >
              <FaWhatsapp />
            </a>

            <a href="mailto:shiekabdullah181@gmail.com">

              <FaEnvelope />

            </a>

          </div>

        </div>

        <motion.div
          className="right"

          initial={{ opacity: 0, scale: 0.8 }}

          animate={{ opacity: 1, scale: 1 }}

          transition={{ duration: 1.2 }}
        >

          <img src={myPhoto} alt="profile" />

        </motion.div>

      </motion.div>

    </section>

  );
}

export default Hero;