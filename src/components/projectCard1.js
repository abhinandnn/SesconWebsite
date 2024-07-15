import React from 'react'

function ProjectCard1(props) {
  return (
    <div className='w-[40rem] mob:w-11/12 mob:mx-auto  md1:w-[32rem] mob1:w-[100%]  flex flex-col'>
        <img src="/img1.svg" className='w-[40rem] object-cover md1:w-[32rem] mob1:w-[100%] mob1:h-[32rem] mob:w-[100%] mob:h-[26rem] md1:h-[38rem] h-[50rem]'/>
        <div className='text-[2rem] md1:text-[1.75rem] mob1:text-[1.5rem] mob:text-[1.375rem] text-[#B33F0F] border-b border-[#B33F0F] font-bold py-2'>
            {props.name}
            </div>
            <div className='text-[#3D3D3D] md1:text-[1.3rem] mob1:text-[1.125rem] mob:text-[1.05rem] text-[1.45rem] flex pt-2 justify-between'>
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