'use client '
import React,{useEffect} from 'react';
import ContainLayout from '../Layout/Container';
import Image from 'next/image';
import Link from 'next/link';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { TypeAnimation } from 'react-type-animation';
const HeroBanner = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
    });
  }, [])
  return (
    <div className='relative dark:bg-[rgb(21,25,41)] dark:shadow-sm dark:shadow-[rgb(255,254,240)] dark:text-white bg-[rgb(255,254,240)]'>

     
        <div className=' flex relative justify-center items-center md:py-32 py-16 flex-col text-center gap-7'>
        <img
  src='/Ellipse 14.svg'
  alt="Ellipse 14"
  className="absolute left-0 bottom-0  w-96 h-auto"
/>
        <img
  src='/Ellipse 17.svg'
  alt="Ellipse 14"
  className="absolute left-0 bottom-30  w-80 h-auto"
/>
        <img
  src='/Ellipse 16.svg'
  alt="Ellipse 14"
  className="absolute right-0  bottom-0  w-96 h-auto"
/>
        <img
  src='/Ellipse 15.svg'
  alt="Ellipse 14"
  className="absolute right-0 bottom-30  w-80 h-auto"
/>
        {/* <img
  src='/Ellipse 18 (1).png'
  alt="Ellipse 14"
  className="absolute right-0 bottom-30  w-80 h-auto"
/> */}
<div className='md:max-w-[550px]'>
  <TypeAnimation
    preRenderFirstString={true}
    sequence={[
      1000,
      'Lets Help You Start Out In Tech', // initially rendered starting point
      3000,
      'Lets Help You Build Your Project',
      1000,
 
    ]}
    speed={50}
    style={{ fontSize: '2em', fontWeight: 'bold' }}
    repeat={Infinity}
  />
</div>
          <p  data-aos="fade-up"
     data-aos-anchor-placement="center-bottom" className='md:max-w-[474px] text-[16px]'>
            Buildbubb helps in Connecting developers and designers to help you create impactful projects and elevate your portfolio
          </p>
          <div data-aos="fade-up"
     data-aos-anchor-placement="center-bottom" className='flex items-center gap-4'>
            <button className='bg-black text-white px-[2rem] py-[0.5rem] md:px-[3rem] md:py-[1rem] rounded-[25px]'>
  <Link href='https://apply.buildhubb.com'>Join cohort</Link>
</button>

<button className='border-black text-black border dark:border-white dark:text-white px-[2rem] py-[0.5rem] md:px-[3rem] md:py-[1rem] rounded-[25px]'>
  <Link href='/dashboard'>Learn More</Link>
</button>

          </div>
        </div>
    </div>
  );
};

export default HeroBanner;
