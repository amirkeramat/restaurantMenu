/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";

const Category = ({ items }) => {
    const [mainCategory,setMainCtegory]
  return (
    <div className='category flex justify-between w-[50%] p-4 mt-10'>
      {items.map((item, index) => (
        <button key={index} className="text-2xl">{item}</button>
      ))}
    </div>
  );
};

export default Category;
