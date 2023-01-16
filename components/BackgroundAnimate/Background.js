import React from "react";

const Background = () => {
  return (
    <div className="relative flex items-center justify-center ">
      <div className=" absolute border border-[#ff8000] rounded-full h-[220px] w-[220px] mt-40 animate-ping" />
      <div className=" absolute border border-transparent rounded-full h-[300px] w-[300px] mt-40 " />
      <div className=" absolute border border-[#333333] rounded-full h-[500px] w-[500px] mt-40 animate-pulse" />
      <div className=" absolute border border-[orange] rounded-full h-[700px] w-[700px] mt-40 animate-pulse" />
    </div>
  );
};

export default Background;
