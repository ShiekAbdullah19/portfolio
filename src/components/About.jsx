import "./About.css";
import { motion } from "framer-motion";

function About() {
  // Sequence delays grid cards tracking logic
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.5, ease: "easeOut" }
    })
  };

  return (
    <motion.section
      className="about"
      id="about"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="about-container">
        
        {/* Left Column: Typography Content Description Elements */}
        <div className="about-left">
          <h1>About <span>Me</span></h1>
          
          <div className="about-text-wrapper">
            <p>
              I'm <span>Shiek Abdullah</span>, a passionate Full Stack Developer 
              and B.Tech Information Technology student at 
              E.G.S Pillay Engineering College. 
            </p>

            <p>
              I specialize in building modern, responsive and scalable web
              applications using the MERN Stack.
            </p>

            <p>
              I have developed real-world projects including
              E-Commerce platforms, AI-Based Energy Management Systems,
              and IoT applications.
            </p>
          </div>
        </div>

        {/* Right Column: Premium 2x2 Grid Info Architecture Matrix */}
        <div className="about-right">
          <div className="about-details">
            
            <motion.div 
              className="detail-card"
              custom={1}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="card-inner">
                <span className="card-emoji">🎓</span>
                <span className="card-text">B.Tech IT (2022 - 2026)</span>
              </div>
            </motion.div>

            <motion.div 
              className="detail-card"
              custom={2}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="card-inner">
                <span className="card-emoji">💻</span>
                <span className="card-text">MERN Stack Developer</span>
              </div>
            </motion.div>

            <motion.div 
              className="detail-card"
              custom={3}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="card-inner">
                <span className="card-emoji">🚀</span>
                <span className="card-text">React | Node.js | MongoDB</span>
              </div>
            </motion.div>

            <motion.div 
              className="detail-card"
              custom={4}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="card-inner">
                <span className="card-emoji">🌍</span>
                <span className="card-text">Passionate About Full Stack Dev</span>
              </div>
            </motion.div>

          </div>
        </div>

      </div>
    </motion.section>
  );
}

export default About;