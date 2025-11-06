import React from "react";
import { FaStar } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { Link } from "react-router";

const ProductCard = ({ product }) => {
  return (
    <div>
      <div className="border border-[#ececec] rounded-2xl hover:border-[#BCE3C9] cursor-pointer hover:shadow-sm duration-300 transition-all">
        <div className="px-6 pt-6">
          <img src={product.image} alt="" className="max-h-80 w-full" />
        </div>

        <div className="px-5 pb-5">
          <p className="text-[#adadad] text-xs">{product.category}</p>
          <h3 className="text-base font-bold text-[#253D4E] hover:text-[#3BB77E] cursor-pointer duration-300 my-2">{product.title}</h3>
          <div className="flex items-center gap-2">
            <div className="flex text-[#fdc040]">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <p className="text-[#B6B6B3]">({product.rating})</p>
          </div>
          <p className="text-sm tp mt-2">{product.brand}</p>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-lg font-bold text-[#3BB77E]">${product.price}</span>
              <span className="line-through text-sm text-[#adadad] font-bold">${product.oldPrice}</span>
            </div>

            <Link to={`/product/${product.id}`} className="flex items-center rounded-lg cursor-pointer hover:bg-[#3BB77E] hover:text-white transition-all duration-300 hover:-translate-y-[3px]  bg-[#DEF9EC] text-sm font-bold px-5 py-2 text-[#3bb77e]">
              <IoCartOutline  className="mr-1 size-6"/>
              <p>Add</p>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ProductCard;
