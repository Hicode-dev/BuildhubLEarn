'use client'
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMenuFold } from 'react-icons/ai';
import Switch from '@mui/material/Switch';
import Image from 'next/image';
import { RiMoonFill, RiSunFill } from 'react-icons/ri'

const Header = () => {
  const [nav, setNav] = useState(false);
  const [activeLink, setActiveLink] = useState(null);
  const [checked, setChecked] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const handleChange = (event) => {
    setChecked(event.target.checked);
  }
  const handleClick = () => {
    setNav(!nav);
  };
  const toggleDarkMode = () => {
    // Toggle the darkMode state
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);

    // Store the user's dark mode preference in local storage
    localStorage.setItem('darkMode', JSON.stringify(newDarkMode));

    // Apply the dark mode class to the document's root element
    document.documentElement.classList.toggle('dark', newDarkMode);
  };

  useEffect(() => {
    // Check if the user has a preference for dark mode in local storage
    const storedDarkMode = localStorage.getItem('darkMode');
    if (storedDarkMode) {
      const parsedDarkMode = JSON.parse(storedDarkMode);
      setDarkMode(parsedDarkMode);
      document.documentElement.classList.toggle('dark', parsedDarkMode);
    } else {
      // If no preference is found, check the user's system preference
      const userPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setDarkMode(userPrefersDark);
      document.documentElement.classList.toggle('dark', userPrefersDark);
    }
  }, []);
  const handleLinkClick = (index) => {
    setActiveLink(index);
  };

  const links = [
    { text: 'Home', href: '/' },
    { text: 'About Us', href: '/dashboard' },

    { text: 'Contact Us', href: '/contact' },
   
  ];

  useEffect(() => {
    // Detect the current route and set the active link accordingly
    const currentPath = window.location.pathname; // Use window.location.pathname to get the current route
    const activeIndex = links.findIndex((link) => link.href === currentPath);
    if (activeIndex !== -1) {
      setActiveLink(activeIndex);
    }
  }, []);

  return (
    <main>
      <div className='bg-white  dark:bg-[rgb(21,25,41)] dark:text-white shadow-lg'>
        <div className='max-w-[1240]  py-4 flex  justify-between items-center container  capitalize h-25 mx-auto px-5 '>
        <div className='block lg:hidden' onClick={toggleDarkMode}>
        {darkMode ? (
          <RiSunFill className="h-8 w-8 text-gray-600 dark:text-white" />
        ) : (
          <RiMoonFill className="h-8 w-8 text-gray-600 dark:text-white" />
        )}
        </div>
   
         <Image src='/buildhubb_logo-removebg-preview 2.png' height='49' width='49' alt='w' />
          <ul className='hidden lg:flex font-bold text-gray-400'>
            {links.map((link, index) => (
              <li
                key={index}
                className={`p-3 cursor-pointer ${
                  activeLink === index ? 'active-link text-green-shad1  border-green-shad2 border-b-2' : ''
                }`}
                onClick={() => handleLinkClick(index)}
              >
                <Link href={link.href}>{link.text}</Link>
              </li>
            ))}
          </ul> 
          <div className='hidden lg:flex gap-4 items-center'>
            <h1 className='font-bold text-black dark:text-white underline text-[16px]'>Suscribe to  Premium</h1>
            <button className='bg-black dark:bg-white dark:text-black text-white px-[3rem] py-[1rem] rounded-[25px]'>
                <Link href='/signUp'>Get Started</Link>
            </button>
 
        
            {/* <Switch
      // checked={checked}
      onChange={toggleDarkMode}
      inputProps={{ 'aria-label': 'controlled' }}
    /> */}
        <div className='lg:block hidden z-[999]' onClick={toggleDarkMode}>
        {darkMode ? (
          <RiSunFill className="h-8 w-8 text-gray-600 dark:text-white" />
        ) : (
          <RiMoonFill className="h-8 w-8 text-gray-600 dark:text-white" />
        )}
        </div>
          </div>
          <div onClick={handleClick} className='block lg:hidden'>
            {!nav ? (
              <AiOutlineMenuFold
                className='fixed right-0 mr-5 ease-in-out duration-700'
                size={30}
              />
            ) : (
              <AiOutlineClose
                className='fixed text-black right-0 mr-5 z-[999] ease-in-out duration-700'
                size={30}
              />
            )}
          </div>
          <div
            className={
              nav
                ? 'fixed top-0 bg-white px-4 left-0 w-full z-[999] dark:bg-[rgb(21,25,41)] dark:text-white  border-r h-fit text-white  border-r-gray-600 ease-out duration-700'
                : 'fixed top-[-100%]   duration-1000'
            } 
          >
            <div onClick={handleClick} className='block z-[999]  sm:hidden'>
              {!nav ? (
                <AiOutlineMenuFold
                  className='fixed right-0 mr-5 text-white ease-in-out duration-700'
                  size={30}
                />
              ) : (
                <AiOutlineClose
                  className='fixed dark:text-white text-black right-0 mr-5 ease-in-out duration-700'
                  size={30}
                />
              )}
            </div>
            <Switch
      // checked={checked}
      onChange={toggleDarkMode}
      inputProps={{ 'aria-label': 'controlled' }}
    />
        

          
            <ul className='flex flex-col justify-center items-center text-lg font-bold text-gray-400'>
              {links.map((link, index) => (
                <li className='p-3 cursor-pointer' key={index}>
                  <Link href={link.href}>{link.text}</Link>
        
                </li>
            
              ))}
                          <h1 className='font-bold text-black dark:text-white underline text-[16px]'>Suscribe to  Premium</h1>

<button className='bg-black   dark:bg-white dark:text-black text-white my-6 px-[3rem] py-[1rem] rounded-[25px]'>
<Link href='/signUp'>Get Started</Link>
</button>
            </ul>
       
          </div>
        </div>
      </div>
    </main>
  );
};

export default Header;
