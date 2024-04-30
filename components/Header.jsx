"use client";
import React, { useState } from 'react'

function Header() {
    const [searchValue,setSearchValue]=useState('')
    
  return (
    <div className='w-full '>
        <div className='flex justify-center items-center'>
            <input
                type='text'
                placeholder='Search Product'
                className='w-[90%] px-3 py-2 rounded-md border-2 md:w-[40%]'
            />
        </div>
    </div>
  )
}

export default Header