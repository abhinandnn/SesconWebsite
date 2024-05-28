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