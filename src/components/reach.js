import React from 'react'

const Reach = ({section}) => {
  return (
    <div className=' w-11/12 mx-auto flex flex-col gap-[64px] mob1:gap-11  mb-[100px]'>
       <div className="text-[2.5rem] mob1:text-[24px] leading-none w-[8rem] font-[400] min-w-fit text-[#B33F0F]">
       REACH US OUT
      </div>
      <div className='grid grid-cols-2 lg:grid-cols-1'>
        <div>
          <img src='/delhiAbout.svg' className='  mob1:pt-0 w-[100%]'/> 
        </div>
        <div>
          <img src='/gujratAbout.svg' className='  mob1:pt-0 w-[100%]'/>
        </div>
      </div>
    </div>
  )
}

export default Reach
