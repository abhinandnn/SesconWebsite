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
import ProjectCard from "@/components/projectCard";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 6
  },
  desktop: {
    breakpoint: { max: 3000, min: 1454 },
    items: 4
  },
  tablet: {
    breakpoint: { max: 1454, min: 1020 },
    items: 3
  },
  tablet1: {
    breakpoint: { max: 1020, min: 756 },
    items: 2
  },
  tablet2: {
    breakpoint: { max: 755, min: 554 },
    items: 1.5
  },
  mobile: {
    breakpoint: { max: 554, min: 0 },
    items: 1
  }
};
function Home() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  };
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
      <div className="bg-white pt-[4.5rem] px-[4vw] flex gap-[6rem]">
        <div className="text-[2.5rem] leading-none w-[8rem] min-w-fit text-[#B33F0F]">
          ABOUT US
        </div>
        <div className="text-[2rem]">
          Sescon Builders Pvt. Ltd. is a revolutionary emergence in the field of
          civil construction, based on ethics of professionalism and to create
          versatility in construction industry. Because of the Professional
          needs associated with the projects and construction management, we are
          uniquely positioned to meet and exceed our client’s expectations. Our
          client's schedule and budget goals guide the decision making process.
          All projects regardless of scope or scale, commence with responsive
          analysis followed by the use of appropriately chosen, field – proven
          project management techniques to ensure projects delivery success.
        </div>
      </div>
      <div className="bg-white pt-[4.5rem] px-[4vw] flex gap-[6rem]">
        <div>
          <SimpleImageSlider
            width={785}
            height={770}
            images={["/img1.svg", "/img2.svg", "/img3.svg"]}
            slideDuration={0.5}
            autoPlay={true}
          />
        </div>
        <div className="flex flex-col gap-[4rem]">
          <div>
            <div className="font-bold leading-tight text-[#B33F0F] text-[7.5rem]">
              20+
            </div>
            <div className="font-bold text-[2.5rem] pb-6 border-b border-black w-[29rem]">
              Year Experience
            </div>
          </div>
          <div>
            <div className="font-bold leading-tight text-[#B33F0F] text-[7.5rem]">
              120+
            </div>
            <div className="font-bold text-[2.5rem] pb-6 border-b border-black">
              Projects Built
            </div>
          </div>
        </div>
      </div>
      <div className= "pt-[3rem] px-[4vw] flex gap-[4rem] pb-9">
        <div className="text-[2.5rem] leading-none w-[8rem] min-w-fit text-[#B33F0F]">
          FEATURED PROJECTS
        </div>
      </div>
      <div className="px-[4vw] pb-[5rem] pt-[3rem]">
      <Carousel responsive={responsive}>
<ProjectCard backgroundUrl='/img1.svg'/>
<ProjectCard backgroundUrl='/img2.svg'/>
<ProjectCard backgroundUrl='/img3.svg'/>
<ProjectCard backgroundUrl='/img1.svg'/>
<ProjectCard backgroundUrl='/img2.svg'/>
<ProjectCard backgroundUrl='/img3.svg'/><ProjectCard backgroundUrl='/img1.svg'/>
<ProjectCard backgroundUrl='/img2.svg'/>
<ProjectCard backgroundUrl='/img3.svg'/>
  </Carousel>
  </div>
        <Achievement/>
        <Available/>
        <Clients/>
        <AllCollapseExample/>
        <Reach section="Home"/>
        <div className="slider-container">
      
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