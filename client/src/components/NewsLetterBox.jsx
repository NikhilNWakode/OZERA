import React from 'react'

const NewsLetterBox = () => {

    const onHandleSubmit = (e) => {
        e.preventDefault();
    }

  return (
    <div className='text-center bg-[#f8f7f3] py-20'>
        <p className='text-3xl font-bold prata-regular text-gray-800'>Subscribe Now & Get 20% Off</p> 
        <p className='text-gray-400 mt-4'>  Be the first to discover our newest collections, styling tips, and exclusive offers.
</p>
        <form onSubmit={onHandleSubmit} className='w-full sm:w-1/2 flex item-center gap-3 mx-auto border my-6 pl-3' >
            <input type="email" className='w-full sm:flex-1 outline-none pl-2' placeholder='Enter your email address' required />
            <button type='submit' className='bg-black text-white text-xs py-4 px-10 cursor-pointer'>Subscribe</button>
        </form>
    </div>
  )
}

export default NewsLetterBox