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

function Contact() {
  return (
    <div className="font-lexend h-fit px-[4vw] py-[4rem]">
     <div className="flex md1:flex-col md1:gap-[2rem] gap-[4rem] justify-between pb-[4rem]">
<div className="text-[2.5rem] sm:text-[2rem] mob:text-[1.5rem] text-[#B33F0F] min-w-fit">
CONTACT US
</div>
<div className="text-[1.5rem]  sm:text-[1.375rem] mob:text-[1.25rem]">
Our team of experienced and dedicated professionals and
commercial builders is ready to assist you with your next
commercial construction project.
<br/>
<br/>
Contact us today to start a conversation about your construction needs. As a leading construction firm, we look forward to collaborating with you to create a space that reflects your style, meets your functional requirements, and exceeds your expectations. Let’s build something extraordinary together.
<br/>
<br/>
<Link href={"tel:+91842932309"} className="text-[#B33F0F]">+91842932309</Link> or <Link href={"mailto:sescon.contact@gmail.com"} className="text-[#B33F0F]">sescon.contact@gmail.com</Link>
</div>
     </div>
     <div className="flex flex-col pb-[4rem]">
     <div className="text-[2.5rem] text-[#B33F0F] w-[100%] border-b pb-2 border-b-[#B33F0F]">
     LOCATE US AT
</div>
<div className="flex justify-between pt-[1.5rem] pb-[2rem] border-b border-b-[#B33F0F]">
    <div className="flex flex-col justify-between h-[32rem]">
<div>
<span className="text-[2rem]">
DELHI
</span>
<br/>
<span className="text-[1.375rem]">
Head office
<br/>
306, Guru Amardas Bhawan,78,
<br/>
Nehru Place, New Delhi 110019
<br/>
India
</span>
</div>
<div>
<span className="text-[1.375rem]">
ABN: 95 111 941 792
<br/>
Lic No. 173 639 C
</span>
</div>
    </div>
<div>
<img src={'/loc1.svg'}/>
</div>
</div>
<div className="flex justify-between pt-[2rem] pb-[2rem]">
    <div className="flex flex-col justify-between h-[32rem]">
<div>
<span className="text-[2rem]">
GUJRAT
</span>
<br/>
<span className="text-[1.375rem]">
Regional office
<br/>
315, Shivalik Satyamev,Bopal Junction
<br/>
Ahemdabad, Gujarat 380058
<br/>
India
</span>
</div>
<div>
<span className="text-[1.375rem]">
ABN: 95 111 941 792
<br/>
Lic No. 173 639 C
</span>
</div>
    </div>
<div>
<img src={'/loc2.svg'}/>
</div>
</div>
     </div>

     <div className="">
     <div className="text-[2.5rem] sm:text-[2rem] mob:text-[1.5rem] text-[#B33F0F] w-[100%]">
     CONTACT FORM
</div>
<div className="pt-4 flex justify-between flex-wrap gap-[2rem]">
    <div className="w-[42rem] sm:text-[1.675rem] mob:text-[1.325rem] text-[2rem] ">
    We’d love to hear from you! Please reach
out to us through our contact form and
let us know how we can assist you.
    </div>
    <form className="font-Lexend text-black max-w-xl w-[40rem]">
    <div className="relative z-0 w-full mb-5 group">
      <input type="text" name="floating_name" id="floating_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-[#B33F0F] focus:outline-none focus:ring-0 focus:border-[#B33F0F] peer" placeholder=" " required />
      <label for="floating_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#B33F0F] peer-focus:dark:text-[#B33F0F] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Name *</label>
  </div>
  <div className="relative z-0 w-full mb-5 group">
      <input type="email" name="floating_email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-[#B33F0F] focus:outline-none focus:ring-0 focus:border-[#B33F0F] peer" placeholder=" " required />
      <label for="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-[#B33F0F] peer-focus:dark:text-[#B33F0F] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email *</label>
  </div>
  <div className="relative z-0 w-full mb-5 group">
      <input type="tel" name="floating_tel" id="floating_tel" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-[#B33F0F] focus:outline-none focus:ring-0 focus:border-[#B33F0F] peer" placeholder=" " required />
      <label for="floating_tel" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#B33F0F] peer-focus:dark:text-[#B33F0F] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone Number *</label>
  </div>
  <div className="relative z-0 w-full mb-5 group">
      <input type="text" name="floating_subject" id="floating_subject" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-[#B33F0F] focus:outline-none focus:ring-0 focus:border-[#B33F0F] peer" placeholder=" " required />
      <label for="floating_subject" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#B33F0F] peer-focus:dark:text-[#B33F0F] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Subject *</label>
  </div>
  <div className="relative z-0 w-full mb-5 group">
      <input type="text" name="floating_message" id="floating_message" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-[#B33F0F] focus:outline-none focus:ring-0 focus:border-[#B33F0F] peer" placeholder=" " required />
      <label for="floating_message" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#B33F0F] peer-focus:dark:text-[#B33F0F] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Message *</label>
  </div>
  <button type="submit" className="text-white bg-[#B33F0F] focus:ring-4 focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Submit</button>
</form>
</div>
</div>
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