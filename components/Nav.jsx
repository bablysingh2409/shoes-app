import React from "react";
// import { PiCirclesFourFill } from "react-icons/pi";
import { GiHamburgerMenu } from "react-icons/gi";
import { GiRunningShoe } from "react-icons/gi";
import { FaRegBell } from "react-icons/fa";
import Header from "./Header";
import { FaCartShopping } from "react-icons/fa6";
import { IoMdPerson } from "react-icons/io";

function Nav() {
  return (
    <div className="w-full ">
      <div className="flex w-full px-8 py-2  justify-between items-center ">
        {/* logo */}
        <div className="flex justify-between items-center gap-2">
          <div className="w-[21.406px] h-[21.406px] bg-[#FF3838]"></div>
          <p>Shoes</p>
          {/* <GiHamburgerMenu className="text-3xl text-gray-700"/> */}
        </div>

        {/* search */}
        <div className="w-[276.926px] h-[35.266px] rounded-md border border-[#CECECE] bg-[#FDFDFD]">
          <Header />
          {/* <GiRunningShoe className="text-6xl text-gray-800"/> */}
        </div>

        {/* icons */}
        <div className="flex gap-6 justify-between items-center">
          <div className="text-2xl text-gray-600">
            <IoMdPerson />
          </div>
          <div className="text-2xl text-gray-600">
            <FaCartShopping />
          </div>
          {/* <img src="/profile-logo.png" alt="profile" className=" w-[20px]"/> */}
          {/* <img src="/cart-logo.png" alt="cart"/> */}
          {/* <FaRegBell  className="text-2xl text-gray-600"/>{" "} */}
        </div>
      </div>
    </div>
  );
}

export default Nav;
