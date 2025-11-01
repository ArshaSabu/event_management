import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Register.css";

function Register() {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    role: "user",
  });

  const navigate = useNavigate();

  const handleRegister = () => {
    const { name, email, password } = userData;

    if (!name || !email || !password) {
      alert("Please fill all fields");
      return;
    }

    // Basic email format check
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      alert("Please enter a valid email address");
      return;
    }

    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    const userExists = storedUsers.some((user) => user.email === email);

    if (userExists) {
      alert("User already registered! Please login.");
      navigate("/login");
      return;
    }

    const updatedUsers = [...storedUsers, userData];
    localStorage.setItem("users", JSON.stringify(updatedUsers));

    alert("Registration successful!");
    navigate("/login");
  };

  return (
    <div className="register-page">
      {/* Left Image Section */}
      <div className="register-image-section">
        <img
          src="https://workik.com/staticassets/images/event%20cover%20photo.webp"
          alt="Festival Celebration"
        />
      </div>

      {/* Right Form Section */}
      <div className="register-form-section">
        <div className="register-card">
          <h2 className="text-center mb-3 fw-bold">Celebrate With Us</h2>
          <p className="text-center text-muted mb-4">
            Where your special moments come to life.
          </p>

          <input
            type="text"
            placeholder="Full Name"
            className="form-control styled-input mb-3"
            onChange={(e) => setUserData({ ...userData, name: e.target.value })}
          />

          <input
            type="email"
            placeholder="Email Id"
            className="form-control styled-input mb-3"
            onChange={(e) => setUserData({ ...userData, email: e.target.value })}
          />

          <input
            type="password"
            placeholder="Password"
            className="form-control styled-input mb-4"
            onChange={(e) =>
              setUserData({ ...userData, password: e.target.value })
            }
          />

          <button className="w-100 register-btn" onClick={handleRegister}>
            Register
          </button>

          <p className="mt-3 text-center text-muted">
            Joined us before? <Link to="/login">Login here</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;
