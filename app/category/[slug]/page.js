"use client";

import React, { useEffect, useState } from "react";
import Slider from "react-slick";

import Link from "next/link";
import { Base_url } from "@/constant/links";
import axiosInstance from "@/services/axiosConfig";


// Shimmer component
const CategoryShimmer = () => {
  return (
    <div class="md:mt-10 md:px-6 mt-8 justify-center items-center max-w-full animate-pulse">
      <div className="flex items-center justify-center font-book-antiqua">
        <div className="w-48 h-8 bg-gray-200 mb-4"></div>
      </div>
      <div className="flex flex-wrap justify-center space-x-2">
        {[...Array(6)].map((_, index) => (
          <div className="flex flex-col items-center sm:my-5 my-1" key={index}>
            <div className="w-36 h-48 md:w-60 md:h-80 bg-gray-200 mb-3"></div>
            <div className="w-48 h-4 bg-gray-200 mb-1"></div>
            <div className="w-32 h-4 bg-gray-200"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default function Category({ params }) {
  const [Data, setData] = useState([]);
  

  useEffect(() => {
    // const uri=localStorage.getItem('uri');
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const uri = localStorage.getItem("uri");
      const response = await axiosInstance(
        `https://api.mulltiply.com/offers/active-offers/${uri}?item.categoriesTree=${params.slug}`
      );

      setData(response?.data?.data);
      console.log(response?.data?.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Slider settings
  const settings = {
    focusOnSelect: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    speed: 800,
  };

  return (
    <div class="md:mt-10 md:px-6 mt-8 justify-center items-center max-w-full">
      {/* Shimmer effect */}
      {!Data.length ? (
        <CategoryShimmer />
      ) : (
        <>
          {/* Render data when available */}
          <div className="flex items-center justify-center font-book-antiqua">
            <p className="text-[28px]">{Data[0]?.attributeSet.item.category.title}</p>
          </div>
          <div className="flex flex-wrap  justify-center space-x-2">
            {Data.map((item, index) => (
              <div key={index} className="flex flex-col items-center sm:my-5 my-1">
                <Link href={`/item/${item.attributeSet.item._id}`} key={index}>
                  <img
                    className="md:w-[20rem] w-36 object-cover h-64 md:h-80"
                    src={`${Base_url}${Data[index]?.attributeSet.item.itemImages[0]}`}
                    alt="Image"
                  />
                </Link>
                <p className="text-new-arrival font-book-antiqua text-base font-bold leading-tight text-center mt-3 mb-1 capitalize">
                  {Data[index]?.attributeSet.item.itemName}
                </p>
                <p className="text-black text-center font-book-antiqua text-base font-bold leading-tight uppercase">
                  ₹ {Data[index]?.attributeSet.price.pricePerUnit}
                  {Data[index]?.attributeSet.price.pricePerUnit !== Data[index]?.attributeSet.mrp.pricePerUnit && (
                    <span className="text-new-arrival text-center font-book-antiqua text-base font-normal leading-tight line-through uppercase ml-1">
                      {Data[index]?.attributeSet.mrp.pricePerUnit}
                    </span>
                  )}
                </p>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

