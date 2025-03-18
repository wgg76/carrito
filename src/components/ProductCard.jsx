import React, { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import { motion } from "framer-motion";

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <motion.div
  className="
    bg-white 
    dark:bg-gray-700 
    text-gray-900 
    dark:text-gray-100 
    shadow 
    rounded-xl 
    p-4 
    flex 
    flex-col 
    items-center 
    border 
    border-gray-200 
    dark:border-gray-600
  "
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.4 }}
>
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-48 object-contain mb-4"
      />
      <h3 className="text-lg font-semibold mb-4">{product.title}</h3>
      <p className="text-gray-700 dark:text-gray-300 mb-4">${product.price}</p>
      <button
        onClick={() =>
          addToCart({
            id: product.id,
            name: product.title,
            price: product.price,
            image: product.image,
          })
        }
        className="px-4 py-4 bg-blue-700 text-white rounded hover:bg-blue-200 transition"
      >
        Agregar al Carrito
      </button>
    </motion.div>
  );
};

export default ProductCard;
