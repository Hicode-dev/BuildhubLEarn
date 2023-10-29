'use client'
import React, { useEffect } from "react";
// import SideCard from "./SIdeCard";
import MissionCard from "./MissionCard";
import ContainLayout from "../Layout/Container";
// import Button from "./Button";


const MissionBanner = () => {


  return (
  <ContainLayout>
      <div className="flex justify-center flex-col lg:px-10">
      <div className="grid lg:flex justify-between items-center" >
        <div >
          <p className="text-gray-800 text-md" />

          <h1 className="font-semibold text-[32px] md:text-[40px]" >
            Mission
          </h1>
          <p className="leading-[28.8px] text-[16px] md:text-[24px] font-[600] py-4" >
            At Buildhubb, we are committed to:
          </p>
            <div className="text-[24px] md:max-w-[674px]">
            <p data-aos="fade-up">Empower individuals to discover their path in the tech industry</p>
          <p data-aos="fade-up">Teach in-demand tech skills through structured learning programs</p>
          <p data-aos="fade-up">Foster vibrant tech communities for networking and knowledge sharing</p>
          <p data-aos="fade-up">Connect professionals to build their portfolios by collaborating on full-stack projects</p>
          <p data-aos="fade-up">Support startups in building products and assembling high-performing teams</p>
          <p data-aos="fade-up">Serve as a trusted platform for talent acquisition in the tech industry</p>
            </div>
        </div>
        <div>
     <ContainLayout>
     <div className="md:py-6 md:flex hidden justify-center items-center flex-col  mx-auto">
            <MissionCard
              className="shadow-lg bg-white rounded-xl flex items-center p-5 my-5 w-[90%]"
              svg={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                >
                  <circle
                    cx="24"
                    cy="24"
                    r="24"
                    fill="#7BDCB5"
                    fillOpacity="0.141176"
                  />
                  <path
                    d="M29 12H20C18.35 12 17 13.35 17 15V33C17 34.65 18.35 36 20 36H29C30.65 36 32 34.65 32 33V15C32 13.35 30.65 12 29 12ZM29.75 33C29.75 33.45 29.45 33.75 29 33.75H20C19.55 33.75 19.25 33.45 19.25 33V15C19.25 14.55 19.55 14.25 20 14.25H29C29.45 14.25 29.75 14.55 29.75 15V33ZM23 32.25H26V30H23V32.25Z"
                    fill="#00D084"
                  />
                </svg>
              }
              title="Responsive Syncing"
              text="Sync with others on the Go!"
            />
            <MissionCard
              className="shadow-lg bg-white rounded-xl flex items-center p-5 my-5 w-[90%] mx-[-80px]"
              svg={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                >
                  <circle
                    cx="24"
                    cy="24"
                    r="24"
                    fill="#5637F0"
                    fillOpacity="0.219608"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M34.3333 22.3333H36V19.2227L34.5 13H13.5L12 19.2227V22.3333H13.6667V34H34.3333V22.3333ZM32.3333 22.3333H15.6667V32H21.3333V25H26.6667V32H32.3333V22.3333ZM25 15H27.756L28.404 19.32L28.4413 20.3333H25V15ZM20.244 15H23V20.3333H19.5587L19.596 19.32L20.244 15ZM30.3973 19.1333L29.7787 15H32.9253L34 19.46V20.3333H30.4427L30.3973 19.1333ZM18.2213 15H15.0747L14 19.46V20.3333H17.5573L17.6027 19.1333L18.2213 15Z"
                    fill="#573EF7"
                  />
                </svg>
              }
              title="Sell Yourself"
              text="Nice portfolios will increase your chances of making it Big"
            />
            <MissionCard
              className="shadow-lg bg-white rounded-xl flex items-center p-5 my-5 w-[90%]"
              svg={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                >
                  <circle
                    cx="24"
                    cy="24"
                    r="24"
                    fill="#F300DE"
                    fillOpacity="0.141176"
                  />
                  <path
                    d="M22.4 12H24.8V36H22.4V12ZM14 20H16.4V36H14V20ZM33.2 26.4H30.8V36H33.2V26.4Z"
                    fill="#ED26D0"
                  />
                </svg>
              }
              title="Conversation focused"
              text="Convert more visitors into customers"
            />
          </div>
     </ContainLayout>
        </div>
      </div>
      <div className="text-center py-24">

      </div>
    </div>
  </ContainLayout>
  );
};

export default MissionBanner;