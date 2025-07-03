import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { assets } from '../assets/frontend_assets/assets'
const Navbar = () => {
    const [visible, setvisible] = useState(false);
  return (
    <div className='flex items-center justify-between py-5 font-medium'>
        <h1 className='text-3xl cinzel-font'>O<span className=''>ZÉRA</span></h1>
        <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
            <NavLink to="/" className="flex flex-col items-center gap-1 ">
                    <p>HOME</p>
                    <hr className=' w-3/4 h-0.5 border-none bg-gray-700 gap-1 hidden' />
            </NavLink>
            <NavLink to="/Collections" className="flex flex-col items-center gap-1">
                    <p>COLLECTION</p>
                    <hr className=' w-3/4 h-0.5 border-none bg-gray-700  hidden gap-1' />
            </NavLink>
            <NavLink to="/about" className="flex flex-col items-center gap-1">
                    <p>ABOUT US</p>
                    <hr className=' w-3/4 h-0.5 border-none bg-gray-700 gap-1 hidden' />
            </NavLink>
            <NavLink to="/contact" className="flex flex-col items-center gap-1  ">
                    <p className=''>CONTACT</p>
                    <hr className=' w-3/4 h-0.5 border-none bg-gray-700  gap-1 hidden ' />
            </NavLink>
        </ul>
        <div className='flex items-center gap-6'>
            <img src={assets.search_icon} alt="search-icon" className='w-5 cursor-pointer' />
            <div className='group relative '>
                <img src={assets.profile_icon} alt="profile_icon" className='w-5 cursor-pointer' />
                <div className='group-hover:block hidden absolute right-0  pt-4 dropdown-menu  '>
                    <div className='flex flex-col gap-2 w-36 py-3 px-5 text-gray-600 bg-white border-2 border-black'>
                        <p className='cursor-pointer  hover:text-black '>My Profile</p>
                        <p className='cursor-pointer  hover:text-black  '>Orders</p>
                        <p className='cursor-pointer  hover:text-black '>Logout</p>
                    </div>
                </div>
            </div>
            <Link to="/cart" className='relative'>
                <img src={assets.cart_icon} alt="cart-icon" className='w-5 cursor-pointer relative min-w-5' />
                <p className='absolute right-[-5px] bottom-[-5px] bg-black text-white text-sm text-center w-4 leading-4 aspect-square rounded-full text-[8px]'>10</p>
            </Link>
            <img onClick={() => setvisible(!visible)} src={assets.menu_icon} alt="menu-icon" className='w-5 cursor-pointer sm:hidden ' />

        </div>
        {/* Side bar for menu */}
        <div className={` absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all duration-500 ease-linear delay-100  ${ visible ? 'w-full' : 'w-0'} `}>
            <div className='flex flex-col text-gray-600'>
                <div className='flex items-center gap-4 p-3 cursor-pointer' onClick={() => setvisible(!visible)}>
                    <img src={assets.dropdown_icon} className='h-4 rotate-180' alt="" />
                    <p>Back</p>
                </div>
                <NavLink onClick={() => setvisible(!visible)}   className=" py-2 pl-6 border-black border-2 " to={"/"}>HOME</NavLink>
                <NavLink onClick={() => setvisible(!visible)} className=" py-2 pl-6 border-black border-2 " to={"/Collections"}>COLLECTIONS</NavLink>
                <NavLink onClick={() => setvisible(!visible)} className=" py-2 pl-6 border-black border-2  " to={"/about"} >ABOUT US</NavLink>
                <NavLink onClick={() => setvisible(!visible)} className=" py-2 pl-6 border-black border-2 " to={"/contact"}>CONTACT</NavLink>                
            </div>

        </div>
    </div>
  )
}

export default Navbar