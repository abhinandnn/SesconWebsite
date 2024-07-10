import React from "react";
import Marquee from "react-fast-marquee";

const Clients = () => {
  return (
    <div className="  w-11/12 mx-auto flex gap-[64px] flex-col mb-[104px]">
    <div className="text-[2.5rem] leading-none w-[8rem] font-[400] min-w-fit text-[#B33F0F]">
        OUR Clients
      </div>
      <Marquee gradient={false} speed={60} pauseOnHover='true'>
        <div style={{ marginRight: "122px" }}>
          <img src="/honda.svg" alt="Honda Logo" />
        </div>
        <div style={{ marginRight: "122px" }}>
          <img src="/honda.svg" alt="Honda Logo" />
        </div>
        <div style={{ marginRight: "122px" }}>
          <img src="/honda.svg" alt="Honda Logo" />
        </div>
        <div style={{ marginRight: "122px" }}>
          <img src="/honda.svg" alt="Honda Logo" />
        </div>
        <div style={{ marginRight: "122px" }}>
          <img src="/honda.svg" alt="Honda Logo" />
        </div>
      </Marquee>
    </div>
  );
};

export default Clients;
