import React from "react";

import about from "../assets/images/about-1.png";
import about_2 from "../assets/images/about-2.png";
import about_3 from "../assets/images/about-3.png";
import about_4 from "../assets/images/about-4.png";
import AboutCard from "./About/AboutCard";

const About = () => {
  return (
    <div>
      <div className="container mx-auto lg:py-16 py-4 2xl:px-20 lg:px-4 md:px-12 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 2xl:gap-10 xl:gap-15 ">
          {/* left side */}
          <div className="xl:w-[650px] lg:w-[480px] w-full h-auto">
            <img className="rounded-2xl" src={about} alt="" />
          </div>
          {/* right side */}
          <div className="xl:mt-16 mt-8 ml-5 xl:ml-10 2xl:ml-0">
            <h2 className="md:text-[40px] text-3xl font-bold text-[#253D4E]">
              Welcome to Nest
            </h2>
            <p className="text-base text-[#7E7E7E] leading-6 xl:my-6 my-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate id est laborum.
            </p>
            <p className="text-base text-[#7E7E7E] leading-6">
              Ius ferri velit sanctus cu, sed at soleat accusata. Dictas prompta
              et Ut placerat legendos interpre.Donec vitae sapien ut libero
              venenatis faucibus. Nullam quis ante Etiam sit amet orci eget.
              Quis commodo odio aenean sed adipiscing. Turpis massa tincidunt
              dui ut ornare lectus. Auctor elit sed vulputate mi sit amet.
              Commodo consequat. Duis aute irure dolor in reprehenderit in
              voluptate id est laborum.
            </p>

            <div>
              <div className="carousel w-full xl:mt-16 mt-8">
                <div
                  id="slide1"
                  className="carousel-item space-x-4 relative w-full"
                >
                  <img
                    src={about_2}
                    className="2xl:w-52 xl:w-44 lg:w-36 md:w-52 w-full"
                  />
                  <img
                    src={about_3}
                    className="2xl:w-52 xl:w-44 lg:w-36 md:w-52 hidden md:flex"
                  />
                  <img
                    src={about_4}
                    className="2xl:w-52 xl:w-44 lg:w-36 md:w-52 hidden md:flex"
                  />
                  <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide4" className="btn btn-circle">
                      ❮
                    </a>
                    <a href="#slide2" className="btn btn-circle">
                      ❯
                    </a>
                  </div>
                </div>
                <div
                  id="slide2"
                  className="carousel-item space-x-4 relative w-full"
                >
                  <img
                    src={about_2}
                    className="2xl:w-52 xl:w-44 lg:w-36 md:w-52 hidden md:flex"
                  />
                  <img
                    src={about_3}
                    className="2xl:w-52 xl:w-44 lg:w-36 md:w-52 w-full"
                  />
                  <img
                    src={about_4}
                    className="2xl:w-52 xl:w-44 lg:w-36 md:w-52 hidden md:flex"
                  />
                  <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide1" className="btn btn-circle">
                      ❮
                    </a>
                    <a href="#slide3" className="btn btn-circle">
                      ❯
                    </a>
                  </div>
                </div>
                <div
                  id="slide3"
                  className="carousel-item space-x-4 relative w-full"
                >
                  <img
                    src={about_2}
                    className="2xl:w-52 xl:w-44 lg:w-36 md:w-52 hidden md:flex"
                  />
                  <img
                    src={about_3}
                    className="2xl:w-52 xl:w-44 lg:w-36 md:w-52 hidden md:flex"
                  />
                  <img
                    src={about_4}
                    className="2xl:w-52 xl:w-44 lg:w-36 md:w-52 w-full"
                  />
                  <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide2" className="btn btn-circle">
                      ❮
                    </a>
                    <a href="#slide4" className="btn btn-circle">
                      ❯
                    </a>
                  </div>
                </div>
                <div
                  id="slide4"
                  className="carousel-item space-x-4 relative w-full"
                >
                  <img
                    src={about_2}
                    className="2xl:w-52 xl:w-44 lg:w-36 md:w-52 w-full"
                  />
                  <img
                    src={about_3}
                    className="2xl:w-52 xl:w-44 lg:w-36 md:w-52 hidden md:flex"
                  />
                  <img
                    src={about_4}
                    className="2xl:w-52 xl:w-44 lg:w-36 md:w-52 hidden md:flex"
                  />
                  <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide3" className="btn btn-circle">
                      ❮
                    </a>
                    <a href="#slide1" className="btn btn-circle">
                      ❯
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <AboutCard/>
      </div>
    </div>
  );
};

export default About;
