import React from 'react'

const Reach = ({section}) => {
  return (
    <div className=' flex flex-col gap-[64px] px-[4vw] mb-[100px]'>
       <div className="text-[2.5rem] leading-none w-[8rem] font-[400] min-w-fit text-[#B33F0F]">
       Reach Us out
      </div>
      <div className=' flex justify-between items-start flex-wrap '>
        <div>
          {section=="Home"?<img src='/gujrat.svg' className=' pt-[70px]'/>:<img src='/delhiAbout.svg' className=' pt-[70px]'/>}  
        </div>
        <div>
          {section=="Home"?<img src='/gujrat.svg' className=' pt-[70px]'/>:<img src='/gujratAbout.svg' className=' pt-[70px]'/>}  
        </div>
      </div>
    </div>
  )
}

export default Reach
