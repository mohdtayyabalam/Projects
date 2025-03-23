import React from "react";
import { LuArrowDownRight } from "react-icons/lu";
import { Link } from "react-router-dom";

const Section3 = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-between pt-10 bg-[#f9f2ea]">
      <div className="pb-5">
        <p className="text-8xl font-bold text-[#ca3e02] sm:w-[70%] pl-7 sm:pl-14">
          THE GIFT OF GOOD STYLE
        </p>
      </div>
      <div className="pb-5">
        <p className="text-4xl text-[#ca3e02] sm:w-[60%] pl-5">
          Unique designs you won't find anywhere else
        </p>
        <div className="pl-5 flex items-center gap-1 pt-5">
          <Link className="text-xl text-[#ca3e02]" to="/shop">
            Shop Now
          </Link>
          <LuArrowDownRight size={23} color="#ca3e02" />
        </div>
      </div>
    </div>
  );
};

export default Section3;
