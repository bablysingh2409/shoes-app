"use client";
import React, { useEffect, useState } from "react";
import axiosInstance from "@/services/axiosConfig";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";
import Registration from "@/components/Registration";
import { useAuth } from "@/context/Auth";

export function Page() {
  const router = useRouter();
  const { login} = useAuth();
  const [userData, setUserData] = useState({ phone: "", countryCode: "91" });
  const [showOtp, setShowOtp] = useState(false);
  const [userOtp, setUserOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const [newUser, setNewUser] = useState(null);
  const [isLogin,setIsLogin]=useState(false);


  useEffect(()=>{
       const isLoggedIn=localStorage.getItem('isLogin');
       if(isLoggedIn){
        router.push('/profile');
       }
    //    setIsLogin(isLoggedIn);
  },[router])


  const notify = (message) => toast(message, { icon: "👏" });
//   if(isLogin){
//     router.push('/profile');
//   }

  const handleChange = (e) => {
    let { value, name } = e.target;
    value = value.replace(/\D/g, "");
    value = value.slice(0, 10);
    setUserData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setShowOtp(true);
    const res = await axiosInstance.post("/auth/otp-login", userData);
    if (res.data?.statusCode === 200) {
      toast.success("OTP SENT");
    } else {
      toast.error("Verification failed");
    }
  };

  const getSellerDetails = async () => {
    const seller_id = localStorage.getItem("SellerWorkspace");
    const res = await axiosInstance.get(
      `/customers/buyer?sellerWorkspace=${seller_id}`
    );
    if (res.data.data.length === 0) {
      setNewUser(0); // Set new user if no data is returned
    } else {
      localStorage.setItem(
        "customerWorkspace",
        res.data.data[0].customerWorkspace
      );
      localStorage.setItem("customer_id", res.data.data[0]._id);
      localStorage.setItem("BuyerId", res.data.data[0].customerId);

      setNewUser(1); // Set as existing user
    }
  };

  const handleVerifyToken = async () => {
    setLoading(true);
    const userVerificationData = { ...userData, otp: userOtp };
    try {
      const response = await axiosInstance.post(
        "/auth/otp-login-verify",
        userVerificationData
      );
      if (response.data.data.token) {
        localStorage.setItem("userToken", response.data.data.token);
        localStorage.setItem("userId", response.data.data.user._id);
        localStorage.setItem(
          "userDetails",
          JSON.stringify(response.data?.data.user)
        );
        await getSellerDetails();
        if (newUser !== 0) {
          login();
        }
        notify("Welcome to Nike");
      } else {
        throw new Error("Verification failed");
      }
    } catch (error) {
      console.error(error);
      toast.error("Verification failed");
    } finally {
      setLoading(false);
    }
  };
  if (newUser === 0) {
    return <Registration/>;
  } else if (newUser === 1) {
    router.push("/");
  }

  return (
    <section>
      <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
        <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
          <h2 className="text-center text-2xl font-bold leading-tight text-black">
            Sign in to your account
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600 ">
            Don&apos;t have an account?{" "}
            <a
              href="#"
              title=""
              className="font-semibold text-black transition-all duration-200 hover:underline"
            >
              Create a account
            </a>
          </p>
          <form
            action="#"
            method="POST"
            className="mt-8"
            onSubmit={handleSubmit}
          >
            <div className="space-y-5">
              <div>
                <label
                  htmlFor=""
                  className="text-base font-medium text-gray-900"
                >
                  {" "}
                  Phone Number{" "}
                </label>
                <div className="mt-2 flex justify-between items-center gap-2 ">
                  <div className="border border-gray-300 h-10 bg-transparent px-3 py-2 text-sm rounded-md text-gray-400">
                    <h1>+91</h1>
                  </div>
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="tel"
                    placeholder="Phone Number"
                    name="phone"
                    value={userData.phone}
                    onChange={handleChange}
                  ></input>
                </div>
              </div>

              {!showOtp && (
                <div>
                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                  >
                    Login
                  </button>
                </div>
              )}
            </div>
            <Toaster />
          </form>
          {showOtp && (
            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor=""
                  className="text-base font-medium text-gray-900"
                >
                  {" "}
                  OTP{" "}
                </label>
              </div>
              <div className="mt-2">
                <input
                  className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  type="text"
                  placeholder="OTP"
                  name="otp"
                  value={userOtp}
                  onChange={(e) => setUserOtp(e.target.value)}
                ></input>
              </div>
              <div className="mt-4">
                <button
                  onClick={handleVerifyToken}
                  disabled={loading}
                  className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                >
                  {loading ? "Verifying..." : "Verify OTP"}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Page;
