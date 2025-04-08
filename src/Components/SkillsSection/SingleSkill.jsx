import React from "react";

const SingleSkill = (props) => {
  return (
    <div className=" hover:-translate-y-10 transition-all duration-500">
      <div className="flex flex-col items-center gap-2 relative">
        <div className=" flex items-center justify-center text-cyan bg-white w-[100px] h-[100px] rounded-full hover:scale-105 hover:text-grey transform transition-all duration-500 text-6xl border-4 border-orange ">
          {props.imgSvg}
        </div>
        <p className=" text-white font-bold">{props.text}</p>
      </div>
      <div className=" w-[100px] h-[200px] bg-orange absolute top-[50px] -z-10"></div>
    </div>
  );
};

export default SingleSkill;
