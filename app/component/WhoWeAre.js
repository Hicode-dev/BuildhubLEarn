import React from 'react'
import ContainLayout from '../Layout/Container'
import Image from 'next/image'
const WhoWeAre = () => {
  return (
    <ContainLayout>
    <div className='grid md:grid-cols-2 py-12 items-center gap-10 '>
    
     <div>
       <div>
      {/* <p className='text-[20px] font-yeseva'> Mission</p> */}
      <h3 className='text-[34px] font-bold'>Who We Are</h3>
<div className='md:max-w-[500px] mt-6'>
<p className='text-[18px]'>
We are Buildhubb, a dedicated tech community empowering individuals to find their path in the tech industry. Through structured learning programs, we teach in-demand tech skills. By fostering vibrant tech communities, we provide networking and knowledge-sharing opportunities. We connect professionals to collaborate on full-stack projects, support startups in building products, and serve as a trusted platform for talent acquisition.
  </p>

</div>
       </div>
     </div>
     <div>
       <Image src='/Vector.png'  height='500' width='500' alt='ed'  />
     </div>
     </div>
    <div className='grid md:grid-cols-2 py-12 items-center gap-10 '>
    <div>
       <Image src='/Vector (1).png'  height='500' width='500' alt='ed'  />
     </div>
     <div>
       <div>
      {/* <p className='text-[20px] font-yeseva'> Mission</p> */}
      <h3 className='text-[34px] font-bold'>What We Do</h3>
<div className='md:max-w-[500px] mt-6'>
<p className='text-[18px]'>
We are Buildhubb, a committed tech community empowering individuals, teaching in-demand tech skills, fostering vibrant communities, connecting professionals, supporting startups, and serving as a trusted platform for talent acquisition in the tech industry. Join us as we help you navigate your tech journey and make an impact in the ever-evolving world of technology.
  </p>

</div>
       </div>
     </div>

     </div>
    <div className='grid md:grid-cols-2 py-12 items-center gap-10 '>
    
     <div>
       <div>
      {/* <p className='text-[20px] font-yeseva'> Mission</p> */}
      <h3 className='text-[34px] font-bold'> Our Process</h3>
<div className='md:max-w-[500px] mt-6'>
<p className='text-[18px]'>
At Buildhubb, we empower individuals to discover their path in tech through personalized guidance and structured learning programs. Our vibrant tech communities foster networking and knowledge-sharing. We connect professionals to collaborate on full-stack projects, while supporting startups in building products and assembling high-performing teams.
  </p>

</div>
       </div>
     </div>
     <div>
       <Image src='/Vector (3).png'  height='500' width='500' alt='ed'  />
     </div>
     </div>
  </ContainLayout>
  )
}

export default WhoWeAre
