import React from "react";

export default function Navbar() {
  return (
    <nav className="">
      <div className="bg-blue-600 h-20 top-0 fixed w-full">
        <div className="flex justify-between items-center max-w-6xl m-auto h-20">
          <div className="text-2xl text-white font-bold uppercase">
            Flex Box
          </div>
          <ul className="flex justify-around h-20">
            <li className="p-2 text-gray-300 hover:bg-blue-500 hover:text-white flex items-center">
              <a href="#">HOME</a>
            </li>
            <li className="p-2 text-gray-300 hover:bg-blue-500 hover:text-white flex items-center">
              <a href="#">ABOUT US</a>
            </li>
            <li className="p-2 text-gray-300 hover:bg-blue-500 hover:text-white flex items-center">
              <a href="#">CONTACT US</a>
            </li>
            <li className="p-2 text-gray-300 hover:bg-blue-500 hover:text-white flex items-center">
              <a href="#">SHOP</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
