import { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaLocationDot } from "react-icons/fa6";
import "./Contact.css";

function Contact() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Fix: Render சர்வர் தூங்கிட்டு இருந்தாலும் 60 செகண்ட் வரை வெயிட் பண்ண டைம்அவுட் வைக்கிறோம் bro
      await axios.post(
        "https://portfolio-whrj.onrender.com/api/contact",
        formData,
        { timeout: 60000 } 
      );

      alert("Message Sent Successfully 🔥");

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Error Details:", error);
      // ஒருவேளை நெட்வொர்க் எரர் வந்தா தெளிவா காட்ட
      if (error.code === 'ECONNABORTED') {
        alert("Server is waking up! Please try clicking 'Send Message' again in a few seconds. ⏳");
      } else {
        alert("Error Sending Message. Check if backend is active!");
      }
    }

    setLoading(false);
  };

  return (
    <motion.section
      className="contact"
      id="contact"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <h1 className="contact-title">
        Contact <span>Me</span>
      </h1>

      <p className="contact-subtitle">
        Let's connect and build something amazing together
      </p>

      <div className="contact-container">
        <div className="contact-info">
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=shiekabdullah181@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="info-card"
          >
            <FaEnvelope />
            <h3>Email</h3>
            <p>shiekabdullah181@gmail.com</p>
          </a>

          <a href="tel:+919342891618" className="info-card">
            <FaPhone />
            <h3>Phone</h3>
            <p>+91 9342891618</p>
          </a>

          <a
            href="http://maps.google.com/?q=Chennai,Tamil Nadu,India"
            target="_blank"
            rel="noopener noreferrer"
            className="info-card"
          >
            <FaLocationDot />
            <h3>Location</h3>
            <p>Chennai, Tamil Nadu, India</p>
          </a>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          {/* Fix: type="subject" மாற்றப்பட்டு type="text" ஆக்கப்பட்டுள்ளது bro */}
          <input
            type="text" 
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            placeholder="Enter your message"
            value={formData.message}
            onChange={handleChange}
            required
          />

          <button type="submit" disabled={loading}>
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </motion.section>
  );
}

export default Contact;