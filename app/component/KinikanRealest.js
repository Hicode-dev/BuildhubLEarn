"use client"
import React from "react";
import MultipleItems from "./Slider";
import ContainLayout from "../Layout/Container";
import Link from "next/link";


const TrustedBanner = () => {
  return (
<ContainLayout>
<div className="lg:h-[600px] py-10">
      <div className="h-[100%]  dark:bg-[rgb(63,76,124)] dark:text-white bg-[rgb(240,236,255)] rounded-xl shadow-lg md:px-5 pt-5  pb-5">
        <div className="text-center md:pt-[3rem] md:pb-[3rem] flex justify-center mx-auto flex-col ">
          <h1 className=" text-[24] md:text-[40px] font-bold p-5 lg:max-w-[679px] flex justify-center items-center mx-auto text-center ">
          Ready to take your skillSet to the next Level?
          </h1>
          <p className="text-lg text-gray-800 dark:text-white">
           There has never bveen a better time than right now
          </p>
          </div>
          <br />
        <div  className='flex justify-center mx-auto items-center gap-x-4'>
            <button className='bg-black text-white px-[2rem] py-[0.5rem] md:px-[3rem] md:py-[1rem] rounded-[25px]'>
  <Link href='/signUp'>Apply</Link>
</button>

<button className='border-black text-black border dark:border-white dark:text-white px-[2rem] py-[0.5rem] md:px-[3rem] md:py-[1rem] rounded-[25px]'>
  <Link href='/dashboard'>Learn More</Link>
</button>

          </div>
      </div>
    </div>
</ContainLayout>
  );
};

export default TrustedBanner;