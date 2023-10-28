'use client'
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMenuFold } from 'react-icons/ai';
import Switch from '@mui/material/Switch';
import Image from 'next/image';
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
         <Image src='/buildhubb_logo-removebg-preview 2.png' height='59' width='59' alt='w' />
          <ul className='hidden sm:flex font-bold text-gray-400'>
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
          <div className='flex gap-4 items-center'>
            <h1 className='font-bold text-black dark:text-white underline text-[16px]'>Suscribe to  Premium</h1>
            <button className='bg-black dark:bg-white dark:text-black text-white px-[3rem] py-[1rem] rounded-[25px]'>
                <Link href='/signUp'>Get Started</Link>
            </button>
            <Switch
      // checked={checked}
      onChange={toggleDarkMode}
      inputProps={{ 'aria-label': 'controlled' }}
    />
          </div>
          <div onClick={handleClick} className='block sm:hidden'>
            {!nav ? (
              <AiOutlineMenuFold
                className='fixed right-0 mr-5 ease-in-out duration-700'
                size={30}
              />
            ) : (
              <AiOutlineClose
                className='fixed right-0 mr-5 ease-in-out duration-700'
                size={30}
              />
            )}
          </div>
          <div
            className={
              nav
                ? 'fixed top-0 bg-black px-4 left-0 w-full z-[999]  border-r h-fit text-black  border-r-gray-600 ease-out duration-700'
                : 'fixed top-[-100%]   duration-1000'
            }
          >
            <div onClick={handleClick} className='block mt-10 sm:hidden'>
              {!nav ? (
                <AiOutlineMenuFold
                  className='fixed right-0 mr-5 text-white ease-in-out duration-700'
                  size={30}
                />
              ) : (
                <AiOutlineClose
                  className='fixed text-white right-0 mr-5 ease-in-out duration-700'
                  size={30}
                />
              )}
            </div>
            <h1 className=' text-3xl p-3 font-bold pt-3 text-[#3e873e] uppercase '>
              Logo
            </h1>
            <ul className='sm:flex text-lg font-bold text-gray-400'>
              {links.map((link, index) => (
                <li className='p-3 cursor-pointer' key={index}>
                  <Link href={link.href}>{link.text}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Header;
