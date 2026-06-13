import "./Skills.css";
import { motion } from "framer-motion";

// Importing dynamic brand logos directly bro
import { 
  FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaPython, FaGitAlt, FaGithub, FaFigma, FaAndroid 
} from "react-icons/fa";
import { 
  SiTailwindcss, SiMongodb, SiExpress, SiFastapi, SiCloudinary, SiVercel, SiVite 
} from "react-icons/si";
import { MdDevices, MdApi } from "react-icons/md";

function Skills() {
  // Mapping each skill item with its precise components and matching neon glow variables[cite: 2]
  const skillCategories = [
    {
      category: "Frontend Development",
      items: [
        { name: "HTML5", icon: <FaHtml5 />, color: "#e34c26" },
        { name: "CSS3", icon: <FaCss3Alt />, color: "#264de4" },
        { name: "JavaScript", icon: <FaJsSquare />, color: "#f7df1e" },
        { name: "React.js", icon: <FaReact />, color: "#61dafb" },
        { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "#38bdf8" },
        { name: "Responsive Design", icon: <MdDevices />, color: "#a855f7" }
      ]
    },
    {
      category: "Backend & Database",
      items: [
        { name: "Node.js", icon: <FaNodeJs />, color: "#3ee226" },
        { name: "Express.js", icon: <SiExpress />, color: "#ffffff" },
        { name: "FastAPI", icon: <SiFastapi />, color: "#059669" },
        { name: "MongoDB Atlas", icon: <SiMongodb />, color: "#47a248" },
        { name: "Mongoose", icon: <SiMongodb />, color: "#880000" },
        { name: "REST API", icon: <MdApi />, color: "#00f3ff" }
      ]
    },
    {
      category: "Languages & Tools",
      items: [
        { name: "Python", icon: <FaPython />, color: "#3776ab" },
        { name: "Cloudinary", icon: <SiCloudinary />, color: "#3448c5" },
        { name: "Git & GitHub", icon: <FaGitAlt />, color: "#f1502f" },
        { name: "Vercel", icon: <SiVercel />, color: "#ffffff" },
        { name: "Figma", icon: <FaFigma />, color: "#f24e1e" },
        { name: "Android Studio", icon: <FaAndroid />, color: "#3ddc84" },
        { name: "Vite", icon: <SiVite />, color: "#bd34fe" }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.5, ease: "easeOut" } 
    }
  };

  return (
    <motion.section
      className="skills"
      id="skills"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.15 }}
    >
      <h1>My <span>Skills</span></h1>

      <p className="skills-text">
        Technologies, databases, and professional developer tools I use to build modern,
        scalable and responsive applications.
      </p>

      <motion.div 
        className="skills-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {skillCategories.map((group, index) => (
          <motion.div 
            className="category-card" 
            key={index}
            variants={cardVariants}
          >
            <h2 className="category-title">{group.category}</h2>
            
            <div className="tags-container">
              {group.items.map((skill, sIdx) => (
                <div 
                  className="skill-tag" 
                  key={sIdx}
                  style={{ "--hover-color": skill.color }} // Passing brand color dynamically to CSS
                >
                  <span className="tag-icon">{skill.icon}</span>
                  <span className="tag-name">{skill.name}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}

export default Skills;