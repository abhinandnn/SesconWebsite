import React from "react";
import logo from "@/assets/logo.svg";
import Image from "next/image";
function Navbar() {
  return (
    <div>
      <div className="px-[4vw] z-20 pt-[1rem] flex justify-between">
        <Image src={logo} alt="logo" />
        <div className="flex gap-[4vw] text-[1rem] text-white items-center font-bold">
          <div className=" cursor-pointer">Home</div>
          <div className=" cursor-pointer">About</div>
          <div className=" cursor-pointer">Company</div>
          <div className=" cursor-pointer">EHS</div>
          <div className=" cursor-pointer">Projects</div>
          <div className=" cursor-pointer">Careers</div>
          <div className=" cursor-pointer">Contact</div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
