import React from "react";
import NavbarMain from "./Components/Navbar/NavbarMain";
import HeroMain from "./Components/HeroSection/HeroMain";
import HeroBottom from "./Components/HeroSection/HeroBottom";
import AboutMeMain from "./Components/AboutMe/AboutMeMain";

const App = () => {
  return (
    <div className=" font-body ">
      <NavbarMain />
      <HeroMain />
      <HeroBottom />
      <AboutMeMain />
    </div>
  );
};

export default App;
