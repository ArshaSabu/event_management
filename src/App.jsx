import "./App.css";
import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Header from "./components/Header";


function App() {
  const location = useLocation();
  const user = JSON.parse(localStorage.getItem("currentUser"));

  // Hide Header and Footer on login/register pages
  const hideLayout = location.pathname === "/login" || location.pathname === "/register";

  return (
    <>
      {!hideLayout && <Header />}

      <Routes>
        {/*  If user not logged in → redirect to login */}
        <Route path="/" element={user ? <Home /> : <Navigate to="/login" />} />
       
      


       
       
        {/*  Public routes */}
        <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
        <Route path="/register" element={user ? <Navigate to="/" /> : <Register />} />

        {/* Redirect unknown routes */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>

      {!hideLayout && <Footer />}
    </>
  );
}

export default App;
