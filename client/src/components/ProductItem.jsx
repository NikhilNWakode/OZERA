import { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { Link } from 'react-router-dom';

const ProductItem = ({ id, image, name, price }) => {
  const { currency } = useContext(ShopContext);

  return (
    <Link
      to={`/product/${id}`}
      className="block group  text-gray-900"
    >
      {/* Image */}
      <div className="aspect-[9/10] overflow-hidden bg-white shadow-sm border border-gray-200">
        <img
          src={image[0]}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 ease-in-out"
        />
      </div>

      {/* Product Info */}
      <div className="mt-3">
        <p className="text-sm font-medium text-gray-800 leading-tight line-clamp-2">{name}</p>
        <p className="text-sm font-semibold text-gray-900 mt-1 tracking-wide">
          {currency}{price}
        </p>
      </div>
    </Link>
  );
};

export default ProductItem;
