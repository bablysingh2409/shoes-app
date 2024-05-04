import React from "react";

function NavHeader() {
  return (
    <div className="h-[52.664px] bg-[#414246] sm:block hidden">
      <div className="flex justify-center items-center gap-20 p-4">
        <div className="cursor-pointer">
          <p className="uppercase text-[14px] font-bold text-white font-mulish">Categories</p>
        </div>
        <div className="cursor-pointer">
          <p className="uppercase text-[14px] font-bold text-white font-mulish">brands</p>
        </div>
        <div className="cursor-pointer">
          {" "}
          <p className="uppercase text-[14px] font-bold text-white font-mulish">new arrivals</p>
        </div>
        <div className="cursor-pointer">
          <p className="uppercase text-[14px] font-bold text-white font-mulish">most popular</p>
        </div>
      </div>
    </div>
  );
}

export default NavHeader;
