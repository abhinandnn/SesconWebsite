"use client";
import React, { useState } from "react";
import logo from "@/assets/logo.svg";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FadeInSection } from "@/utils/animation";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Navbar() {
  const pathname = usePathname();
  const [current, setCurrent] = useState(pathname);

  const navigation = [
    { name: "Home", href: "/home" },
    { name: "About", href: "/about" },
    { name: "Company", href: "/company" },
    { name: "Projects", href: "/projects/ongoing" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <FadeInSection>
      <div>
        <div className="w-11/12 mx-auto mob:px-[6vw] z-20 pt-[1rem] flex justify-between">
          <Image
            className="md1:scale-80 sm:scale-70 md1:ml-[-1.5rem] md1:mt-[-0.5rem] sm:mt-[-0.75rem] "
            src={logo}
            alt="logo"
          />
          <div
            className={`flex gap-[4vw] text-[1rem] md1:hidden ${
              pathname == "/ongoing" ||
              pathname == "/contact" ||
              pathname == "/careers" ||
              pathname == "/company" ||
              pathname == "/projects/ongoing/all" ||
              pathname == "/projects/completed/all"
                ? "text-black"
                : "text-white"
            } items-center font-bold`}
          >
            {navigation.map((item) => (
              <Link href={item.href} key={item.name}>
                <div
                  onClick={() => setCurrent(item.href)}
                  className={`cursor-pointer ${
                    current === item.href ? "text-[#B33F0F]" : ""
                  }`}
                >
                  {item.name}
                </div>
              </Link>
            ))}
          </div>
          <div className="absolute top-0 right-10 z-50">
            <Disclosure as="nav" className="bg-none">
              <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                  <div className="absolute inset-y-0 left-0 hidden items-center md:flex">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                      <span className="absolute -inset-0.5" />
                      <span className="sr-only">Open main menu</span>
                      <Bars3Icon
                        aria-hidden="true"
                        className="block h-6 w-6 group-data-[open]:hidden"
                      />
                      <XMarkIcon
                        aria-hidden="true"
                        className="hidden h-6 w-6 group-data-[open]:block"
                      />
                    </Disclosure.Button>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="md:flex hidden">
                <div className="space-y-1 px-2 pb-3 pt-2">
                  {navigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      href={item.href}
                      onClick={() => setCurrent(item.href)}
                      className={classNames(
                        current === item.href
                          ? " text-[#B33F0F]"
                          : "text-black hover:bg-[#bba094]",
                        "block rounded-md px-3 py-2 text-base font-medium"
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
