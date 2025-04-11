import React from "react";
import ExperienceSingle from "./ExperienceSingle";
import { FaArrowRight } from "react-icons/fa";

const experiences = [
  {
    job: "Front-End Developer",
    company: "Self-Enhancing",
    date: "2023 - 2024",
    responsibilities: [
      "Continuously learn and explore new web development tools and technologies.",
      "Experiment with new coding practices and frameworks to improve workflow.",
      "Contribute to open-source projects to expand practical experience.",
      "Stay up-to-date with industry trends and best practices.",
    ],
  },
  {
    job: "Web Developer",
    company: "Iconic Studio",
    date: "2024 - Present",
    responsibilities: [
      "Build and maintain responsive websites using HTML, CSS, JavaScript, and React.",
      "Collaborate with designers to implement intuitive layouts.",
      "Optimize websites for speed, performance, and mobile responsiveness.",
      "Troubleshoot and debug front-end issues",
    ],
  },
  {
    job: "Web Developer",
    company: "Free-Lancer (Fiver,Upwork etc...)",
    date: "2024 - Present",
    responsibilities: [
      "Manage client communication and understand project requirements to deliver tailored web solutions.",
      "Work independently to design, develop, and deploy websites based on client needs.",
      "Set realistic timelines and deliver projects on schedule while maintaining quality standards.",
    ],
  },
];
const ExperienceAll = () => {
  return (
    <div className=" flex lg:flex-row sm:flex-col items-center justify-between">
      {experiences.map((experience, index) => {
        return (
          <>
            <ExperienceSingle key={index} experience={experience} />

            {index < 2 ? (
              <FaArrowRight className=" text-6xl text-orange lg:block sm:hidden" />
            ) : (
              ""
            )}
          </>
        );
      })}
    </div>
  );
};

export default ExperienceAll;
