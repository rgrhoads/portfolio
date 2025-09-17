import React, { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Main = () => {
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const onScroll = () => {
      const fadeDistance = 800; // px over which to fade out (slower fade)
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
          className="container mx-auto h-full w-full flex flex-col justify-start items-center px-4 pt-[33vh]"
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
              <div className="w-full max-w-xl flex flex-col gap-3 sm:gap-2">
                <h2 className="sm:text-3xl text-2xl text-gray-800 text-center">Hello, I'm</h2>
                <h1 className="sm:text-5xl text-4xl font-bold text-gray-800 text-center sm:text-left">
                  Ryan Rhoads
                </h1>
                {/* <div className="flex items-center justify-between w-full"> */}
                <h2 className="sm:text-3xl text-2xl text-gray-800 text-center">
                  <TypeAnimation
                    sequence={["Leader...", 2000, "Collaborator...", 2000, "Engineer...", 2000]}
                    wrapper="div"
                    cursor={true}
                    repeat={Infinity}
                  />
                </h2>
                <div className="flex items-center justify-center gap-4 text-xl">
                  <a
                    href="https://www.linkedin.com/in/ryangrantrhoads/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pointer-events-auto"
                  >
                    <FaLinkedin className="cursor-pointer" />
                  </a>
                  <a
                    href="https://github.com/rgrhoads"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pointer-events-auto"
                  >
                    <FaGithub className="cursor-pointer" />
                  </a>
                </div>
                {/* </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
