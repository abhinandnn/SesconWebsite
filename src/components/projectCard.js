import React from "react";

function ProjectCard(props) {
  const cardStyle = {
    backgroundImage: `url(${props.card.image.data.attributes.url})`,
  };
  return (
    <div
      style={cardStyle}
      className="w-[20.2rem] transition-all duration-500 ease-out h-[22.5rem] group bg-cover flex flex-col-reverse"
    >
      <div className="">
        <div className=" relative bg-black group-hover:h-[8rem] transition-all duration-500 ease-out bg-opacity-30 h-[22.5rem] flex flex-col items-center">
          <button className="w-[10.6rem] h-[3.37rem] rounded-[1.62rem] text-[1.25rem] p-0 transition-all duration-500 ease-out bg-white group-hover:block group-hover:opacity-100 opacity-0 -z-10 group-hover:z-0 absolute top-[-7rem] items-center justify-center">
            View Details
          </button>
          <div className="absolute bottom-0 p-[1.8rem] group-hover:py-[1rem]">
            <div className="text-[1.375rem] text-white">
              {props.card.title}
            </div>
            <div className="text-[1rem] group-hover:hidden text-white">
              {props.card.description}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
