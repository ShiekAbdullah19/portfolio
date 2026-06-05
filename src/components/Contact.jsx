import { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import "./Contact.css";

function Contact() {

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
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

      await axios.post(
        "https://portfolio-whrj.onrender.com/api/contact",
        formData
      );

      alert("Message Sent Successfully 🔥");

      setFormData({
        name: "",
        email: "",
        message: "",
      });

    } catch (error) {

      alert("Error Sending Message");

    }

    setLoading(false);

  };

  return (

    <motion.div
      className="contact"
      id="contact"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >

      <h1>Contact Me</h1>

      <form
        className="contact-form"
        onSubmit={handleSubmit}
      >

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

        <textarea
          name="message"
          placeholder="Enter your message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>

        <button
          type="submit"
          disabled={loading}
        >
          {loading ? "Sending..." : "Send Message"}
        </button>

      </form>

    </motion.div>
  );
}

export default Contact;