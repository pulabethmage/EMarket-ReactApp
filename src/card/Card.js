import React from "react";

function Card({ title, subtitle, status }) {
  return (
    <div
      className={
        status
          ? "bg-blue-300 p-5 rounded-xl hover:bg-blue-400"
          : "bg-gray-200 p-5 rounded-xl  hover:bg-gray-300"
      }
    >
      <div className="font-bold text-lg font-display">{title}</div>
      <div className="font-display text-sm">{subtitle}</div>
      <div className="font-display ">{subtitle}</div>
    </div>
  );
}

export default Card;
