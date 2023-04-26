/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";

// eslint-disable-next-line react/prop-types
const Menu = ({ items }) => {
  return (
    <div className='flex justify-center items-center'>
      <div className='menu-container grid-flow-row grid lg:grid-cols-2 gap-2   mt-10'>
        {items.map((item) => (
          <div key={item.id} className='flex h-[200px] duration-500   w-[500px] hover:-translate-y-1 cursor-pointer   bg-sky-100 '>
            <div className='flex-1'>
              <img src={item.img} className='w-[250px] h-[200px]'  />
            </div>
            <div className='flex-[2] flex flex-col justify-start'>
                <span className="flex justify-around mb-2">
                    <h3>{item.title}</h3>
                    <h4>{item.price} $</h4>
                </span>
                <div className="w-[75%] h-[5px] bg-sky-600 rounded-3xl"></div>
                <span className=" text-justify p-4 text-lg font-semibold">
                    {item.desc}
                </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
