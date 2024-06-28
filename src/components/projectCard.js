import React from 'react'

function ProjectCard() {
  return (
    <div className='w-[20.2rem] h-[22.5rem] group bg-cover flex flex-col-reverse bg-[url("/img1.svg")]'>
        <div className=''>
        <div className=' relative bg-black group-hover:h-[8rem] transition-all ease-out bg-opacity-30 h-[22.5rem] flex flex-col items-center'>
            <button className='w-[10.6rem] h-[3.37rem] rounded-[1.62rem] text-[1.25rem] p-0 bg-white group-hover:block absolute hidden top-[-7rem] items-center justify-center'>
                View Details
            </button>
            <div className='absolute bottom-0 p-[1.8rem] group-hover:py-[1rem]'>
<div className='text-[1.375rem] text-white'>
Great building of Senorita- A way to heaven 
</div>
<div className='text-[1rem] group-hover:hidden text-white'>
Unknown printer took a galley of type and scrambled it to make a 
</div>
</div>
</div>
</div>
    </div>
  )
}

export default ProjectCard