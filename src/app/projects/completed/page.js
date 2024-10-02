"use client";
import React from "react";
import axios from "@/api/axios";
import logo from "@/assets/logo.svg";
import img1 from "@/assets/img1.svg";
import img2 from "@/assets/img2.svg";
import img3 from "@/assets/img3.svg";
import Image from "next/image";
import Navbar from "@/components/navbar";
import BackgroundSlider from "react-background-slider";
import SimpleImageSlider from "react-simple-image-slider";
import Achievement from "@/components/achievement";
import Available from "@/components/available";
import Clients from "@/components/clients";
import AllCollapseExample from "@/components/faq";
import Reach from "@/components/reach";
import Footer from "@/components/footer";
import ProjectCard1 from "@/components/projectCard1";
import Link from "next/link";
function Home() {
  return (
    <div className="font-lexend">
      <div className="h-[92vh] mob:h-[60vh] bg-transparent text-white">
        <BackgroundSlider
          images={["/img1.svg", "/img2.svg", "/img3.svg"]}
          duration={4}
          transition={2}
        />
     
        <div className="px-[4vw] mob:px-[6vw]">
          <div className="text-[2rem] pt-[10rem] md1:pt-[18rem] md1:text-[1.675rem] mob1:text-[1.375rem] mini1:text-[1.25rem] ">Our Completed Projects</div>
          <div className="text-[5rem] md1:text-[3.75rem] mob1:text-[2.5rem] mini1:text-[1.875rem]">Crafted with Love and Care</div>
        </div>
      </div>
      <div className="bg-white pt-[4.5rem] mini1:pt-[2rem] mob:px-[6vw] px-[4vw] mini1:flex-col mini1:gap-4 flex justify-between">
        <div className="text-[2.5rem] sm:text-[2rem] mob:text-[1.5rem] leading-none w-[8rem] min-w-fit text-[#A9441B]">
          Completed Projects
        </div>
        <div className="text-[1.75rem] sm:text-[1.5rem] mob:text-[1.125rem]">
          <Link href="/projects/ongoing/all">
        See all Projects
        </Link>
        </div>
      </div>
       <div className="px-[4vw] mob:mx-auto mob:px-[15px]  bg-white pt-[5rem] pb-[3rem] 1xl:pb-[5rem]">
        <div className="flex 1xl:flex-col  1xl:justify-center 1xl:items-center 1xl:gap-[4rem] justify-between 1xl:pb-[4rem]">
        <ProjectCard1 name="DCM SHRIRAM PLANT, JHAGADIA, GUJARAT" type="Commercial, Industrial"/>
        <ProjectCard1 name="Project 2" type="Type 2"/>
        </div>
        <div className="1xl:flex flex-col hidden gap-[4rem] justify-center items-center">
        <ProjectCard1 name="Project 2" type="Type 2"/>
        <ProjectCard1 name="Project 2" type="Type 2"/>
        <ProjectCard1 name="Project 2" type="Type 2"/>
        </div>
        <div>
        <div className="flex justify-between 1xl:hidden">
       <div className="scale-65 m-[-7rem]">         <ProjectCard1 name="DCM SHRIRAM PLANT, JHAGADIA, GUJARAT" type="Commercial, Industrial"/></div>
       <div className="scale-65 m-[-7rem]"> <ProjectCard1 name="Project 3" type="Type 3"/></div>
       <div className="scale-65 m-[-7rem]"> <ProjectCard1 name="Project 3" type="Type 3"/></div>

        </div> 
       </div>
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