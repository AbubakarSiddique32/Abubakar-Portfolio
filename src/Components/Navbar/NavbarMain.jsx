import React, { useState } from "react";
import NavbarLogo from "./NavbarLogo";
import NavbarLinks from "./NavbarLinks";
import NavbarBtn from "./NavbarBtn";
import { GiHamburgerMenu } from "react-icons/gi";
const NavbarMain = () => {
  const [menuOpen, setMenuOpen] = useState("false");
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <nav className=" fixed max-w-[1300px] w-full mx-auto px-4 left-[50%] -translate-x-[50%] z-20 flex gap-4 mt-4">
      <div className="flex justify-between w-full max-w-[1200px] mx-auto bg-black items-center p-4 rounded-full border-[0.5px] border-orange">
        <NavbarLogo />
        <div className={`${menuOpen ? "sm:block " : "sm:hidden"} lg:block  `}>
          <NavbarLinks />
        </div>

        <NavbarBtn />
      </div>
      <div className=" flex lg:hidden sm:block bg-black items-center justify-center rounded-full p-6 border-[0.5px] border-orange">
        <button
          className="text-white rounded-full text-2xl p-3 border border-orange"
          onClick={toggleMenu}
        >
          <GiHamburgerMenu />
        </button>
      </div>
    </nav>
  );
};

export default NavbarMain;
