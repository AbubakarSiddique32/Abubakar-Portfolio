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

const AllSkillsSM = () => {
  return (
    <div>
      {skills.map((skill, index) => {
        return div;
      })}
    </div>
  );
};

export default AllSkillsSM;
