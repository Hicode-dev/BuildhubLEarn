"use client"
import React from "react";
import MultipleItems from "./Slider";
import ContainLayout from "../Layout/Container";



const TrustedBanner = () => {
  return (
<ContainLayout>
<div className="bg-[]">
      <div className="h-[100%] dark:bg-[rgb(63,76,124)] dark:text-white bg-[rgb(240,236,255)] rounded-xl shadow-lg md:px-5 pt-5 pb-16 mb-6">
        <div className="text-center ">
          <h1 className="md:text-4xl text-2xl font-bold p-5  text-center ">
            Trusted by over 1000 <br /> happy applicants
          </h1>
          <p className="text-md text-gray-800">
            Don’t just take our word for it, hear what members of our <br /> friendly
            community have to say about us
          </p>
        </div>
        <div className="w-full">
          <MultipleItems />
        </div>
      </div>
    </div>
</ContainLayout>
  );
};

export default TrustedBanner;