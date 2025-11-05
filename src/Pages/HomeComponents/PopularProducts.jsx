import React from "react";
import { LuArrowRight } from "react-icons/lu";

const PopularProducts = () => {
  return (
    <div className="container mx-auto py-16">
      <div className="grid grid-cols-3 gap-6">
        <div className='relative bg-[url("https://nest-frontend-v6.vercel.app/assets/imgs/banner/banner-1.png")] h-72 w-full bg-center bg-cover bg-no-repeat m-2 rounded-xl'>
          <div className="absolute top-[50%] translate-y-[-50%] z-50 px-12">
            <h4 className="tc text-2xl font-bold w-56 mb-8 h-24">
              Everyday Fresh & Clean with Our Products
            </h4>
            <div>
              <button className="text-sm font-bold px-4 py-2 bg-[#3BB77E] text-white flex items-center rounded-lg cursor-pointer hover:bg-[#fdc040] transition-all duration-300 ">
                Shop Now <LuArrowRight className="ml-2 text-xs" />
              </button>
            </div>
          </div>
        </div>

        <div className='relative bg-[url("https://nest-frontend-v6.vercel.app/assets/imgs/banner/banner-2.png")] h-72 w-full bg-center bg-cover bg-no-repeat m-2 rounded-xl'>
          <div className="absolute top-[50%] translate-y-[-50%] z-50 px-12">
            <h4 className="tc text-2xl font-bold w-56 mb-8 h-24">
              Make your Breakfast Healthy and Easy
            </h4>
            <div>
              <button className="text-sm font-bold px-4 py-2 bg-[#3BB77E] text-white flex items-center rounded-lg cursor-pointer hover:bg-[#fdc040] transition-all duration-300 ">
                Shop Now <LuArrowRight className="ml-2 text-xs" />
              </button>
            </div>
          </div>
        </div>

        <div className='relative bg-[url("https://nest-frontend-v6.vercel.app/assets/imgs/banner/banner-3.png")] h-72 w-full bg-center bg-cover bg-no-repeat m-2 rounded-xl'>
          <div className="absolute top-[50%] translate-y-[-50%] z-50 px-12">
            <h4 className="tc text-2xl font-bold w-56 mb-8 h-24">
              The best Organic Products Online
            </h4>
            <div>
              <button className="text-sm font-bold px-4 py-2 bg-[#3BB77E] text-white flex items-center rounded-lg cursor-pointer hover:bg-[#fdc040] transition-all duration-300 ">
                Shop Now <LuArrowRight className="ml-2 text-xs" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularProducts;
