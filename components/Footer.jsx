"use client";
import React from 'react'
import { IoHome } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { IoMdPerson } from "react-icons/io";
import Link from 'next/link';
import { useAuth } from '@/context/Auth';

function Footer() {
    const {isLogin}=useAuth();
  
    
  return (
    <div className='w-full border-t-2 shadow-md fixed bottom-0 left-0 bg-white z-10 '>
        <div className='flex justify-between w-full items-center p-4'>
          <Link href='/'><div className='text-2xl text-gray-600 '><IoHome /></div></Link>
          <div className='text-2xl text-gray-600'><FaHeart /></div>
          <Link href='/cart'><div className='text-2xl text-gray-600'><FaCartShopping /></div></Link>
          {isLogin===true?
            <Link href='/profile'><div className='text-2xl text-gray-600'><IoMdPerson /></div></Link>:
            <Link href='/auth/login'><div className='text-2xl text-gray-600'><IoMdPerson /></div></Link>
          }
          
        </div>
    </div>
  )
}

export default Footer