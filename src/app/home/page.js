"use client";
import React from "react";
import { FadeInSection } from "@/utils/animation";
import BackgroundSlider from "react-background-slider";
import SimpleImageSlider from "react-simple-image-slider";
import Achievement from "@/components/achievement";
import Available from "@/components/available";
import Clients from "@/components/clients";
import FAQ from "@/components/faq";
import Reach from "@/components/reach";
import Footer from "@/components/footer";
import ProjectCard from "@/components/projectCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import axios from "@/api/axios";
import { useEffect, useState } from "react";
const responsive = {
  superLargeDesktop: {
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
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get("/home-page?populate=deep") // Replace with your actual API endpoint
      .then((response) => {
        setData(response.data.data); // Assuming the data comes in this format
      })
      .catch((error) => {
        console.error("Error fetching the data", error);
      });
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }


  const heroImages = data.attributes.hero_section_imgs.data.map(
    (img) => img.attributes.url
  );
  const aboutUsText = data.attributes.aboutus_text;
  const aboutUsImages = data.attributes.aboutus_carousel_imgs.data.map(
    (img) => img.attributes.url
  );
  const projectCards = data.attributes.project_card;
  const clientImages = data.attributes.our_client_imgs.data.map(
    (img) => img.attributes.url
  );
  return (
    <div className="font-lexend h-fit">
        <div className="h-[92vh] mob:h-[60vh] bg-transparent text-white">
          <BackgroundSlider
            images={heroImages}
            duration={4}
            transition={2}
          />
          <div className="px-[4vw] mob:px-[6vw]">
            <div className="text-[2rem] mob:text-[1.25rem] sm:text-[1.5rem] lg1:text-[1.75rem] pt-[5rem]">
              We Build Your
            </div>
            <div className="text-[10rem] mini1:text-[4.75rem] ] mob:text-[6.25rem] sm:text-[7.25rem] lg1:text-[8.375rem] leading-none font-bold">
              Dreams
            </div>
            <div className="text-[2rem] mob:text-[1.25rem] sm:text-[1.5rem] lg1:text-[1.75rem]">
              We deliver what we commit and we commit what we can deliver
            </div>
          </div>
        </div>
      

      <FadeInSection>
        <div className="bg-white  md1:flex-col md1:gap-[3rem] mob:gap-[2rem] pt-[4.5rem] mob:px-[6vw] px-[4vw] flex gap-[6rem]">
          <div className="text-[2.5rem] sm:text-[2rem] mob:text-[1.5rem] mini1:text-[24px] leading-none w-[8rem] min-w-fit text-[#B33F0F]">
            ABOUT US
          </div>
          <div className="text-[2rem] sm:text-[1.5rem] mob:text-[1.15rem]">
           {aboutUsText}
          </div>
        </div>
      </FadeInSection>

      <FadeInSection>
        <div className="bg-white pb-[2rem] w-11/12 mx-auto pt-[4.5rem]   xl:flex-col-reverse xl:gap-[3rem] flex gap-[6rem]">
          <div className="md1:hidden">
            <SimpleImageSlider
              width={770}
              height={770}
              images={aboutUsImages}
              slideDuration={0.5}
              autoPlay={true}
            />
          </div>
          <div className="md1:flex hidden sm:hidden">
            <SimpleImageSlider
              width={570}
              height={570}
              images={aboutUsImages}
              slideDuration={0.5}
              autoPlay={true}
            />
          </div>
          <div className="sm:flex mob:hidden hidden">
            <SimpleImageSlider
              width={470}
              height={470}
              images={aboutUsImages}
              slideDuration={0.5}
              autoPlay={true}
            />
          </div>
          <div className="mob:flex hidden">
            <SimpleImageSlider
              width={330}
              height={330}
              images={aboutUsImages}
              slideDuration={0.5}
              autoPlay={true}
            />
          </div>
          <div className="flex flex-col gap-[4rem]">
            <div>
              <div className="font-bold leading-tight text-[#B33F0F] mob:text-[4.5rem] sm:text-[5.125rem] lg1:text-[5.875rem] text-[7.5rem]">
                20+
              </div>
              <div className="font-bold text-[2.5rem] mob:text-[1.5rem] sm:text-[1.75rem] lg1:text-[2rem] pb-6 border-b border-black">
                Year Experience
              </div>
            </div>
            <div>
              <div className="font-bold mob:text-[4.5rem] sm:text-[5.125rem] lg1:text-[5.875rem] leading-tight text-[#B33F0F] text-[7.5rem]">
                120+
              </div>
              <div className="font-bold text-[2.5rem] mob:text-[1.5rem] sm:text-[1.75rem] lg1:text-[2rem] pb-6 border-b border-black">
                Projects Built
              </div>
            </div>
          </div>
        </div>
      </FadeInSection>

      <FadeInSection>
        <div className="pt-[3rem] w-11/12 mx-auto  flex gap-[4rem] pb-9">
          <div className="text-[2.5rem] sm:text-[2rem] mob:text-[1.5rem]  leading-none w-[8rem] min-w-fit text-[#B33F0F]">
            FEATURED PROJECTS
          </div>
        </div>
      </FadeInSection>

      <FadeInSection>
        {" "}
        <div className="w-11/12 mx-auto pb-[5rem] pt-[3rem]">
          <Carousel responsive={responsive}>
            {projectCards.map((project) => (
            <ProjectCard card={project} />
            ))}
          </Carousel>
        </div>
      </FadeInSection>

      <FadeInSection>
        <Achievement />
      </FadeInSection>
      <FadeInSection>
        <Available />
      </FadeInSection>
      <FadeInSection>
        <Clients clients={clientImages}/>
      </FadeInSection>
      <FadeInSection>
        {" "}
        <FAQ QnA={data.attributes.QnA}/>
      </FadeInSection>
      <FadeInSection>
        <Reach section="Home" />
      </FadeInSection>
      <FadeInSection>
        <div className="slider-container"></div>
      </FadeInSection>
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
