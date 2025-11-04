import { BiCategory } from "react-icons/bi";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import headphone from "../../../src/assets/images/icon-headphone.svg";
import { CiMenuBurger } from "react-icons/ci";
import { Link } from "react-router";

const Header = () => {
  

  return (
    <div className="lg:border-b border-gray-200 py-6">
      <div className="lg:flex items-center justify-between container xl:gap-6 gap-3 mx-auto xl:px-0 md:px-12 px-4 hidden">
        <div className="flex items-center gap-2 bg-[#3bb77e] text-white rounded-lg px-4 py-2 cursor-pointer hover:bg-[#2a9d67] transition-all duration-300 2xl:text-lg text-sm font-semibold">
          <BiCategory />
          <h2>Browse All Categories </h2>
          <MdOutlineKeyboardArrowDown />
        </div>

        <div>
          <ul className="flex items-center xl:gap-10 gap-8 text-base font-medium ">
            <li className="hover:text-[#2a9d67] cursor-pointer transition-all duration-300 xl:flex hidden">
              <a>Deals</a>
            </li>
            <li className="hover:text-[#2a9d67] cursor-pointer transition-all duration-300">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:text-[#2a9d67] cursor-pointer transition-all duration-300">
              <Link to="/about">About</Link>
            </li>
            <li className="hover:text-[#2a9d67] cursor-pointer transition-all duration-300">
              <a>Shop</a>
            </li>
            <li className="hover:text-[#2a9d67] cursor-pointer transition-all duration-300">
              <a>Vendors</a>
            </li>
            <li className="hover:text-[#2a9d67] cursor-pointer transition-all duration-300">
              <a>Mega menu</a>
            </li>
            <li className="hover:text-[#2a9d67] cursor-pointer transition-all duration-300">
              <a>Blog</a>
            </li>
            <li className="hover:text-[#2a9d67] cursor-pointer transition-all duration-300">
              <a>Pages</a>
            </li>
            <li className="hover:text-[#2a9d67] cursor-pointer transition-all duration-300">
              <a>Contact</a>
            </li>
          </ul>
        </div>

        <div className="hidden xl:flex items-center gap-4">
          <img src={headphone} alt="" />
          <div className="">
            <h3 className="text-[#3bb77e] text-2xl font-bold">1900 - 888</h3>
            <p className="text-xs text-gray-400">24/7 Support Center</p>
          </div>
        </div>

      </div>
    </div>

  );
};

export default Header;
