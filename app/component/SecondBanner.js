import React from 'react'
import ContainLayout from '../Layout/Container'
import Image from 'next/image'
import Link from 'next/link'
const SecondBanner = () => {
  return (
    <div>
      <ContainLayout>
        <div className='flex justify-center items-center flex-col'>
            <div className='md:py-32 py-10 text-center'>
            <h2 className='md:text-[24px] text-[16px] font-bold md:max-w-[554px] text-center'>We help start-ups build their products. Looking to hire professional talent? </h2>
            <h2 className='underline text-[16px] md:text-[24px]'> <Link href='contact'>Contact Us</Link></h2>
                </div> 
            <div className=''>
                <Image src='/Group 71.png' height='602' width='1000' alt='youtube' />
            </div>
        </div>
      </ContainLayout>
    </div>
  )
}

export default SecondBanner
