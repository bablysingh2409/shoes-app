"use client";
import { useAuth } from "@/context/Auth";
import axiosInstance from "@/services/axiosConfig";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { MdOutlineImage } from "react-icons/md";

function Page() {
  const router = useRouter();

  const { isLogin, logout } = useAuth();
  const [userDetails, setUserDetails] = useState([]);
  const [isUserRegister, setIsUserRegister] = useState();

  useEffect(() => {
    if (isLogin) {
      fetchUserInfo();
    }
  }, [isLogin]);

  const fetchUserInfo = async () => {
    try {
      const seller_id = localStorage.getItem("SellerWorkspace");
      const res = await axiosInstance.get(
        `/customers/buyer?sellerWorkspace=${seller_id}`
      );

      console.log("workspace res");
      console.log("response", res?.data.data[0]);
      // SetRegisterUser(res?.data.data.length);
      // setBuyerProfile(res?.data.data[0]);
      setIsUserRegister(res?.data.data.length);
      setUserDetails(res?.data.data[0]);
    } catch (error) {
      console.log("error", error);
    }
  };

  //     useEffect(()=>{
  //         if(isUserRegister===0){
  //             router.push('/auth/login')
  //         }
  //    },[isUserRegister,router])

  //     if(isUserRegister===0){
  //         logout();
  //         return
  //     }

  return (
    <div className="w-full lg:p-8 p-2 border-t-2">
      <div className="bg-yellow-400 p-2">
        <h1 className="text-center">My Accounts</h1>
        <div className="flex items-center gap-3">
          <div className="border rounded-full p-2 ">
            <MdOutlineImage  className="text-[50px]"/>
          </div>
          <p>
            Hello <span className="uppercase">{userDetails.name}</span>
          </p>
        </div>
        <div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default Page;
