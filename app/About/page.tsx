import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div>
      <Header />
      
      <div className="mt-10 p-5 shadow-md bg-gray-200">
        <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-center text-secendory shadow-xl font-mono">
          About Me
        </h2>
        
        <p className="text-lg text-gray-700 mx-4 sm:mx-10 md:mx-20 font-thin">
          Hello! I&apos;m a passionate developer who has delved into the world of web development. 
          I started my journey by learning HTML and CSS, which provided me with a solid foundation 
          for creating beautiful and responsive web pages.
        </p>
        
        <p className="text-lg text-gray-700 mt-4 mx-4 sm:mx-10 md:mx-20 font-thin">
          To enhance my skills further, I explored TypeScript, which allowed me to write more robust 
          and maintainable code. Currently, I&apos;m diving into Next.js, a powerful framework for building 
          server-rendered React applications that has opened up a new world of possibilities for me.
        </p>
        
        <p className="text-lg text-gray-700 mt-4 mx-4 sm:mx-10 md:mx-20 font-thin">
          I&apos;m excited about continuing to grow my skill set and contribute to innovative projects. 
          Let&apos;s connect and build something amazing together!
        </p>
        
        <div className="mt-8 text-center">
          <button className="p-2 px-6 bg-secendory text-white rounded hover:bg-green-400 font-serif w-full sm:w-auto mb-40">
            Hire me
          </button>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default About;
