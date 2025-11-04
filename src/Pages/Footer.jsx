import React from "react";
import logo from "../../src/assets/images/logo.svg";
import icon_loation from "../../src/assets/images/icon-location.svg";
import icon_contact from "../../src/assets/images/icon-contact.svg";
import icon_email from "../../src/assets/images/icon-email-2.svg";
import icon_clock from "../../src/assets/images/icon-clock.svg";
import app_store from "../../src/assets/images/app-store.jpg";
import google_play from "../../src/assets/images/google-play.jpg";
import payment from "../../src/assets/images/payment-method.png";

import { FaFacebookF, FaInstagram, FaPhoneAlt, FaPinterestP, FaTwitter, FaYoutube } from "react-icons/fa";


const Footer = () => {
  return (
    <div>
      <footer className="">
        <div className="container mx-auto px-4">
          {/* Top section */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-7 lg:grid-cols-5 gap-6 pb-10 border-b border-green-200">
            {/* Company Info */}
            <div className="2xl:col-span-2 col-span-0 ">
              <div className="flex items-center gap-2 mb-3">
                <img src={logo} alt="Nest Logo" />
              </div>
              <p className="text-[#253D4E] text-base mb-4">
                Awesome grocery store website template
              </p>
              <ul className="space-y-2 text-[#253D4E] text-base">
                <li className="flex items-start gap-2">
                  <img src={icon_loation} alt="" />
                  <p><strong>Address:</strong> 5171 W Campbell Ave, Kent, Utah 53127, USA</p>
                </li>
                <li className="flex items-center gap-2">
                  <img src={icon_contact} alt="" />
                  <p><strong>Call Us:</strong> (+91) - 540-025-124553</p>
                </li>
                <li className="flex items-center gap-2">
                  <img src={icon_email} alt="" />
                  <p><strong>Email:</strong> sale@Nest.com</p>
                </li>
                <li className="flex items-center gap-2">
                  <img src={icon_clock} alt="" />
                  <p><strong>Hours:</strong> 10:00 - 18:00, Mon - Sat</p>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-2xl font-bold text-[#253D4E] mb-4">
                Company
              </h3>
              <ul className="space-y-2 ">
                <li className="text-[#253D4E] text-base cursor-pointer hover:text-[#3BB77E] duration-300">About Us</li>
                <li className="text-[#253D4E] text-base cursor-pointer hover:text-[#3BB77E] duration-300">Delivery Information</li>
                <li className="text-[#253D4E] text-base cursor-pointer hover:text-[#3BB77E] duration-300">Privacy Policy</li>
                <li className="text-[#253D4E] text-base cursor-pointer hover:text-[#3BB77E] duration-300">Terms & Conditions</li>
                <li className="text-[#253D4E] text-base cursor-pointer hover:text-[#3BB77E] duration-300">Contact Us</li>
                <li className="text-[#253D4E] text-base cursor-pointer hover:text-[#3BB77E] duration-300">Support Center</li>
                <li className="text-[#253D4E] text-base cursor-pointer hover:text-[#3BB77E] duration-300">Careers</li>
              </ul>
            </div>

            {/*  Account */}
            <div>
              <h3 className="text-2xl font-bold text-[#253D4E] mb-4">
                Account
              </h3>
              <ul className="space-y-2">
                <li className="text-[#253D4E] text-base cursor-pointer hover:text-[#3BB77E] duration-300">Sign In</li>
                <li className="text-[#253D4E] text-base cursor-pointer hover:text-[#3BB77E] duration-300">View Cart</li>
                <li className="text-[#253D4E] text-base cursor-pointer hover:text-[#3BB77E] duration-300">My Wishlist</li>
                <li className="text-[#253D4E] text-base cursor-pointer hover:text-[#3BB77E] duration-300">Track My Order</li>
                <li className="text-[#253D4E] text-base cursor-pointer hover:text-[#3BB77E] duration-300">Help Ticket</li>
                <li className="text-[#253D4E] text-base cursor-pointer hover:text-[#3BB77E] duration-300">Shipping Details</li>
                <li className="text-[#253D4E] text-base cursor-pointer hover:text-[#3BB77E] duration-300">Compare Products</li>
              </ul>
            </div>

            {/* Corporate */}
            <div>
              <h3 className="text-2xl font-bold text-[#253D4E] mb-4">
                Corporate
              </h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li className="text-[#253D4E] text-base cursor-pointer hover:text-[#3BB77E] duration-300">Become a Vendor</li>
                <li className="text-[#253D4E] text-base cursor-pointer hover:text-[#3BB77E] duration-300">Affiliate Program</li>
                <li className="text-[#253D4E] text-base cursor-pointer hover:text-[#3BB77E] duration-300">Farm Business</li>
                <li className="text-[#253D4E] text-base cursor-pointer hover:text-[#3BB77E] duration-300">Our Suppliers</li>
                <li className="text-[#253D4E] text-base cursor-pointer hover:text-[#3BB77E] duration-300">Accessibility</li>
                <li className="text-[#253D4E] text-base cursor-pointer hover:text-[#3BB77E] duration-300">Promotions</li>
              </ul>
            </div>

            
            {/* Popular */}
            <div>
              <h3 className="text-2xl font-bold text-[#253D4E] mb-4">
                Popular
              </h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li className="text-[#253D4E] text-base cursor-pointer hover:text-[#3BB77E] duration-300">Milk & Flavoured Milk</li>
                <li className="text-[#253D4E] text-base cursor-pointer hover:text-[#3BB77E] duration-300">Butter and Margarine</li>
                <li className="text-[#253D4E] text-base cursor-pointer hover:text-[#3BB77E] duration-300">Eggs Substitutes</li>
                <li className="text-[#253D4E] text-base cursor-pointer hover:text-[#3BB77E] duration-300">Marmalades</li>
                <li className="text-[#253D4E] text-base cursor-pointer hover:text-[#3BB77E] duration-300">Accessibility</li>
                <li className="text-[#253D4E] text-base cursor-pointer hover:text-[#3BB77E] duration-300">Promotions</li>
              </ul>
            </div>

            {/* Install App */}
            <div>
              <h3 className="text-2xl font-bold text-[#253D4E] mb-4">
                Install App
              </h3>
              <p className="text-sm text-[#253D4E] mb-3">
                From App Store or Google Play
              </p>
              <div className="flex gap-3 mb-4">
                <img src={app_store} alt="App Store" className="w-32" />
                <img src={google_play} alt="Play Store" className="w-32" />
              </div>
              <p className="text-sm text-[#253D4E] my-4">
                Secured Payment Gateways
              </p>
              <img src={payment} alt="" />
            </div>
          </div>

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-center py-6 text-sm text-gray-600 gap-4">
            <p>
              © 2024 <span className="text-green-600 font-semibold">Nest</span>
              - HTML Ecommerce Template. All rights reserved.
            </p>
            <div className="flex items-center gap-8">
              <div className="">
                <FaPhoneAlt className="inline text-green-600 mr-2" />
                <span className="font-bold lg:text-2xl text-base text-[#3BB77E]">
                  1900 - 6666
                </span>
                <p className="text-xs text-[#253D4E]">Working 8:00 - 22:00</p>
              </div>
              <div className="">
                <FaPhoneAlt className="inline text-green-600 mr-2" />
                <span className="font-bold lg:text-2xl text-base text-[#3BB77E]">
                  1900 - 8888
                </span>
                <p className="text-xs text-[#253D4E]">24/7 Support Center</p>
              </div>
            </div>
          </div>

          {/* Socials */}
          <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-200 pt-4 pb-8">
            <div className="flex gap-3 text-white">
              <a
                href="#"
                className="bg-green-600 p-2 rounded-full hover:bg-green-700"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="bg-green-600 p-2 rounded-full hover:bg-green-700"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="bg-green-600 p-2 rounded-full hover:bg-green-700"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="bg-green-600 p-2 rounded-full hover:bg-green-700"
              >
                <FaPinterestP />
              </a>
              <a
                href="#"
                className="bg-green-600 p-2 rounded-full hover:bg-green-700"
              >
                <FaYoutube />
              </a>
            </div>
            <p className="text-sm text-gray-500 mt-3 md:mt-0">
              Up to 15% discount on your first subscribe
            </p>
        
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
