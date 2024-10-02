import React from "react";
import Marquee from "react-fast-marquee";

const Clients = (props) => {
  return (
    <div className="  w-11/12 mx-auto flex gap-[64px] flex-col mb-[104px]">
    <div className="text-[2.5rem] mob1:text-[24px] leading-none w-[8rem] font-[400] min-w-fit text-[#A9441B]">
        Our Clients
      </div>
      <Marquee gradient={false} speed={60} pauseOnHover='true'>
        {props.clients.map((client) => (
        <div style={{ marginRight: "122px" }}>
          <img src={client} alt="Logo" />
        </div>))
}
      </Marquee>
    </div>
  );
};

export default Clients;
