import React from "react";
import "./Footer.css";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp, FaArrowUp } from "react-icons/fa";

const Footer = () => {
  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-box hear">
          <h2>
            <span className="slash">/</span> We are here to hear you.
          </h2>
        </div>

        <div className="footer-box copyright">
          <h3>Copyright</h3>
          <p>© Amora Events 2025</p>
        </div>

        <div className="footer-box contact">
          <h3>Contact</h3>
          <p>Ernakulam,Kerala</p>
          <p>
            E : <a href="mailto:info@vivaahcelebrations.com">info@AmoraEvents.com</a>
          </p>
          <p>
            T : <a href="tel:+971508357679">+971 50 835 7679</a>
          </p>
        </div>

        <div className="footer-box follow">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <FaFacebookF />
            <FaInstagram />
            <FaLinkedinIn />
          </div>
        </div>

        {/* Scroll-to-top button */}
        <button className="scroll-top-btn" onClick={scrollToTop}>
          <FaArrowUp />
        </button>
      </div>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/971508357679"
        className="whatsapp-btn"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp />
      </a>
    </footer>
  );
};

export default Footer;

