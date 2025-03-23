import React, { useEffect, useState } from "react";
import { IoReorderThreeOutline } from "react-icons/io5";
import { IoSearchOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { IoBagOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { RxCross1 } from "react-icons/rx";
import { Link } from "react-router-dom";
import { MdDeleteForever } from "react-icons/md";
import Box from "@mui/joy/Box";
import Alert from "@mui/joy/Alert";

const Navbar = ({ cartItem, setInputData, setCartItem }) => {
  const [open, setOpen] = useState(false);
  const [cartShow, setCartShow] = useState(false);
  const [subTotal, setSubtotal] = useState(0);
  const [showAlert, setShowAlert] = useState(false);

  const settingSubTotal = () => {
    let newTotal = 0;

    cartItem.forEach((item) => {
      let itemTotal = item.amount * item.price;
      newTotal = Math.round(newTotal + itemTotal);
    });
    setSubtotal(newTotal);
  };

  const handleChange = (e) => [setInputData(e.target.value)];

  const handleDelete = (id) => {
    let res = cartItem
      .map((item) => {
        if (item.id === id) {
          return {
            ...item,
            amount: Math.max(item.amount - 1, 0),
          };
        }
        return item;
      })
      .filter((item) => item.amount > 0); //applying filter of res that filters out all the item those amount are greater than 0, hence deleteting it

    setCartItem(res);
  };

  const handleBuy = ()=>{
    if(cartItem.length){
      setShowAlert(true)
      setCartItem([])
    }
  }

  useEffect(() => {
    settingSubTotal();
  }, [cartItem]);

  return (
    <div className="flex items-center justify-between p-3 bg-[#f9f2ea] relative">
      <div>
        {open ? (
          <RxCross1
            onClick={() => setOpen(!open)}
            size={50}
            color="#ca3e02"
            className="cursor-pointer"
          />
        ) : (
          <IoReorderThreeOutline
            onClick={() => setOpen(!open)}
            size={50}
            color="#ca3e02"
            className="cursor-pointer"
          />
        )}

        <div
          className={` flex flex-col justify-around z-10 absolute left-0 w-[50vh] h-[99vh] bg-[#f9f2ea] ${
            open ? `` : `translate-x-[-700px]`
          } transition-transform duration-700`}
        >
          <ul className="flex flex-col gap-4 pt-10 pl-3 text-4xl">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/shop">Shop</Link>
            </li>
            <li>
              <Link to="/giftcard">Gift Card</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
          <div className="flex items-center gap-2 w-[25%] pl-3">
            <CgProfile size={30} color="#ca3e02" />
            <p className="text-2xl cursor-pointer">
              <Link to="/login">Login</Link>
            </p>
          </div>
        </div>
      </div>
      <div>
        <p className="font-Poppins text-2xl sm:text-7xl text-center font-semibold text-[#ca3e02] italic">
          Goodies
        </p>
      </div>
      <div className="flex items-center gap-2 pl-2">
        <div className="flex items-center border-2 border-[#ca3e02] rounded-xl px-1 h-9 w-[150px] sm:w-[250px]">
          <IoSearchOutline color="#ca3e02" className="" />
          <input
            type="text"
            className="border-none outline-none bg-[#f9f2ea] px-1 w-[90%]"
            onChange={handleChange}
          />
        </div>
        {/* <div>
            <FaRegHeart size={25} color="#ca3e02" className="hover:scale-110" />
          </div> */}
        <div>
          <IoBagOutline
            onClick={() => setCartShow(!cartShow)}
            size={25}
            color="#ca3e02"
            className="hover:scale-110"
          />
        </div>
        <div
          className={`flex flex-col justify-between absolute top-[74px] right-0 w-[500px] h-[840px] pl-20 sm:pl-0 bg-[#f9f2ea] ${
            cartShow ? `translate-y-[0]` : `translate-y-[-1000px]`
          } duration-700 overflow-y-scroll scrollbar-hide`}
        >
          <div>
            <p className="text-4xl font-semibold tracking-widest ml-10 mt-4">
              Cart
            </p>
            <hr className="pt-10" />
            <div className="flex flex-col gap-5">
              {cartItem.map((item) => {
                return (
                  <div key={item.id} className="flex flex-row gap-5">
                    <img
                      className="w-[100px] h-[100px] ml-10"
                      src={item.image}
                      alt="product-image"
                    />
                    <div className="w-[270px]">
                      <p>{item.title}</p>
                      <p>${Math.round(item.price)}</p>
                      <div className="flex gap-4">
                        <p>Quantity: </p>
                        <p className="border border-black w-7 h-6 text-center bg-gray-400 rounded-sm text-white">
                          {item.amount}
                        </p>
                      </div>
                    </div>
                    <div className="pt-11">
                      <MdDeleteForever
                        onClick={() => handleDelete(item.id)}
                        size={30}
                        color="red"
                        className="cursor-pointer"
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div>
            <hr />
            <div className="flex justify-between px-5 pt-5">
              <p className="text-2xl">Subtotal:</p>
              <p className="text-xl">${subTotal}</p>
            </div>
            <div className="w-full text-center pt-4 pb-4">
              <button className="bg-[#ca3e02] w-[80%] rounded h-7 text-white"
              onClick={handleBuy}>
                Checkout
              </button>
            </div>
            {showAlert && (
              <Box
                onClick={()=>setShowAlert(false)}
                sx={{ width: "100%" }}
                className="cursor-pointer flex items-center justify-center"
              >
                <Alert color="success">
                  Congratulation!! You just bought Your Gifts
                </Alert>
              </Box>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
