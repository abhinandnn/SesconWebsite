import Faq from "react-faq-component";

function AllCollapseExample() {
  const data = {
    rows: [
      {
        title: "Lorem ipsum dolor sit amet,",
        content: "Lorem ipsum dolor sit amet, consectetur ",
      },
      {
        title: "Nunc maximus, magna at ultricies elementum",
        content:
          "Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam.",
      },
      {
        title: "Curabitur laoreet, mauris vel blandit fringilla",
        content:
          "Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc",
      },
      {
        title: "What is the package version",
        content: "v1.0.5",
      },
    ],
  };
  return (
    <div className=" px-[4vw] flex justify-between items-start mb-[100px]">
      <div className="text-[2.5rem] leading-none w-[8rem] font-[400] min-w-fit text-[#B33F0F] pt-3">
        FREQUENTLY ASKED
      </div>
      <div className=" w-[62.5%] text-black text-[2rem] font-[600] leading-[32px] ">
        <Faq className data={data} />
      </div>
    </div>
  );
}

export default AllCollapseExample;
