import React from 'react'
import { assets } from '../assets/frontend_assets/assets'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <section className=" bg-[#f8f7f3] flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-16 ">
      
      {/* Left Side: Content */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-start text-left py-10">
        <h1 className="text-4xl md:text-5xl prata-regular text-gray-900 leading-tight">
          Redefine Your Style <br /> with OZÉRA
        </h1>
        <p className="mt-6 text-lg text-gray-600 max-w-md leading-relaxed">
          Discover curated fashion that whispers elegance and moves with confidence.
          OZÉRA is where timeless design meets modern soul.
        </p>
        <div className="mt-8 flex gap-4">
          
          <button  className="px-6 py-3 border border-black text-sm uppercase hover:bg-black hover:text-white transition-all">
           <Link to={"/collections"}>Discover More</Link> 
          </button>
        </div>
      </div>

      {/* Right Side: Hero Image */}
      <div className="w-full lg:w-1/2 flex justify-center items-center py-10 sm:py-8">
        <img 
          src={assets.hero_image} 
          alt="Fashion editorial" 
          className=" shadow-lg w-[90%] max-w-[500px] max-h-[500px] object-cover"
        />
      </div>
    </section>
  )
}

export default Hero
