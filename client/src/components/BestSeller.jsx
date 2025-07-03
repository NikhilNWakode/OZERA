import { useEffect, useRef, useState, useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";
import ProductSkeleton from "./ProductSkeleton";
import { ChevronLeft, ChevronRight } from 'lucide-react';

const BestSeller = () => {
  const { products } = useContext(ShopContext);
  const [bestSellers, setBestSellers] = useState([]);
  const scrollRef = useRef(null);

  useEffect(() => {
    const bestProducts = products.filter((item) => item.bestseller);
    setBestSellers(bestProducts.slice(0, 5));
  }, [products]);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -410, behavior: "smooth" });
  };

  const scrollRight = () => {
    const el = scrollRef.current;
    if (el.scrollLeft + el.offsetWidth >= el.scrollWidth - 10) {
      // Reset scroll to beginning for loop effect
      el.scrollTo({ left: 0, behavior: "smooth" });
    } else {
      el.scrollBy({ left: 410, behavior: "smooth" });
    }
  };

  return (
    <div className="my-10 ">
      {/* Title Section */}
      <div className="text-center py-6 text-3xl">
        <Title text1={"Best"} text2={"Sellers"} />
        <p className="w-3/4  text-xs sm:text-sm md:text-base text-gray-600 m-auto ">
          Our community’s most-loved picks — effortless styles with intention.  
          <span className="font-semibold"> OZÉRA</span> blends quiet luxury with everyday ease to create what never fades.
        </p>
      </div>

      {/* Horizontal Scroll Grid */}
      <div className="relative overflow-x-auto scrollbar-hide" ref={scrollRef} >
  <div className="flex gap-4 sm:gap-6 px-1 py-2 sm:px-2">
    {bestSellers.length > 0
            ? [...bestSellers, ...bestSellers].map((item, index) => (
                <div
                  key={item._id + index}
                  className="min-w-[130px] sm:min-w-[180px] md:min-w-[220px] lg:min-w-[240px] flex-shrink-0"
                >
                  <ProductItem
                    id={item._id}
                    image={item.image}
                    name={item.name}
                    price={item.price}
                  />
                </div>
              ))
            : Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={i}
                  className="min-w-[160px] sm:min-w-[200px] md:min-w-[220px] lg:min-w-[240px] flex-shrink-0"
                >
                  <ProductSkeleton />
                </div>
              ))}
  </div>
  
   
</div>

      {/* Navigation Arrows */}
      <div className="hidden md:flex justify-center gap-2 mt-4">
        <button
          onClick={scrollLeft}
          className="p-2 border border-gray-300 rounded hover:bg-gray-100 transition"
          aria-label="Scroll Left"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={scrollRight}
          className="p-2 border border-gray-300 rounded hover:bg-gray-100 transition"
          aria-label="Scroll Right"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default BestSeller;

