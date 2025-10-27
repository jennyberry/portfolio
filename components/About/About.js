import React from "react";
const About = () => {
  return (
    <div className="relative flex flex-col items-center h-screen px-10 mx-auto text-white md:text-left md:flex-row max-w-7xl justify-evenly">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-2xl">
        About
      </h3>
      <img
        src="../../images/profile.png"
        className="flex-shrink-0 object-cover w-56 h-56 -mb-20 rounded-full md:mb-0 md:rounded-lg
          md:w-64 md:h-95 xl:w-[300px] xl:h-[200px] lg:mr-10 mt-10"
      />
      <div className="text-center md:px-10">

        <p>

          My path to become a software engineer started when I saw a video on
          youtube showing how to write a website using HTML and CSS. Since then
          I was fascinating of creating cool websites and new software using my
          skills set. I believe every product need to user-centered and leave
          good user experience. That's the reason I learnt about UX/UI design to
          enhance the product performance. Recently, I am exploring blockchain
          technologies and helping expand Eastern Catalyst community.
        </p>
      </div>


    </div>
  );
};

export default About;
