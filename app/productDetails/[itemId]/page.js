"use client";
import { Base_url, Item_url } from "@/constant/links";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import Dropdown from "@/components/Dropdown";

function ProductPage({ params }) {
  const router = useRouter();
  const [itemDetails, setItemDetails] = useState([]);
  const [isMobile, setIsMobile] = useState(false);
  const [dropdata, setdropdata] = useState();
  const [activeImg, setActiveImg] = useState("");
  const [price, setPrice] = useState(0);
  const [selectedSize, setSelectedSize] = useState(null);

  useEffect(() => {
    fetchData();

    // Check if the screen is mobile on mount
    setIsMobile(window.innerWidth < 768);

    // Initialize ResizeObserver
    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        if (entry.target === document.documentElement) {
          setIsMobile(entry.contentRect.width < 768);
        }
      }
    });

    // Start observing resize events on the document element
    resizeObserver.observe(document.documentElement);

    return () => {
      // Disconnect the ResizeObserver when component unmounts
      resizeObserver.disconnect();
    };
  }, [params.itemId]);

  // const handleResize = () => {
  //   setIsMobile(window.innerWidth < 768); // Adjust the threshold as needed
  // };

  const fetchData = async () => {
    try {
      // console.log("uri item",uri);
      const response = await axios(
        `${Item_url}/4erm12z24fnlv6ctuer?item._id=${params.itemId}`
      );
    
      setdropdata(response?.data);
      // console.log("item details response...", response?.data.data[0])     // setData(response?.data?.data[0]);
      setItemDetails(response?.data?.data[0]);
      setActiveImg(
        response?.data?.data[0].attributeSet.item.itemImages[0] || ""
      );

      setSelectedSize(response?.data?.data[0]?.attributeSet.item.itemVariantInfo.Size)
      // setPrice(response?.data?.data[0]?.attributeSet.mrp.pricePerUnit);
      console.log("itemssss", response?.data?.data[0]);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // const handleSizeSelect = (size) => {
  //   setSelectedSize(size);
  // };


  return (
    <div className="w-full p-4 ">
      <div className="flex gap-2 md:flex-row flex-col justify-center ">
        {/* Image Gallery */}
        <div className="flex flex-col-reverse md:flex-row gap-2 md:w-[40vw] ">
          <div
            className={`flex md:flex-col flex-row justify-between md:h-24 gap-2 ${
              isMobile ? "overflow-x-auto h-[70vh] rounded-md" : ""
            }`}
          >
            {itemDetails?.attributeSet?.item?.itemImages.map((img, index) => (
              <img
                key={index}
                src={`${Base_url}${img}`}
                alt={`Product Image ${index + 1}`}
                className={`md:h-[15vh] rounded-md cursor-pointer h-[70vh] object-cover ${
                  isMobile ? " w-[100%] object-contain" : ""
                } `}
                onClick={() => setActiveImg(img)}
              />
            ))}
          </div>
          <img
            src={`${Base_url}${activeImg}`}
            alt="img"
            className="md:w-[30vw] md:h-[85vh] h-[70vh] object-contain rounded-xl w-full md:block hidden"
          />
        </div>

        {/* Product Information */}
        <div className="flex flex-col w-full md:w-[40vw] gap-2">
          {/* <div className=""> */}
            <h1 className="text-4xl font-bold">
              {itemDetails?.attributeSet?.item.itemName}
            </h1>
          {/* </div> */}
          <p className="text-gray-700">
            {itemDetails?.attributeSet?.item.description}
          </p>
          <div>
            <h6 className="text-lg font-bold">
               ₹{itemDetails?.attributeSet?.mrp.pricePerUnit}
            </h6>
            {itemDetails?.attributeSet?.mrpDiscount !== 0 && (
              <span className="mx-1 text-black font-book-antiqua text-base font-normal leading-[27px]">
                ({itemDetails?.attributeSet?.mrpDiscount}% Off)
              </span>
            )}
            <p className="text-black font-book-antiqua text-xs font-normal">
              (Incl. of all taxes)
            </p>
          </div>

          <div className="flex flex-col gap-3 justify-center mt-3">
            <h2 className="uppercase">select size</h2>
            <div className="flex gap-2">
              {itemDetails?.attributeSet?.item?.variants.map((variant)=>{
                return (
                  <Link href={`/productDetails/${variant._id}`} key={variant._id}>
                  <div
                    // onClick={() => handleSizeSelect(variant.itemVariantInfo.Size)}
                    className={`p-3 rounded-full border border-black w-[50px] h-[50px] cursor-pointer ${
                      selectedSize === variant.itemVariantInfo.Size
                        ? "bg-black text-white"
                        : ""
                    }`}
                  >
                    <div className="flex items-center justify-center">
                      <p className=" font-semibold">{variant.itemVariantInfo.Size}</p>
                    </div>
                  </div>
                  </Link>
                )
              })}
            </div>
          </div>
          <div className="flex gap-4 mt-6">
            <button className="uppercase w-[210.351px] h-[44.88px] border border-black bg-black text-white text-lg rounded-md hover:text-black hover:bg-white">buy now</button>
            <button className="uppercase w-[210.351px] h-[44.88px] border border-black hover:bg-black hover:text-white rounded-md text-lg ">add to bag</button>
          </div>

          <div className="product-specification flex flex-col  my-4 justify-center cursor-pointer">
                <Dropdown
                  title="Description"
                  items={[itemDetails?.attributeSet?.item?.description]}
                />
                <Dropdown
                  title="Size & Fit"
                  items={["The model (height 5) is wearing a size S"]}
                />
                <Dropdown
                  title="Material & Care"
                  items={["Polyester", "Machine Wash"]}
                />
                <Dropdown
                  title="Delivery"
                  items={[dropdata?.metaData?.workspace?.shipmentInfo]}
                />
                

                
              </div>
          {/* <div className="flex flex-row items-center gap-10">
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
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
