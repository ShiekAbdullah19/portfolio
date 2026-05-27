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
  FaEnvelope
} from "react-icons/fa";

function Hero() {
  return (

    <motion.div
      className="container"
      id="home"

      initial={{ opacity: 0, y: 100 }}

      animate={{ opacity: 1, y: 0 }}

      transition={{ duration: 1 }}
    >

      <div className="left">

        <h1>Shiek Abdullah</h1>

        <p><p>

  <Typewriter
    words={[
      "Full Stack Developer",
      "MERN Stack Developer",
      "React Developer"
    ]}

    loop={true}

    cursor

    cursorStyle="|"

    typeSpeed={100}

    deleteSpeed={50}

    delaySpeed={1000}
  />

</p></p>

        <a href={resume} download>

  <button className="resume-btn">

    Download Resume

  </button>

</a>

        <div className="social-icons">

  <a href="https://github.com/" target="_blank">
    <FaGithub />
  </a>

  <a href="https://linkedin.com/" target="_blank">
    <FaLinkedin />
  </a>

  <a href="https://instagram.com/" target="_blank">
    <FaInstagram />
  </a>

  <a
    href="https://wa.me/+91 9342891618"
    target="_blank"
  >
    <FaWhatsapp />
  </a>

  <a href="mailto:shiekabdullah181@gmail.com">

    <FaEnvelope />

  </a>

</div>

      </div>

      <div className="right">

        <img src={myPhoto} alt="profile" />

      </div>

    </motion.div>
    

  );

  
}

export default Hero;