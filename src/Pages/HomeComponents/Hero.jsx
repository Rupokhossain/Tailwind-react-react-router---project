// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import email from "../../../src/assets/images/icon-email-2.svg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";

// import required modules
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import {
  MdOutlineArrowBackIosNew,
  MdOutlineArrowForwardIos,
} from "react-icons/md";

const sliderContent = [
  {
    id: 1,
    heading: "Fresh Vegetables Big Discount",
    subheading: "Save up to 50% off on your first order",
    image:
      "https://nest-frontend-v6.vercel.app/assets/imgs/slider/slider-2.png",
  },
  {
    id: 2,
    heading: "Don't Miss Amazing Grocery Deals",
    subheading: "Sign up for the daily newsletter",
    image:
      "https://nest-frontend-v6.vercel.app/assets/imgs/slider/slider-1.png",
  },
];

export default function App() {
  return (
    <div className="container mx-auto py-16 relative">
      <Swiper
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        navigation={{
          // clickable: true,
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
        }}
        pagination={{
          clickable: true,
          renderBullet: function (index, className) {
            return `<span class="${className} custom-bullet"></span>`;
          },
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 1,
          },
          1024: {
            slidesPerView: 1,
          },
        }}
        modules={[Pagination, Navigation, Autoplay]}
        className="testimonials-swiper"
      >
        {sliderContent.map((slide) => (
          <SwiperSlide>
            <div>
              <div className="">
                <div
                  className="h-[532px] bg-cover bg-center rounded-4xl "
                  style={{ backgroundImage: `url('${slide.image}')` }}
                >
                  <div className="flex flex-col absolute top-[50%] left-[6%] -translate-y-[50%]">
                    <h2 className="text-[72px] font-bold tc w-2xl leading-20">
                      {slide.heading}
                    </h2>
                    <p className="text-3xl tp my-12">{slide.subheading}</p>

                    <form
                      action=""
                      className="bg-white max-w-[450px] rounded-[50px] flex items-center gap-2 pl-5 "
                    >
                      <img src={email} alt="" />
                      <input
                        type="email"
                        placeholder="Your email address"
                        className="h-16 border-none focus-within:outline-0  w-full "
                      />
                      <button
                        type="submit"
                        className="tb py-5 px-10 rounded-[50px] text-white cursor-pointer hover:bg-[#298f5f] text-base font-medium"
                      >
                        Subscribe
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* custom navigation */}
      <div className="swiper-button-prev group absolute top-50  bg-white hover:bg-[#3BB77E] hover:text-white text-tp border-[#3BB77E] w-12 h-12 rounded-full cursor-pointer transition-all duration-300">
        <div className="">
          <MdOutlineArrowBackIosNew className="group-hover:text-white" />
        </div>
      </div>

      <div className="swiper-button-next group absolute top-50  bg-white hover:bg-[#3BB77E] hover:text-white text-tp border-[#3BB77E] w-12 h-12 rounded-full cursor-pointer transition-all duration-300">
        <div className="">
          <MdOutlineArrowForwardIos className="group-hover:text-white" />
        </div>
      </div>
    </div>
  );
}
