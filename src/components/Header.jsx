import React, { useEffect, useState, useContext } from "react";
import "./Header.css";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const { currentUser, logoutUser } = useContext(AuthContext);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ✅ Logout handler
  const handleLogout = (e) => {
    e.preventDefault();
    logoutUser();
    alert("Logged out successfully!");
    navigate("/login");
  };

  return (
    <header
      className={`navbar poiret-one-regular ${scrolled ? "scrolled" : ""}`}
    >
      {/* Logo */}
      <div className="logo">
        <img src="/logo.png" alt="Vivaah Logo" className="logo-img" />
        <span>Amora</span>Events
      </div>

      {/* Navigation Links */}
      <nav className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/services">Services</Link>
        <Link to="/gallery">Gallery</Link>

        {/* ✅ Only show for USER */}
        {currentUser?.email !== "admin@gmail.com" && (
          <Link to="/contact">Contact Us</Link>
        )}

        {/* ✅ Only show for ADMIN */}
        {currentUser?.email === "admin@gmail.com" && (
          <Link
            to="/admin/messages"

          >
            View Messages
          </Link>
        )}
      </nav>

      {/* Logout Button */}
      <a
        href="#"
        onClick={handleLogout}
        className="login-link"
        style={{ cursor: "pointer" }}
      >
        Log-out
      </a>
    </header>
  );
}
