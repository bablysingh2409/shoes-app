"use client";
import React, { useState } from "react";

function ProductPage() {
  const [images, setImages] = useState({
    img1: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/b95033d3-2b18-4e8e-b386-56e4209b3352/air-jordan-1-low-shoes-6Q1tFM.png",
    img2: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/83f0f4d2-216c-449d-a51c-7b0d71dddb03/air-jordan-1-low-shoes-6Q1tFM.png",
    img3: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/29754f85-3581-4ddb-8b27-ba736bafaf75/air-jordan-1-low-shoes-6Q1tFM.png",
    img4: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/cae1f741-ad92-4d24-a73b-37ef64122104/air-jordan-1-low-shoes-6Q1tFM.png",
  });

  const [activeImg, setActiveImg] = useState(images.img1);
  return (
    <div className="w-full lg:p-8 p-2 border-t-2">
      <div className="flex flex-col lg:flex-row gap-16 ">
        <div className="flex flex-col gap-6 lg:w-2/4 lg:flex-row">
          <img
            src={activeImg}
            alt=""
            className="w-full h-full aspect-square object-cover rounded-xl"
          />
          <div className="flex flex-row justify-between h-24">
            <img
              src={images.img1}
              alt=""
              className="w-24 h-24 rounded-md cursor-pointer"
              onClick={() => setActiveImg(images.img1)}
            />
            <img
              src={images.img2}
              alt=""
              className="w-24 h-24 rounded-md cursor-pointer"
              onClick={() => setActiveImg(images.img2)}
            />
            <img
              src={images.img3}
              alt=""
              className="w-24 h-24 rounded-md cursor-pointer"
              onClick={() => setActiveImg(images.img3)}
            />
            <img
              src={images.img4}
              alt=""
              className="w-24 h-24 rounded-md cursor-pointer"
              onClick={() => setActiveImg(images.img4)}
            />
          </div>
        </div>
      </div>
      {/* about */}
      <div className="flex flex-col gap-4 lg:w-2/4">
        <div>
          <span className="text-violet-600 font-semibold">Special Sneaker</span>
          <h1 className="text-3xl font-bold">Nike Invincible 3</h1>
        </div>
        <p className="text-gray-700">
          Inspired by the original that debuted in 1985, the Air Jordan 1 Low
          offers a clean, classic look that's familiar yet always fresh. With an
          iconic design that pairs perfectly with any 'fit, these kicks ensure
          you'll always be on point.
        </p>
        <h6 className="text-2xl font-semibold">$ 199.00</h6>
        <div className="flex flex-row items-center gap-10">
           <div className="flex flex-row items-center">
            <button className="bg-gray-200 py-2 px-5 rounded-lg text-violet-800 text-3xl">-</button>
            <span className=" py-4 px-6 rounded-lg">1</span>
            <button className="bg-gray-200 py-2 px-5 rounded-lg text-violet-800 text-3xl">+</button>
           </div>
           <button className="bg-violet-800 text-white font-semibold py-2 px-16 rounded-xl ">Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
