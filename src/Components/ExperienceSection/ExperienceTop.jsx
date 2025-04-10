import React from "react";
import ExperienceLeft from "./ExperienceLeft";
import ExperienceMiddle from "./ExperienceMiddle";
import ExperienceRight from "./ExperienceRight";

const ExperienceTop = () => {
  return (
    <div className=" flex lg:flex-row sm:flex-col items-center justify-center gap-4">
      <ExperienceLeft />
      <ExperienceMiddle />
      <ExperienceRight />
    </div>
  );
};

export default ExperienceTop;
