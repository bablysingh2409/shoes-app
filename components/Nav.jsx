"use client";
import React, { useEffect, useState } from "react";
// import { PiCirclesFourFill } from "react-icons/pi";
import { GiHamburgerMenu } from "react-icons/gi";
import { GiRunningShoe } from "react-icons/gi";
import { FaRegBell } from "react-icons/fa";
import Header from "./Header";
import { FaCartShopping } from "react-icons/fa6";
import { IoMdPerson } from "react-icons/io";
import Link from "next/link";
import NavHeader from "./NavHeader";

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const [categoriesData, setCategoriesData] = useState([]);

  // useEffect(() => {
  //   const uri = localStorage.getItem("uri");
  //   if (uri && !categoriesData.length) {
  //     fetchCategoriesData(uri);
  //   }
  // }, [categoriesData]);

  // const fetchCategoriesData = async (uri) => {
  //   try {
  //     const response = await axiosInstance(
  //       `https://api.mulltiply.com/offers/active-offers-stats-new/${uri}?type=topCategories`
  //     );
  //     setCategoriesData(response?.data?.data);
  //     console.log("categories data..", response?.data.data);
  //     //   setLoading(false);
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //     //   setLoading(false);
  //   }
  // };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

 

  return (
    <>
    <div className="w-full md:p-0 p-3 ">
        <div className="flex w-full md:px-8  px-4 justify-between items-center ">
          {/* burger menu for mobile screen */}
          <div className="flex md:hidden" onClick={toggleMenu}>
            <GiHamburgerMenu className="text-2xl text-gray-600" />
          </div>

          {/* logo */}
          <Link href="/">
            <div className="flex justify-between items-center gap-2 cursor-pointer">
              {/* <div className="w-[21.406px] h-[21.406px] bg-[#FF3838]"></div> */}
              <GiRunningShoe className="md:text-6xl text-gray-800 text-5xl" />
              {/* <p>Shoes</p> */}
            </div>
          </Link>

          {/* search */}
          <div className="w-[276.926px] h-[35.266px] rounded-md border border-[#CECECE] bg-[#FDFDFD] md:block hidden">
            <Header />
          </div>

          {/* icons */}
          <div className="flex gap-6 justify-between items-center">
          <Link href='/auth/login'>
            <div className="text-2xl text-gray-600 cursor-pointer">
              <IoMdPerson />
            </div>
            </Link>
            <Link href='/cart'>
            <div className="text-2xl text-gray-600 cursor-pointer">
              <FaCartShopping />
            </div>
            </Link>
          </div>
        </div>
    </div>
    <NavHeader/>
    </>
  );
}

export default Nav;
