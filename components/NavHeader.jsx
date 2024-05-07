"use client";
import axiosInstance from "@/services/axiosConfig";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
function NavHeader() {
  const [categoriesData, setCategoriesData] = useState([]);
  const [isHovered, setIsHovered] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const uri = localStorage.getItem("uri");
    if (uri && !categoriesData.length) {
      fetchCategoriesData(uri);
    }
  }, [categoriesData]);

  const fetchCategoriesData = async (uri) => {
    try {
      const response = await axiosInstance(
        `https://api.mulltiply.com/offers/active-offers-stats-new/${uri}?type=topCategories`
      );
      setCategoriesData(response?.data?.data);
    //   console.log("categories data..", response?.data.data);
      //   setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      //   setLoading(false);
    }
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleDropdownMouseEnter = () => {
    setIsHovered(true);
  };

  const handleDropdownMouseLeave = () => {
    // Check if the mouse is also not hovering over the "Categories" section
    if (!dropdownRef.current.contains(event.relatedTarget)) {
      setIsHovered(false);
    }
  };

  return (
    <div className="h-[52.664px] bg-[#414246] md:block hidden">
      <div className="flex justify-center items-center gap-20 p-4">
        <div
          className="relative cursor-pointer"
          onMouseEnter={handleMouseEnter}
          //   onMouseLeave={handleMouseLeave}
        >
          <p className="uppercase text-[14px] font-bold text-white font-mulish">
            Categories
          </p>
          {isHovered && (
            <div
              ref={dropdownRef}
              className="absolute top-full left-0 mt-2  shadow-md rounded-md p-2 z-10 w-[120px] bg-gray-100"
              onMouseEnter={handleDropdownMouseEnter}
              onMouseLeave={handleDropdownMouseLeave}
            >
              {categoriesData.length > 0 &&
                categoriesData.map((category) => (
                  <Link
                    href={`/category/${category.items[0]?.categoriesTree[0]}`}
                    key={category._id}
                  >
                    <div
                      className="px-2 py-3 flex justify-center items-center"
                      
                    >
                      <p className="text-lg text-gray-800 hover:text-gray-400">
                        {category.category}
                      </p>
                    </div>
                  </Link>
                ))}
            </div>
          )}
        </div>

        <div className="cursor-pointer">
          <p className="uppercase text-[14px] font-bold text-white font-mulish">
            brands
          </p>
        </div>
        <div className="cursor-pointer">
          {" "}
          <Link href="/newarrivals">
          <p className="uppercase text-[14px] font-bold text-white font-mulish">
            new arrivals
          </p>
          </Link>
        </div>
        <div className="cursor-pointer">
          <p className="uppercase text-[14px] font-bold text-white font-mulish">
            most popular
          </p>
        </div>
      </div>
    </div>
  );
}

export default NavHeader;
