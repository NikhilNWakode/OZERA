import React from 'react'
import { assets } from '../assets/frontend_assets/assets'

const BrandComponent = () => {
  return (
    <section className="bg-[#f8f7f3] px-6 md:px-16 lg:px-32 py-20 my-14">
      <div className="max-w-6xl mx-auto grid md:grid-cols-5 gap-12 items-center">

        {/* Left Visual: Lifestyle image with soft tones */}
        <div className="hidden md:block col-span-2">
          <div
            className="w-full h-[400px]  shadow-md bg-cover bg-center"
            style={{
              backgroundImage: `url(${assets.hero_image2})`,
            }}
          />
        </div>

        {/* Right Content */}
        <div className="col-span-5 md:col-span-3 text-left space-y-6">
          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl prata-regular text-gray-900 tracking-tight leading-tight">
            Wear What Speaks. <br /> Be What Stays.
          </h2>

          {/* Decorative Line */}
          <div className="w-12 h-[2px] bg-gray-800" />

          {/* Description */}
          <p className="text-gray-700 text-base sm:text-lg md:text-xl  leading-relaxed">
            At <span className="font-semibold">OZÉRA</span>, fashion isn’t fast — it’s intentional.
            We blend classic silhouettes with contemporary edge, bringing you elevated looks that last — in fabric, in feel, in memory.
          </p>

          <p className="text-gray-700 text-base sm:text-lg md:text-xl  leading-relaxed">
            From city streets to curated closets, we design with one purpose:
            To help you dress the way you feel inside — calm, bold, and infinitely evolving.
          </p>
        </div>
      </div>
    </section>
  )
}

export default BrandComponent
