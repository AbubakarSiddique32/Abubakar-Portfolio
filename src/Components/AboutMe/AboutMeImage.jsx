import React from "react";
import AboutImage from "../../Images/about-me.jpg";

const AboutMeImage = () => {
  return (
    <div className=" w-[300px] h-[500px] relative">
      <div className=" w-[300px] h-[500px] rounded-[100px] absolute overflow-hidden">
        <img
          src={AboutImage}
          alt="AboutUI"
          className=" h-full w-auto object-cover"
        />
      </div>
      <div className="h-[500px] w-[250px] bg-orange absolute bottom-[-30px] left-[-30px] rounded-bl-[120px] rounded-tr-[120px] rounded-br-[20px] rounded-tl-[20px] -z-10 "></div>
    </div>
  );
};

export default AboutMeImage;
