import React from "react";
import NavbarMain from "./Components/Navbar/NavbarMain";
import HeroMain from "./Components/HeroSection/HeroMain";
import HeroBottom from "./Components/HeroSection/HeroBottom";
import AboutMeMain from "./Components/AboutMe/AboutMeMain";
import SkillsMain from "./Components/SkillsSection/SkillsMain";
import SkillsBottom from "./Components/SkillsSection/SkillsBottom";
import ExperienceMain from "./Components/ExperienceSection/ExperienceMain";

const App = () => {
  return (
    <div className=" font-body w-full max-w-[1500px] mx-auto">
      <NavbarMain />
      <HeroMain />
      <HeroBottom />
      <AboutMeMain />
      <SkillsMain />
      <SkillsBottom />
      <ExperienceMain />
    </div>
  );
};

export default App;
