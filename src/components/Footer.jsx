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
    <footer className="footer-container" id="footer">
      <div className="footer-content">

        {/* Left Side: Branding, Tagline, Socials & Back to Top */}
        <div className="footer-brand">
          <h1 className="footer-logo">Shiek Abdullah</h1>
          <p className="footer-tagline">
            Building high-performance, responsive full-stack applications with elegant user experiences.
          </p>

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

          {/* Reference Image madhiri Box Design Back To Top Button */}
          <a href="#home" className="back-to-top-btn">
            <FaArrowUp /> BACK TO TOP
          </a>
        </div>

        {/* Right Side: Site Map Grid Section matching reference image */}
        <div className="footer-links-group">
          <div className="footer-column">
            <h3>Site Map</h3>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#certificates">Certificates</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Legal</h3>
            <ul>
              <li><a href="#privacy">Privacy Policy</a></li>
              <li><a href="#terms">Terms of Services</a></li>
            </ul>
          </div>
        </div>

      </div>

      {/* Bottom copy space container */}
      <div className="footer-bottom">

        <h3>© 2026 Shiek Abdullah. All Rights Reserved.</h3>
      </div>

    </footer>
  );
}

export default Footer;