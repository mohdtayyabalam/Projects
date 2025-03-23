import React from 'react'
import { FiArrowDownRight } from "react-icons/fi";
import { Link } from 'react-router-dom';

const Section8 = () => {
  return (
    <div className=' bg-none sm:bg-[url(./section8.jpg)] bg-cover bg-center h-full sm:h-[90vh] relative'> 
            <div className='h-[600px] w-full sm:w-[350px] bg-[#efe2ff] sm:absolute top-20 left-20'>
                <p className='text-7xl font-bold pt-10 pl-5 sm:pl-10 text-[#ca3e02]'>GIFT CARD</p>
            </div>

            <div className='flex flex-col justify-around items-center h-[300px] sm:w-[370px] bg-[#f9f2ea] absolute top-[200px] sm:top-[364px] sm:left-[200px] m-8 sm:m-0'>
                <p className='text-4xl font-light p-2'>Special treat for everyone with our Gift Cards!</p>
                <p className='flex gap-1 items-center w-[115px]'>
                    <Link to="/giftcard">Give a Gift</Link>
                    <FiArrowDownRight />
                </p>
            </div>
    </div>
  )
}

export default Section8