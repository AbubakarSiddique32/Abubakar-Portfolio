import React from "react";

const AboutMeText = () => {
  return (
    <div className=" flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className=" text-6xl text-cyan mb-10">About Me</h2>
      <p className=" text-white">
        I'm a passionate freelance web developer with 1 year of hands-on
        experience building responsive, user-friendly websites. I specialize in
        modern frontend technologies like Html, CSS, JavaScript, React JS and
        Tailwind CSS, and I love turning ideas into clean, functional designs.
        Whether it's a landing page or a full web app, I’m all about delivering
        high-quality work that helps businesses stand out online.
      </p>
      <button className=" border border-orange rounded-full py-2 px-4 text-lg flex items-center justify-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center text-white hover:text-black hover:border-white">
        My Projects
      </button>
    </div>
  );
};

export default AboutMeText;
