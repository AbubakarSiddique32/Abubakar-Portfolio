import React from "react";
import NavbarLogo from "./NavbarLogo";
import NavbarLinks from "./NavbarLinks";
import NavbarBtn from "./NavbarBtn";
const NavbarMain = () => {
  return (
    <nav className=" fixed max-w-[1300px] w-full mx-auto px-4 left-[50%] -translate-x-[50%] z-20 flex gap-4 mt-4">
      <div className="flex justify-between w-full max-w-[1200px] mx-auto bg-black items-center p-4 rounded-full border-[0.5px] border-orange">
        <NavbarLogo />
        <NavbarLinks />
        <NavbarBtn />
      </div>
    </nav>
  );
};

export default NavbarMain;
