"use client"

import React, { useState } from 'react';

const Forms = ({ recipientEmail }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('https://modern-red-gecko.cyclic.app/sendmail', {
        method: 'POST',
        body: JSON.stringify({
          name: 'hi',
          mail: 'Buildhubb01@gmail.com',
          text: `Message: ${message}\nEmail: ${email}\nFullname: ${fullName}\nSubject: ${companyName}`,
          subject: "Someone just contacted you via  contact ",
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        // Reset form and show success message
        setFullName('');
        setEmail('');
        setCompanyName('');
        setPhoneNumber('');
        setMessage('');
        alert('Message sent successfully!'); // You can replace this with your preferred notification method
      } else {
        alert('Failed to send message. Please try again later.');
      }
    } catch (error) {
      alert('Something went wrong!');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="flex justify-center items-center flex-col">
        <h1 className="text-center mx-auto text-3xl font-bold text-black sm:text-3xl">
          Get In Touch
        </h1>

        <p className="mx-auto text-2xl mt-4 max-w-lg text-center text-black">
          Contact Us by filling and submitting the form below.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mb-0 mt-6 space-y-4 md:w-1/2 rounded-lg p-4 bg-purple-50 shadow-lg sm:p-6 lg:p-20"
        >
          <p className="text-center text-lg font-medium">Sign in to your account</p>

          <div>
            <h1>Full Name</h1>
            <div>
              <label htmlFor="fullName" className="sr-only">
                Full Name
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="fullName"
                  className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  placeholder="Full Name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
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
                  id="email"
                  className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
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
              <label htmlFor="subject" className="sr-only">
                Subject
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="subject"
                  className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  placeholder="Enter subject"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div>
            <h1>Message</h1>
            <div className="relative">
              <textarea
                id="message"
                className="outline-none p-5 rounded-lg w-full h-32"
                placeholder="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
          </div>

          <button
            type="submit"
            className="block w-full rounded-lg bg-black px-5 py-3 text-sm font-medium text-white"
            disabled={loading}
          >
            {loading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Forms;
