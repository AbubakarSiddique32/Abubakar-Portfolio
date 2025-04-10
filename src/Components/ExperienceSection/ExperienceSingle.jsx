import React from "react";

const ExperienceSingle = ({ experience }) => {
  return (
    <div className=" lg:h-[400px] lg:w-[280px] md:h-auto md:w-full sm:h-auto sm:w-full border border-orange border-dashed rounded-2xl mt-12 p-4">
      <p className=" font-bold text-cyan">{experience.job}</p>
      <p className=" text-orange">{experience.company}</p>
      <p className=" text-lightGrey">{experience.date}</p>
      <ul className=" list-disc mt-4 pl-4 text-white">
        {experience.responsibilities.map((resp, index) => {
          return <li key={index}>{resp}</li>;
        })}
      </ul>
    </div>
  );
};

export default ExperienceSingle;
