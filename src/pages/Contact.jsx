import React, { useState } from "react";
import { sendMessageAPI } from "../service/allAPI";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, message } = formData;

    if (!name || !email || !message) {
      setStatus("⚠ Please fill all fields!");
      return;
    }

    const newMessage = {
      name,
      email,
      message,
      date: new Date().toLocaleString(),
    };

    try {
      await sendMessageAPI(newMessage);
      setStatus("✅ Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      console.error(err);
      setStatus("❌ Failed to send message!");
    }
  };

  return (
    <div className="contact-page">
      <div className="contact-box">
        {/* LEFT SIDE */}
        <div className="contact-info">
          <h2>Get in Touch</h2>
          <p className="sub-text">
            I'd like to hear from you! <br />
            If you have any inquiries or just want to say hi, please use the contact form.
          </p>

          <p className="email">
            <a href="mailto:youremail@gmail.com">info@AmoraEvents.com</a>
          </p>

          <p className="phone">+971 50 835 7679</p>
        </div>

        {/* RIGHT SIDE */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="name-fields">
            <div>
              <label>Name</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label>Email</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                placeholder="Enter your email"
              />
            </div>
          </div>

          <label>Message</label>
          <textarea
            rows="5"
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            placeholder="Type your message..."
          ></textarea>

          <button type="submit">Send</button>
          {status && <p className="status">{status}</p>}
        </form>
      </div>
    </div>
  );
}

export default Contact;
