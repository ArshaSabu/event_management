import "./App.css";
import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Header from "./components/Header";
import About from "./pages/About";
import Services from "./pages/Services";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

function App() {
  const location = useLocation();
  const { currentUser } = useContext(AuthContext); // ✅ use context now instead of localStorage

  // Hide Header and Footer on login/register pages
  const hideLayout =
    location.pathname === "/login" || location.pathname === "/register";

  return (
    <>
      {!hideLayout && <Header />}

      <Routes>
        {/* Protected route — only logged in users can access home */}
        <Route
          path="/"
          element={currentUser ? <Home /> : <Navigate to="/login" />}
        />

        {/* Services page visible only if logged in */}
        <Route
          path="/services"
          element={currentUser ? <Services /> : <Navigate to="/login" />}
        />
         {/* ✅ About page — visible only when logged in */}
        <Route
          path="/about"
          element={currentUser ? <About /> : <Navigate to="/login" />}
        />

        {/* Public routes */}
        <Route
          path="/login"
          element={currentUser ? <Navigate to="/" /> : <Login />}
        />
        <Route
          path="/register"
          element={currentUser ? <Navigate to="/" /> : <Register />}
        />

        {/* Redirect unknown routes */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>

      {!hideLayout && <Footer />}
    </>
  );
}

export default App;
