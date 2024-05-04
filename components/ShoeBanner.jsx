"use client"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef } from "react";
// import Link from "next/link";

// bg-cover sm:bg-cover bg-center h-[40vh] sm:h-[70vh] font-book-antiqua flex justify-center items-center

const Slide = () => (
  <div className=" w-full h-[60vh] sm:h-[85vh] bg-center  font-book-antiqua flex justify-center items-center " style={{ backgroundImage: "url('/banner.png')",backgroundSize: "cover" }}>
    <div className="flex flex-col items-center justify-center text-center">
      <p className="text-white font-serif sm:text-4xl text-3xl font-normal leading-none uppercase mb-2">
        WOMEN&#39;S SHOES
      </p>
      <p className="text-white font-book-antiqua text-base font-normal leading-none mb-4">
        Nike SB Zoom Stefan Janoski
      </p>
      {/* <Link href="/collections"> */}
        <button className="text-black font-book-antiqua text-xs font-bold leading-6  uppercase border
         border-black bg-white rounded-md hover:bg-black hover:text-white
         py-2 px-5">
          Shop Now
        </button>
      {/* </Link> */}
    </div>
  </div>
);

export default function ShoeBanner() {
  const settings = {
    dots: true, // Display navigation dots
    infinite: true,
    speed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false, // Hide arrows

    
    
  };
  const slider = useRef(null);

  return (
    <div className="relative max-w-full">
      <Slider {...settings} ref={slider}>
        <Slide />
        <Slide />
        <Slide />
        <Slide />
        <Slide />
      </Slider>
    </div>
  );
}
