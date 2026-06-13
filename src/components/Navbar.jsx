import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // Optimization Matrix: Throttle flag vachu redundant state changes-ah தடுத்துட்டோம் bro
    let lastScrollY = window.scrollY;
    let ticking = false;

    const handleScrollToggle = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          
          if (currentScrollY > 50) {
            // ஆல்ரெடி ட்ரூவா இருந்தா திரும்ப setState பண்ணாது
            setIsScrolled(true);
          } else {
            setIsScrolled(false);
          }
          
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScrollToggle, { passive: true }); // passive: true குடுத்தா ஸ்க்ரோல் லேக் ஆகாது!
    return () => window.removeEventListener("scroll", handleScrollToggle);
  }, []);

  const handleScroll = (e, id) => {
    e.preventDefault(); 
    setMenuOpen(false);

    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  };

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      <ul className={menuOpen ? "nav-links active" : "nav-links"}>
        <li><a href="#home" onClick={(e) => handleScroll(e, "home")}>Home</a></li>
        <li><a href="#about" onClick={(e) => handleScroll(e, "about")}>About</a></li>
        <li><a href="#skills" onClick={(e) => handleScroll(e, "skills")}>Skills</a></li>
        <li><a href="#projects" onClick={(e) => handleScroll(e, "projects")}>Projects</a></li>
        <li><a href="#certificates" onClick={(e) => handleScroll(e, "certificates")}>Certificates</a></li>
        <li><a href="#contact" onClick={(e) => handleScroll(e, "contact")}>Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;