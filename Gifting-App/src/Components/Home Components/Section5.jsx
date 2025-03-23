import React from "react";
import { LuArrowDownRight } from "react-icons/lu";
import { Link } from "react-router-dom";

const Section5 = () => {
  return (
    <div className="bg-[#f9f2ea] pb-16">
      <div className="flex gap-1 items-center pl-5">
        <p className="text-[17px] text-[#ca3e02]"><Link to="/shop">Explore Deals</Link></p>
        <LuArrowDownRight size={23} color="#ca3e02" />
      </div>
      <div className="pt-6 px-4 pb-6 flex flex-wrap sm:flex-nowrap gap-4">
        <div className="flex flex-col gap-1">
          <div>
            <img src="./section5-1.avif" alt="" />
          </div>
          <div>
            <p className="text-[17px] font-semibold">Notebook</p>
          </div>
          <div>
            <p className="text-[17px] font-semibold">$14.00</p>
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <div>
            <img src="./section5-2.avif" alt="" />
          </div>
          <div>
            <p className="text-[17px] font-semibold">Cosmetic Case</p>
          </div>
          <div>
            <p className="text-[17px] font-semibold">$24.00</p>
          </div>
        </div>
        <div className="hidden sm:flex flex-col gap-1">
          <div>
            <img src="./section5-3.avif" alt="" />
          </div>
          <div>
            <p className="text-[17px] font-semibold">Flowers Print</p>
          </div>
          <div>
            <p className="text-[17px] font-semibold">$39.00</p>
          </div>
        </div>
        <div className="hidden sm:flex flex-col gap-1">
          <div>
            <img src="./section5-4.avif" alt="" />
          </div>
          <div>
            <p className="text-[17px] font-semibold">Wall Calender</p>
          </div>
          <div>
            <p className="text-[17px] font-semibold">$35.00</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section5;
