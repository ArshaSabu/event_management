import React, { useEffect, useState } from "react";
import "./Header.css";
import logo from "../assets/logo.png"; // make sure the image exists in src/assets

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`navbar poiret-one-regular ${scrolled ? "scrolled" : ""}`}>
      {/* ✅ Image Logo */}
      <div className="logo">
        <img src={logo} alt="Vivaah Logo" className="logo-img" />
        <span>Amora</span>Events
      </div>

      {/* ✅ Navigation Links */}
      <nav className="nav-links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        {/* <a href="#destination">Destination Weddings</a> */}
        <a href="#gallery">Gallery</a>
        {/* <a href="#faq">FAQ’s</a> */}
        <a href="#contact">Contact Us</a>
      </nav>

      {/* ✅ Login Button */}
      <a href="#login" className="login-link">
        Log-out
      </a>
    </header>
  );
}














