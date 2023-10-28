import React from 'react'
import ContainLayout from '../Layout/Container'
import VissionCard from './VissionCard'

const FourthBanner = () => {
  return (
    <div>
      <ContainLayout>
   <div className='grid md:grid-cols-2 items-center justify-center gap-4 gap-y-4'>
   <div className='grid grid-cols-2 py-6 overflow-hidden'>
        <VissionCard title='You too can build the future.' imageSrc='/Group 12 (2).png' valuee='Applicants'  value='100+' />
        <VissionCard title='Boss of yourself.' valuee='Collaboration'imageSrc='/Group 13.png'  value='100%'  />
        <VissionCard  title='Drop a review too!' valuee='Applicants reviews' imageSrc='/Group 14.png'  value='5 star' />
        <VissionCard title='New content and up-to-date learning.' valuee='Continuous Updates' imageSrc='/Group 15.png'  value='100%' />
        </div>
        <div>
            <h2 className='text-[40px] font-[600]'>Vision:</h2>
            <p className='text-[24px] font-[400]'>Our vision at Buildhubb is to create a thriving tech ecosystem where individuals, regardless of their background or experience, can discover their passion for technology, develop in-demand skills, and actively contribute to building innovative solutions.</p>
        </div>
   </div>
      </ContainLayout>
    </div>
  )
}

export default FourthBanner
