import React from "react";
import { projects } from "../../constants/constants";
const Projects = () => {
  return (
    <div className="relative flex flex-col items-center h-screen max-w-full px-10 mx-auto text-white overflor-hidden md:text-left md:flex-row justify-evenly">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-2xl">
        Projects
      </h3>
      <h3 className=" absolute text-sm tracking-[5px] uppercase top-36 min[320px]-text-[10px] text-center text-gray-300">
        Case studies that I worked on
      </h3>
      <div className="z-20 flex w-full overflow-x-scroll overflow-y-hidden snap-x snap-mandatory scrollbar-thin scrollbar-thumb-orange-500 scrollbar-track-gray-400/20">
        {projects.map(
          ({ id, title, image, description, tags, source, visit }) => (
            <div
              key={id}
              className="flex flex-col items-center justify-center flex-shrink-0 w-screen h-screen p-20 space-y-5 snap-center md:p-44"
            >
              <div className="pt-20 mt-20">
                <img
                  src={image}
                  className="w-auto h-auto  object-fit sm:object-fill sm:h-[200px] pt-10 mt-10"
                  // className="sm:object-fit sm:h-[300px] sm:w-auto object-fit w-[300px] h-100"
                />
              </div>
              <div className="max-w-6xl px-0 space-y-4 md:px-10">
                <div className="pt-10 text-2xl font-semibold text-center">
                  <a
                    className="text-white underline hover:text-orange-200 visited:text-orange-500"
                    href={visit}
                  >
                    {title}
                  </a>
                </div>
                <p className="text-lg text-center md:text-left">
                  {description}
                </p>

                <li className="flex flex-row justify-between sm:justify-evenly">
                  {tags.map((tag, i) => (
                    <ul className=" border-[1px] p-2 rounded-[10px]" key={i}>
                      {tag}
                    </ul>
                  ))}
                </li>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Projects;
