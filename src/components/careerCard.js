import React from 'react'

function CareerCard(props) {
  return (
    <div className='w-[27.2rem] h-[21.5rem] rounded flex gap-4 flex-col p-[2rem] bg-[#FEEDD6]'>
        <div className='flex flex-col'>
     <span className='text-[1.75rem]'>
        {props.role}
     </span>
     <span className='text-[1.25rem] font-thin text-[#3D3D3D]'>
        Role:{props.domain}
     </span>
     </div>
     <span className='text-[1.25rem]'>
        {props.text}
     </span>
     <button className='text-[1.125rem] w-[9rem] mt-2 rounded h-[2.8rem] font-semibold border border-black'>
Read More
     </button>
    </div>
  )
}

export default CareerCard