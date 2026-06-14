import { useState } from "react";
// Change: Removed axios and added emailjs browser package bro
import emailjs from "@emailjs/browser";
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

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // 🛠️ IMPORTANT: Replace placeholder strings with your original keys bro!
    const serviceId = "portfolio_gmail";          // Already set to your default!
    const templateId = "template_5gw8vqg"; // Replace with your template_xxxx from Email Templates tab
    const publicKey = "lnk9-jWV9D-KBTwRV";   // Replace with your public key from Account tab

    // Structuring the variables exactly to map with your EmailJS template tags
    const templateParams = {
      name: formData.name,
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        alert("Message Sent Successfully🔥");
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      })
      .catch((error) => {
        console.error("EmailJS Error Details:", error);
        alert("Something went wrong. Please check your credentials configuration!");
      })
      .finally(() => {
        setLoading(false);
      });
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