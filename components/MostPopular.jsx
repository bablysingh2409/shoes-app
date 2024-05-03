"use client";
import React, { useRef, useState } from "react";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const data = [
  { name: "shoe1", price: "₹2000" ,img:1},
  { name: "shoe1", price: "₹4000" ,img:2},
  { name: "shoe1", price: "₹5000" ,img:3},
  
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

function MostPopular() {
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
        Most Popular
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
                className="sm:w-[412.783px] sm:h-[468.664px] bg-center bg-cover font-book-antiqua flex justify-center items-center relative w-full h-[386.164px]"
                style={{
                  backgroundImage:
                    `url(/mostpopular-${item.img}.png)`,
                  backgroundSize: "cover",
                }}
              >
                <div className="absolute  w-full">
                  <div className="bg-opacity-50 text-center p-4">
                    <h1 className="text-[20px] font-bold text-white uppercase">
                      {item.name}
                    </h1>
                    <p className="text-[20px] font-semibold text-white">
                      {item.price}
                    </p>
                    <button className="text-white border border-white  text-lg w-[80.339px] h-[34.881px]">
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

export default MostPopular;












// import React from "react";

// function MostPopular() {
//   return (
//     <div className="mt-8 py-6">
//       <h1 className="flex justify-center items-center gap-2 text-[14px] font-semibold uppercase">
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           width="50"
//           height="2"
//           viewBox="0 0 50 2"
//           fill="none"
//         >
//           <path
//             d="M0.601562 1.09375H49.0254"
//             stroke="black"
//             stroke-linecap="round"
//           />
//         </svg>
//         Most Popular
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           width="50"
//           height="2"
//           viewBox="0 0 50 2"
//           fill="none"
//         >
//           <path
//             d="M0.601562 1.09375H49.0254"
//             stroke="black"
//             stroke-linecap="round"
//           />
//         </svg>
//       </h1>
//       <div className="mt-4 relative">
//         <div
//           className=" sm:w-[85%] h-[60vh] sm:h-[80vh] px-2 bg-center m-auto relative w-full"
//           style={{ backgroundImage: "url('/most-popular.png')",backgroundSize: "cover"  }}
//         >
//           <div className="w-[404.082px] h-[157.359px] bg-[#FFFFFF] bg-opacity-50 absolute inset-0 
//           flex flex-col justify-center items-center m-auto gap-4">
//             <h2>Jakriti Pink Women Causal Shoes</h2>
//             <button
//               className="w-[137.342px] h-[41.18px] rounded-md bg-inherit border border-black
//             text-[16px] uppercase font-semibold"
//             >
//               Shop Now
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default MostPopular;
