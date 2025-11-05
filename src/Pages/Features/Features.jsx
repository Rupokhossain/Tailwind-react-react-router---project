import React from "react";
import FeatureCard from "./FeatureCard";


const featureContent = [
  {
    id: 1,
    heading: "Cake & Milk",
    subheading: "26 Items",
    image:
      "https://nest-frontend-v6.vercel.app/assets/imgs/shop/cat-13.png",
  },
  {
    id: 2,
    heading: "Oganic Kiwi",
    subheading: "28 items",
    image:
      "https://nest-frontend-v6.vercel.app/assets/imgs/shop/cat-12.png",
  },
  {
    id: 3,
    heading: "Peach",
    subheading: "14 items",
    image:
      "https://nest-frontend-v6.vercel.app/assets/imgs/shop/cat-11.png",
  },
  {
    id: 4,
    heading: "Red Apple",
    subheading: "14 items",
    image:
      "https://nest-frontend-v6.vercel.app/assets/imgs/shop/cat-10.png",
  },
  {
    id: 5,
    heading: "Snacks",
    subheading: "56 items",
    image:
      "https://nest-frontend-v6.vercel.app/assets/imgs/shop/cat-9.png",
  },
  {
    id: 6,
    heading: "Vegetables",
    subheading: "72 items",
    image:
      "https://nest-frontend-v6.vercel.app/assets/imgs/shop/cat-1.png",
  },
  {
    id: 7,
    heading: "Strawberry",
    subheading: "36 items",
    image:
      "https://nest-frontend-v6.vercel.app/assets/imgs/shop/cat-2.png",
  },
  {
    id: 8,
    heading: "Black Plum",
    subheading: "123 items",
    image:
      "https://nest-frontend-v6.vercel.app/assets/imgs/shop/cat-4.png",
  },
  {
    id: 9,
    heading: "Cusared Apple",
    subheading: "34 items",
    image:
      "https://nest-frontend-v6.vercel.app/assets/imgs/shop/cat-5.png",
  },
  {
    id: 10,
    heading: "Coffee & Tea",
    subheading: "89 items",
    image:
      "https://nest-frontend-v6.vercel.app/assets/imgs/shop/cat-14.png",
  },
  {
    id: 11,
    heading: "Headphones",
    subheading: "87 items",
    image:
      "https://nest-frontend-v6.vercel.app/assets/imgs/shop/cat-15.png",
  },
];

const Features = () => {
  return (
    <div>
      <div className="container mx-auto">
        {/* feature title */}
        <div>
          <h3 className="text-3xl font-bold mb-11">Featured Categories</h3>
        </div>

        {/* features card */}
        <FeatureCard featureCard = {featureContent}/>
      </div>
    </div>
  );
};

export default Features;
