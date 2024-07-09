"use client";
import React from "react";
import axios from "@/api/axios";
import BackgroundSlider from "react-background-slider";
import { aboutData } from "@/data/aboutData";
import Reach from "@/components/reach";

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
      <div className="bg-white pt-[4.5rem] px-[4vw] flex gap-[6rem] lg:flex-col lg:gap-5">
        <div className="text-[2.5rem] leading-none w-[8rem] min-w-fit text-[#B33F0F] pt-1 ">
          ABOUT COMPANY
        </div>
        <div className="text-[2rem]">
          Sescon Builders Pvt. Ltd. is a revolutionary emergence in the field of
          civil construction, based on ethics of professionalism and to create
          versatility in construction industry. Because of the Professional
          needs associated with the projects and construction management, we are
          uniquely positioned to meet and exceed our client’s expectations.
          <br />
          <br />
          Our client's schedule and budget goals guide the decision making
          process. All projects regardless of scope or scale, commence with
          responsive analysis followed by the use of appropriately chosen, field
          – proven project management techniques to ensure projects delivery
          success.
          <br /> The company was formed in June 2011. The company was promoted
          by Mr. Atul Kumar Saxena and Mr. Sanjeev Srivastava who have vast
          experience of construction in various industrial , commercial &
          residential projects.
        </div>
      </div>
      <div className=" mx-auto mt-[72px] w-fit">
        <img src="/aboutBanner.svg" />
      </div>
      <div className="bg-white pt-[4.5rem] px-[4vw] flex gap-[6rem] lg:flex-col lg:gap-5">
        <div className="text-[2.5rem] leading-none w-[8rem] min-w-fit text-[#B33F0F] pt-2 ">
          OUR MISSION
        </div>
        <div className="text-[2rem]">
          At Sescon Builders our mission is to deliver professional construction
          services based on quality craftsmanship in a timely manner. Committed
          to our mission we will create value for our customers through
          creativity, leadership, safety, reliability, and cost effectiveness
          above the , commercial, entertainment, education projects for our
          clients throughout India.
          <br />
          <br />
          Sescon Builders strength lies in the quality and depth of our
          professional and technical capabilities. Comprehensive construction
          management services with established standards for managements,
          reporting and documentation coordinates the many aspects of complex
          construction projects. Form master planning through design and
          construction, Sescon Builders will focus the projects on client’s
          goals. Implementation of customized planning and the assurance that
          the appropriate controls are in place. Time, cost and quality
          parameters will be tightly controlled. In recognition to the policies
          and system adopted by the company Sescon Builders Pvt. Ltd. is also
          registered under standard ISO9001:2015(QMS).
        </div>
      </div>
      <div className=" w-11/12 mt-[72px] mx-auto flex flex-col gap-[63px] text-[#B33F0F] font-normal ">
        <div className=" text-[2.5rem] leading-[60px]">
          WHAT MAKE US STAND OUT
        </div>
        <div className="text-[1.5rem]">
          {aboutData.map((item, index) => (
            <div className={`flex relative justify-between mb-[74px] lg:flex-col ${index%2==0?"":"flex-row-reverse"}`}>
              <div className="  w-[43.7%]  lg:w-[100%]">
                <img className=" w-full" src={item.img} />
                <img className={` absolute top-[-72px] pt-5 ${index==0&&"hidden"} ${index%2==0?"left-0":"right-0"}`} src="/line.svg"/>
              </div>
              <div className=" pt-6 px-3 pb-6 flex flex-col gap-4 w-[40.27%] lg:w-[100%]">
                <div>
                  <img src={item.logo} />
                </div>
                <div className="text-[2rem] font-semibold">{item.title}</div>
                <div className=" self-end text-black mt-8 font-medium leading-8">{item.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Reach section="About"/>
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
