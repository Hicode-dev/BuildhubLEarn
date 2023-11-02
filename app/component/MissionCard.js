import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react'
const MissionCard = ({svg, title, text, className}) => {
  return (
    <div data-aos="fade-down-right"  className={`dark:bg-[rgb(21,25,41)] dark:text-white ${className} `}>
        <div>
            {svg}
        </div>
        <div className='grid text-start ml-3'>
            <h5 className='text-lg font-bold '>{title}</h5>
            <p className='text-xm '>{text}</p>
        </div>
    </div>
  )
}

export default MissionCard