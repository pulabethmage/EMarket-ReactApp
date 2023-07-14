import React from "react";

function Card({ title, status }) {
  return (
    <div
      className={
        status
          ? "bg-blue-300 p-5 rounded-xl hover:bg-blue-400"
          : "bg-gray-200 p-5 rounded-xl  hover:bg-gray-300"
      }
    >
      {title}
    </div>
  );
}

export default Card;
