import React, { useEffect, useState } from "react";
import "./Header.css";
import logo from "../assets/logo.png"; 
import { useNavigate } from "react-router-dom";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

//  Logout
  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    alert("Logged out successfully!");
    navigate("/login");
  };

  return (
    <header className={`navbar poiret-one-regular ${scrolled ? "scrolled" : ""}`}>
      {/*  Image Logo */}
      <div className="logo">
        <img src={logo} alt="Vivaah Logo" className="logo-img" />
        <span>Amora</span>Events
      </div>

      {/*  Navigation Links */}
      <nav className="nav-links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#gallery">Gallery</a>
        <a href="#contact">Contact Us</a>
      </nav>

      
      <a onClick={handleLogout} className="login-link" style={{ cursor: "pointer" }}>
        Log-out
      </a>
    </header>
  );
}
