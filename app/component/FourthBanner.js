import React from 'react'
import ContainLayout from '../Layout/Container'
import VissionCard from './VissionCard'
import MissionCard from './MissionCard'
const FourthBanner = () => {
  return (
    <div>
      <ContainLayout>
   <div className='grid md:grid-cols-2 items-center justify-center gap-4 gap-y-4'>
   <div className='grid grid-cols-2 py-6 overflow-hidden'>
        <VissionCard title='You too can build the future.' imageSrc='/Group 12 (2).png' valuee='Applicants'  value='100' ssan='+' />
        <VissionCard title='Boss of yourself.' valuee='Collaboration'imageSrc='/Group 13.png'  value='100' ssan='%' />
        <VissionCard  title='Drop a review too!' valuee='Applicants reviews' imageSrc='/Group 14.png'  value='5 ' ssan='star' />
        <VissionCard title='New content and up-to-date learning.' valuee='Continuous Updates' imageSrc='/Group 15.png'  value='100' ssan='%' />
        </div>
        <div>
            <h2 className='md:text-[40px] text-[32px] font-[600]'>Vision:</h2>
            <p className='md:text-[24px] text-[16px] font-[400]'>Our vision at Buildhubb is to create a thriving tech ecosystem where individuals, regardless of their background or experience, can discover their passion for technology, develop in-demand skills, and actively contribute to building innovative solutions.</p>
        </div>
   </div>
   <ContainLayout>
     <div className="md:py-6 flex md:hidden justify-center items-center flex-col  mx-auto">
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
      </ContainLayout>
    </div>
  )
}

export default FourthBanner
