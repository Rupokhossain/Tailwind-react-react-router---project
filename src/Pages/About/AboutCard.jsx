import React from "react";
import wave from "../../assets/images/wave.png";
import icon_1 from "../../assets/images/icon-1.svg";
import icon_2 from "../../assets/images/icon-2.svg";
import icon_3 from "../../assets/images/icon-3.svg";
import icon_4 from "../../assets/images/icon-4.svg";
import icon_5 from "../../assets/images/icon-5.svg";
import icon_6 from "../../assets/images/icon-6.svg";

const AboutCard = () => {
  return (
    <div>
      <div className="py-16">
        {/* card title */}
        <div className="flex flex-col items-center">
          <h2 className="text-[40px] font-bold text-[#253D4E] mb-2">
            What We Provide?
          </h2>
          <img src={wave} alt="" />
        </div>

        {/* card section */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 mt-12 ">
          <div className="card xl:w-96 w-72 shadow-sm border border-[#ececec] cursor-pointer hover:shadow-lg duration-300 transition-all">
            <figure className="px-10 pt-10">
              <img src={icon_1} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="text-2xl font-bold text-[#253D4E] mb-7">Best Prices & Offers</h2>
              <p className="text-base text-[#7E7E7E] leading-6">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form
              </p>
              <div className="card-actions">
                <a href="#" className="text-base text-[#3BB77E] hover:text-[#FDC040] duration-300 my-7">Read more</a>
              </div>
            </div>
          </div>
          <div className="card xl:w-96 w-72 shadow-sm border border-[#ececec] cursor-pointer hover:shadow-lg duration-300 transition-all">
            <figure className="px-10 pt-10">
              <img src={icon_2} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="text-2xl font-bold text-[#253D4E] mb-7">Wide Assortment</h2>
              <p className="text-base text-[#7E7E7E] leading-6">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form
              </p>
              <div className="card-actions">
                <a href="#" className="text-base text-[#3BB77E] hover:text-[#FDC040] duration-300 my-7">Read more</a>
              </div>
            </div>
          </div>
          <div className="card xl:w-96 w-72 shadow-sm border border-[#ececec] cursor-pointer hover:shadow-lg duration-300 transition-all">
            <figure className="px-10 pt-10">
              <img src={icon_3} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="text-2xl font-bold text-[#253D4E] mb-7">Free Delivery</h2>
              <p className="text-base text-[#7E7E7E] leading-6">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form
              </p>
              <div className="card-actions">
                <a href="#" className="text-base text-[#3BB77E] hover:text-[#FDC040] duration-300 my-7">Read more</a>
              </div>
            </div>
          </div>
          <div className="card xl:w-96 w-72 shadow-sm border border-[#ececec] cursor-pointer hover:shadow-lg duration-300 transition-all">
            <figure className="px-10 pt-10">
              <img src={icon_4} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="text-2xl font-bold text-[#253D4E] mb-7">Easy Returns</h2>
              <p className="text-base text-[#7E7E7E] leading-6">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form
              </p>
              <div className="card-actions">
                <a href="#" className="text-base text-[#3BB77E] hover:text-[#FDC040] duration-300 my-7">Read more</a>
              </div>
            </div>
          </div>
          <div className="card xl:w-96 w-72 shadow-sm border border-[#ececec] cursor-pointer hover:shadow-lg duration-300 transition-all">
            <figure className="px-10 pt-10">
              <img src={icon_5} alt="Shoes" className="rounded-xl" />
            </figure>
             <div className="card-body items-center text-center">
              <h2 className="text-2xl font-bold text-[#253D4E] mb-7">100% Satisfaction</h2>
              <p className="text-base text-[#7E7E7E] leading-6">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form
              </p>
              <div className="card-actions">
                <a href="#" className="text-base text-[#3BB77E] hover:text-[#FDC040] duration-300 my-7">Read more</a>
              </div>
            </div>
          </div>
          <div className="card xl:w-96 w-72 shadow-sm border border-[#ececec] cursor-pointer hover:shadow-lg duration-300 transition-all">
            <figure className="px-10 pt-10">
              <img src={icon_6} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="text-2xl font-bold text-[#253D4E] mb-7">Great Daily Deal</h2>
              <p className="text-base text-[#7E7E7E] leading-6">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form
              </p>
              <div className="card-actions">
                <a href="#" className="text-base text-[#3BB77E] hover:text-[#FDC040] duration-300 my-7">Read more</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCard;
