"use client";
import { Base_url, Item_url } from "@/constant/links";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import axios from "axios";


function ProductPage({ params }) {
  const router = useRouter();
  const [itemDetails,setItemDetails]=useState([]);
  // const [images, setImages] = useState({
  //   img1: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/b95033d3-2b18-4e8e-b386-56e4209b3352/air-jordan-1-low-shoes-6Q1tFM.png",
  //   img2: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/83f0f4d2-216c-449d-a51c-7b0d71dddb03/air-jordan-1-low-shoes-6Q1tFM.png",
  //   img3: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/29754f85-3581-4ddb-8b27-ba736bafaf75/air-jordan-1-low-shoes-6Q1tFM.png",
  //   img4: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/cae1f741-ad92-4d24-a73b-37ef64122104/air-jordan-1-low-shoes-6Q1tFM.png",
  // });

  const [activeImg, setActiveImg] = useState('');

  useEffect(() => {
    fetchData();
  }, [params.itemId]);

  const fetchData = async () => {
    try {
      // console.log("uri item",uri);
      const response = await axios(
        `${Item_url}/4erm12z24fnlv6ctuer?item._id=${params.itemId}`
      );

      // console.log("item details response...", response?.data.data[0])     // setData(response?.data?.data[0]);
      setItemDetails(response?.data?.data[0]);
      setActiveImg(response?.data?.data[0].attributeSet.item.itemImages[0] || '');
      console.log('itemssss',response?.data?.data[0])
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="w-full p-4 ">
      <div className="flex gap-4 md:flex-row flex-col">
        {/* Image Gallery */}
        <div className="flex flex-col-reverse md:flex-row gap-2">
          <div className="flex md:flex-col flex-row justify-between h-24 gap-2">
            {itemDetails?.attributeSet?.item?.itemImages.map(
              (img, index) => (
                <img
                  key={index}
                  src={`${Base_url}${img}`}
                  alt={`Product Image ${index + 1}`}
                  className="h-[15vh] rounded-md cursor-pointer "
                  onClick={() => setActiveImg(img)}
                />
              )
            )}
          </div>
          <img
            src={`${Base_url}${activeImg}`}
            alt="img"
            className="md:w-[40vw] md:h-[85vh] h-[60vh] aspect-square object-cover rounded-xl w-full"
          />
        </div>

        {/* Product Information */}
        <div className="flex flex-col gap-4 w-full md:w-[40vw]">
          <div>
            <span className="text-violet-600 font-semibold">
              Special Sneaker
            </span>
            <h1 className="text-3xl font-bold">Nike Invincible 3</h1>
          </div>
          <p className="text-gray-700">
            Inspired by the original that debuted in 1985, the Air Jordan 1 Low
            offers a clean, classic look that's familiar yet always fresh. With
            an iconic design that pairs perfectly with any 'fit, these kicks
            ensure you'll always be on point.
          </p>
          <h6 className="text-2xl font-semibold">$ 199.00</h6>
          <div className="flex flex-row items-center gap-10">
            <div className="flex flex-row items-center">
              <button className="bg-gray-200 py-2 px-5 rounded-lg text-violet-800 text-3xl">
                -
              </button>
              <span className=" py-4 px-6 rounded-lg">1</span>
              <button className="bg-gray-200 py-2 px-5 rounded-lg text-violet-800 text-3xl">
                +
              </button>
            </div>
            <button className="bg-violet-800 text-white font-semibold py-2 px-16 rounded-xl ">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
