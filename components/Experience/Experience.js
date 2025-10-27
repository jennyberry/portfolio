import React from "react";
import { motion } from "framer-motion";
import { TimeLineData } from "../../constants/constants";
const Experience = () => {
  return (
    <div className="relative flex flex-col items-center h-screen max-w-full px-10 mx-auto text-white overflor-hidden md:text-left md:flex-row justify-evenly">
     <h3 className="absolute top-24 uppercase tracking-[20px] text-2xl">
        Experiences
      </h3>

      <div className="relative border-l-2 border-orange-300">
        {TimeLineData.map((item, index) => (
          <div key={index} className="mb-10 ml-6">
            <div className="absolute w-3 h-3 bg-orange-300 rounded-full -left-[7px] mt-1.5"></div>
            <time className="mb-1 text-lg font-medium text-orange-600">{item.year}</time>
            <h3 className="text-lg font-semibold">{item.title}</h3>
            <p className="text-gray-600">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
)
}
export default Experience;