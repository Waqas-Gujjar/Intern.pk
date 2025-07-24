import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoSearchSharp } from "react-icons/io5";
import { MdRefresh } from "react-icons/md";
import { TbLayoutList } from "react-icons/tb";
import { IoSettingsOutline } from "react-icons/io5";
import { IoApps } from "react-icons/io5";
import Image from "../assets/image/image.png"; // Adjust the path as necessary

const Navbar = ({ toggleSidebar }) => {
  const handleSearch = (e) => {};

  return (
    <>
      <nav className="border-b border-gray-200 ">
        <div className="flex items-center px-4 py-1 justify-start bg-[#ffffff]">
          <div className="flex items-center gap-2">
            <div
              className="hover:bg-gray-200 hover:bg-opacity-10 cursor-pointer rounded-full p-2"
              onClick={toggleSidebar}
            >
              <RxHamburgerMenu size={15} />
            </div>
            <div className="flex items-center gap-1">
              <img className="h-7" src="./src/assets/image/keep.png" alt="" />
              <p className="text-gray-600 text">Keep</p>
            </div>
          </div>
          <div className="ml-16 items-center bg-gray-100 py-2 rounded-sm px-2 gap-5 flex w-[500px] focus-within:bg-white focus-within:shadow-lg focus-within:rounded-sm">
            <div className="ml-1 rounded-full cursor-pointer">
              <IoSearchSharp size={15} className="text-gray-500" />
            </div>
            <input
              type="text"
              placeholder="Search"
              className="outline-none font-semibold text-gray-600 bg-transparent w-full input-text"
            />
          </div>
          <div className="flex items-center gap- ml-90">
            <div className="p-2 hover:bg-gray-200 rounded-full cursor-pointer">
              <MdRefresh size={15} className="text-gray-500" />
            </div>
            <div className="p-2 hover:bg-gray-200 rounded-full cursor-pointer">
              <TbLayoutList size={15} className="text-gray-500" />
            </div>
            <div className="p-2 hover:bg-gray-200 rounded-full cursor-pointer">
              <IoSettingsOutline size={15} className="text-gray-500" />
            </div>
          </div>
          <div className="flex items-center gap-2 ml-12">
            <div className="p-2 hover:bg-gray-200 rounded-full cursor-pointer">
              <IoApps size={15} className="text-gray-500" />
            </div>
            <div>
              <img
                src={Image}
                className="w-6 object-cover h-6 rounded-xl"
                alt=""
              />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
