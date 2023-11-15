'use client'
import React, { useState } from 'react';
import Footer from '../component/Footer';
import ContainLayout from '../Layout/Container';
import Header from '../Layout/Navbar';
import { notification, Space } from 'antd';

const Page = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [country, setCountry] = useState('');
  const [skill, setSkill] = useState('');



  const handleSubmit = async (e) => {
    
  const handleNotification = (type) => {
    api[type]({
      message: 'Sign Up Success',
      description: 'Thank you for signing up!',
    });
  };
    e.preventDefault();

    try {
      const response = await fetch('https://modern-red-gecko.cyclic.app/sendmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          subject: "Hey Chief someone jsut signed up ",
          name: fullName,
          mail: 'Buildhubb01@gmail.com',
          text: `Email: ${email}\nFullname: ${fullName}\nCountry: ${country}\nSkill : ${skill}`,
        }),
      });

      if (response.ok) {
        console.log('Email sent successfully!');
        handleNotification('success');

        setFullName('');
        setEmail('');
        setSkill('');
        setCountry('');

        // Handle success (e.g., show a success message to the user)
      } else {
        console.error('Failed to send email:', response.statusText);
        // Handle failure (e.g., show an error message to the user)
      }
    } catch (error) {
      console.error('Error sending email:', error);
    }
  };

  return (
    <>
      <div className="pb-4">
        <Header />
        <ContainLayout>
          <form
            onSubmit={handleSubmit}
            className="mb-0 mt-6 space-y-4 lg:w-[710px] mx-auto rounded-lg p-4 bg-[rgba(233,228,255,1)] shadow-lg sm:p-6 lg:p-20"
          >
            <h1 className="text-center mx-auto text-[40px] font-bold text-black sm:text-3xl">
              Sign Up
            </h1>
            <div>
              <h1>Full Name</h1>
              <div>
                <label htmlFor="fullName" className="sr-only">
                  Full Name
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                    placeholder="Full Name"
                  />
                </div>
              </div>
            </div>

            <div>
              <h1>Email</h1>
              <div>
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                    placeholder="Enter email"
                  />
                  <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                    {/* Email validation icon */}
                  </span>
                </div>
              </div>
            </div>

            <label className="block mb-2 text-black outline-none">Country</label>
            <select
              id="countries"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              className="select-field outline-none reselect py-4 focus-within:border-[#8c1ae6] w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
            >
              <option value="">Choose a country</option>
              <option value="US (United States)">United States</option>
              <option value="CA (Canada)">Canada</option>
              <option value="FR (France)">France</option>
              <option value="DE (Germany)">Germany</option>
            </select>

            <label className="block mb-2 text-black outline-none">Skills</label>
            <select
              id="skills"
              value={skill}
              onChange={(e) => setSkill(e.target.value)}
              className="select-field outline-none reselect py-4 focus-within:border-[#8c1ae6] w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
            >
              <option value="">Choose a skill</option>
              <option value="Frontend Development">Frontend Development</option>
              <option value="Backend Development">Backend Development</option>
              <option value="Product Management">Product Management</option>
              <option value="Project Management">Project Management</option>
              <option value="Digital Marketing">Digital Marketing</option>
              <option value="Product Design">Product Design</option>
              <option value="Technical Writers">Technical Writers</option>
              <option value="Cyber Security">Cyber Security</option>
            </select>

            <button
              type="submit"
              onClick={handleSubmit}
              className="block w-full rounded-full bg-black px-5 py-4 my-4 text-sm font-medium text-white"
            >
              Send Message
            </button>
            <p className="text-center text-lg font-medium">
              By signing up, you agree to our Terms of Use and Privacy Policy
            </p>
          </form>
        </ContainLayout>
      </div>
      <Footer />
    </>
  );
};

export default Page;
