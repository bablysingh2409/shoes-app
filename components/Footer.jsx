import React from 'react'
import { IoHome } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { IoMdPerson } from "react-icons/io";

function Footer() {
  return (
    <div className='w-full border-t-2 shadow-md fixed bottom-0 left-0 bg-white z-10 '>
        <div className='flex justify-between w-full items-center p-4'>
          <div className='text-2xl text-gray-600 '><IoHome /></div>
          <div className='text-2xl text-gray-600'><FaHeart /></div>
          <div className='text-2xl text-gray-600'><FaCartShopping /></div>
          <div className='text-2xl text-gray-600'><IoMdPerson /></div>
        </div>
    </div>
  )
}

export default Footer