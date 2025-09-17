import React, { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Main = () => {
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const onScroll = () => {
      const fadeDistance = 400; // px over which to fade out
      const y = window.scrollY;
      const next = Math.max(0, Math.min(1, 1 - y / fadeDistance));
      setOpacity(next);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div id="main">
      {/* Spacer to reserve layout so subsequent sections are below the hero */}
      <div className="w-full h-screen" />
      {/* Fixed hero overlay that fades on scroll */}
      <div className="fixed inset-0 pointer-events-none">
        <div
          className="container mx-auto h-full w-full flex flex-col justify-center items-center px-4"
          style={{ opacity }}
        >
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <div className="w-32 sm:w-40 aspect-square rounded-full overflow-hidden shadow-md shrink-0">
              <img
                src="/headshot.png"
                alt="Ryan Rhoads headshot"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col items-center sm:items-start w-full">
              <div className="w-full max-w-xl">
                <h1 className="sm:text-5xl text-4xl font-bold text-gray-800 text-center sm:text-left">
                  Hello, I'm Ryan Rhoads.
                </h1>
                <div className="flex items-center justify-between w-full pt-4">
                  <h2 className="sm:text-3xl text-2xl text-gray-800">
                    <TypeAnimation
                      sequence={["Collaborator...", 2000, "Engineer...", 2000, "Coder...", 2000]}
                      wrapper="div"
                      cursor={true}
                      repeat={Infinity}
                      style={{ fontSize: "1em", paddingLeft: "6px" }}
                    />
                  </h2>
                  <div className="flex items-center gap-4">
                    <a
                      href="https://www.linkedin.com/in/ryangrantrhoads/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="pointer-events-auto"
                    >
                      <FaLinkedin className="cursor-pointer" size={20} />
                    </a>
                    <a
                      href="https://github.com/rgrhoads"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="pointer-events-auto"
                    >
                      <FaGithub className="cursor-pointer" size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
