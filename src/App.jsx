import React from "react";
import NavbarMain from "./Components/Navbar/NavbarMain";
import HeroMain from "./Components/HeroSection/HeroMain";
import HeroBottom from "./Components/HeroSection/HeroBottom";
import AboutMeMain from "./Components/AboutMe/AboutMeMain";
import SkillsMain from "./Components/SkillsSection/SkillsMain";

const App = () => {
  return (
    <div className=" font-body w-full max-w-[1500px] mx-auto">
      <NavbarMain />
      <HeroMain />
      <HeroBottom />
      <AboutMeMain />
      <SkillsMain />
    </div>
  );
};

export default App;
