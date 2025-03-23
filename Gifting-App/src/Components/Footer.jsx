import React from "react";
import { IoLogoInstagram } from "react-icons/io5";
import { FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="pt-2 bg-[#f9f2ea] flex flex-col items-center">
      <div className="flex items-center justify-center w-[97%] h-auto sm:h-[200px] bg-[#ca3e02]">
        <p className="text-7xl text-white text-center p-5">Look us up @Goody</p>
      </div>

      <div className="flex flex-col sm:flex-row justify-around px-7 gap-3 text-[#ca3e02] w-full pb-16 pt-16">
        <div>
          <p className="text-6xl font-bold w-[65%] pb-10">THE GIFT OF GOOD STYLE</p>
        </div>

        <div className="pb-10 sm:pb-0">
          <p className="pb-9 text-2xl">SHOP</p>
          <p className="text-xl pb-3"><a href="">Home & Living</a></p>
          <p className="text-xl pb-3"><a href="">Accessories</a></p>
          <p className="text-xl pb-3"><a href="">Stationary</a></p>
          <p className="text-xl pb-3"><a href="">Gift Cards</a></p>
        </div>
        <div className="pb-10 sm:pb-0">
          <p className="pb-9 text-2xl">HELPFULL LINKS</p>
          <p className="text-xl pb-3"><a href="">Terms & Conditions</a></p>
          <p className="text-xl pb-3"><a href="">Privacy Policy</a></p>
          <p className="text-xl pb-3"><a href="">Refund Policy</a></p>
          <p className="text-xl pb-3"><a href="">Shipping policy</a></p>
          <p className="text-xl pb-3"><a href="">Accessibility statement</a></p>
          <p className="text-xl pb-3"><a href="">FAQ</a></p>
        </div>
        <div>
          <p className="pb-9 text-2xl">CONTACT</p>
          <p className="text-xl pb-3"><a href="">info@mysite.com</a></p>
          <p className="text-xl pb-3"><a href="">123-456-7890</a></p>
          <p className="text-xl pb-3"><a href="">500 Terry Francois Street</a></p>
          <p className="text-xl pb-10"><a href="">San Francisco, CA 94158</a></p>
          <p className="flex items-center gap-4">
          <IoLogoInstagram size={40}/>
          <FaFacebookSquare size={40}/>
          <FaXTwitter size={40}/>
          </p>
        </div>
        
      </div>
    </div>
  );
};

export default Footer;
