"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axiosInstance from "@/services/axiosConfig";
import { Base_url } from "@/constant/links";



const NextArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div
      className={className}
      style={{
        display: "block",
        right: "-28px",
        zIndex: "1",
        color: "red",
        backgroundColor: "black",
        borderRadius: "10px", // Change arrow color here
        fontSize: "24px", // Increase arrow size
        // padding: "10px", // Increase arrow padding
      }}
      onClick={onClick}
    />
  );
};

const PrevArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div
      className={className}
      style={{
        display: "block",
        left: "-28px",
        zIndex: "1",
        color: "red", // Change arrow color here
        backgroundColor: "black",
        borderRadius: "10px",

      }}
      onClick={onClick}
    />
  );
};

function NewArrival() {
    const [newArrivalData,setNewArrivalData]=useState([]);


useEffect(()=>{
    const uri=localStorage.getItem('uri');
    if(uri && !newArrivalData.length){
        fetchNewArrivalData(uri);
    }
},[newArrivalData.length])

const fetchNewArrivalData=async(uri)=>{
    try {
        const response = await axiosInstance.get(
            `https://api.mulltiply.com/offers/active-offers-stats-new/${uri}?type=latestOffers`
          );
        //   console.log('new arrival data response..',response)
        setNewArrivalData(response?.data.data[0].items)
        //  console.log('new arrival data',response?.data.data[0].items)
          
    } catch (error) {
        console.log(error) ;
    }
}

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    cssEase: "cubic-bezier(0.25, 0.1, 0.25, 1)",
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    centerMode: true,
    centerPadding: "0",
    responsive: [
      {
        breakpoint: 640, // Mobile breakpoint
        settings: {
          slidesToShow: 1, // Display only one item at a time on mobile
          slidesToScroll: 1,
        },
      },
    ],
  };
 
  return (
    <div className=" py-4 mx-8">
      <h1 className="flex justify-center items-center gap-2 text-[14px] font-semibold uppercase mb-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="2"
          viewBox="0 0 50 2"
          fill="none"
        >
          <path
            d="M0.601562 1.09375H49.0254"
            stroke="black"
            stroke-linecap="round"
          />
        </svg>
        New Arrivals
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="2"
          viewBox="0 0 50 2"
          fill="none"
        >
          <path
            d="M0.601562 1.09375H49.0254"
            stroke="black"
            stroke-linecap="round"
          />
        </svg>
      </h1>

      <Slider {...settings}>
        {newArrivalData.length>0 && newArrivalData.map((item) => (
          <Link key={item._id} href={`/productDetails/${item.item._id}`}>
            <div className="relative">
              <div
                className="lg:w-[392.783px] lg:h-[468.664px] bg-center bg-cover font-book-antiqua flex justify-center items-center relative w-full h-[386.164px]"
                style={{
                  backgroundImage:
                    `url(${Base_url}${item.item.itemImages[0]})`,
                  backgroundSize: "cover",
                }}
              >
                <div className="absolute bottom-0 w-full">
                  <div className="bg-opacity-50 text-center p-4">
                    <h1 className="text-[20px] font-bold text-white uppercase">
                      {item.item.itemName}
                    </h1>
                    <p className="text-[20px] font-semibold text-white">
                      {item.mrp.pricePerUnit}
                    </p>
                    <button className="text-black border border-black bg-white text-lg rounded-2xl w-[80.339px] h-[34.881px]">
                      Shop
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </Slider>
    </div>
  );
}

export default NewArrival;
