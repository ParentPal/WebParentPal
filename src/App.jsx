import Artikelcontentlogin from "./components/artikelcontentlogin";
import Footer from "./components/footer";
import Lastsection from "./components/lastsection";
import Navbarlogin from "./components/navbarlogin";
import Section1 from "./components/section1";
import Navbar from "./components/navbar";
import Hubungikami from "./pages/Hubungikami";
import Detailartikel from "./components/detailartikel";
import Promosi from "./components/promosi";
import Tanya from "./components/tanya";
import Edukasi from "./pages/edukasi";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import React, { Component } from "react";
import Aplikasi from "./pages/Aplikasi";
import Tanyaahli from "./pages/Tanyaahli";
import Masuk from "./pages/Masuk";
import Register from "./pages/Singup";
import Dasboard from "./pages/Dasboard";
import Sidebar from "./components/admin";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<h1>NOT FOUND</h1>} />

        <Route path="/edukasi" element={<Edukasi />} />
        <Route path="/aplikasi" element={<Aplikasi />} />
        <Route path="/hubungikami" element={<Hubungikami />} />
        <Route path="/detailartikel" element={<Detailartikel />} />
        <Route path="/tanyaahli" element={<Tanyaahli />} />
        <Route path="/login" element={<Masuk />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dasboard" element={<Dasboard />} />
      </Routes>
    </Router>
  );
};

export default App;
