import React from 'react'

const VissionCard = ({title,value,imageSrc,valuee}) => {
  return (
    <div className=" py-8 px-5  items-center dark:bg-[rgb(21,25,41)] dark:text-white overflow-hidden lg:w-[266px] md:h-[290px] shadow-2xl rounded-3xl gap-6">
         <img src={imageSrc} alt="" />
    <div className='py-4'>
    <h1 className="lg:text-[40px] text-[24px] font-[600] ">{value}</h1>
    <h1 className="text-[24px] font-medium">{valuee}</h1>
      <p className="text-[16px]">{title}</p>
    
    </div>
   
  </div>
  )
}

export default VissionCard