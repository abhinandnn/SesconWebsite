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
import { FadeInSection } from "@/utils/animation";
import Link from "next/link";

function Contact() {
  return (
    <div className="font-lexend h-fit px-[4vw] py-[4rem]">
      <FadeInSection>
        <div className="flex md1:flex-col md1:gap-[2rem] gap-[4rem] justify-between pb-[4rem]">
          <div className="text-[2.5rem] sm:text-[2rem] mob:text-[1.5rem] text-[#A9441B] min-w-fit">
            CONTACT US
          </div>
          <div className="text-[1.5rem]  sm:text-[1.375rem] mob:text-[1.25rem]">
            Our team of experienced and dedicated professionals and commercial
            builders is ready to assist you with your next commercial
            construction project.
            <br />
            <br />
            Contact us today to start a conversation about your construction
            needs. As a leading construction firm, we look forward to
            collaborating with you to create a space that reflects your style,
            meets your functional requirements, and exceeds your expectations.
            Let’s build something extraordinary together.
            <br />
            <br />
            <Link href={"tel:+91842932309"} className="text-[#A9441B]">
              +91842932309
            </Link>{" "}
            or{" "}
            <Link
              href={"mailto:sescon.contact@gmail.com"}
              className="text-[#A9441B]"
            >
              sescon.contact@gmail.com
            </Link>
          </div>
        </div>
      </FadeInSection>

      <FadeInSection>
        <div className="flex flex-col pb-[4rem]">
          <div className="text-[2.5rem] sm:text-[2rem] mob:text-[1.5rem] text-[#A9441B] w-[100%] border-b pb-2 border-b-[#A9441B]">
            LOCATE US AT
          </div>
          <div className="flex justify-between pt-[1.5rem] pb-[2rem] border-b border-b-[#A9441B]">
            <div className="flex flex-col justify-between">
              <div>
                <span className="text-[2rem] md:text-[1.75rem] mob:text-[1.5rem]">
                  DELHI
                </span>
                <br />
                <span className="text-[1.375rem] md:text-[1.25rem] mob:text-[1.125rem]">
                  Head office
                  <br />
                  306, Guru Amardas Bhawan,78,
                  <br />
                  Nehru Place, New Delhi 110019
                  <br />
                  India
                </span>
              </div>
              <div className="py-[2rem] hidden mob1:hidden md:flex">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d876.1816971906941!2d77.25329706960898!3d28.54793067653224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3c53d55627d%3A0x510b0b40a17f2d1f!2sSescon%20Builders%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1720604023675!5m2!1sen!2sin"
                  width="500"
                  height="600"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Map"
                ></iframe>
              </div>
              <div className="py-[2rem] hidden mini1:hidden mob1:flex">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d876.1816971906941!2d77.25329706960898!3d28.54793067653224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3c53d55627d%3A0x510b0b40a17f2d1f!2sSescon%20Builders%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1720604023675!5m2!1sen!2sin"
                  width="380"
                  height="540"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Map"
                ></iframe>
              </div>
              <div className="py-[2rem] hidden mini1:flex">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d876.1816971906941!2d77.25329706960898!3d28.54793067653224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3c53d55627d%3A0x510b0b40a17f2d1f!2sSescon%20Builders%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1720604023675!5m2!1sen!2sin"
                  width="340"
                  height="500"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Map"
                ></iframe>
              </div>
              <div>
                <span className="text-[1.375rem] md:text-[1.25rem] mob:text-[1.125rem]">
                  <br />
                </span>
              </div>
            </div>
            <div className="lg:hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d876.1816971906941!2d77.25329706960898!3d28.54793067653224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3c53d55627d%3A0x510b0b40a17f2d1f!2sSescon%20Builders%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1720604023675!5m2!1sen!2sin"
                width="600"
                height="420"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map"
              ></iframe>
            </div>
            <div className="lg:flex md:hidden hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d876.1816971906941!2d77.25329706960898!3d28.54793067653224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3c53d55627d%3A0x510b0b40a17f2d1f!2sSescon%20Builders%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1720604023675!5m2!1sen!2sin"
                width="500"
                height="420"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map"
              ></iframe>
            </div>
          </div>
          <div className="flex justify-between pt-[2rem] pb-[2rem]">
            <div className="flex flex-col justify-between">
              <div>
                <span className="text-[2rem] md:text-[1.75rem] mob:text-[1.5rem]">
                  GUJRAT
                </span>
                <br />
                <span className="text-[1.375rem] md:text-[1.25rem] mob:text-[1.125rem]">
                  Regional office
                  <br />
                  315, Shivalik Satyamev,Bopal Junction
                  <br />
                  Ahemdabad, Gujarat 380058
                  <br />
                  India
                </span>
              </div>
              <div className="py-[2rem] hidden mob1:hidden md:flex">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d308.11481224803634!2d72.47596066490706!3d23.02621082390296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9b491c931201%3A0x85ef3d5f63f34db8!2sShivalik%20Satyamev!5e0!3m2!1sen!2sin!4v1720604504860!5m2!1sen!2sin"
                  width="500"
                  height="600"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Map"
                ></iframe>
              </div>
              <div className="py-[2rem] hidden mini1:hidden mob1:flex">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d308.11481224803634!2d72.47596066490706!3d23.02621082390296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9b491c931201%3A0x85ef3d5f63f34db8!2sShivalik%20Satyamev!5e0!3m2!1sen!2sin!4v1720604504860!5m2!1sen!2sin"
                  width="380"
                  height="540"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Map"
                ></iframe>
              </div>
              <div className="py-[2rem] hidden mini1:flex">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d308.11481224803634!2d72.47596066490706!3d23.02621082390296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9b491c931201%3A0x85ef3d5f63f34db8!2sShivalik%20Satyamev!5e0!3m2!1sen!2sin!4v1720604504860!5m2!1sen!2sin"
                  width="340"
                  height="500"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Map"
                ></iframe>
              </div>

              <div>
                <span className="text-[1.375rem] md:text-[1.25rem] mob:text-[1.125rem]">
                  <br />
                </span>
              </div>
            </div>
            <div className="lg:hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d308.11481224803634!2d72.47596066490706!3d23.02621082390296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9b491c931201%3A0x85ef3d5f63f34db8!2sShivalik%20Satyamev!5e0!3m2!1sen!2sin!4v1720604504860!5m2!1sen!2sin"
                width="600"
                height="420"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map"
              ></iframe>
            </div>
            <div className="lg:flex md:hidden hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d308.11481224803634!2d72.47596066490706!3d23.02621082390296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9b491c931201%3A0x85ef3d5f63f34db8!2sShivalik%20Satyamev!5e0!3m2!1sen!2sin!4v1720604504860!5m2!1sen!2sin"
                width="500"
                height="420"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map"
              ></iframe>
            </div>
          </div>
        </div>
      </FadeInSection>

      <FadeInSection>
        <div className="">
          <div className="text-[2.5rem] sm:text-[2rem] mob:text-[1.5rem] text-[#A9441B] w-[100%]">
            CONTACT FORM
          </div>
          <div className="pt-4 flex justify-between flex-wrap gap-[2rem]">
            <div className="w-[42rem] sm:text-[1.675rem] mob:text-[1.325rem] text-[2rem] ">
              We’d love to hear from you! Please reach out to us through our
              contact form and let us know how we can assist you.
            </div>
            <form className="font-Lexend text-black max-w-xl w-[40rem]">
              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="text"
                  name="floating_name"
                  id="floating_name"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-[#A9441B] focus:outline-none focus:ring-0 focus:border-[#A9441B] peer"
                  placeholder=" "
                  required
                />
                <label
                  for="floating_name"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#A9441B] peer-focus:dark:text-[#A9441B] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Name *
                </label>
              </div>
              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="email"
                  name="floating_email"
                  id="floating_email"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-[#A9441B] focus:outline-none focus:ring-0 focus:border-[#A9441B] peer"
                  placeholder=" "
                  required
                />
                <label
                  for="floating_email"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-[#A9441B] peer-focus:dark:text-[#A9441B] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Email *
                </label>
              </div>
              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="tel"
                  name="floating_tel"
                  id="floating_tel"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-[#A9441B] focus:outline-none focus:ring-0 focus:border-[#A9441B] peer"
                  placeholder=" "
                  required
                />
                <label
                  for="floating_tel"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#A9441B] peer-focus:dark:text-[#A9441B] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Phone Number *
                </label>
              </div>
              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="text"
                  name="floating_subject"
                  id="floating_subject"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-[#A9441B] focus:outline-none focus:ring-0 focus:border-[#A9441B] peer"
                  placeholder=" "
                  required
                />
                <label
                  for="floating_subject"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#A9441B] peer-focus:dark:text-[#A9441B] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Subject *
                </label>
              </div>
              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="text"
                  name="floating_message"
                  id="floating_message"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-[#A9441B] focus:outline-none focus:ring-0 focus:border-[#A9441B] peer"
                  placeholder=" "
                  required
                />
                <label
                  for="floating_message"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#A9441B] peer-focus:dark:text-[#A9441B] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Message *
                </label>
              </div>
              <button
                type="submit"
                className="text-white bg-[#A9441B] focus:ring-4 focus:outline-none font-medium rounded-lg text-sm w-[7rem] sm:w-auto px-5 py-2.5 text-center"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </FadeInSection>
    </div>
  );
}

export default Contact;

// export async function getStaticProps() {

//     return {
//       props: {
//         posts,
//       },
//     }
//   }
