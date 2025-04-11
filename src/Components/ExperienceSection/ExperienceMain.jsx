import React from "react";
import ExperienceText from ".././ExperienceSection/ExperienceText";
import ExperienceTop from ".././ExperienceSection/ExperienceTop";
import ExperienceAll from "./ExperienceAll";

const ExperienceMain = () => {
  return (
    <div id="experience" className=" max-w-[1200px] mx-auto px-4 ">
      <ExperienceText />
      <ExperienceTop />
      <div className=" h-1 bg-lightBrown w-full mt-8 lg:block sm:hidden"></div>
      <ExperienceAll />
    </div>
  );
};

export default ExperienceMain;
