import { assets } from "../assets/frontend_assets/assets";
const VisualStorytelling = () => {
  return (
    <section className="relative w-full h-[40vh] md:h-[50vh] my-14">
      {/* Background Image */}
      <img
        src={assets.visual_story_bg_image}
        alt="Street-style fashion model"
        className="w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0  bg-opacity-80 flex items-center justify-center px-6 md:px-20 text-center">
        <blockquote className="text-white max-w-3xl text-lg sm:text-xl md:text-3xl italic leading-relaxed font-light cinzel-font ">
          “Style is the art of becoming yourself, without saying a word.”
          <footer className="mt-4 text-sm not-italic font-normal text-gray-300">— OZÉRA</footer>
        </blockquote>
      </div>
    </section>
  )
}

export default VisualStorytelling
