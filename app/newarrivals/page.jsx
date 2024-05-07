"use client";

import React, { useState, useEffect } from "react";
import axiosInstance from "@/services/axiosConfig";
import Link from "next/link";
// import { Base_url } from "@/constants/Links";
import { Base_url } from "@/constant/links";
// import { useUri } from "@/context/UriContext";


const Page = () => {
  // Shimmer effect component
  const Shimmer = () => (
    <div className="animate-pulse flex flex-col items-center">
    <div className="w-[20rem] h-64 bg-gray-200 mb-4 rounded-md"></div>
    <div className="w-1/2 h-4 bg-gray-200 mb-2 rounded-md"></div>
    <div className="w-3/4 h-4 bg-gray-200 mb-2 rounded-md"></div>
    <div className="w-1/2 h-4 bg-gray-200 rounded-md"></div>
  </div>
  );
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const uri = localStorage.getItem("uri");


    useEffect(() => {
        if (uri && !data.length) {
            fetchData();
        }
    }, [data, uri]);


  const fetchData = async () => {
    try {
      const response = await axiosInstance.get(
        `https://api.mulltiply.com/offers/active-offers-stats-new/${uri}?type=latestOffers`
      );
      setData(response?.data.data[0].items);
      // console.log(response?.data.data[0].items);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  return (
    <div className="md:mt-10 md:px-6 mt-8 justify-center items-center max-w-full">
      <div className="flex items-center justify-center font-book-antiqua">
          <p className="text-[28px]">NEW ARRIVALS</p>
        </div>
      <div class=" flex flex-wrap  justify-center space-x-2">
        {loading 
          ? Array.from({ length: 12 }).map((_, index) => (
              <Shimmer key={index} />
            ))
          : data.map((item, index) => (
              <div key={index} className="falex flex-col items-center  sm:my-5 my-1">
                <Link href={`/item/${item.item._id}`} key={index}>
                  <img
                    className="md:w-[20rem] w-36 object-cover h-64 md:h-80"
                    src={`${Base_url}${item?.item?.itemImages[0]}`}
                    alt="Image"
                  />
                </Link>
                <p className="text-new-arrival font-book-antiqua  text-sm font-bold leading-tight text-center mt-3 mb-1 md:text-base">
                  {item?.item?.itemName}
                </p>
                <p className="text-black text-center font-book-antiqua text-base font-bold leading-tight uppercase">
                  ₹ {item?.price.pricePerUnit}
                  {item?.price.pricePerUnit !== item?.mrp.pricePerUnit && (
                    <span className="text-new-arrival font-book-antiqua text-base font-normal leading-tight line-through uppercase ml-1">
                      {item?.mrp.pricePerUnit}
                    </span>
                  )}
                </p>
                
              </div>
            ))}
      </div>
    </div>
  );
};

export default Page;
