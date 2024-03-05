import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Navbar/Hero/Hero";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import ContactMe from "./components/ContactMe/ContactMe";
import Footer from "./components/Footer/Footer";
import MobileNav from "./components/Navbar/MobileNav/MobileNav";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
const App = () => {
  return (
    <>
      <Navbar />
      <MobileNav />

      <div className="container">
        <Hero />
        <Skills />
        <Projects />
        <ContactMe />
        <Footer />
      </div>
    </>
  )

};

export default App;