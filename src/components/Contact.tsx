"use client"
import Image from 'next/image';
import React, { useState } from 'react';

const ContactForm = ({profile}: {profile: any}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [subject, setSubject] = useState('')
 
  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  const logo: string = profile.logo.fields.file.url

  console.log({ logo })

  return (
    <div className="p-4 text-white bg-black">
      <div className="flex">
        <div className="text-[24px]  sm:text-[32px] w-full flex justify-center items-center text-center">
          <span className="py-2">{`Contact ${profile.name}`}</span>
        </div>
      </div>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="text-[12px] sm:text-[16px] mb-4">
          <label htmlFor="name" className="block mb-2 text-lg font-medium">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="w-full px-4 py-2 bg-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-2 text-lg font-medium">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full px-4 py-2 bg-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="subject" className="block mb-2 text-lg font-medium">
            Subject
          </label>
          <input
            type="subject"
            id="subject"
            className="w-full px-4 py-2 bg-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block mb-2 text-lg font-medium ">
            Message
          </label>
          <textarea
            id="message"
            className="w-full px-4 py-2  bg-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 bg-gray-600 text-white font-semibold rounded-md hover:bg-gray-700"
        >
          Send Message
        </button>
      </form>
    </div>
  )
};

export default ContactForm;