import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react'

const StackCard = ({title,Desc,imageSrc}) => {
  useEffect(() => {
    AOS.init({
      duration: 2000, // Animation duration in milliseconds
    });
  }, []);
  return (
    <div data-aos="fade-right"
    data-aos-offset="300"
    data-aos-easing="ease-in-sine" className='flex dark:bg-[rgb(21,25,41)] dark:text-white justify-center text-center  rounded-lg py-4 px-6 bg-white shadow-lg lg:w-[471px] flex-col items-center'>
             <img src={imageSrc} alt="" />
        <h1 className='text-[28px] md:text-[40px] font-bold py-3 '>{title}</h1>
        <p className='md:text-[24px] text-[16px]'>{Desc}</p>

    </div>
  )
}

export default StackCard