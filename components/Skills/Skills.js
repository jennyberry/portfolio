import React from "react";
import { motion } from "framer-motion";
const Skills = () => {
  return (
    <div className="flex relative flex-col text-center md:text-left top-36 max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center text-white">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-2xl text-white">
        Skills
      </h3>
      <h3 className="absolute text-[13px] tracking-[5px] uppercase top-36 sm:text-sm">
        Technologies that I experienced
      </h3>
      <div className="w-full absolute top-[40%] left-0 h-[550px] border-[orange]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          xmlnssvgjs="http://svgjs.dev/svgjs"
          viewBox="0 0 1422 900"
          opacity="1"
        >
          <defs>
            <linearGradient
              x1="50%"
              y1="0%"
              x2="50%"
              y2="100%"
              id="oooscillate-grad"
            >
              <stop
                stopColor="hsl(30, 100%, 50%)"
                stopOpacity="1"
                offset="0%"
              ></stop>
              <stop
                stopColor="hsl(30, 100%, 70%)"
                stopOpacity="1"
                offset="100%"
              ></stop>
            </linearGradient>
          </defs>
          <g
            strokeWidth="1"
            stroke="url(#oooscillate-grad)"
            fill="none"
            strokeLinecap="round"
          >
            <path
              d="M 0 442 Q 355.5 145 711 400 Q 1066.5 655 1422 442"
              strokeDasharray="2 2"
              opacity="1.00"
            ></path>
            <path
              d="M 0 416 Q 355.5 145 711 400 Q 1066.5 655 1422 416"
              strokeDasharray="1 1"
              opacity="0.94"
            ></path>
            <path
              d="M 0 390 Q 355.5 145 711 400 Q 1066.5 655 1422 390"
              strokeDasharray="1 1"
              opacity="0.88"
            ></path>
            <path
              d="M 0 364 Q 355.5 145 711 400 Q 1066.5 655 1422 364"
              strokeDasharray="1 2"
              opacity="0.82"
            ></path>
            <path
              d="M 0 338 Q 355.5 145 711 400 Q 1066.5 655 1422 338"
              strokeDasharray="2 0"
              opacity="0.76"
            ></path>
            <path
              d="M 0 312 Q 355.5 145 711 400 Q 1066.5 655 1422 312"
              strokeDasharray="1 1"
              opacity="0.70"
            ></path>
            <path
              d="M 0 286 Q 355.5 145 711 400 Q 1066.5 655 1422 286"
              strokeDasharray="1 2"
              opacity="0.64"
            ></path>
            <path
              d="M 0 260 Q 355.5 145 711 400 Q 1066.5 655 1422 260"
              strokeDasharray="0 2"
              opacity="0.58"
            ></path>
            <path
              d="M 0 234 Q 355.5 145 711 400 Q 1066.5 655 1422 234"
              strokeDasharray="0 1"
              opacity="0.53"
            ></path>
            <path
              d="M 0 208 Q 355.5 145 711 400 Q 1066.5 655 1422 208"
              strokeDasharray="1 1"
              opacity="0.47"
            ></path>
            <path
              d="M 0 182 Q 355.5 145 711 400 Q 1066.5 655 1422 182"
              strokeDasharray="0 2"
              opacity="0.41"
            ></path>
            <path
              d="M 0 156 Q 355.5 145 711 400 Q 1066.5 655 1422 156"
              strokeDasharray="0 1"
              opacity="0.35"
            ></path>
            <path
              d="M 0 130 Q 355.5 145 711 400 Q 1066.5 655 1422 130"
              opacity="0.29"
            ></path>
            <path
              d="M 0 104 Q 355.5 145 711 400 Q 1066.5 655 1422 104"
              strokeDasharray="1 1"
              opacity="0.23"
            ></path>
            <path
              d="M 0 78 Q 355.5 145 711 400 Q 1066.5 655 1422 78"
              strokeDasharray="1 2"
              opacity="0.17"
            ></path>
            <path
              d="M 0 52 Q 355.5 145 711 400 Q 1066.5 655 1422 52"
              strokeDasharray="2 2"
              opacity="0.11"
            ></path>
          </g>
        </svg>
      </div>
      <motion.div
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        transition={{
          duration: 1.5,
        }}
      >
        <div className="grid items-center grid-cols-5 gap-6 pt-20 mx-5 text-center">
          <div>
            <motion.img
              whileHover={{ scale: 1.5 }}
              whileTap={{ scale: 0.8 }}
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-plain-wordmark.svg"
              className="object-cover w-20"
            />
            <p className="pt-2 hover:text-sm">MySQL</p>
          </div>
          <div>
            {" "}
            <motion.img
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              className="object-cover w-20"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
            />
            <p className="pt-2 hover:text-sm">HTML</p>
          </div>
          <div>
            {" "}
            <motion.img
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              className="object-cover w-20"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
            />
            <p className="pt-2 hover:text-sm">CSS</p>
          </div>
          <div>
            {" "}
            <motion.img
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              className="object-cover w-20"
              src="https://cdn-icons-png.flaticon.com/512/919/919825.png"
            />
            <p className="pt-2 hover:text-sm">NodeJS</p>
          </div>
          <div>
            {" "}
            <motion.img
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              className="object-cover w-20"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
            />
            <p className="pt-2 hover:text-sm">Javascript</p>
          </div>
          <div>
            {" "}
            <motion.img
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              className="object-cover w-20"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
            />
            <p className="pt-2 hover:text-sm">Figma</p>
          </div>
          <div>
            <motion.img
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              className="object-cover w-20"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
            />
            <p className="pt-2 hover:text-sm">Tailwind</p>
          </div>

          <div>
            <motion.img
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              className="object-cover w-20"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/hugo/hugo-original.svg"
            />
            <p className="pt-2 hover:text-sm">Hugo</p>
          </div>
          <div>
            {" "}
            <motion.img
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              className="object-cover w-20"
              src="https://d2nir1j4sou8ez.cloudfront.net/wp-content/uploads/2021/12/nextjs-boilerplate-logo.png"
            />
            <p className="pt-2 hover:text-sm">NextJS</p>
          </div>
          <div>
            <motion.img
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              className="object-cover w-20"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
            />
            <p className="pt-2 hover:text-sm">React</p>
          </div>
        </div>
      </motion.div>
      {/* <div className="absolute flex flex-row justify-between text-white bg-slate-500">
        <div className="flex-row">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-plain-wordmark.svg"
            className="object-cover w-20 h-20"
          />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />

          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />

          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" />

          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg" />

          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" />

          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />

          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/hugo/hugo-original.svg" />

          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg" />

          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg" />

          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" />

          <img src="https://d2nir1j4sou8ez.cloudfront.net/wp-content/uploads/2021/12/nextjs-boilerplate-logo.png" />
        </div>
      </div> */}
    </div>
  );
};

export default Skills;
