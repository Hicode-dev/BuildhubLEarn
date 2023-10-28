'use client'

// import { useSpring, animated } from "@react-spring/web";

const FaqCards = ({ title, icon, onClick, expanded }) => {


  return (
 
 <div
         
         className='bg-white shadow-md dark:bg-[rgb(21,25,41)] dark:text-white  rounded-lg p-6 flex items-center justify-between cursor-pointer'
      onClick={onClick}
    >
      <h3 className='font-bold'>{title}</h3>
      {expanded ? (
        <p className='text-3xl font-light'>-</p>
      ) : (
        <p className='text-3xl font-light'>+</p>
      )}
 </div>

  );
};

export default FaqCards;