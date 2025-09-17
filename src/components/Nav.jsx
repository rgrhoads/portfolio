import React from "react";
import { AiOutlineHome, AiOutlineMail, AiOutlineProject } from "react-icons/ai";
import { GrProjects } from "react-icons/gr";

const Sidenav = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-20">
      <div className="container mx-auto px-4">
        <nav className="flex justify-center gap-12 py-6">
          <a
            href="#main"
            className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 p-3 sm:p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <AiOutlineHome size={20} />
          </a>
          <a
            href="#work"
            className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 p-3 sm:p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <GrProjects size={20} />
          </a>
          <a
            href="#projects"
            className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 p-3 sm:p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <AiOutlineProject size={20} />
          </a>
          <a
            href="#contact"
            className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 p-3 sm:p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <AiOutlineMail size={20} />
          </a>
        </nav>
      </div>
    </div>
  );
};

export default Sidenav;
