import React, { useState, useEffect } from 'react';
import './Certificate.css';
import { motion } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; // Added slick arrows for navigation

const Certificate = () => {
  const getImageUrl = (name) => {
    return new URL(`../assets/${name}`, import.meta.url).href;
  };

  const certificates = [
    { id: 1, image: getImageUrl('cert1.png'), title: 'Human Computer Interaction' },
    { id: 2, image: getImageUrl('cert2.png'), title: 'Aws Cloud Adoption Framework' },
    { id: 3, image: getImageUrl('cert3.png'), title: 'Data Analytics Using R' },
    { id: 4, image: getImageUrl('cert4.png'), title: 'Full Stack Development' },
    { id: 5, image: getImageUrl('cert5.png'), title: 'Mobile App Development' },
    { id: 6, image: getImageUrl('cert6.png'), title: 'Cloud Computing' },
    { id: 7, image: getImageUrl('cert7.png'), title: 'Cyber Security And Ethical Hacking' },
    { id: 8, image: getImageUrl('cert8.png'), title: 'Artificial Intelligence' },
    { id: 9, image: getImageUrl('cert9.png'), title: 'Machine Learning And Advanced AI Techniques' },
    { id: 10, image: getImageUrl('cert10.png'), title: 'Data Mining' },
    { id: 11, image: getImageUrl('cert11.png'), title: 'Database Management' }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Auto loop auto-play controller
  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      handleNext();
    }, 1500); 

    return () => clearInterval(interval);
  }, [currentIndex, isHovered]);

  // Click handler actions
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + certificates.length) % certificates.length);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % certificates.length);
  };

  return (
    <motion.section
      className="Certificates-wrapper-section"
      id="certificates" /* Exact match with Navbar's handleScroll setup bro */
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.15 }}
    >
      {/* Removed the duplicate/conflicting id from this inner tag */}
      <section className="certificates-section">
        {/* Updated header tags to align with portfolio theme setup */}
        <h2 className="section-title">My <span>Certificates</span></h2>
        <p className="section-subtitle">Continuous learning and professional recognitions</p>

        <div 
          className="carousel-wrapper"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Navigation Control Buttons */}
          <button className="nav-btn prev-btn" onClick={handlePrev} aria-label="Previous Slide">
            <FaChevronLeft />
          </button>

          <div className="slider-container">
            {certificates.map((cert, index) => {
              let position = 'hiddenSlide'; 
              
              if (index === currentIndex) {
                position = 'activeSlide';
              } else if (
                index === currentIndex - 1 ||
                (currentIndex === 0 && index === certificates.length - 1)
              ) {
                position = 'lastSlide';
              } else if (
                index === currentIndex + 1 ||
                (currentIndex === certificates.length - 1 && index === 0)
              ) {
                position = 'nextSlide';
              }

              return (
                <div className={`carousel-card ${position}`} key={cert.id}>
                  <div className="carousel-img-wrapper">
                    <img src={cert.image} alt={cert.title} />
                  </div>
                  <div className="carousel-info">
                    <h3>{cert.title}</h3>
                  </div>
                </div>
              );
            })}
          </div>

          <button className="nav-btn next-btn" onClick={handleNext} aria-label="Next Slide">
            <FaChevronRight />
          </button>
        </div>

        {/* Dynamic Indicator Dots Layer */}
        <div className="carousel-dots">
          {certificates.map((_, index) => (
            <div
              key={index}
              className={`dot ${index === currentIndex ? 'active-dot' : ''}`}
              onClick={() => setCurrentIndex(index)}
            ></div>
          ))}
        </div>
      </section>
    </motion.section>
  );
};

export default Certificate;