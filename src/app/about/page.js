"use client";
import React from "react";
import { FadeInSection} from "@/utils/animation"
import { aboutData } from "@/data/aboutData";
import Reach from "@/components/reach";
import BackgroundSlider from "react-background-slider";
import { Fade } from "@mui/material";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ProjectCard from "@/components/projectCard";
import axios from "@/api/axios";
import { useState } from "react";
import { useEffect } from "react";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 6,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1454 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1454, min: 1020 },
    items: 3,
  },
  tablet1: {
    breakpoint: { max: 1020, min: 756 },
    items: 2,
  },
  tablet2: {
    breakpoint: { max: 755, min: 554 },
    items: 1.5,
  },
  mobile: {
    breakpoint: { max: 554, min: 0 },
    items: 1,
  },
};


function Home() {

  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get("/about-us-page?populate=deep") 
      .then((response) => {
        setData(response.data.data);
        console.log(response.data.data)
      })
      .catch((error) => {
        console.error("Error fetching the data", error);
      });
  }, []);

  if (!data) {
    return  <div className="flex flex-col gap-3 select-none">
    <div className="w-full mt-4 flex justify-center items-center">
      <div className="linear-loader"></div> {/* Loader animation */}
    </div>
  </div>;
  }


  const heroImages = data.attributes.Hero_section_imgs.data.map(
    (img) => img.attributes.url
  );
  const aboutUsText = data.attributes.about_company;
  const Images = data.attributes.about_company_img.data.attributes.url
  const projectCards = data.attributes.equipment_tools;
  const aboutCompanyText = data.attributes.our_company;
  const wmus= data.attributes.what_make_us_stand
 

  return (
    <div className="font-lexend h-fit">
      
      <div className="h-[92vh] mob:h-[60vh] bg-transparent text-white">
          <BackgroundSlider
            images={heroImages}
            duration={4}
            transition={2}
          />
                 <div className="px-[4vw] mob:px-[6vw]">
          <div className="text-[2rem] pt-[10rem] md1:pt-[18rem] md1:text-[1.675rem] mob1:text-[1.375rem] mini1:text-[1.25rem] ">Crafting Civil Solutions:</div>
          <div className="text-[5rem] md1:text-[3.75rem] mob1:text-[2.5rem] mini1:text-[1.875rem]">Building Dreams into Reality</div>
        </div>
        </div>
      

      <FadeInSection>
        <div className="bg-white pt-[4.5rem] px-[4vw] font-normal flex gap-[6rem] lg:flex-col lg:gap-5">
          <div className="text-[2.5rem] mob1:text-[24px] leading-none w-[8rem] min-w-fit text-[#A9441B] pt-1">
            ABOUT COMPANY
          </div>
          <div className="text-[2rem] mob1:text-[18px]">
            Sescon Builders Pvt. Ltd. is a revolutionary emergence in the field
            of civil construction, based on ethics of professionalism and to
            create versatility in construction industry. Because of the
            Professional needs associated with the projects and construction
            management, we are uniquely positioned to meet and exceed our
            client’s expectations.
            <br />
            <br />
            Our client's schedule and budget goals guide the decision making
            process. All projects regardless of scope or scale, commence with
            responsive analysis followed by the use of appropriately chosen,
            field – proven project management techniques to ensure projects
            delivery success.
            <br />
            The company was formed in June 2011. The company was promoted by Mr.
            Atul Kumar Saxena and Mr. Sanjeev Srivastava who have vast
            experience of construction in various industrial, commercial &
            residential projects.
          </div>
        </div>
      </FadeInSection>
      <FadeInSection>
        <div className="mx-auto mob1:w-f mt-[72px] mob1:px-[4vw] w-fit">
          <img src="/aboutBanner.svg" className="" alt="About Banner" />
        </div>
      </FadeInSection>
      <FadeInSection>
        <div className="bg-white pt-[4.5rem] px-[4vw] flex gap-[6rem] lg:flex-col lg:gap-5">
          <div className="text-[2.5rem] leading-none w-[8rem] mob1:text-[24px] min-w-fit text-[#A9441B] pt-2">
            OUR MISSION
          </div>
          <div className="text-[2rem] mob1:text-[18px]">
            At Sescon Builders our mission is to deliver professional
            construction services based on quality craftsmanship in a timely
            manner. Committed to our mission we will create value for our
            customers through creativity, leadership, safety, reliability, and
            cost effectiveness above the , commercial, entertainment, education
            projects for our clients throughout India.
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
            parameters will be tightly controlled. In recognition to the
            policies and system adopted by the company Sescon Builders Pvt. Ltd.
            is also registered under standard ISO9001:2015(QMS).
          </div>
        </div>
      </FadeInSection>
      <FadeInSection>
        <div className="w-11/12 mt-[72px] mx-auto flex flex-col gap-[63px] mob1:gap-10 text-[#A9441B] font-normal">
          <div className="text-[2.5rem] leading-[60px] mob1:text-[24px] mob1:leading-9">
            WHAT MAKE US STAND OUT
          </div>
          <div className="text-[1.5rem] mob1:text-[24px]">
            {wmus.map((item, index) => (
              <FadeInSection>
                <div
                  key={index}
                  className={`flex relative justify-between mb-[74px] lg:flex-col ${
                    index % 2 === 0 ? "" : "flex-row-reverse"
                  }`}
                >
                  <div className="w-[43.7%] lg:w-[100%]">
                    <img
                      className="w-full"
                      src={item.img.data.attributes.url}
                      alt={`Image ${index}`}
                    />
                    <img
                      className={`absolute top-[-72px] pt-5 ${
                        index === 0 && "hidden"
                      } ${index % 2 === 0 ? "rotate-180 left-0" : "right-0"}`}
                      src="/line.svg"
                      alt="Line"
                    />
                  </div>
                  <div className="pt-6 px-3 pb-6 flex flex-col gap-4 w-[40.27%] lg:w-[100%]">
                    <div>
                      <img src={"/logo.svg"} alt={`Logo ${index}`} />
                    </div>
                    <div className="text-[2rem] mob1:text-[24px] font-normal">
                      {item.Title}
                    </div>
                    <div className="self-end text-black mob1:text-[18px] mt-8 mob1:mt-0 font-normal leading-8">
                      {item.Description}
                    </div>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </FadeInSection>
      <FadeInSection>
        <div className="w-11/12 mx-auto pt-[3rem] mob1:pt-0  flex gap-[4rem] pb-9">
          <div className="text-[2.5rem] sm:text-[2rem] mob:text-[1.5rem]  leading-none w-[8rem] min-w-fit text-[#A9441B]">
            EQUIPMENTS TOOLS AND PLANTS
          </div>
        </div>
        <div className="w-11/12 mx-auto pb-[5rem] pt-[3rem] mob1:pt-0">
          <Carousel responsive={responsive}>
          {projectCards.map((project) => (
            <ProjectCard card={project} />
            ))}
          </Carousel>
        </div>
      </FadeInSection>
      <FadeInSection>
        <Reach section="About" />
      </FadeInSection>
    </div>
  );
}

export default Home;
