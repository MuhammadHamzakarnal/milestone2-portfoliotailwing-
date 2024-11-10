import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Footer from "./components/Footer";

// Removed unused imports
// import About from "./About/page";
// import Projects from "./Projects/page";
// import Contact from "./Contact/page";

const Page = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <hr />
      
      {/* Uncomment these if you want to use the components */}
      {/* <About /> */}
      {/* <Projects /> */}
      {/* <Contact /> */}
      
      <Footer />
    </div>
  );
};

export default Page;
