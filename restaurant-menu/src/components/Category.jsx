/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./category.css";
const Category = ({ items, filterMenu }) => {
  const [mainCategory, setMainCategory] = useState("All");
  return (
    <div className='category flex justify-between w-[75%] p-4  mt-10'>
      {items.map((item, index) => (
        <button
          onClick={() => {
            setMainCategory(item);
            filterMenu(item);
          }}
          key={index}
          className={`bg-white duration-700 text-xl bg-opacity-10 relative p-2 rounded-2xl w-[120px] ${
            mainCategory === item && "highlight "
          }`}>
          {item}
          <span
            className={`absolute -bottom-2 left-0 duration-500 rounded-e-lg ease-in  h-[5px] bg-sky-400  ${
              mainCategory === item ? "w-[100%]" : "w-0"
            }`}></span>
        </button>
      ))}
    </div>
  );
};

export default Category;
