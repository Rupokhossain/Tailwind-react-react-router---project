import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { Link, useParams } from "react-router";

const SingleProducts = () => {

    const { id } = useParams();

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const product = products.find(p => p.id == id );

  return (
    <div className="container mx-auto py-12 px-6">
      <div className="grid md:grid-cols-2 gap-10">
        {/* ----------- Image Section ----------- */}
        <div className="flex items-center justify-center bg-gray-50 rounded-2xl overflow-hidden">
          <img
            src={product?.image}
            alt={product?.title}
            className="w-full h-[400px] object-contain"
          />
        </div>

        {/* ----------- Details Section ----------- */}
        <div>
          <h2 className="text-3xl font-bold text-[#253D4E] mb-4">{product?.title}</h2>

          <p className="text-gray-500 mb-4">{product?.shortDescription}</p>

          <div className="flex items-center gap-2 mb-4">
            <div className="flex text-[#fdc040]">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <p className="text-sm text-gray-500">({product?.rating} Ratings)</p>
          </div>

          <p className="text-sm mb-2">
            <span className="font-semibold">Category:</span> {product?.category}
          </p>
          <p className="text-sm mb-2">
            <span className="font-semibold">Brand:</span> {product?.brand}
          </p>
          <p className="text-sm mb-2">
            <span className="font-semibold">Type:</span> {product?.type}
          </p>

          <div className="flex items-center gap-3 mt-6">
            <span className="text-3xl font-bold text-[#3BB77E]">${product?.price}</span>
            <span className="line-through text-gray-400">${product?.oldPrice}</span>
            <span className="bg-[#DEF9EC] text-[#3BB77E] text-sm font-semibold px-3 py-1 rounded-lg">
              {product?.discount}
            </span>
          </div>

          <div className="mt-6">
            <button className="flex items-center bg-[#3BB77E] text-white px-6 py-3 rounded-lg hover:bg-[#2CA163] transition-all duration-300 cursor-pointer">
              <IoCartOutline className="mr-2 text-xl font-semibold" />
              Add to Cart
            </button>
          </div>

          <div className="mt-10">
            <Link
              to="/"
              className="text-[#3BB77E] font-semibold hover:underline duration-300 transition-all"
            >
              ← Back to Products
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProducts;
