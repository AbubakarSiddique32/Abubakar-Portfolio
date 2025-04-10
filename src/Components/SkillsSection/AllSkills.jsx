import React from "react";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { RiReactjsFill } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaBootstrap } from "react-icons/fa";
import SingleSkill from "./SingleSkill";
import { FaGithub } from "react-icons/fa";

const skills = [
  {
    skill: "Html",
    icon: <FaHtml5 />,
  },
  {
    skill: "CSS",
    icon: <FaCss3Alt />,
  },
  {
    skill: "JavaScript",
    icon: <IoLogoJavascript />,
  },
  {
    skill: "React JS",
    icon: <RiReactjsFill />,
  },
  {
    skill: "Tailwind CSS",
    icon: <RiTailwindCssFill />,
  },
  {
    skill: "BootStrap",
    icon: <FaBootstrap />,
  },
  {
    skill: "Github",
    icon: <FaGithub />,
  },
];

const AllSkills = () => {
  return (
    <div>
      <div className=" flex items-center gap-2 justify-center relative max-w-[1200px]">
        {skills.map((skill, index) => {
          return (
            <SingleSkill key={index} text={skill.skill} imgSvg={skill.icon} />
          );
        })}
      </div>
    </div>
  );
};

export default AllSkills;
