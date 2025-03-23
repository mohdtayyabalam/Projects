import React, { useEffect, useState } from "react";
import { LuMinus } from "react-icons/lu";
import { FiPlus } from "react-icons/fi";
import Box from "@mui/joy/Box";
import Alert from "@mui/joy/Alert";

const GiftCard = () => {
  const [amount, setAmount] = useState(25);
  const [showAmount, setShowAmount] = useState(25);
  const [quantity, setQuantity] = useState(1);
  const [show, setShow] = useState(true);
  const [showAlert, setShowAlert] = useState(false);

  const handleminus = () => {
    if (quantity > 0) {
      let newquantity = quantity - 1;
      setQuantity(newquantity);
    }
  };

  const handleplus = () => {
    let newquantity = quantity + 1;
    setQuantity(newquantity);
  };

  useEffect(() => {
    let newAmount = amount * quantity;
    setShowAmount(newAmount);
  }, [quantity, amount]);

  const handlebuy = () => {
    setShowAlert(true);
  };

  return (
    <div className="flex flex-col sm:flex-row justify-between w-full bg-[#f9f2ea] pb-16 gap-10">
      <div className="w-[100%] sm:w-[50%] flex items-center justify-center m-0 sm:m-8 pt-10">
        <img
          src="./giftcard.jpg"
          alt="side-image"
          className="hover:scale-110 duration-500 w-[80%]"
        />
      </div>
      <div className="flex flex-col gap-5 pt-20 pl-14">
        <p className="text-6xl font-bold">Gift Card</p>
        <p className="font-bold">${showAmount}</p>
        <p className="text-xl font-light w-[80%]">
          You can't go wrong with a gift card. Choose an amount and write a
          personalized message to make this gift your own.
        </p>
        <div className="flex flex-col gap-1">
          <p>Amount</p>
          <p className="flex gap-2">
            <span
              onClick={() => setAmount(25)}
              className="border-black border p-1 bg-transparent hover:bg-gray-300 cursor-pointer"
            >
              $25
            </span>
            <span
              onClick={() => setAmount(50)}
              className="border-black border p-1 bg-transparent hover:bg-gray-300 cursor-pointer"
            >
              $50
            </span>
            <span
              onClick={() => setAmount(100)}
              className="border-black border p-1 bg-transparent hover:bg-gray-300 cursor-pointer"
            >
              $100
            </span>
            <span
              onClick={() => setAmount(150)}
              className="border-black border p-1 bg-transparent hover:bg-gray-300 cursor-pointer"
            >
              $150
            </span>
            <span
              onClick={() => setAmount(200)}
              className="border-black border p-1 bg-transparent hover:bg-gray-300 cursor-pointer"
            >
              $200
            </span>
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <p>Quantity</p>
          <div className="flex items-center gap-5 px-2 border border-black w-[100px] h-7">
            <LuMinus onClick={handleminus} className="cursor-pointer" />
            <p>{quantity}</p>
            <FiPlus onClick={handleplus} className="cursor-pointer" />
          </div>
        </div>

        <div className=" flex flex-col gap-2 w-full">
          <p>Who's the gift card for?</p>
          <div className="flex gap-3">
            <p
              onClick={() => setShow(true)}
              className=" border border-black hover:bg-gray-300 text-center h-10 w-[40%] p-1.5 cursor-pointer"
            >
              For Someone Else
            </p>
            <p
              onClick={() => setShow(false)}
              className=" border border-black hover:bg-gray-300 text-center h-10 w-[40%] p-1.5 cursor-pointer"
            >
              For Myself
            </p>
          </div>
        </div>

        {show && (
          <form action="">
          <div className="flex flex-col gap-3">
            <label htmlFor="">Recipient email *</label>
            <input
              type="email"
              name=""
              id=""
              required
              className="border border-black outline-none h-10 w-[80%] p-2 bg-transparent"
            />
            <label htmlFor="">Recipient name</label>
            <input
              type="text"
              className="border border-black outline-none h-10 w-[80%] p-2 bg-transparent"
            />
            <label htmlFor="">Delivery Date</label>
            <input
              type="date"
              name=""
              id=""
              className="border border-black w-[80%] h-10 p-2 bg-transparent outline-none"
            />
            <label htmlFor="">Message</label>
            <textarea
              rows={3}
              name=""
              id=""
              className="border border-black w-[80%] p-2 bg-transparent outline-none"
            ></textarea>
          </div>
          </form>
        )}

        <button
          onClick={handlebuy}
          className="border border-black w-[80%] rounded-2xl h-10 bg-black text-white"
        >
          Buy Now
        </button>
        {showAlert && (
          <Box onClick={()=>setShowAlert(false)} sx={{ width: "80%" }} className="cursor-pointer">
            <Alert color="success">Congratulation!! You just bought a Gift Card</Alert>
          </Box>
        )}
      </div>
    </div>
  );
};

export default GiftCard;
