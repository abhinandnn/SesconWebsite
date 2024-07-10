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
          <div className="text-[2rem] pt-[10rem]">Our Ongoing Projects</div>
          <div className="text-[5rem]">Crafted with Love and Care</div>
        </div>
      </div>
      <div className="bg-white pt-[4.5rem] px-[4vw] flex justify-between">
        <div className="text-[2.5rem] leading-none w-[8rem] min-w-fit text-[#B33F0F]">
          Ongoing Projects
        </div>
        <div className="text-[1.75rem]">
        See all Projects
        </div>
      </div>
       <div className="px-[4vw] pt-[5rem]">
        <div className="flex flex-wrap justify-between">
        <ProjectCard1 name="Project 1" type="Type 1"/>
        <ProjectCard1 name="Project 2" type="Type 2"/>
        </div>
        <div>
        <div className="flex justify-between flex-wrap ">
       <div className="scale-60 m-[-7rem]"> <ProjectCard1 name="Project 3" type="Type 3"/></div>
       <div className="scale-60 m-[-7rem]"> <ProjectCard1 name="Project 3" type="Type 3"/></div>
       <div className="scale-60 m-[-7rem]"> <ProjectCard1 name="Project 3" type="Type 3"/></div>

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