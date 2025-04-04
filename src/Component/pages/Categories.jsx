import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaHeart, FaShoppingCart, FaEye } from 'react-icons/fa';

const products = [
  { id: 1, name: 'Maxico Denim Party Dress', price: '$99.00', category: 'Hot Collection' },
  { id: 2, name: 'China Black Flower Sandal', price: '$99.00', category: 'Hot Collection' },
  { id: 3, name: 'Peecho Sweater International', price: '$99.00', category: 'Hot Collection' },
  { id: 4, name: 'Drake Office Cotton Suite', price: '$99.00', category: 'Hot Collection' },
];

const Categories=()=>{
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-center">GET YOUR FASHION STYLE</h2>
      <p className="text-center text-gray-500 mb-6">20+ categories, bringing to you 5,000+ products</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <motion.div
            key={product.id}
            className="bg-white shadow-md rounded-lg overflow-hidden relative p-4"
            whileHover={{ scale: 1.05 }}
          >
            <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">Hot</span>
            <div className="w-full h-40 bg-gray-300 flex items-center justify-center">Image</div>
            <h3 className="text-lg font-semibold mt-4">{product.name}</h3>
            <p className="text-red-500 font-bold">{product.price}</p>
            <div className="absolute top-2 right-2 flex flex-col space-y-2">
              <motion.button whileHover={{ scale: 1.2 }} className="bg-white p-2 rounded-full shadow">
                <FaHeart className="text-red-500" />
              </motion.button>
              <motion.button whileHover={{ scale: 1.2 }} className="bg-white p-2 rounded-full shadow">
                <FaShoppingCart className="text-gray-700" />
              </motion.button>
              <motion.button whileHover={{ scale: 1.2 }} className="bg-white p-2 rounded-full shadow">
                <FaEye className="text-gray-700" />
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Categories
