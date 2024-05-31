import React from 'react'
import axios from '@/api/axios'
import logo from '@/assets/logo.svg'
import Image from 'next/image'
import Navbar from '@/components/navbar'
function Home() {
  return (
    <div className='font-lexend h-[100rem]'>
    <div className='bg-[#0000004D] h-[100vh]'>
<Navbar/>
    </div>
    <div className='mt-[3rem] px-[4vw] flex gap-[4rem]'>
<div className='text-[2.5rem] leading-none w-[8rem] min-w-fit text-[#B33F0F]'>
ABOUT US
</div>
<div className='text-[2rem]'>
Sescon Builders Pvt. Ltd. is a revolutionary emergence in the field of civil construction, based on ethics of professionalism and to create versatility in construction industry. Because of the Professional needs associated with the projects and construction management, we are uniquely positioned to meet and exceed our client’s expectations.
Our client's schedule and budget goals guide the decision making process. All projects regardless of scope or scale, commence with responsive analysis followed by the use of appropriately chosen, field – proven project management techniques to ensure projects delivery success.
</div>
    </div>
    <div className='mt-[3rem] px-[4vw] flex gap-[4rem]'>
      <div>

      </div>
      <div className='flex flex-col gap-[2rem]'>
      <div>
        <div className='font-bold leading-tight text-[#B33F0F] text-[7.5rem]'>
20+
        </div>
        <div className='font-bold text-[2.5rem] pb-6 border-b border-black'>
        Year Experience
        </div>
      </div>
      <div>
        <div className='font-bold leading-tight text-[#B33F0F] text-[7.5rem]'>
120+
        </div>
        <div className='font-bold text-[2.5rem] pb-6 border-b border-black'>
        Projects Built
        </div>
      </div>
      </div>

    </div>
    <div className='mt-[3rem] px-[4vw] flex gap-[4rem]'>
    <div className='text-[2.5rem] leading-none w-[8rem] min-w-fit text-[#B33F0F]'>
FEATURED PROJECTS
</div>
</div>
    </div>
  )
}

export default Home

// export async function getStaticProps() {
  
//     return {
//       props: {
//         posts,
//       },
//     }
//   }