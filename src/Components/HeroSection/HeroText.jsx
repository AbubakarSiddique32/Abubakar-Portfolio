import React from "react";

const HeroText = () => {
  return (
    <div className="flex flex-col justify-center h-full gap-4 md:text-left sm:text-center">
      <h2 className="lg:text-2xl sm:text-xl text-cyan uppercase">
        Front End Web Developer
      </h2>
      <h1 className=" md:text-[2.8rem] lg:text-6xl sm:text-4xl font-bold font-special text-orange ">
        Abubakar Siddique
      </h1>
      <p className=" w-[400px] lg:w-[500px] sm:w-[300px] mt-4 text-lg text-white">
        A Passionate Web Developer with 1 year Experience. Crafting sleek,
        high-performance websites that turn ideas into interactive experiences.
      </p>
    </div>
  );
};

export default HeroText;
