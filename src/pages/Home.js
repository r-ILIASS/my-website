import React from "react";
// Sections
import Hero from "../sections/Hero";
import About from "../sections/About";
import Coursework from "../sections/Coursework";
import Contact from "../sections/Contact";
import ScrollToTop from "../components/ScrollToTop";

const Home = () => (
  <>
    <Hero />
    <About />
    <Coursework />
    <Contact />
    <ScrollToTop />
  </>
);

export default Home;
