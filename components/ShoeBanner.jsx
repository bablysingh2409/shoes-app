"use client"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef } from "react";
// import Link from "next/link";

const Slide = () => (
  <div className="bg-cover sm:bg-contain bg-center h-[40vh] sm:h-[70vh] font-book-antiqua flex justify-center items-center" style={{ backgroundImage: "url('/shoe-banner.png')" }}>
    <div className="flex flex-col items-center mt-12 md:mt-20">
      <p className="text-black font-serif text-4xl font-normal leading-none uppercase mb-2">
        WOMEN&#39;S SHOES
      </p>
      <p className="text-black font-book-antiqua text-base font-normal leading-none mb-4">
        Nike SB Zoom Stefan Janoski
      </p>
      {/* <Link href="/collections"> */}
        <button className="text-white font-book-antiqua text-xs font-bold leading-6  uppercase border border-black bg-black rounded-md
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
    <div className="relative max-w-full mt-2">
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
