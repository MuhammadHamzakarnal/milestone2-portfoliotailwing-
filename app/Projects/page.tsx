import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";
import AssImage1 from "../public/Screenshot 2024-10-23 052020 (2).png";
import AssImage2 from "../public/Screenshot 2024-10-23 051839 (4).png";
import AssImage3 from "../public/Screenshot 2024-10-27 031047 (4).png";
import AssImage4 from "../public/Screenshot 2024-10-27 035244 (3).png";
import Link from "next/link";

const Projects = () => {
  return (
    <div>
      <Header></Header>
    <div className="flex flex-wrap justify-center bg-gray-400 p-10 shadow-green-200 shadow-xl">
      <div className="m-4">
        <h2 className="text-center font-bold font-serif">Assignmente One</h2>
        <Link href="">
          <Image
            src={AssImage1}
            alt="Assimage"
            width={300}
            height={300}
            className="object-cover"
          />
        </Link>
      </div>

      <div className="m-4">
        <h2 className="text-center font-bold font-serif">AssignmentTwo</h2>
        <Link href="https://vercel.com/muhammad-hamzas-projects-243aa18f/nextjsasss2/BYRhKu2muEHSHXaJPmc6NkweURwb">
          <Image
            src={AssImage2}
            alt="Assimage"
            width={300}
            height={300}
            className="object-cover"
          />
        </Link>
      </div>

      <div className="m-4">
        <h2 className="text-center font-bold font-serif">Assignment Three</h2>
        <Link href="https://vercel.com/muhammad-hamzas-projects-243aa18f/nextjs-ass3/Dyt1HtSnETcqdLFQrtdT2eLjAZUR">
          <Image
            src={AssImage3}
            alt="Assimage"
            width={300}
            height={300}
            className="object-cover"
          />
        </Link>
      </div>

      <div className="m-4">
        <h2 className="text-center font-bold font-serif">Project One</h2>
        <Link href="">
          <Image
            src={AssImage4}
            alt="Assimage"
            width={300}
            height={300}
            className="object-cover"
          />
        </Link>
      </div>
    </div>
    <Footer></Footer>
    </div>
  );
};

export default Projects;
