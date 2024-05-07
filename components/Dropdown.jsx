"use client"
import { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";

export default function Dropdown({ title, items }) {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleDropdown = () => setIsOpen(!isOpen);
  
    return (
      <div className="dropdown sm:w-[600px]">
        <div
          className="dropdown-header border-y py-1 px-2 text-black font-book-antiqua text-base font-normal flex flex-row justify-between w-[100%]"
          onClick={toggleDropdown}
        >
          <p>{title}</p>
          {isOpen ? <FiMinus /> : <FiPlus />}
        </div>
        {isOpen && (
          <ul className="dropdown-content transition-all duration-300 ease-in-out transform origin-top list-disc px-6">
            {items.map((item, index) => (
              <li
                key={index}
                className=" py-1 text-black font-book-antiqua font-normal text-sm"
              >
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }