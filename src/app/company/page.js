"use client";
import { managementTeam } from "@/data/companyData";
import { useState, useEffect } from "react";
import { FadeInSection } from "@/utils/animation";

export default function Company() {
  const [activeSection, setActiveSection] = useState("management");
  const navigationHandler = (value) => {
    setActiveSection(value);
  };

  return (
    <div className=" mt-[72px] mob1:mt-0 overflow-x-hidden w-11/12 mx-auto grid grid-cols-[279px,auto] lg:grid-cols-[209px,auto] md1:grid-cols-1 gap-16">
      <FadeInSection>
        {" "}
        <div className=" md1:hidden lg:w-[209px]  flex flex-col gap-14 leading-8 text-[22px] text-[#888888] font-medium justify-start cursor-pointer fixed ">
          <a
            href="#management"
            onClick={() => navigationHandler("management")}
            className={`${
              activeSection == "management" ? "text-red-900" : null
            }`}
          >
            MANAGEMENT TEAM
          </a>
          <a
            href="#organogram"
            onClick={() => navigationHandler("organogram")}
            className={`${
              activeSection == "organogram" ? "text-red-900" : null
            }`}
          >
            COMPANY ORGANOGRAM
          </a>
          <a
            href="#technical"
            onClick={() => navigationHandler("technical")}
            className={`${
              activeSection == "technical" ? "text-red-900" : null
            }`}
          >
            TECHNICAL TEAM
          </a>
        </div>
        <div className="md1:hidden"></div>
      </FadeInSection>

      <FadeInSection>
        {" "}
        <div className=" h-fit flex flex-col gap-16 mob1:gap-0" id="management">
          <div>
            {managementTeam.map((item, index) => (
              <FadeInSection>
                <div
                  className=" w-full flex gap-5 leading-7 text-[20px] text-black font-light mb-[72px] sm:flex-col sm:gap-0"
                  key={index}
                >
                  <div className="flex-shrink-0 sm:w-[50%]">
                    <img
                      src={item.img}
                      className="sm:w-[100%]"
                      alt={item.name}
                    />
                  </div>
                  <div className="flex flex-col gap-8 sm:mt-[-80px] ">
                    <div className="flex flex-col w-fit sm:w-[50%] sm:self-end sm:pl-3">
                      <div className="font-medium">
                        {item.name}
                        <hr className="w-[130%] mt-2 mb-1 border-[#B33F0F]" />
                      </div>
                      <div className="text-[16px] leading-4">{item.role}</div>
                    </div>
                    <div className="text-left  line-clamp-11 sm:mt-3 sm:line-clamp-3 mob1:text-[16px] ">
                      {item.description}
                    </div>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
          <FadeInSection>
            <div id="organogram">
              <img className=" w-full" src="chart.svg" />
            </div>
          </FadeInSection>
        </div>
      </FadeInSection>
    </div>
  );
}
