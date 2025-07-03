import React from 'react'

const Footer = () => {
  return (

    <div className=' px-2'>
        <div className='flex flex-col  sm:grid grid-cols-[3fr_1fr_1fr] gap-14  mt-30 text-sm  py-8'>
        <div>
            <h1 className='text-3xl cinzel-font'>O<span className=''>ZÉRA</span></h1>
            <p className='w-full md:2/3 text-gray-600'>At OZÉRA, fashion isn't fast. It's intentional.
We blend classic silhouettes with contemporary edge, bringing you elevated looks that last — in fabric, in feel, in memory.</p>
        </div>
        <div>
            <p className='text-xl font-medium mb-5'>Company</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>Home</li>
                <li>Contact Us</li>
                <li>Privacy Policy</li>
                <li>Terms & Conditions</li>
            </ul>

        </div>
        <div>
            <p className='text-xl font-medium mb-5'>Get In Touch</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>+91 123456789</li>
                <li>ozeraadmin@gmail.com</li>
            </ul>

        </div>
    
     </div>
     <div>
        <hr className='w-full h-0.5 border-none bg-gray-300' />
        <p className='py-5 text-sm text-center'>Copyright &#169; 2025 OZÉRA - All Rights Reserved.</p>
     </div>
    </div>
     
  )
}

export default Footer