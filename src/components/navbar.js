'use client'
import React from "react";
import logo from "@/assets/logo.svg";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
function Navbar() {
  const pathname = usePathname()
  return (
    <div>
      <div className="px-[4vw] mob:px-[6vw] z-20 pt-[1rem] flex justify-between">
        <Image className="md1:scale-80 sm:scale-70 md1:ml-[-1.5rem] md1:mt-[-0.5rem] sm:mt-[-0.75rem] " src={logo} alt="logo" />
        <div className={`flex gap-[4vw] text-[1rem] ${pathname=="/ongoing"||pathname=="/contact"||pathname=="/careers"||pathname=="/company"||pathname=="/projects/ongoing/all"||pathname=="/projects/completed/all"?"text-black":"text-white"}  items-center font-bold`}>
        <Link href="/home">
          <div className=" cursor-pointer">Home</div>
          </Link>
          <Link href="/about">
            <div className=" cursor-pointer">About</div>
          </Link>

          <Link href="/company">
            <div className=" cursor-pointer">Company</div>
          </Link>
          <Link href="/ehs">
            <div className=" cursor-pointer">EHS</div>
          </Link>
          <Link href="/projects/ongoing">
          <div className=" cursor-pointer">Projects</div>
          </Link>
          <Link href={"/careers"}>  
          <div className=" cursor-pointer">Careers</div>
          </Link>
          <Link href={"/contact"}>  
          <div className="cursor-pointer">Contact</div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
