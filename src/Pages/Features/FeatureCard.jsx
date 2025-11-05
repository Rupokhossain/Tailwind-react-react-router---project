import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";

// import required modules
import { Navigation, Autoplay } from "swiper/modules";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";

const FeatureCard = ({ featureCard }) => {
  return (
    <div className="relative">
      <Swiper
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 7000,
          disableOnInteraction: false,
        }}
        navigation={{
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 1,
          },
          1024: {
            slidesPerView: 10,
          },
        }}
        modules={[Navigation, Autoplay]}
        className="testimonials-swiper"
      >
        {featureCard.map((feature) => (
          <SwiperSlide>
            <div className="mx-3">
              <div className="bg-[#F4F6FA] flex flex-col items-center py-4 rounded-lg border border-[#F4F6FA] hover:border-[#3bb77e] hover:shadow-lg duration-300 transition-all cursor-pointer ">
                <img
                  className="max-w-20 mb-2"
                  src={feature.image}
                  alt="feature image"
                />

                <div>
                  <h4 className="tc font-bold hover:text-[#3bb77e] transition-all duration-300">
                    {feature.heading}
                  </h4>
                  <p className="text-sm tp">{feature.subheading}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* custom navigation buttons */}
      <div className="absolute -top-15 right-13 flex items-center gap-2 z-10">
        <div className="swiper-button-prev group text-gray-500 bg-[#F2F3F4] hover:bg-[#3BB77E] hover:text-white text-tp border-[#3BB77E] w-12 h-12 rounded-full cursor-pointer transition-all duration-300">
          <GoArrowRight  className="group-hover:text-white p-3" />
        </div>

        <div className="swiper-button-next group bg-[#F2F3F4] hover:bg-[#3BB77E] hover:text-white text-tp border-[#3BB77E] w-12 h-12 rounded-full cursor-pointer transition-all duration-300">
          <GoArrowLeft className="group-hover:text-white p-3" />
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
