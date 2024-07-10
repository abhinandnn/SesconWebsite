"use client";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { aboutData } from "@/data/aboutData";
import Reach from "@/components/reach";
import BackgroundSlider from "react-background-slider";
import { Fade } from "@mui/material";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ProjectCard from "@/components/projectCard";
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
const FadeInSection = ({ children }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.9 }}
    >
      {children}
    </motion.div>
  );
};

function Home() {
  return (
    <div className="font-lexend h-fit">
      <FadeInSection>
      <div className="h-[92vh] mob:h-[60vh] bg-transparent text-white">
        <BackgroundSlider
          images={["/img1.svg", "/img2.svg", "/img3.svg"]}
          duration={4}
          transition={2}
        />
        <div className="px-[4vw] mob:px-[6vw]">
          <div className="text-[2rem] mob:text-[1.25rem] sm:text-[1.5rem] lg1:text-[1.75rem] pt-[5rem]">We Build Your</div>
          <div className="text-[10rem] mini1:text-[5.75rem] mob:text-[6.25rem] sm:text-[7.25rem] lg1:text-[8.375rem] leading-none font-bold">Dreams</div>
          <div className="text-[2rem] mob:text-[1.25rem] sm:text-[1.5rem] lg1:text-[1.75rem]">
            We deliver what we commit and we commit what we can deliver
          </div>
        </div>
      </div>
      </FadeInSection>

      <FadeInSection>
        <div className="bg-white pt-[4.5rem] px-[4vw] flex gap-[6rem] lg:flex-col lg:gap-5">
          <div className="text-[2.5rem] leading-none w-[8rem] min-w-fit text-[#B33F0F] pt-1">
            ABOUT COMPANY
          </div>
          <div className="text-[2rem]">
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
        <div className="mx-auto mt-[72px] w-fit">
          <img src="/aboutBanner.svg" alt="About Banner" />
        </div>
      </FadeInSection>
      <FadeInSection>
        <div className="bg-white pt-[4.5rem] px-[4vw] flex gap-[6rem] lg:flex-col lg:gap-5">
          <div className="text-[2.5rem] leading-none w-[8rem] min-w-fit text-[#B33F0F] pt-2">
            OUR MISSION
          </div>
          <div className="text-[2rem]">
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
        <div className="w-11/12 mt-[72px] mx-auto flex flex-col gap-[63px] text-[#B33F0F] font-normal">
          <div className="text-[2.5rem] leading-[60px]">
            WHAT MAKE US STAND OUT
          </div>
          <div className="text-[1.5rem]">
            {aboutData.map((item, index) => (
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
                      src={item.img}
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
                      <img src={item.logo} alt={`Logo ${index}`} />
                    </div>
                    <div className="text-[2rem] font-semibold">
                      {item.title}
                    </div>
                    <div className="self-end text-black mt-8 font-medium leading-8">
                      {item.description}
                    </div>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </FadeInSection>
      <FadeInSection>
      <div className= "pt-[3rem] px-[4vw] flex gap-[4rem] pb-9">
        <div className="text-[2.5rem] sm:text-[2rem] mob:text-[1.5rem]  leading-none w-[8rem] min-w-fit text-[#B33F0F]">
        EQUIPMENTS TOOLS AND PLANTS
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
  </FadeInSection>
      <FadeInSection>
        <Reach section="About" />
      </FadeInSection>
    </div>
  );
}

export default Home;
