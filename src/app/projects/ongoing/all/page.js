"use client";
import { useState } from "react";
import { data } from "@/data/ongoingData";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";

export default function Ongoing() {
  const [showAll, setShowAll] = useState(false);

  const handleShowMore = () => {
    setShowAll(true);
  };

  const displayedData = showAll ? data : data.slice(0, 12);
  const isLastRow = !showAll && displayedData.length > 8;

  return (
    <div className="w-11/12 mx-auto flex flex-col h-fit">
      <Breadcrumbs aria-label="breadcrumb" className=" mb-8 mt-10 text-[16px]">
        <Link underline="hover" color="inherit" href="/projects">
          Projects
        </Link>
        <Typography color="#98002E" className=" font-semibold">Ongoing Projects</Typography>
      </Breadcrumbs>
      <div className="grid grid-cols-4 gap-5 mb-[72px] lg:grid-cols-3 md1:grid-cols-2 sm:grid-cols-1">
        {displayedData.map((dataItem, index) => (
          <div
            className={`flex flex-col gap-4 rounded h-fit p-8 text-black font-semibold text-[20px] leading-[30px] relative ${
              isLastRow && index >= 8 ? "last-row-card" : ""
            }`}
            key={index}
            style={{ backgroundColor: dataItem.colour }}
          >
            <div className="flex flex-col gap-2">
              <div className="text-[28px] leading-[42px]">{dataItem.title}</div>
              <div className="text-[#3D3D3D] font-medium leading-5">
                {dataItem.type}
              </div>
              <div>{dataItem.value}</div>
            </div>
            <div>{dataItem.description}</div>
            {isLastRow && index >= 8 && <div className="opacity-overlay"></div>}
          </div>
        ))}
      </div>
      {!showAll && (
        <div
          className=" flex mt-[-72px]  mb-[72px] flex-col gap-2 text-[#B33F0F] mx-auto cursor-pointer text-[22px] font-medium"
          onClick={handleShowMore}
        >
          <div className="text-center ">Show more</div>
          <div className=" self-center">
            <img src="/arrows.svg" />
          </div>
        </div>
      )}
    </div>
  );
}
