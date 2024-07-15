"use client"
import React from "react";
import { quickLinks } from "@/data/footerData";
import { contactUs } from "@/data/footerData";
import { badges } from "@/data/footerData";
import { socialMedia } from "@/data/footerData";
import { motion } from "framer-motion";
import { FadeInSection } from "@/utils/animation";

const Footer = () => {
  const variant = {
    visible: { scale: 1 },
    hidden: { scale: 0 },
  };
  return (
    <FadeInSection>
      <div className=" absolute top-[100%] w-[100vw] h-fit bg-[#B33F0F] p-10 flex justify-between flex-wrap md:grid md:grid-cols-1">
        {/* first part */}
        <div className=" w-fit flex flex-col items-start gap-8 text-white md:mt-28 ">
          <div className=" font-bold text-[24px] mob1:text-[18px]">Quick Links</div>
          <div className=" grid grid-cols-2 font-normal text-[24px] leading-4 gap-8 mob1:text-[18px]">
            {quickLinks.map((item, index) => (
              <div  key={index}>{item}</div>
            ))}
          </div>
        </div>
        {/* first part */}
        <div className=" flex flex-col items-start gap-8 text-white w-[343px] mob1:w-fit mb-2 md:mt-16">
          <div className=" font-bold text-[24px] mob1:text-[18px]">Contact us</div>
          <div className=" flex flex-col font-normal text-[20px] leading-7 gap-8 mob1:text-[16px]">
            {contactUs.map((item, index) => (
              <div key={index} className=" flex gap-2">
                <img src={item.img} />
                <div>{item.address}</div>
              </div>
            ))}
          </div>
        </div>
        {/* first part */}
        <div className=" flex  items-start gap-8 text-white text-[12px] font-normal md:mt-16">
          {badges.map((item, index) => (
            <div key={index} className=" flex flex-col gap-2 ">
              <img src={item.img}  />
              <div className=" text-center ">{item.title}</div>
            </div>
          ))}
        </div>
        {/* first part */}
        <div className=" flex flex-col justify-between items-center md:absolute md:top-0 md:flex-row md:justify-between md:w-[100%] md:p-10  ">
          <div className=" w-[175px]">
            <img className=" w-10/12" src="/sesc.svg" />
          </div>
          <div className=" flex gap-4 pt-3 ">
            {socialMedia.map((item, index) => (
              <img src={item} />
            ))}
          </div>
        </div>
      </div>
    </FadeInSection>
  );
};

export default Footer;
