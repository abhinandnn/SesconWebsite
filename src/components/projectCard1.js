import React from 'react'

function ProjectCard1(props) {
  return (
    <div className='w-[40rem] flex flex-col'>
        <img src="/img1.svg" className='w-[40rem] object-cover h-[50rem]'/>
        <div className='text-[2rem] text-[#B33F0F] border-b border-[#B33F0F] font-bold py-2'>
            {props.name}
            </div>
            <div className='text-[#3D3D3D] text-[1.5rem] flex pt-2 justify-between'>
                <div>
                    {props.type}
                </div>
                <div>
                    Read more
                    </div>

</div>
    </div>
  )
}

export default ProjectCard1