"use client";
import { useState } from "react";
import { data } from "@/data/ongoingData";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import { FadeInSection } from "@/utils/animation";

export default function Ongoing() {
  const [showAll, setShowAll] = useState(false);

  const handleShowMore = () => {
    setShowAll(true);
  };

  const displayedData = showAll ? data : data.slice(0, 12);
  const isLastRow = !showAll && displayedData.length > 8;

  return (
    <div className="w-11/12 mx-auto flex flex-col h-fit">
      <FadeInSection>
        <Breadcrumbs
          aria-label="breadcrumb"
          className=" mb-8 mt-10 w-fit text-[16px]"
        >
          <Link underline="hover" color="inherit">
            Projects
          </Link>
          <Typography color="#98002E" className=" font-semibold">
            Ongoing Projects
          </Typography>
        </Breadcrumbs>
      </FadeInSection>
      <FadeInSection>
        <div className="grid grid-cols-4 gap-5 mb-[72px] lg:grid-cols-3 md1:grid-cols-2 sm:grid-cols-1">
          {displayedData.map((dataItem, index) => (
            <FadeInSection>
              <div
                className={`flex flex-col gap-4 rounded h-fit p-8 mob1:p-3 text-black font-normal text-[20px] leading-[30px] mob1:leading-6 relative ${
                  isLastRow && index >= 8 ? "last-row-card" : ""
                }`}
                key={index}
                style={{ backgroundColor: dataItem.colour }}
              >
                <div className="flex flex-col gap-2">
                  <div className="text-[28px] leading-[42px] mob1:text-[24px]">
                    {dataItem.title}
                  </div>
                  <div className="text-[#3D3D3D] font-normal leading-5 mob1:text-[16px]">
                    {dataItem.type}
                  </div>
                  <div className="mob1:text-[16px]">{dataItem.value}</div>
                </div>
                <div className="mob1:text-[16px]">{dataItem.description}</div>
                {isLastRow && index >= 8 && (
                  <div className="opacity-overlay"></div>
                )}
              </div>
            </FadeInSection>
          ))}
        </div>
      </FadeInSection>
      <FadeInSection>
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
      </FadeInSection>
    </div>
  );
}
