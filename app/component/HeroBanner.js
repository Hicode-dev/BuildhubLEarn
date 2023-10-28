import React from 'react';
import ContainLayout from '../Layout/Container';
import Image from 'next/image';
import Link from 'next/link';

const HeroBanner = () => {
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
        <img
  src='/Ellipse 18 (1).png'
  alt="Ellipse 14"
  className="absolute right-0 bottom-30  w-80 h-auto"
/>
          <h1 className='md:max-w-[370px] font-bold text-[40px]'>
            Lets Help You Start Out In Tech
          </h1>
          <p className='md:max-w-[474px] text-[16px]'>
            Buildbubb helps in Connecting developers and designers to help you create impactful projects and elevate your portfolio
          </p>
          <div className='flex items-center gap-4'>
            <button className='bg-black text-white px-[3rem] py-[1rem] rounded-[25px]'>
              <Link href='/signUp' >Join Waitlist</Link>
            </button>
            <button className='border-black text-black border dark:border-white dark:text-white px-[3rem] py-[1rem] rounded-[25px]'>
            <Link href='/dashboard' > Learn More</Link>
            </button>
          </div>
        </div>
    </div>
  );
};

export default HeroBanner;
