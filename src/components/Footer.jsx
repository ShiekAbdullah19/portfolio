import "./Footer.css";

import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
  FaArrowUp
} from "react-icons/fa";

function Footer() {

  return (

    <footer className="footer">

      <h1>Shiek Abdullah</h1>

      <p>Full Stack Developer</p>

      <div className="footer-icons">

        <a
          href="https://github.com/ShiekAbdullah19"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>

        <a
          href="https://www.linkedin.com/in/shiekabdullah19"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
        </a>

        <a
          href="https://www.instagram.com/shiek_abdullah_19"
          target="_blank"
          rel="noreferrer"
        >
          <FaInstagram />
        </a>

        <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=shiekabdullah181@gmail.com"
  target="_blank"
  rel="noreferrer"
>

  <FaEnvelope />

</a>
      </div>

      <a href="#home" className="top-btn">

        <FaArrowUp />

      </a>

      <h3>
        © 2025 All Rights Reserved
      </h3>

    </footer>

  );
}

export default Footer;