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

        initial={{ opacity: 0, y: -100 }}

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
              href="https://www.linkedin.com/in/shiekabdullah19?utm_source=share_via&utm_content=profile&utm_medium=member_android"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://www.instagram.com/shiek_abdullah_19?igsh=ZHptam1wenh0M20x"
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

          <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=shiekabdullah181@gmail.com"
  target="_blank"
  rel="noreferrer"
>

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