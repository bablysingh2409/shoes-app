import React from "react";
import { SlSocialInstagram } from "react-icons/sl";
import { FaFacebook } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="bg-white border-t border-gray-200 font-book-antiqua ">
            <div className="container w-auto lg:ml-24 px-4 md:px-6 py-4">
                <div className="flex md:flex-wrap justify-center flex-row">
                    <div className="w-full md:w-1/4 mb-6 md:mb-0">
                        <h5 className="text-[#475166] md:text-xl text-[14px] font-semibold mb-2">Manage</h5>
                        <ul className="list-none md:text-[18px] text-[14px]  font-normal font-worksans footer-links">
                            <Link href="/">
                                <li className="mb-2">Home</li>
                            </Link>
                            <Link href="/newarrival">
                                <li className="mb-2">New Arrivals</li>
                            </Link>

                       
                            <Link href="/collections">
                                <li className="mb-2">Collections</li>
                            </Link>
                            <li className="mb-2">About Us</li>
                        </ul>
                    </div>
                    <div className="w-full md:w-1/4 mb-6 md:mb-0">
                        <h5 className="text-[#475166] md:text-xl text-[14px] font-semibold mb-2">
                            Know More
                        </h5>
                        <ul className="list-none md:text-[18px] text-[14px] font-normal font-worksans footer-links ">
                            <li className="mb-2 cursor-pointer">Terms & Conditions</li>
                            <Link href="/privacy"><li className="mb-2">Privacy Policy</li></Link>
                            <Link href="/return&exchange">
                                <li className="mb-2 cursor-pointer">Return & Exchange</li>

                            </Link>
                            <Link href="/shipping">
                                <li className="mb-2 cursor-pointer">Shipping & Delivery</li>
                            </Link>
                            <Link href="/contactus">
                                <li className="mb-2 cursor-pointer">Contact Us</li>

                            </Link>
                        </ul>
                    </div>

                    <div className="w-full md:w-1/4 mb-6 md:mb-0">
                        <h5 className="text-[#475166] md:text-xl text-[14px] font-semibold mb-2">
                            Get in Touch
                        </h5>
                        <ul className="list-none md:text-[18px] text-[14px] font-normal font-worksans footer-links">
                            <li className="mb-2">Jaipur,
                            </li>
                            <li className="mb-2">Rajasthan
                            </li>

                        </ul>
                    </div>
                    <div className="w-full md:w-1/4 mb-6 md:mb-0 md:pl-5">
                        <h5 className="text-[#475166] md:text-xl text-[14px] font-semibold mb-2">Follow Us</h5>
                        <ul className="list-none md:text-[18px] text-[14px] font-normal font-worksans footer-links">
                            <li className="mb-2 flex items-center text-black">
                                <a className="flex items-center" href="https://www.instagram.com/stomizeofficial?igsh=MXVscWdiYnJsaTR1eg%3D%3D&utm_source=qr" target="_blank">
                                    <SlSocialInstagram />
                                    <div className="px-2 md:text-[18px] text-[14px]"> Instagram </div>
                                </a>
                            </li>
                            <li className="mb-2 flex items-center">
                                <a className="flex items-center" href="https://www.facebook.com/share/sr66pArebqEP1knm/?mibextid=WC7FNe" target="_blank">
                                    <FaFacebook />
                                    <div className="px-2 md:text-[18px] text-[14px]"> Facebook </div>
                                </a>
                            </li>
                        </ul>


                    </div>

                    {/* Repeat blocks for other columns like 'Who We Help', 'Services', etc. */}
                </div>
                {/* Newsletter section */}
                <div className="flex flex-wrap justify-center items-center mt-8">
                    <p className="w-full md:w-1/4 text-gray-600 text-sm text-center">
                        Join us and receive insights in your inbox
                    </p>
                    <div className="w-full md:w-3/4 md:flex md:justify-center items-center mt-4 md:mt-0">
                        <form
                            action="#"
                            method="POST"
                            className="flex w-full items-center max-w-sm space-x-3"
                        >
                            <div className=" relative  px-4 ">
                                <input
                                    type="email"
                                    className="block w-full px-6 py-2 text-gray-700 bg-white border rounded-md focus:border-green-500"
                                    placeholder="Email address*"
                                    required
                                />
                            </div>
                            <div className=" md:mt-0  ">
                                <button
                                    type="submit"
                                    className="px-4 py-2 text-white bg-black rounded-md"
                                >
                                    Subscribe
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="py-5 px-5 border-t-2 flex flex-col sm:flex-row sm:justify-between">
                <p className=" text-[#475166] text-[14px] font-[400] sm:leading-[30px] py-2 sm:py-0">
                    Copyright © 2024 Stomize. All rights reserved.
                </p>
                <p className=" text-[#475166] text-[14px] font-[400] sm:leading-[30px]">
                    Created & Powered By Mulltiply. 
                </p>
            </div>
        </footer>
    );
};

export default Footer;
