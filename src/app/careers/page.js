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
import Link from "next/link";
import CareerCard from "@/components/careerCard";
import { FadeInSection } from "@/utils/animation";
import { Fade } from "@mui/material";

function Careers() {
  return (
    <div className="font-lexend h-fit px-[4vw] py-[4rem]">
      <FadeInSection>
        <div className="flex gap-[4rem] md1:flex-col md1:gap-[2rem] justify-between pb-[4rem]">
          <div className="text-[2.5rem] sm:text-[2rem] mob:text-[1.5rem] text-[#B33F0F]">
            AVAILABLE POSITIONS
          </div>
          <div className="text-[2rem] sm:text-[1.675rem] mob:text-[1.25rem]">
            View our range of available jobs today and take the first step
            towards a rewarding and fulfilling career with us.
          </div>
        </div>
      </FadeInSection>

      <FadeInSection>
        {" "}
        <div className="flex flex-wrap gap-[1rem] pb-[4rem]">
          <CareerCard
            role={"Manager"}
            domain={"Marketing"}
            text={
              "Join Our Team! SESCON is seeking a dynamic and experienced Manager to lead our projects to success. Apply today!"
            }
          />
          <CareerCard
            role={"Social Media Manager"}
            domain={"Marketing"}
            text={
              "Join Our Team! SESCON is seeking a dynamic and experienced Manager to lead our projects to success. Apply today!"
            }
          />
          <CareerCard
            role={"Product Lead"}
            domain={"Marketing"}
            text={
              "Join Our Team! SESCON is seeking a dynamic and experienced Manager to lead our projects to success. Apply today!"
            }
          />
        </div>
      </FadeInSection>

      <FadeInSection>
        {" "}
        <div className="">
          <div className="flex justify-between flex-wrap">
            <div className="text-[2.5rem] sm:text-[2rem] mob:text-[1.5rem] text-[#B33F0F] w-[35rem]">
              OPEN CALL FOR INTERESTED CANDIDATES
            </div>
            <div className="w-[42rem] sm:text-[1.675rem] mob:text-[1.25rem] text-[2rem]">
              We welcome your details and look forward to learning more about
              how you can contribute to our team.
            </div>
          </div>
          <FadeInSection>
            {" "}
            <div className="pt-4 flex justify-between flex-wrap gap-[2rem]">
              <form className="font-Lexend text-black max-w-xl flex flex-col gap-[1rem] w-[40rem]">
                <div className="relative z-0 w-full mb-5 group">
                  <input
                    type="text"
                    name="floating_name"
                    id="floating_name"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-[#B33F0F] focus:outline-none focus:ring-0 focus:border-[#B33F0F] peer"
                    placeholder=" "
                    required
                  />
                  <label
                    for="floating_name"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#B33F0F] peer-focus:dark:text-[#B33F0F] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Name *
                  </label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                  <input
                    type="email"
                    name="floating_email"
                    id="floating_email"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-[#B33F0F] focus:outline-none focus:ring-0 focus:border-[#B33F0F] peer"
                    placeholder=" "
                    required
                  />
                  <label
                    for="floating_email"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-[#B33F0F] peer-focus:dark:text-[#B33F0F] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Email *
                  </label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                  <input
                    type="tel"
                    name="floating_tel"
                    id="floating_tel"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-[#B33F0F] focus:outline-none focus:ring-0 focus:border-[#B33F0F] peer"
                    placeholder=" "
                    required
                  />
                  <label
                    for="floating_tel"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#B33F0F] peer-focus:dark:text-[#B33F0F] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Phone Number *
                  </label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                  <input
                    type="text"
                    name="position"
                    id="position"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-[#B33F0F] focus:outline-none focus:ring-0 focus:border-[#B33F0F] peer"
                    placeholder=" "
                    required
                  />
                  <label
                    for="position"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#B33F0F] peer-focus:dark:text-[#B33F0F] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Position Interest *
                  </label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                  <input
                    type="text"
                    name="floating_subject"
                    id="floating_subject"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-[#B33F0F] focus:outline-none focus:ring-0 focus:border-[#B33F0F] peer"
                    placeholder=" "
                    required
                  />
                  <label
                    for="floating_subject"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#B33F0F] peer-focus:dark:text-[#B33F0F] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Subject *
                  </label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                  <input
                    type="text"
                    name="floating_message"
                    id="floating_message"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-[#B33F0F] focus:outline-none focus:ring-0 focus:border-[#B33F0F] peer"
                    placeholder=" "
                    required
                  />
                  <label
                    for="floating_message"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#B33F0F] peer-focus:dark:text-[#B33F0F] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Message *
                  </label>
                </div>
                <div>
                  <label
                    className="block mb-2 text-sm font-medium text-gray-400"
                    for="user_avatar"
                  >
                    Upload Resume *
                  </label>
                  <input
                    className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                    aria-describedby="user_avatar_help"
                    id="user_avatar"
                    type="file"
                  />
                  <div className="text-[0.8rem] font-light">
                    Accepted file types: pdf, docx, jpg, png
                    <br />
                    Max file size: 5 MB
                  </div>
                </div>
                <button
                  type="submit"
                  className="text-white w-[7.5rem] bg-[#B33F0F] focus:ring-4 focus:outline-none font-medium rounded text-sm  px-5 py-2.5 text-center"
                >
                  Submit
                </button>
              </form>
            </div>
          </FadeInSection>
        </div>
      </FadeInSection>
    </div>
  );
}

export default Careers;

// export async function getStaticProps() {

//     return {
//       props: {
//         posts,
//       },
//     }
//   }
