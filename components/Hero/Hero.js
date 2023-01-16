import Link from "next/link";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import Background from "../BackgroundAnimate/Background";
const Hero = () => {
  const [text, count] = useTypewriter({
    words: ["Hi, people call me Jenny", "I am a [brand new] developer"],
    loop: true,
    delaySpeed: 2000,
    typeSpeed: 50,
  });
  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-4 overflow-hidden text-center text-white ">
      <Background />
      <div>
        <img
          className="relative object-cover w-40 h-40 mx-auto rounded-full "
          src="Avatar.png"
        />
      </div>
      {/* <Image src="/Avatar.png" width="150" height="300" /> */}
      <div className="z-20">
        <h2 className="text-sm text-orange-300 uppercase p-2 tracking-[15px]">
          Software Engineer
        </h2>
        <h1 className="px-10 text-2xl font-semibold lg:text-5xl">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="orange" />
        </h1>
        <div className="pt-6">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
