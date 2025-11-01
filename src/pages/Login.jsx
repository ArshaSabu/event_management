import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function Login() {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleLogin = () => {
    const { email, password } = loginData;

    if (!email || !password) {
      alert("Please fill all fields");
      return;
    }

    const adminAccount = {
      email: "admin@gmail.com",
      password: "admin123",
      role: "admin",
      name: "Admin",
    };

    if (email === adminAccount.email && password === adminAccount.password) {
      localStorage.setItem("currentUser", JSON.stringify(adminAccount));
      alert("Welcome Admin!");
      navigate("/");
      return;
    }

    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    const user = storedUsers.find((user) => user.email === email);

    if (user) {
      if (user.password === password) {
        localStorage.setItem("currentUser", JSON.stringify(user));
        alert("Login Successful!");
        navigate("/");
      } else {
        alert("Invalid password!");
      }
    } else {
      alert("User not found. Please register first!");
      navigate("/register");
    }
  };

  return (
    <div
      className="d-flex align-items-center justify-content-center vh-100"
      style={{
        backgroundImage:
          "url('https://www.thetamarindtree.in/wp-content/uploads/2024/09/SAL04106-1500x1000.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        className="card shadow-lg p-4"
        style={{
          width: "380px",
          borderRadius: "15px",
          backdropFilter: "blur(6px)",
          backgroundColor: "rgba(255, 255, 255, 0.85)",
        }}
      >
        <div className="text-center mb-4">
          <h2 className="fw-bold text-dark">Welcome</h2>
          <p className="text-muted mb-0">Please login to continue</p>
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
            background: "linear-gradient(90deg, #a28834, #b8860b)",
            border: "none",
            padding: "10px",
            borderRadius: "8px",
            transition: "all 0.3s ease",
          }}
          onMouseOver={(e) =>
          (e.currentTarget.style.background =
            "linear-gradient(90deg, #b8860b, #d4af37)")
          }
          onMouseOut={(e) =>
          (e.currentTarget.style.background =
            "linear-gradient(90deg, #d4af37, #b8860b)")
          }
          onClick={handleLogin}
        >
          Login
        </button>

        <p className="text-center text-muted mt-3 mb-0">
          Don't have an account?{" "}
          <Link
            to="/register"

          >
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
