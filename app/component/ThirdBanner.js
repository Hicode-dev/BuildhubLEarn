import React from 'react'
import ContainLayout from '../Layout/Container'
import Image from 'next/image'
import FifthBanner from './FifthBanner'

const ThirdBanner = () => {
  return (
    <div>
      <ContainLayout>
        <div className='py-10 '>
            <h1 className=' text-[32px] md:text-[40px] max-w-[572px] text-center font-[600] flex justify-center items-center mx-auto '>Powerful Collaboration technic.</h1>
            <div className='block md:hidden'>
                    <Image src='/Group 40 (3).png' width='700' height='700' alt='op' />
                </div>
            <div className='grid md:grid-cols-2 pt-4 items-center'>
                <div className='max-w-[400px]'>
                    <h1 className='text-[32px] max-w-[393px] font-[600]'>Helping you focus on what really matters</h1>
                    <p>At Buildhubb, we strive to simplify the startup journey by providing comprehensive support and resources. Our mission is to help visionary entrepreneurs like you focus on what really matters – turning your ideas into successful ventures. With our expertise, guidance, and tailored solutions, we empower you to navigate the challenges of building a business, so you can bring your vision to life and make a lasting impact in the market. Partner with Buildhubb and unlock your potential for success.</p>
                </div>
                <div className='hidden md:block'>
                    <Image src='/Group 40 (3).png' width='700' height='700' alt='op' />
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
