import React from "react"; 
import Link from "next/link";

const Header = () => {
  return (
    <div>
      <nav>
        <ul className="flex flex-col sm:flex-row bg-zinc-900 justify-between items-center rounded-lg m-0">
          
          <li className="m-5 p-2 text-secendory text-2xl font-bold font-mono sm:ml-10">
            <h1>
              <span className="text-primary">Port</span>folio
            </h1>
          </li>

          
          <div className="flex flex-col sm:flex-row sm:flex-grow justify-center sm:items-center w-full">
            <li className="m-3 sm:m-5 text-white hover:bg-green-400 p-2 rounded font-mono transition duration-600 hover:text-red-500 active:bg-primary w-full sm:w-auto text-center">
              <Link href="/">Home</Link>
            </li>
            <li className="m-3 sm:m-5 text-white hover:bg-green-400 p-2 rounded font-mono transition duration-600 hover:text-red-500 active:bg-primary w-full sm:w-auto text-center">
              <Link href="/About">About Us</Link>
            </li>
            <li className="m-3 sm:m-5 text-white hover:bg-green-400 p-2 rounded font-mono transition duration-600 hover:text-red-500 active:bg-primary w-full sm:w-auto text-center">
              <Link href="/Projects">Projects</Link>
            </li>
          </div>

          
          {/* <li className="m-3 sm:m-5  rounded text-white bg-secendory font-mono hover:bg-green-400 transition duration-600 hover:text-pink-500 active:bg-primary w-full sm:w-auto text-center">
            <button>
              <Link href="/Contact">Contact Us</Link>
            </button>
          </li> */}
        </ul>
      </nav>
    </div>
  );
};

export default Header;
