import React from 'react'
import { assets } from '../assets/frontend_assets/assets'

const OurPolicy = () => {
  return (
    <div className='flex flex-col my-10 '>
         <h1 className='text-3xl text-center my-6 prata-regular'>OUR POLICY</h1>
    <div className='flex flex-col bg-[#f8f7f3]  sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700'>
        
        <div>
            <img src={assets.exchange_icon} alt="Exchange Icon" className='w-12 m-auto mb-5' />
            <p className='font-semibold '>Easy Exchange Policy</p>
            <p className='text-gray-400 '>We offer hassle free exchange policy</p>
        </div>
        <div>
            <img src={assets.quality_icon} alt="Exchange Icon" className='w-12 m-auto mb-5' />
            <p className='font-semibold '>7 Days Return Policy</p>
            <p className='text-gray-400 '>We Provide 7 days return policy</p>
        </div>
        <div>
            <img src={assets.support_img} alt="Exchange Icon" className='w-12 m-auto mb-5' />
            <p className='font-semibold '>Best Customer Support</p>
            <p className='text-gray-400 '>We Provide 24/7 Customer Support</p>
        </div>
    </div>
    </div>
   
  )
}

export default OurPolicy