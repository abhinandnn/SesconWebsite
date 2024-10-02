"use client";
import React, { useState } from "react";
import logo from "@/assets/Log.svg";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { FadeInSection } from "@/utils/animation";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Navbar() {
  const pathname = usePathname();
  const [current, setCurrent] = useState(pathname);
  const [hover, setHover] = useState(false);
  const [full, setFull] = useState(false);
  const router = useRouter();

  const navigation = [
    { name: "Home", href: "/home" },
    { name: "About", href: "/about" },
    { name: "Company", href: "/company" },
    { name: "Projects", href: "" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" },
  ];
  const navigation2 = [
    { name: "Home", href: "/home" },
    { name: "About", href: "/about" },
    { name: "Company", href: "/company" },
    { name: "EHS", href: "/ehs" },
    { name: "Contact", href: "/contact" },
    { name: "Ongoing Projects", href: "/projects/ongoing" },
    { name: "Completed Projects", href: "/projects/completed" },
  ];

  const hoverHandler = (item) => {
    if (item.name === "Projects") {
      setHover(true);
    }
  };

  const hoverLeaveHandler = (item) => {
    if (item.name === "Projects") {
      setHover(false);
    }
  };

  const handleProjectsClick = (path) => {
    router.push(path);
    setCurrent(path);
  };

  return (
    <FadeInSection>
      <div>
        <div className="w-11/12 mx-auto  z-20 pt-[1rem] flex justify-between">
          <Image
            className="md1:scale-80 sm:scale-70 md1:ml-[-1.5rem] md1:mt-[-0.5rem] sm:mt-[-0.75rem] "
            src={logo}
            alt="logo"
          />
          <div
            className={`flex gap-[4vw] text-[1rem] md1:hidden items-baseline mt-5 ${
              pathname === "/ongoing" ||
              pathname === "/contact" ||
              pathname === "/careers" ||
              pathname === "/company" ||
              pathname === "/projects/ongoing/all" ||
              pathname === "/projects/completed/all"
                ? "text-black"
                : "text-white"
            } items-center font-bold`}
          >
            {navigation.map((item, index) => (
              <div
                key={index}
                className="flex flex-col"
                onMouseEnter={() => hoverHandler(item)}
                onMouseLeave={() => hoverLeaveHandler(item)}
              >
                <Link href={item.href}>
                  <div
                    onClick={
                      item.name !== "Projects"
                        ? () => setCurrent(item.href)
                        : null
                    }
                    className={`cursor-pointer relative ${
                      current === item.href ? "text-[#A9441B]" : ""
                    }`}
                  >
                    {item.name}{" "}
                    {item.name === "Projects" ? (
                      <KeyboardArrowDownIcon />
                    ) : null}
                  </div>
                </Link>
                {item.name === "Projects" ? (
                  <div
                    className={`mt-3 z-50 w-fit h-fit bg-white rounded-lg px-4 py-2 flex flex-col gap-2 font-semibold text-[16px] text-[#A9441B] leading-6 cursor-pointer transition-opacity duration-300 ${
                      hover ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <div onClick={() => handleProjectsClick("/projects/ongoing")}>Ongoing</div>
                    <div onClick={() => handleProjectsClick("/projects/completed")}>Completed</div>
                  </div>
                ) : null}
              </div>
            ))}
          </div>
          <div  className={`   overflow-x-hidden  top-0  z-[500] ${full?"right-0 w-[75vw] fixed":"right-4 absolute "}`}>
            <Disclosure as="nav" className={` hidden md1:flex ${full?"bg-white h-[100vh] flex flex-col gap-4":"bg-none"}`}>
              <div className="ml-1  space-y-1 pr-4 pl-1 pb-4 pt-2">
                <div className="relative flex h-16 items-center justify-between">
                  <div className=" w-fit  hidden items-center md:flex">
                    {/* Mobile menu button */}
                    <Disclosure.Button onClick={()=>setFull(!full)} className="group  relative inline-flex items-center justify-center rounded-md p-2 text-black hover:bg-gray-white hover:text-white">
                      <span className="absolute -inset-0.5" />
                      <span className="sr-only">Open main menu</span>
                      <Bars3Icon
                        aria-hidden="true"
                        className="block h-6 w-6  group-data-[open]:hidden"
                        
                      />
                      
                      <XMarkIcon
                        aria-hidden="true"
                        className="hidden  text-black h-6 w-6 group-data-[open]:block"
                        
                      />
                    </Disclosure.Button>
                  </div>
                {full?  <div><img src="/logo1.svg"/></div>:null}
                </div>
              </div>

              <Disclosure.Panel className="md:flex px-4 hidden self-end">
                <div className="space-y-1 px-2 pb-3 pt-2 flex flex-col font-medium leading-5 gap-4 text-[20px] text-right ">
                  {navigation2.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      href={item.href}
                      onClick={() => setCurrent(item.href)}
                      className={classNames(
                        current === item.href
                          ? " text-[#A9441B]"
                          : "text-[#4F4F4F] hover:bg-[#FFF7ED]",
                        "block  px-3 py-2  font-medium"
                      )}
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}
                </div>
              </Disclosure.Panel>
            </Disclosure>
          </div>
        </div>
      </div>
    </FadeInSection>
  );
}

export default Navbar;
