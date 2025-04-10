import React from "react";

const ExperienceInfo = (props) => {
  return (
    <div className=" flex flex-col justify-center items-center">
      <p className=" text-6xl text-cyan font-bold">{props.number}</p>
      <p className="text-xl text-lightGrey font-bold uppercase -mt-2">
        {props.text}
      </p>
    </div>
  );
};

export default ExperienceInfo;
