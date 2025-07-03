import { useContext,useState,useEffect,useRef } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";
import ProductSkeleton from "./ProductSkeleton";
import { ChevronLeft, ChevronRight } from 'lucide-react';

const LatestCollections = () => {
    const {products} = useContext(ShopContext);

    const [latestProducts, setLatestProducts] = useState([]);

    useEffect(() => {
        setLatestProducts(products.slice(0,10));
    },[])
  //  console.log(latestProducts);

   const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -410, behavior: 'smooth' });
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
    <div className="my-10">
        <div className="text-center py-6 text-3xl">
            <Title text1={'Latest'} text2={'Collections'} />
            <p className="w-3/4 text-xs m-auto sm:text-sm md:text-base text-gray-600 text-center">
  At <span className="font-semibold">OZÉRA</span>, fashion isn’t loud — it’s intentional.  
  We craft elevated essentials for those who believe less is more, and simplicity is the new statement.
</p>
    

        </div>
{/* Display latest collections in horizontal scroll */}
<div className="relative overflow-x-auto scrollbar-hide" ref={scrollRef} >
  <div className="flex gap-4 sm:gap-6 px-1 py-2 sm:px-2">
    {
      latestProducts.length > 0
        ? latestProducts.map((item, index) => (
            <div
              key={item._id || index}
              className="min-w-[160px] sm:min-w-[200px] md:min-w-[220px] lg:min-w-[240px] flex-shrink-0"
            >
              <ProductItem
                id={item._id}
                image={item.image}
                name={item.name}
                price={item.price}
              />
            </div>
          ))
        : Array.from({ length: 10 }).map((_, i) => (
            <div
              key={i}
              className="min-w-[160px] sm:min-w-[200px] md:min-w-[220px] lg:min-w-[240px] flex-shrink-0"
            >
              <ProductSkeleton />
            </div>
          ))
    }
  </div>
  
   
</div>
<div className="hidden md:flex justify-center gap-2 mt-2 mb-10 ">
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
  )
}

export default LatestCollections