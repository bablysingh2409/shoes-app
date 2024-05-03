"use client";
import React, { useState } from "react";

function Header() {
  const [searchValue, setSearchValue] = useState("");

  return (
    <input
      type="text"
      placeholder="Search Product"
      className="w-full text-[#6D6D6D] font-[Mulish] text-[12px] font-normal px-2 py-2 rounded-md outline-none"
    />
  );
}

export default Header;
