import React from "react";
import { FaRocket, FaCartPlus } from "react-icons/fa";
import plant from "../images/01.jpg";

function Card({ title, subtitle, longdesc, status }) {
  return (
    <div
      className={
        status
          ? "bg-gradient-to-r from-blue-300 to-blue-400 p-5 rounded-xl hover:bg-blue-100"
          : "bg-gray-200 p-5 rounded-xl  hover:bg-gray-300"
      }
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <FaRocket />
          <div className="font-bold text-lg font-display ml-3">{title}</div>
        </div>
        <div>
          <div className="flex items-center bg-white py-1 px-3 rounded-md border-b-2 border-black  hover:bg-yellow-100 cursor-pointer">
            <FaCartPlus />
          </div>
        </div>
      </div>
      <div className="font-display text-xs">{subtitle}</div>
      <div className="flex mt-2 items-center">
        <div className="flex-1 font-display text-sm  p-5">
          <h1 className="text-center">{longdesc}</h1>
          <h1 className="bg-white py-1 rounded-md text-center mx-20 mt-3 hover:bg-gray-400 duration-300 cursor-pointer">
            View
          </h1>
        </div>
        <div className="flex-2">
          <img src={plant} className="rounded-full w-60 h-60 " />
        </div>
      </div>
    </div>
  );
}

export default Card;
