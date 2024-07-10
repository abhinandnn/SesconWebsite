import React from 'react'

const Reach = ({section}) => {
  return (
    <div className=' w-11/12 mx-auto flex flex-col gap-[64px]  mb-[100px]'>
       <div className="text-[2.5rem] leading-none w-[8rem] font-[400] min-w-fit text-[#B33F0F]">
       REACH US OUT
      </div>
      <div className='grid grid-cols-2 lg:grid-cols-1'>
        <div>
          {section=="Home"?<img src='/gujrat.svg' className=' pt-[70px] w-[100%]'/>:<img src='/delhiAbout.svg' className=' pt-[70px] w-[100%]'/>}  
        </div>
        <div>
          {section=="Home"?<img src='/gujrat.svg' className=' pt-[70px] w-[100%]'/>:<img src='/gujratAbout.svg' className=' pt-[70px] w-[100%]'/>}  
        </div>
      </div>
    </div>
  )
}

export default Reach
