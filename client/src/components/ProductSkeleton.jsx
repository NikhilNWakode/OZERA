const ProductSkeleton = () => {
  return (
    <div className="animate-pulse bg-white shadow-sm rounded-md p-4 w-full max-w-[250px]">
      <div className="bg-gray-200 h-[250px] w-full rounded-md mb-4"></div>
      <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
      <div className="h-4 bg-gray-100 rounded w-1/2"></div>
    </div>
  );
};

export default ProductSkeleton;