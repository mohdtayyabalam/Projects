import React from 'react'

const Section9 = () => {
  return (
    <div className='flex flex-col items-center gap-10 pt-40 bg-[#efe2ff] pb-40 text-center'>
      <div>
        <p className='text-8xl font-bold text-[#ca3e02]'>ONLY GOOD NEWS</p>
      </div>
      <div className='px-1'>
        <p className='text-2xl'>Subscribe to our newsletter to hear about new arrivals and special offers</p>
      </div>
      <div className='flex flex-col gap-1 w-full items-center'>
        <label htmlFor="email" className='font-bold'>Email</label>
        <input type="text" placeholder='Yourmail@gmail.com' className='w-[70%] sm:w-[30%] p-2 rounded outline-none'/>
      </div>
      <div className='flex gap-4 items-center px-2'>
        <input type="checkbox" name="" id="" />
        <label htmlFor="">Yes, Subscribe me to your newsletter</label>
        <button className='hover:border-2 hover:bg-white duration-500 w-20 h-7 rounded-lg'>submit</button>
      </div>
    </div>
  )
}

export default Section9