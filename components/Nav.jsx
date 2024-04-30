import React from "react";
// import { PiCirclesFourFill } from "react-icons/pi";
import { GiHamburgerMenu } from "react-icons/gi";
import { GiRunningShoe } from "react-icons/gi";
import { FaRegBell } from "react-icons/fa";

function Nav() {
  return (
    <div className="w-full">
      <div className="flex w-full px-4 py-2  justify-between items-center ">
        <div className="p-2" >
          <GiHamburgerMenu className="text-3xl text-gray-700"/>
        </div>
        <div>
          <GiRunningShoe className="text-6xl text-gray-800"/>
        </div>
        <div className="bg-gray-200 p-1 rounded-sm">
          <FaRegBell  className="text-2xl text-gray-600"/>{" "}
        </div>
      </div>
    </div>
  );
}

export default Nav;
