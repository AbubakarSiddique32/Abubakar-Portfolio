import React from "react";
import Image from "../../Images/subSkills.jpg";

const SkillsBottom = () => {
  return (
    <div className=" border-y-2 border-lightGrey relative">
      <div className=" absolute bg-gradient-to-r from-orange to-cyan opacity-50 h-full w-full"></div>
      <img src={Image} alt="SKills Bottom" />
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
        incidunt veritatis assumenda, commodi expedita, in molestiae similique,
        iusto exercitationem aspernatur earum veniam soluta voluptas quidem.
        Libero incidunt doloribus ipsum numquam.
      </p>
    </div>
  );
};

export default SkillsBottom;
