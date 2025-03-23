import React from "react";
import { LuArrowDownRight } from "react-icons/lu";
import { Link } from "react-router-dom";

const Section6 = () => {
  return (
    <div className="flex flex-col">
      <div className="bg-[#efe2ff] flex flex-col sm:flex-row">
        <div className="w-[100%] sm:w-[50%] flex flex-col gap-3 items-center justify-center pt-8 sm:pt-0">
          <p className="text-3xl">Year-Round Sale</p>
          <p className="text-8xl text-[#ca3e02] font-bold text-center">
            MUST-HAVES ON SALE
          </p>
          <p className="flex items-center">
            <Link className="text-xl" to="/shop">
              Explore Deals
            </Link>
            <LuArrowDownRight size={23} />
          </p>
        </div>
        <div className="w-[100%] sm:w-[50%]">
          <img className="p-8 w-full h-[100%]" src="./section6-1.avif" alt="" />
        </div>
      </div>

        <div className="flex flex-col items-center justify-center w-full h-[600px] bg-[#f9f2ea] gap-6 p-2">
            <p className="text-3xl text-center">HOME & LIVING ESSENTIALS</p>
            <p className="text-7xl font-bold text-[#ca3e02] text-center">GET READY FOR SPRING</p>
            <p className="text-3xl text-center">Bring in some color to your living space</p>
        </div>

    </div>
  );
};

export default Section6;
