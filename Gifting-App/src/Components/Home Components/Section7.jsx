import React from "react";
import { LuArrowDownRight } from "react-icons/lu";
import { FiArrowUpRight } from "react-icons/fi";
import { Link } from "react-router-dom";

const Section7 = () => {
  const items = [
    {
      image: "./section7-1.jpg",
      title: "Flower Pillow",
      price: "$21.00",
    },
    {
      image: "./section7-2.jpg",
      title: "Flower Print",
      price: "$39.00",
    },
    {
      image: "./section7-3.jpg",
      title: "Serving Bowl",
      price: "$24.00",
    },
    {
      image: "./section7-4.jpg",
      title: "Tapered Candles: Set of 2",
      price: "$15.00",
    },
  ];

  return (
    <div className="bg-[#f9f2ea]">
      <div className="flex gap-1 items-center pl-3 pb-5">
        <p className="text-xl text-[#ca3e02]">
          <Link to="/shop">Shop Now</Link>
        </p>
        <p>
          <LuArrowDownRight size={23} color="#ca3e02" />
        </p>
      </div>

      <div className="pt-6 px-4 pb-6 flex flex-wrap sm:flex-nowrap gap-4 w-full">
        {items.map((item, index) => {
          return (
            <div key={index} className="flex flex-col gap-1 w-full">
              <div>
                <img className="w-[100%]" src={item.image} alt="" />
              </div>
              <div>
                <p className="text-[17px] font-semibold">{item.title}</p>
              </div>
              <div>
                <p className="text-[17px] font-semibold">{item.price}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="w-full pt-20">
        <marquee behavior="" direction="" loop="infinite" scrollamount="10">
          <div className="flex items-center">
            <p className="text-8xl text-[#ca3e02] font-bold" >GOODY VIBES </p>
            <p>
              <FiArrowUpRight size={90} color="#ca3e02"/>
            </p>
            <p className="text-8xl text-[#ca3e02] font-bold" >GOODY VIBES </p>
            <p>
              <FiArrowUpRight size={90} color="#ca3e02"/>
            </p>
            <p className="text-8xl text-[#ca3e02] font-bold" >GOODY VIBES </p>
            <p>
              <FiArrowUpRight size={90} color="#ca3e02"/>
            </p>
            <p className="text-8xl text-[#ca3e02] font-bold" >GOODY VIBES </p>
            <p>
              <FiArrowUpRight size={90} color="#ca3e02"/>
            </p>
          </div>
        </marquee>
      </div>
    </div>
  );
};

export default Section7;
