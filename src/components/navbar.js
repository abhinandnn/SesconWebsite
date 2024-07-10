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
      <div className="px-[4vw] z-20 pt-[1rem] flex justify-between">
        <Image src={logo} alt="logo" />
        <div className={`flex gap-[4vw] text-[1rem] ${pathname=="/ongoing"||pathname=="/contact"||pathname=="/careers"||pathname=="/company"?"text-black":"text-white"}  items-center font-bold`}>
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
          <div className=" cursor-pointer">Projects</div>
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
