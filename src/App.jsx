import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./index.css";

export default function App() {
  return (
    <>
      <Header />
      <main style={{ paddingTop: "100px", minHeight: "70vh" }}>
        <h2 style={{ textAlign: "center", marginTop: 60 }}>
          Page body / hero area
        </h2>
      </main>
      <Footer />
    </>
  );
}






