import React from "react";

const Available = () => {
  return (
    <div className=" w-11/12 mx-auto flex gap-[64px] flex-col mb-[104px]">
      <div className="text-[2.5rem] sm:text-[2rem] mob:text-[1.5rem]  leading-none w-[8rem] font-[400] min-w-fit text-[#B33F0F]">
        OUR AVAILABILITY
      </div>
      <div className=" grid grid-cols-2 gap-[93px] md1:grid-cols-1">
        <div>
          <img src="/India.svg" />
        </div>
        <div className="sm:text-[1.5rem] mob:text-[1rem] text-[32px] text-black leading-[44.4px] mob1:leading-7 font-[400] flex flex-col gap-16 sm:gap-8 pb-[40px]">
          <div>
            Sescon Builders Pvt. Ltd. is committed to delivering high-quality
            construction services across a wide geographic area. We are pleased
            to offer our services in the following states, where we bring our
            expertise, professionalism, and dedication to every project.
          </div>
          <div>
            No matter where your project is located within these states, you can
            trust Sescon Builders Pvt. Ltd. to provide exceptional service and
            craftsmanship.{" "}
            <span className=" font-[700] text-[#B33F0F] underline">
              Contact us{" "}
            </span>{" "}
            today to discuss your construction needs and how we can help bring
            your vision to life.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Available;
