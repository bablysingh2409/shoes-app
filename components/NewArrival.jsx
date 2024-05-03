"use client";
import React, { useRef, useState } from "react";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const data = [
  { name: "shoe1", price: "₹2000" },
  { name: "shoe1", price: "₹4000" },
  { name: "shoe1", price: "₹5000" },
  { name: "shoe1", price: "₹6000" },
  { name: "shoe1", price: "₹7000" },
  { name: "shoe1", price: "₹8000" },
  //   { name: "shoe1", price: "₹2000" },
];

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

        // Increase arrow size
        // padding: "10px", // Increase arrow padding
      }}
      onClick={onClick}
    />
  );
};

function NewArrival() {
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
  const [startIndex, setStartIndex] = useState(0);

  const handleForward = () => {
    setStartIndex((prevIndex) =>
      prevIndex + 1 < data.length ? prevIndex + 1 : 0
    );
  };

  const handleBackward = () => {
    setStartIndex((prevIndex) =>
      prevIndex - 1 >= 0 ? prevIndex - 1 : data.length - 1
    );
  };
  return (
    <div className=" py-4 mx-8">
      <h1 className="flex justify-center items-center gap-2 text-[14px] font-semibold uppercase">
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
        {data.map((item, i) => (
          <Link key={i} href="/productDetails">
            <div className="relative">
              <div
                className="sm:w-[392.783px] sm:h-[468.664px] bg-center bg-cover font-book-antiqua flex justify-center items-center relative w-full h-[386.164px]"
                style={{
                  backgroundImage:
                    "url('https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/b95033d3-2b18-4e8e-b386-56e4209b3352/air-jordan-1-low-shoes-6Q1tFM.png')",
                  backgroundSize: "cover",
                }}
              >
                <div className="absolute bottom-0 w-full">
                  <div className="bg-opacity-50 text-center p-4">
                    <h1 className="text-[20px] font-bold text-white uppercase">
                      {item.name}
                    </h1>
                    <p className="text-[20px] font-semibold text-white">
                      {item.price}
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
