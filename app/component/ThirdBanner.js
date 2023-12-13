import React from 'react'
import ContainLayout from '../Layout/Container'
import Image from 'next/image'
import FifthBanner from './FifthBanner'
import {AiOutlineCheck} from  'react-icons/ai'
const ThirdBanner = () => {
  return (
    <div>
      <ContainLayout>
        <div className='py-10 '>
            <h1 className=' text-[24px] md:text-[40px] max-w-[572px] text-center font-[600] flex justify-center items-center mx-auto '>Powerful Collaboration technic.</h1>
            <div className='block md:hidden'>
                    <Image src='/Group 40 (3).png' width='700' height='700' alt='op' />
                </div>
            <div className='grid md:grid-cols-2 pt-4 items-center'>
<div>
<div  data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine" className='max-w-[400px]'>
                    <h1 className='text-[32px] max-w-[393px] font-[600]'>Helping you focus on what really matters</h1>
                    <p className='my-3'>At buildhubb, we help create a platform for seamless Collaboration between frontend developers, backend developers, UI/UX designers and other fields of tech, that allows them to come together with the aim of building live and impactful projects to elevate their portfolios and boost their skillsets!</p>      
                </div>
                <div className='grid md:grid-cols-2 gap-2 mt-3 max-w-[470px]'>
                <div className='flex gap-2 items-center '><AiOutlineCheck  className='dark:text-white'/> <div>Smooth Collaboration</div></div>
                <div className='flex gap-2 items-center '><AiOutlineCheck className='dark:text-white' /> <div>Healthy Communication</div></div>
                <div className='flex gap-2 items-center '><AiOutlineCheck className='dark:text-white' /> <div>Great timeframes</div></div>
                <div className='flex gap-2 items-center '><AiOutlineCheck className='dark:text-white' /> <div>Experienced Leads</div></div>
              

                </div>
</div>
                <div  className='hidden md:block'>
                    <Image data-aos="fade-left"
     data-aos-anchor="#example-anchor"
     data-aos-offset="500"
     data-aos-duration="500" src='/Group 40 (3).png' width='700' height='700' alt='op' />
                </div>
            </div>
        </div>
        <div> 
<FifthBanner />
        </div>
      </ContainLayout>
    </div>
  )
}

export default ThirdBanner
