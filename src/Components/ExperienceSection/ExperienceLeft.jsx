import React from "react";
import ExperienceInfo from "./ExperienceInfo";

const ExperienceLeft = () => {
  return (
    <div className=" flex flex-col gap-6 w-[300px]">
      <p className=" text-orange text-3xl text-center font-special font-bold uppercase">
        Since 22Years
      </p>
      <div className=" flex items-center gap-4 justify-center">
        <ExperienceInfo number="1" text="Year" />
        <p className=" font-bold text-lightBrown text-6xl">-</p>
        <ExperienceInfo number="32" text="Websites" />
      </div>
      <p className=" text-center text-white">
        With 1 year of experience building dynamic & user-friendly web
        applications.
      </p>
      <div>
        <ExperienceInfo number="$100k" text="Max - Budget" />
      </div>
    </div>
  );
};

export default ExperienceLeft;
