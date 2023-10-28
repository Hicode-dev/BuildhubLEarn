"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TrustedCards from "./TrustedCards";

const Testimonials = () => {
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 1000,
    pauseOnHover: true,
    cssEase: "linear",
  };
  var settings1 = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: true,
    speed: 5000,
    autoplaySpeed: 1000,
    cssEase: "linear",
    rtl: true,
  };
  return (
    <div className="mt-20 px-[6%] 5xl:px-[25%]">
           <div className="block lg:hidden">
        <Slider className=" " {...settings}>
        <TrustedCards text="I have learnt a lot on how to manage team members since I joined Buildhubb." name="Ayomide Lekan" />
        <TrustedCards text="I have learnt a lot on how to manage team members since I joined Buildhubb." name="Ayomide Lekan" />
        <TrustedCards text="I have learnt a lot on how to manage team members since I joined Buildhubb." name="Ayomide Lekan" />
        <TrustedCards text="I have learnt a lot on how to manage team members since I joined Buildhubb." name="Ayomide Lekan" />
        
        </Slider>
      </div>

      <div className="hidden lg:block">
        <Slider className="flex gap-x-6 mt-10 " {...settings1}>
        <TrustedCards text="I have learnt a lot on how to manage team members since I joined Buildhubb." name="Ayomide Lekan" />
        <TrustedCards text="I have learnt a lot on how to manage team members since I joined Buildhubb." name="Ayomide Lekan" />
        <TrustedCards text="I have learnt a lot on how to manage team members since I joined Buildhubb." name="Ayomide Lekan" />
        <TrustedCards text="I have learnt a lot on how to manage team members since I joined Buildhubb." name="Ayomide Lekan" />
        </Slider>
      </div>
    </div>
  );
};

export default Testimonials;
