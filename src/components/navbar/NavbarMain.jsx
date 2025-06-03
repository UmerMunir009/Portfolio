import React from "react";
import NavbarLogo from "./NavbarLogo";
import NavbarLinks from "./NavbarLinks";
import NavbarBtn from "./NavbarBtn";

const navbarMain = () => {
  return (
    <nav className="max-w-[1300px]  mx-auto fixed  w-full  left-[50%] -translate-x-[50%] px-3">
      <div className="flex justify-between max-w-[1200px] mt-3 bg-[#1e1917] mx-auto items-center p-6 rounded-r-full rounded-l-full border-[0.5px] border-[#fb9718] ">
        <NavbarLogo />
        <NavbarLinks />
        <NavbarBtn />
      </div>
    </nav>
  );
};

export default navbarMain;
