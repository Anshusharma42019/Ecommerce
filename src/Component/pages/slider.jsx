import { motion } from "framer-motion";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const images = [
  "/image1.jpg",
  "/image2.jpg",
  "/image3.jpg"
];

const slider = () => {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  const nextSlide = () => setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));

  return (
    <section className="relative w-full min-h-[50vh] flex items-center justify-center bg-[#fdf9f5] px-6 md:px-12 lg:px-24 overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center opacity-10">
        <motion.span 
          initial={{ scale: 0.8, opacity: 0 }} 
          animate={{ scale: 1, opacity: 1 }} 
          transition={{ duration: 1 }}
          className="text-[20vw] font-bold text-red-300"
        >
          2023
        </motion.span>
      </div>

      <div className="relative w-full max-w-4xl flex items-center justify-center overflow-hidden">
        <button onClick={prevSlide} className="absolute left-4 z-10 text-white bg-red-500 p-2 rounded-full shadow-lg">
          <FaChevronLeft size={24} />
        </button>
        <motion.img 
          key={current}
          src={images[current]} 
          alt="Collection"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
          className="w-full h-auto rounded-lg shadow-lg"
        />
        <button onClick={nextSlide} className="absolute right-4 z-10 text-white bg-red-500 p-2 rounded-full shadow-lg">
          <FaChevronRight size={24} />
        </button>
      </div>

      <motion.div 
        initial={{ x: 50, opacity: 0 }} 
        animate={{ x: 0, opacity: 1 }} 
        transition={{ duration: 1, delay: 0.5 }}
        className="relative z-10 text-center max-w-lg mt-8"
      >
        <p className="text-sm uppercase tracking-wide text-red-500">Limited 23 Men's & Women's Collection</p>
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mt-2">Super Collection for Men & Women</h2>
        <p className="text-lg text-red-600 font-semibold mt-4">From $320.00</p>
        <motion.button 
          whileHover={{ scale: 1.1 }} 
          whileTap={{ scale: 0.9 }}
          className="mt-6 px-6 py-3 bg-red-500 text-white text-lg font-semibold rounded-md shadow-lg"
        >
          View Collection
        </motion.button>
      </motion.div>
    </section>
  );
};

export default slider;
