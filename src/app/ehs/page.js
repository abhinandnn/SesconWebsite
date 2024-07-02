"use client";
import React from "react";
import axios from "@/api/axios";
import logo from "@/assets/logo.svg";
import img1 from "@/assets/img1.svg";
import img2 from "@/assets/img2.svg";
import img3 from "@/assets/img3.svg";
import Image from "next/image";
import Navbar from "@/components/navbar";
// import tick1 from "@/assets/tick1.svg"
import BackgroundSlider from "react-background-slider";
import SimpleImageSlider from "react-simple-image-slider";
import Achievement from "@/components/achievement";
import Available from "@/components/available";
import Clients from "@/components/clients";
import AllCollapseExample from "@/components/faq";
import Reach from "@/components/reach";
import Footer from "@/components/footer";
import { ehsData } from "@/data/ehsData";

function Home() {
  return (
    <div className="font-lexend h-fit">
      <div className="h-[100vh] bg-transparent text-white">
        <BackgroundSlider
          images={["/img1.svg", "/img2.svg", "/img3.svg"]}
          duration={4}
          transition={2}
        />
     
        <div className="px-[4vw]">
          <div className="text-[2rem] pt-[5rem]">We Build Your</div>
          <div className="text-[10rem] leading-none font-bold">Dreams</div>
          <div className="text-[2rem]">
            We deliver what we commit and we commit what we can deliver
          </div>
        </div>
      </div>
      <div className="bg-white pt-[4.5rem] px-[4vw] flex gap-[4rem]">
        <div className="text-[2.5rem] min-w-[30rem] text-[#B33F0F]">
        ENVIRONMENT HEALTH AND SAFETY POLICY
        </div>
        <div className="pl-[3rem] mb-[4rem] flex flex-col gap-[1rem]">
        <div className="text-[1.75rem]">
        We at SESCON BUILDERS are committed to provide Safe and Healthy working environment with concern for our surrounding environment at our location by taking adequate steps to comply with the environmental standards, minimizing occupational risks and hazards. We shall strive to achieve these objectives through :
Comply with all relevant and applicable statutory provisions pertaining to Environment Health & Safety .
</div>
<div>
    <div className="relative text-[1.75rem] pt-8 flex items-center"><img className="absolute left-[-4rem]" src="/tick1.svg"/>
    <div>Provide necessary information, awareness and training to all employees and subcontractors to carry out their tasks in a safe and responsible manner</div>
    </div>
    <div className="relative text-[1.75rem] pt-8 flex items-center"><img className="absolute left-[-4rem]" src="/tick1.svg"/>
    <div>Provide necessary information, awareness and training to all employees and subcontractors to carry out their tasks in a safe and responsible manner</div>
    </div>
    <div className="relative text-[1.75rem] pt-8 flex items-center"><img className="absolute left-[-4rem]" src="/tick1.svg"/>
    <div>Provide necessary information, awareness and training to all employees and subcontractors to carry out their tasks in a safe and responsible manner</div>
    </div>
</div>
       
        </div>
       
      </div>
      <div className="px-[4vw] flex flex-col mb-[4rem] gap-[4rem]">
        <div className="text-[2.5rem] min-w-[30rem] text-[#B33F0F]">
        SESCON BUILDERS SAFETY ORGANISATION
        </div>
            <img src="/SBSO.svg"/>
        </div>
        <div className=" px-[4vw] text-[1.5rem]">
          {ehsData.map((item, index) => (
            <div className={`flex relative justify-between mb-[74px] ${index%2!=0?"":"flex-row-reverse"}`}>
              <div className="  w-[43.7%] min-w-[670px]">
                <img className={`w-full scale-90`} src={item.img} />
                <img className={` absolute top-[-72px] ${index==0&&"hidden"} ${index%2!=0?"rotate-180":""} ${index%2!=0?"left-0":"right-0"}`} src="/line.svg"/>
              </div>
              <div className=" pt-6 pb-6 flex flex-col gap-4 w-[40.27%]">
                <div>
                  {/* <img src={item.logo} /> */}
                </div>
                <div className="text-[2rem] text-[#B33F0F] font-semibold">{item.title}</div>
                <div className=" self-end text-black mt-8 font-medium leading-8">{item.description}</div>
              </div>
            </div>
          ))}
        </div>
    </div>
  );
}

export default Home;

// export async function getStaticProps() {

//     return {
//       props: {
//         posts,
//       },
//     }
//   }