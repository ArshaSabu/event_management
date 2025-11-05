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
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact"; 
import AdminMessages from "./pages/AdminMessages"; 

function App() {
  const location = useLocation();
  const { currentUser } = useContext(AuthContext);

  const hideLayout =
    location.pathname === "/login" || location.pathname === "/register";

  return (
    <>
      {!hideLayout && <Header />}

      <Routes>
        <Route
          path="/"
          element={currentUser ? <Home /> : <Navigate to="/login" />}
        />

        <Route
          path="/services"
          element={currentUser ? <Services /> : <Navigate to="/login" />}
        />
        <Route
          path="/about"
          element={currentUser ? <About /> : <Navigate to="/login" />}
        />
        <Route
          path="/gallery"
          element={currentUser ? <Gallery /> : <Navigate to="/login" />}
        />

        {/* ✅ Contact Page */}
        <Route
          path="/contact"
          element={currentUser ? <Contact /> : <Navigate to="/login" />}
        />

        {/* ✅ Admin Messages Page */}
        <Route
          path="/admin/messages"
          element={
            currentUser && currentUser.email === "admin@gmail.com" ? (
              <AdminMessages />
            ) : (
              <Navigate to="/login" />
            )
          }
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

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>

      {!hideLayout && <Footer />}
    </>
  );
}

export default App;
