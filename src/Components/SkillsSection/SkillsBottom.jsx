import React from "react";
import Image from "../../Images/subSkills.jpg";

const SkillsBottom = () => {
  return (
    <div className=" border-y-2 border-lightGrey relative">
      <div className=" absolute bg-gradient-to-r from-orange to-cyan opacity-50 h-full w-full"></div>
      <img src={Image} alt="SKills Bottom" />
    </div>
  );
};

export default SkillsBottom;
