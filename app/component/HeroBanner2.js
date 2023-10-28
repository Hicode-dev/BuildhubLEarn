import ContainLayout from '../Layout/Container'
import Link from 'next/link'
import React from 'react'

const HeroBanner2 = ({ title, subtitle, children, description }) => {
  return (
 
     <div className=" bg-cover  bg-left  md:h-[100vh]  h-[100%] w-[100%] md:w-[100%] "
      style={{ backgroundImage: 'url("/postive-caring-relationships-teachers 1.png")' }}
    >
<div className='backdrop-brightness-50 w-full h-full'>
    
<ContainLayout>
  <div className='flex  md:max-w-[705px] flex-col mx-auto items-center justify-center items-center text-center py-[16rem]'>
    <h3 className='text-[40px] text-white font-bold font-museo'>About US</h3>
    <p className='text-[18px] text-white' >Welcome to Buildhubb! Our mission is to empower individuals to thrive in the tech industry and contribute to innovative solutions. We offer structured learning programs, foster vibrant tech communities, support startups, and connect businesses with skilled professionals. Join us and be part of a dynamic community shaping the future of technology. Together, we can build a brighter future through innovation and collaboration.</p>


  </div>
 </ContainLayout>
</div>

    </div>
  )
}

export default HeroBanner2