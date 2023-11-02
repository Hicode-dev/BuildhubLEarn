import React,{useEffect} from 'react'
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
import AOS from 'aos'
import 'aos/dist/aos.css';
const VissionCard = ({title,value,imageSrc,valuee,ssan}) => {

    useEffect(() => {
      AOS.init({
        duration: 1000, // Animation duration in milliseconds
      })})
  return (
    <div data-aos="fade-right"
    data-aos-offset="300"
    data-aos-easing="ease-in-sine"  className=" py-8 px-5  items-center dark:bg-[rgb(21,25,41)] dark:text-white overflow-hidden lg:w-[266px] md:h-[290px] shadow-2xl rounded-3xl gap-6">
         <img src={imageSrc} alt="" />
    <div className='py-4'>
   <CountUp className='text-[24px] md:text-[40px]' start={0} end={value} duration={20} delay={0} /> <span className='text-[24px] md:text-[40px]'>{ssan}</span>
    <h1 className="text-[24px] font-medium">{valuee}</h1>
      <p className="text-[16px]">{title}</p>
    
    </div>
   
  </div>
  )
}

export default VissionCard