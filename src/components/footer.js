import React from "react";
import { quickLinks } from "@/data/footerData";
import { contactUs } from "@/data/footerData";
import { badges } from "@/data/footerData";
import { socialMedia } from "@/data/footerData";
import { motion } from "framer-motion";

const Footer = () => {
  const variant = {
    visible: { scale: 1 },
    hidden: { scale: 0 },
  };
  return (
  
      <div className=" w-[100vw] h-fit bg-[#B33F0F] p-10 flex justify-between flex-wrap">
        {/* first part */}
        <div className=" w-fit flex flex-col items-start gap-8 text-white">
          <div className=" font-bold text-[24px]">Quick Links</div>
          <div className=" grid grid-cols-2 font-normal text-[24px] leading-4 gap-8">
            {quickLinks.map((item, index) => (
              <div key={index}>{item}</div>
            ))}
          </div>
        </div>
        {/* first part */}
        <div className=" flex flex-col items-start gap-8 text-white w-[343px]">
          <div className=" font-bold text-[24px]">Contact us</div>
          <div className=" flex flex-col font-normal text-[20px] leading-7 gap-8">
            {contactUs.map((item, index) => (
              <div key={index} className=" flex gap-2">
                <img src={item.img} />
                <div>{item.address}</div>
              </div>
            ))}
          </div>
        </div>
        {/* first part */}
        <div className=" flex  items-start gap-8 text-white text-[12px] font-normal ">
          {badges.map((item, index) => (
            <div key={index} className=" flex flex-col gap-2">
              <img src={item.img} />
              <div className=" text-center">{item.title}</div>
            </div>
          ))}
        </div>
        {/* first part */}
        <div className=" flex flex-col justify-between items-center">
          <div className=" w-[175px]">
            <img className=" w-10/12" src="/sesc.svg" />
          </div>
          <div className=" flex gap-4">
            {socialMedia.map((item, index) => (
              <img src={item} />
            ))}
          </div>
        </div>
      </div>
    
  );
};

export default Footer;
