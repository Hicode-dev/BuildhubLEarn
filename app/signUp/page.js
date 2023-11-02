import React from 'react'
import Footer from '../component/Footer'
import Image from 'next/image'
import ContainLayout from '../Layout/Container'
import Header from '../Layout/Navbar'

const page = () => {
    return (
<>
<div className='pb-4  '>

 <Header />


<ContainLayout>
<form
    action=""
    class="mb-0 mt-6 space-y-4 lg:w-[710px] mx-auto rounded-lg p-4 bg-[rgba(233,228,255,1)] shadow-lg sm:p-6 lg:p-20"
  >
     <h1 class="text-center mx-auto text-[40px] font-bold text-black sm:text-3xl">
  Sign Up
  </h1>
    <div>
<h1>Full Name</h1>
<div>
    
    <label for="subject" class="sr-only">Full Name</label>
      <div class="relative">
        <input
          type="text"
          class="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
          placeholder="Full Name"
        />

     
      </div>
    </div>
</div>

<div>
<h1>Email</h1>
    <div>
      <label for="email" class="sr-only">Email</label>

      <div class="relative">
        <input
          type="email"
          class="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
          placeholder="Enter email"
        />

        <span class="absolute inset-y-0 end-0 grid place-content-center px-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
            />
          </svg>
        </span>
      </div>
    </div>
</div>


<label className="block  mb-2 text-black outline-none">

country </label>
          <select id="countries"
            className="select-field outline-none reselect py-4 focus-within:border-[#8c1ae6]  w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm">
            <option className="">Choose a country</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
          </select>


   
      <label className="block mb-2 text-black outline-none ">

          What skill do you want to learn?</label>
          <select   id="skills"
            className="select-field outline-none reselect py-4 focus-within:border-[#8c1ae6]  w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm">
            <option className="">Frontend Development</option>
            <option value="US">Backend Development</option>
            <option value="CA">Product Management</option>
            <option value="FR">project Management</option>
            <option value="DE">Digital Marketing </option>
            <option value="DE">product Design </option>
            <option value="DE">Tecnical Writers </option>
            <option value="DE">Cyber security </option>
          </select>

    <button
      type="submit"
      class="block w-full rounded-full bg-black px-5 py-4 my-4 text-sm font-medium text-white"
    >
  send Message
    </button>
    <p class="text-center text-lg font-medium">By signing up, you agree to our Terms of Use and Privacy Policy</p>

   
  </form>
</ContainLayout>
</div>
<Footer />
</>
      )
}

export default page
