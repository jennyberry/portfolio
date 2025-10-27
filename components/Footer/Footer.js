import React from "react";
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from "@heroicons/react/24/solid";

const Footer = () => {
  return (
    <div className="relative flex flex-col items-center h-screen px-10 mx-auto text-white md:text-left md:flex-row max-w-7xl justify-evenly">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-2xl">
        Contact
      </h3>
      <div className="flex flex-col space-y-10">
        <h4 className="text-4xl font-semibold text-center">
          <span>Let's have a chat</span>
        </h4>
        <div className="space-y-10">
          <div className="flex items-center justify-center space-x-5">
            <PhoneIcon className="text-orange-400 h-7 w-7 animate-bounce " />
            <p className="text-lg sm:text-2xl">+61-410-358-318</p>
          </div>
          <div className="flex items-center justify-center space-x-5">
            <EnvelopeIcon className="text-orange-400 h-7 w-7 animate-bounce" />
            <p className="text-md sm:text-2xl">
              <a href="mailto:jenny-pham-2022@outlook.com">
                jenny-pham2022@outlook.com
              </a>
            </p>
          </div>
          <div className="flex items-center justify-center space-x-5">
            <MapPinIcon className="text-orange-400 h-7 w-7" />
            <p className="text-lg sm:text-2xl">Wollongong, Australia</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
