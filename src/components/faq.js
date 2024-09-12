import Faq from "react-faq-component";

function FAQ(props) {
  const data = {
    rows:props.QnA
  };
  return (
    <div className=" w-11/12 mx-auto  flex justify-between items-start mb-[100px] md1:flex-col">
      <div className="text-[2.5rem] mob1:text-[24px] leading-none w-[8rem] font-[400] min-w-fit text-[#B33F0F] pt-3 pr-5">
        FREQUENTLY ASKED
      </div>
      <div className=" w-[62.5%] text-black text-[2rem] mob1:text-[22px] font-[400] mob1:leading-[22px] leading-[32px] md1:w-[100%] ">
        <Faq className data={data} />
      </div>
    </div>
  );
}

export default FAQ;
