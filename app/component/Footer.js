'use client'
import React, { useState } from 'react'
import {AiFillTwitterCircle, AiFillLinkedin} from 'react-icons/ai'
import {BsFacebook, BsInstagram} from "react-icons/bs"
import ContainLayout from '../Layout/Container'
import { ToastContainer, toast } from 'react-toastify';
import Link from 'next/link'
import 'react-toastify/dist/ReactToastify.css';
const Footer = () => {
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
      e.preventDefault();
      setLoading(true);
  
      try {
        const response = await fetch('https://modern-red-gecko.cyclic.app/sendmail', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            subject: 'Hey Chief, someone just subscribed to your waitlist',
            mail: 'Buildhubb01@gmail.com',
            text: `Email: ${email}`,
            name: 'ldkfn',
          }),
        });
  
        if (response.ok) {
          console.log('Email sent successfully!');
          toast.success('Success Thank you for subscribing our newsletter !');
          setEmail(''); // Clear the email input after successful submission
        } else {
          alert('Failed to send message. Please try again later.');
        }
      } catch (error) {
        console.error('Error sending email:', error);
        alert('Something went wrong!');
      }finally{
        setLoading(false)
      }
    };

    return (
        <div className='bg-[rgb(240,236,255)]  dark:bg-[rgb(63,76,124)] dark:text-white    pt-16 '>
    <ContainLayout>
    <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>

    <div className='w-full md:w-[85%] mx-auto text-center'>
                <h1 className='text-center font-bold text-3xl'>Get Started Today</h1>
                <p className='text-md md:w-[70%] mx-auto my-3 text-center'>Stay connected with fellow learners and instructors by suscribing to our newsletter.
                    Get the latest updates and be a part of our growing community</p>
                <div>
                <div className='flex items-center rounded-lg shadow-md my-4 md:w-[50%] border mx-auto'>
                    <input type="text" className='p-4 border-none outline-none rounded-l-lg w-[100%]'    
                  value={email}
                  onChange={(e) => setEmail(e.target.value)} placeholder='Enter your email address' />
                    <button onClick={handleSubmit} className='p-4  md:block hidden bg-black text-white font-bold border-none rounded-r-lg '>
                        
                        {loading? 'Subscribing..'  : 'Subscribe'

                        }
                    </button>
                </div>
                <button onClick={handleSubmit}  className='p-4 md:hidden block w-full bg-black text-white font-bold border-none rounded-lg '>Subscribe</button>
                </div>


                <div className='grid md:grid-cols-2 lg:grid-cols-4 lg:flex  justify-between gap-8 mt-5'>
                    <div className='text-start'>
                        <h5 className='font-bold p-4'>Links</h5>
                        <ul>
                            <li className='p-4'>About Us</li>
                            <li className='p-4'>Contact Us</li>
                            {/* <li className='p-4'>Blog</li> */}
                        </ul>
                    </div>
                    <div className='text-start'>
                        <h5 className='font-bold p-4'>Support</h5>
                        <ul>
                            <li className='p-4'>FAQs</li>
                            <li className='p-4'>ommunities</li>
                            {/* <li className='p-4'>Settings</li> */}
                        </ul>
                    </div>
                    <div className='text-start'>
                        <h5 className='font-bold p-4'>Legal</h5>
                        <ul>
                            <li className='p-4'>Privacy Policy</li>
                            <li className='p-4'>Terms and Conditions</li>
                            {/* <li className='p-4'>Communities</li> */}
                        </ul>
                    </div>
    
                </div>
                <div className='flex items-center w-fit py-5 gap-3 mx-auto '>
                    <h3 className='text-center font-bold text-lg'>Follow us for more updates</h3>
                    <div className='flex items-center gap-1'>

                    <Link href='https://www.linkedin.com/company/buildhubb/'>
                    <AiFillLinkedin size={25} className='text-[#0A66C2]'/>
                    </Link>
                    <Link href='https://twitter.com/buildhubb?s=21&t=GolgRHXrK-n4_OPIfMoLIQ'>
                    <AiFillTwitterCircle size={30}  className='text-[#1DA1F2]'/>
                    </Link>
                    <Link href='https://instagram.com/buildhubb?igshid=OGQ5ZDc2ODk2ZA=='>
                    <BsInstagram size={25} className='text-[#0A66C2]'/>
                    </Link>
                      
                    </div>
                </div>
            </div>
            
    </ContainLayout>
    <p className='text-center py-8 shadow-md font-semibold mt-8 '>2023 Buildhubb Inc. All rights reserved.</p>

        </div>
    )
}

export default Footer