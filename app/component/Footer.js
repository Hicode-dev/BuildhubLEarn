'use client'
import React from 'react'
import {AiFillTwitterCircle, AiFillLinkedin} from 'react-icons/ai'
import {BsFacebook} from "react-icons/bs"

const Footer = () => {
    return (
        <div className='bg-[rgb(240,236,255)]  dark:bg-[rgb(63,76,124)] dark:text-white    pt-16 pb-8 '>
            <div className='w-full md:w-[85%] mx-auto text-center'>
                <h1 className='text-center font-bold text-3xl'>Get Started Today</h1>
                <p className='text-md md:w-[70%] mx-auto my-3 text-center'>Stay connected with fellow learners and instructors by suscribing to our newsletter.
                    Get the latest updates and be a part of our growing community</p>
                <div className='flex items-center rounded-lg shadow-md my-4 md:w-[50%] border mx-auto'>
                    <input type="text" className='p-4 border-none outline-none rounded-l-lg w-[100%]' placeholder='Enter your email address' />
                    <button className='p-4 bg-black text-white font-bold border-none rounded-r-lg '>Subscribe</button>
                </div>

                <div className='grid grid-cols-2 md:grid-cols-4 lg:flex  justify-between gap-8 mt-5'>
                    <div className='text-start'>
                        <h5 className='font-bold p-4'>Links</h5>
                        <ul>
                            <li className='p-4'>About Us</li>
                            <li className='p-4'>Contact Us</li>
                            <li className='p-4'>Blog</li>
                        </ul>
                    </div>
                    <div className='text-start'>
                        <h5 className='font-bold p-4'>Suppor</h5>
                        <ul>
                            <li className='p-4'>FAQs</li>
                            <li className='p-4'>Help Center</li>
                            <li className='p-4'>Settings</li>
                        </ul>
                    </div>
                    <div className='text-start'>
                        <h5 className='font-bold p-4'>Explore More</h5>
                        <ul>
                            <li className='p-4'>Courses</li>
                            <li className='p-4'>Career</li>
                            <li className='p-4'>Communities</li>
                        </ul>
                    </div>
                    <div className='text-start'>
                        <h5 className='font-bold p-4'>Legal</h5>
                        <ul>
                            <li className='p-4'>Privacy Policy</li>
                            <li className='p-4'>Terms and Conditions</li>
                        </ul>
                    </div>
                </div>
                <div className='flex items-center w-fit py-5 gap-3 mx-auto '>
                    <h3 className='text-center font-bold text-lg'>Follow us for more updates</h3>
                    <div className='flex items-center gap-1'>
                        <AiFillTwitterCircle size={30}  className='text-[#1DA1F2]'/>
                        <AiFillLinkedin size={25} className='text-[#0A66C2]'/>
                        <BsFacebook size={25} className='text-[#0A66C2]'/>
                    </div>
                </div>
                <p className='text-center font-semibold mt-8'>2023 Buildhubb Inc. All rights reserved.</p>
            </div>
        </div>
    )
}

export default Footer