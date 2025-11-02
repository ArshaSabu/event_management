import React, { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { AuthContext } from "../context/AuthContext";
import img1 from "../assets/img1.png";

function Login() {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const [isAdmin, setIsAdmin] = useState(false); 

  const navigate = useNavigate();
  const { loginUser } = useContext(AuthContext);

  const handleLogin = () => {
    const { email, password } = loginData;

    if (!email || !password) {
      alert("⚠️ Please fill all fields");
      return;
    }

    const adminAccount = {
      email: "admin@gmail.com",
      password: "admin123",
      role: "admin",
      name: "Admin",
    };

    // --- ADMIN LOGIN ---
    if (isAdmin) {
      if (email === adminAccount.email && password === adminAccount.password) {
        loginUser(adminAccount);
        alert("👑 Welcome Admin!");
        setTimeout(() => navigate("/"), 100);
      } else {
        alert("❌ Invalid Admin Credentials!");
      }
      return;
    }

    // --- USER LOGIN ---
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    const user = storedUsers.find((user) => user.email === email);

    if (user) {
      if (user.password === password) {
        loginUser(user);
        alert("🎉 Login Successful!");
        setTimeout(() => navigate("/"), 100);
      } else {
        alert("❌ Invalid password!");
      }
    } else {
      alert("📝 User not found. Please register first!");
      navigate("/register");
    }
  };

  return (
    <div
      className="d-flex align-items-center justify-content-center vh-100"
      style={{
        backgroundImage: `url(${img1})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        className="card shadow-lg p-4"
        style={{
          width: "380px",
          borderRadius: "15px",
          backdropFilter: "blur(1px)",
          backgroundColor: "rgba(255, 255, 255, 0.5)",
        }}
      >
        <div className="text-center mb-4">
          <h2 className="fw-bold text-dark">Welcome</h2>
          <p className="text-muted mb-0">
            {isAdmin ? "Admin Login" : "Please login to continue"}
          </p>
        </div>

        <div className="mb-3">
          <label className="form-label fw-semibold">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="form-control"
            onChange={(e) =>
              setLoginData({ ...loginData, email: e.target.value })
            }
          />
        </div>

        <div className="mb-4">
          <label className="form-label fw-semibold">Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            className="form-control"
            onChange={(e) =>
              setLoginData({ ...loginData, password: e.target.value })
            }
          />
        </div>

        <button
          className="w-100 fw-semibold text-white"
          style={{
            
    background: "linear-gradient(90deg, rgba(162, 136, 52, 0.8), rgba(184, 134, 11, 0.8))",
            border: "none",
            padding: "10px",
            borderRadius: "8px",
            transition: "all 0.3s ease",
          }}
          onMouseOver={(e) =>
           (e.currentTarget.style.background =
      "linear-gradient(90deg, rgba(184, 134, 11, 0.8), rgba(212, 175, 55, 0.8))")
          }
           onMouseOut={(e) =>
    (e.currentTarget.style.background =
      "linear-gradient(90deg, rgba(212, 175, 55, 0.8), rgba(184, 134, 11, 0.8))")
          }
          onClick={handleLogin}
        >
          {isAdmin ? "Admin Login" : "User Login"}
        </button>

        <p className="text-center text-muted mt-3 mb-0">
          {!isAdmin && (
            <>
              <span className="text-dark">Don't have an account?</span>{" "}
              <Link to="/register">
                Register here
              </Link>
              <br />
            </>
          )}
          or
          <br />
          <span
            className="text-decoration-none text-dark fw-semibold"
            style={{ cursor: "pointer" }}
            onClick={() => setIsAdmin(!isAdmin)}
          >
            {isAdmin ? "User Login" : "Admin Login"}
          </span>
        </p>
      </div>
    </div>
  );
}

export default Login;
