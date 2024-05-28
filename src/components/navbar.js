import React from 'react'
import logo from '@/assets/logo.svg'
import Image from 'next/image'
function Navbar() {
  return (
    <div>
        <div className='px-[4vw] pt-[1rem] flex justify-between'>
        <Image src={logo} alt="logo" />
        <div className='flex gap-[4vw] text-[1rem] text-white items-center font-bold'>
<div>
Home
</div>
<div>
About
</div>
<div>
Company
</div>
<div>
EHS
</div>
<div>
Projects
</div>
<div>
Careers
</div>
<div>
Contact
</div>
 </div>
        </div>
    </div>
  )
}

export default Navbar