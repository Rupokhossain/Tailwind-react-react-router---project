import React, { useState } from "react";
import logo from "../../../src/assets/images/logo.svg";
import { CiLocationOn, CiMenuBurger } from "react-icons/ci";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineSupervisorAccount,
} from "react-icons/md";
import { GoGitCompare } from "react-icons/go";
import { FaRegHeart } from "react-icons/fa";
import { PiTelegramLogoLight } from "react-icons/pi";
import { IoMdClose } from "react-icons/io";

const TopHeader = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="lg:border-b border-gray-200 md:py-6 py-4 shadow-md lg:shadow-none">
      <div className="flex items-center justify-between container mx-auto gap-6 xl:px-0 md:px-12 px-4">
        <div className="w-[150px] lg:w-[180px]">
          <a href="">
            <img src={logo} alt="" />
          </a>
        </div>

        <div className="lg:flex hidden">
          <form action="" className="w-[600px]">
            <label className=" flex items-center justify-center border-2 border-[#BCE3C9] rounded-lg py-2 px-4 focus-within:outline-none focus:outline-none outline-0 space-x-2">
              <select
                defaultValue=""
                className="text-base font-semibold outline-none cursor-pointer bg-transparent"
              >
                <option disabled={false}>All Categories</option>
                <option>Milks and Dairies</option>
                <option>Wines & Alcohol</option>
                <option>Fast Food</option>
              </select>

              <input
                type="search"
                required
                placeholder="Search for items..."
                className="flex-1 px-2 py-2 focus-within:outline-none focus:outline-none max-w-[500px]"
              />

              <svg
                className="h-6 w-6 opacity-50 cursor-pointer"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.3-4.3"></path>
                </g>
              </svg>
            </label>
          </form>
        </div>

        <div className="2xl:flex hidden shadow-sm p-2 rounded-lg text-[#3BB77E] border border-[#ececec] cursor-pointer hover:translate-y-[-3px] transition-all duration-300">
          <div className="flex items-center gap-1">
            <CiLocationOn />
            <span>Your Location</span>
            <MdOutlineKeyboardArrowDown />
          </div>
        </div>

        <div className="xl:flex hidden  justify-center items-center gap-6">
          <div className="flex items-center gap-2">
            <GoGitCompare className="w-7 h-7 cursor-pointer" />
            <span className="text-base text-gray-400">Compare</span>
          </div>
          <div className="flex items-center gap-2">
            <FaRegHeart className="w-7 h-7 cursor-pointer" />
            <span className="text-base text-gray-400">Wishlist</span>
          </div>
          <div className="flex items-center gap-2">
            <MdOutlineSupervisorAccount className="w-7 h-7 cursor-pointer" />
            <span className="text-base text-gray-400">Account</span>
          </div>
        </div>

        {/* mobile menu icon */}
        <div className="lg:hidden text-2xl" onClick={() => setOpen(!open)}>
           {open ? <IoMdClose /> : <CiMenuBurger />}
        </div>
      </div>

      {open && (
        <div className="mt-10 lg:mt-0">
            <form action="" className="md:w-[600px] w-[300px] lg:hidden mx-auto">
            <label className="lg:hidden flex items-center justify-center border-2 border-[#BCE3C9] rounded-lg py-1 px-4 focus-within:outline-none focus:outline-none outline-0 space-x-2">
              <select
                defaultValue=""
                className="text-base font-semibold outline-none cursor-pointer bg-transparent hidden md:block"
              >
                <option disabled={false}>All Categories</option>
                <option>Milks and Dairies</option>
                <option>Wines & Alcohol</option>
                <option>Fast Food</option>
              </select>

              <input
                type="search"
                required
                placeholder="Search for items..."
                className="flex-1 px-2 py-2 focus-within:outline-none focus:outline-none md:max-w-[500px] max-w-[200px]"
              />

              <svg
                className="h-6 w-6 opacity-50 cursor-pointer"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.3-4.3"></path>
                </g>
              </svg>
            </label>
          </form>
          <div className="lg:hidden ">
                
        <div className="flex flex-col items-center py-3  text-gray-700 font-medium">
          <ul className="text-base font-medium space-y-7">
            <li className="hover:text-[#2a9d67] cursor-pointer transition-all duration-300 ">
              <a>Deals</a>
            </li>
            <li className="hover:text-[#2a9d67] cursor-pointer transition-all duration-300">
              <a>Home</a>
            </li>
            <li className="hover:text-[#2a9d67] cursor-pointer transition-all duration-300">
              <a>About</a>
            </li>
            <li className="hover:text-[#2a9d67] cursor-pointer transition-all duration-300">
              <a>Shop</a>
            </li>
            <li className="hover:text-[#2a9d67] cursor-pointer transition-all duration-300">
              <a>Vendors</a>
            </li>
            <li className="hover:text-[#2a9d67] cursor-pointer transition-all duration-300">
              <a>Mega menu</a>
            </li>
            <li className="hover:text-[#2a9d67] cursor-pointer transition-all duration-300">
              <a>Blog</a>
            </li>
            <li className="hover:text-[#2a9d67] cursor-pointer transition-all duration-300">
              <a>Pages</a>
            </li>
            <li className="hover:text-[#2a9d67] cursor-pointer transition-all duration-300">
              <a>Contact</a>
            </li>
          </ul>
        </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TopHeader;
