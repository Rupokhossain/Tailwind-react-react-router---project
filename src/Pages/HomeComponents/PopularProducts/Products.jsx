import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="container mx-auto pb-15">
      <div>
        <h3 className="text-3xl font-bold mb-11">Popular Products</h3>
      </div>

      <div>
        <div className=" grid grid-cols-5 gap-6">
          {products.map((product) => (
            <ProductCard product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
