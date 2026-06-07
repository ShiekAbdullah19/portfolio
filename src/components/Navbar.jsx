import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Absolute JavaScript Scroll Logic Helper
  const handleScroll = (e, id) => {
    e.preventDefault(); // Prevent default link jumping glitches
    setMenuOpen(false); // Mobile drawer layout ah close pannidum

    const element = document.getElementById(id);
    if (element) {
      // Direct window alignment view shift tracking matrix
      element.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  };

  return (
    <nav className="navbar">
      {/* Mobile Menu Icon Toggle */}
      <div
        className="menu-icon"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Navigation Links Mapping */}
      <ul className={menuOpen ? "nav-links active" : "nav-links"}>
        <li>
          <a href="#home" onClick={(e) => handleScroll(e, "home")}>
            Home
          </a>
        </li>

        <li>
          <a href="#about" onClick={(e) => handleScroll(e, "about")}>
            About
          </a>
        </li>

        <li>
          <a href="#skills" onClick={(e) => handleScroll(e, "skills")}>
            Skills
          </a>
        </li>

        <li>
          <a href="#projects" onClick={(e) => handleScroll(e, "projects")}>
            Projects
          </a>
        </li>
        
        {/* CERTIFICATES: Triggering precise click tracking framework */}
        <li>
          <a href="#certificates" onClick={(e) => handleScroll(e, "certificates")}>
            Certificates
          </a>
        </li>

        <li>
          <a href="#contact" onClick={(e) => handleScroll(e, "contact")}>
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;