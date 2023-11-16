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
        <TrustedCards text="Joining BuildHubb was a game-changer for me! The support and knowledge-sharing within the community are unparalleled. I've expanded my skills and made valuable connections that have opened up new opportunities in my career." name="Susan Nwoke" />
        <TrustedCards text="BuildHubb has been a source of inspiration and collaboration. The diverse perspectives and constant innovation challenge me to think differently. It's not just a community; it's a family that helps me grow both personally and professionally." name="Gabriel Sampson" />
        <TrustedCards text="I can't thank BuildHubb enough for the wealth of resources and mentorship opportunities. The community's commitment to learning and development is infectious. I've never felt more empowered to excel in my field."name="Anaekwe Emmanuel" />
        <TrustedCards text="BuildHubb is more than just a tech community; it's a knowledge hub! Whether you're a seasoned pro or just starting, the willingness to share insights and help each other succeed is what makes this community truly special." name="Ayomide Lekan" />
        
        </Slider>
      </div>

      <div className="hidden lg:block">
        <Slider className="flex gap-x-6 mt-10 " {...settings1}>
        <TrustedCards text="Joining BuildHubb was a game-changer for me! The support and knowledge-sharing within the community are unparalleled. I've expanded my skills and made valuable connections that have opened up new opportunities in my career." name="Susan Nwoke" />
        <TrustedCards text="BuildHubb has been a source of inspiration and collaboration. The diverse perspectives and constant innovation challenge me to think differently. It's not just a community; it's a family that helps me grow both personally and professionally." name="Gabriel Sampson" />
        <TrustedCards text="I can't thank BuildHubb enough for the wealth of resources and mentorship opportunities. The community's commitment to learning and development is infectious. I've never felt more empowered to excel in my field."name="Anaekwe Emmanuel" />
        <TrustedCards text="BuildHubb is more than just a tech community; it's a knowledge hub! Whether you're a seasoned pro or just starting, the willingness to share insights and help each other succeed is what makes this community truly special." name="Ayomide Lekan" />
        
        </Slider>
      </div>
    </div>
  );
};

export default Testimonials;
