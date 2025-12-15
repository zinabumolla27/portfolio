import React from "react";
import { Routes, Route } from "react-router-dom";
import AppHeader from "./components/AppHeader";
import Home from "./pages/HomePage/Home";
import About from "./pages/AboutPage/About";
import Projects from "./pages/ProjectsPage/Projects";
import Contact from "./pages/ContactPage/Contact";
import Skill from "./pages/SkillsPage/Skill";
import "./App.css";
import Footer from "./pages/Footer";
function App() {
  return (
    <>
      <AppHeader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/skill" element={<Skill />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
