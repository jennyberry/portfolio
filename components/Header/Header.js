import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from "next/link";
const Header = () => {
  return (
    <header className="sticky top-0 z-20 flex items-start justify-between p-5 mx-auto max-w-7xl xl:items-start">
      <motion.div
        intial={{
          x: -500,
          opacity: 0,
          scale: 8.5,
        }}
        animate={{
          x: 8,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center"
      >
        <SocialIcon
          url="https://github.com/jennyberry"
          fgColor="white"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://linkedin.com/in/jenny-pham-63947a246"
          fgColor="white"
          bgColor="transparent"
        />

      </motion.div>

      <motion.div
        intial={{
          x: 500,
          opacity: 0,
          scale: 8.5,
        }}
        animate={{
          x: -10,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center text-white cursor-pointer"
      >
        <SocialIcon network="email" fgColor="white" bgColor="transparent" />

        <Link href="#contact">
          <p className="text-sm text-gray-300 uppercase md:inline-flex">
            Get In Touch
          </p>
        </Link>
      </motion.div>
    </header>
  );
};

export default Header;
