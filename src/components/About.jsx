import "./About.css";

function About() {

  return (

    <section className="about" id="about">

      <div className="about-container">

        <h1>About Me</h1>

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

        <div className="about-details">

          <div className="detail-card">
            🎓 B.Tech IT (2022 - 2026)
          </div>

          <div className="detail-card">
            💻 MERN Stack Developer
          </div>

          <div className="detail-card">
            🚀 React | Node.js | MongoDB
          </div>

          <div className="detail-card">
            🌍 Passionate About Full Stack Development
          </div>

        </div>

      </div>

    </section>

  );

}

export default About;