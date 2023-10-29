import React from 'react'

const Forms = () => {
  return (
    <div class=" px-4 py-16 sm:px-6 lg:px-8">
    <div class="flex justify-center items-center  flex-col">
      <h1 class="text-center mx-auto text-[40px] font-bold text-black sm:text-3xl">
      Get In Touch
      </h1>
  
      <p class="mx-auto text-[24px] mt-4 max-w-lg text-center text-black">
      Lorem ipsum dolor sit amet consectetur. Neque ipsum nec odio duis accumsan
      </p>
  
      <form
        action=""
        class="mb-0 mt-6 space-y-4  md:w-[710px] rounded-lg p-4 bg-[rgba(233,228,255,1)] shadow-lg sm:p-6 lg:p-20"
      >
        <p class="text-center text-lg font-medium">Sign in to your account</p>
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
  

  <div>
    <h1>Subject</h1>
    <div>
        
        <label for="subject" class="sr-only">subject</label>
          <div class="relative">
            <input
              type="text"
              class="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
              placeholder="Enter subject"
            />
  
         
          </div>
        </div>
  </div>
       
<div>
    <h1>
        Message
        <div>
       
  
       <div class="relative">
<textarea  className='outline-none p-5 rounded-lg w-full h-32'  />
       </div>
     </div>
    </h1>
    </div>
  
        <button
          type="submit"
          class="block w-full rounded-lg bg-black px-5 py-3 text-sm font-medium text-white"
        >
      send Message
        </button>
  
       
      </form>
    </div>
  </div>
  )
}

export default Forms