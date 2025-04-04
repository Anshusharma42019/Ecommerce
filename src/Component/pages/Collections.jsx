import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const categories = [
    { name: "Women Wear", active: true, color: "bg-red-100", image: "https://via.placeholder.com/100" },
    { name: "Shoes Collection", color: "bg-blue-100", image: "https://via.placeholder.com/100" },
    { name: "Bag Collection", color: "bg-green-100", image: "https://via.placeholder.com/100" },
    { name: "Watch Hare", color: "bg-yellow-100", image: "https://via.placeholder.com/100" },
    { name: "Accessories", color: "bg-purple-100", image: "https://via.placeholder.com/100" },
    { name: "Sunglasses", color: "bg-pink-100", image: "https://via.placeholder.com/100" },
];

const Collections=()=>{
    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold text-center">BEST FOR YOUR CATEGORIES</h2>
            <p className="text-center text-gray-500">29 categories belonging to a total 15,892 products</p>
            
            <div className="flex items-center justify-center gap-2 mt-6">
                <button className="p-2 bg-red-500 text-white rounded-full"><ArrowLeft /></button>
                <motion.div 
                    className="flex gap-4 overflow-x-auto scrollbar-hide"
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: 1 }} 
                    transition={{ duration: 0.5 }}>
                    {categories.map((category, index) => (
                        <motion.div
                            key={index}
                            className={`p-4 border-2 rounded-lg w-36 flex flex-col items-center justify-center text-center font-semibold transition-all duration-300 cursor-pointer ${category.active ? 'border-red-500 bg-red-100 text-red-500' : 'border-gray-300'} ${category.color}`}
                            whileHover={{ scale: 1.1 }}
                        >
                            <img src={category.image} alt={category.name} className="w-16 h-16 mb-2 rounded-full" />
                            {category.name}
                        </motion.div>
                    ))}
                </motion.div>
                <button className="p-2 bg-red-500 text-white rounded-full"><ArrowRight /></button>
            </div>

            <div className="grid md:grid-cols-3 gap-4 mt-8">
                <motion.div 
                    className="p-6 border rounded-lg shadow-md bg-gray-100"
                    whileHover={{ scale: 1.05 }}>
                    <p className="text-sm text-red-500">Special 50% Discount</p>
                    <h3 className="text-lg font-semibold">The Latest Men's Trends This Season</h3>
                    <p className="mt-2 text-red-500 cursor-pointer">+ View Collections</p>
                </motion.div>
                <motion.div 
                    className="p-6 border rounded-lg shadow-md bg-gray-100"
                    whileHover={{ scale: 1.05 }}>
                    <p className="text-sm bg-red-500 text-white px-2 py-1 inline rounded-md">Weekend Discount</p>
                    <h3 className="text-lg font-semibold mt-2">Latest Kids Trends This Season</h3>
                    <p className="mt-2 text-red-500 cursor-pointer">+ Shop Now</p>
                </motion.div>
                <motion.div 
                    className="p-6 border rounded-lg shadow-md bg-gray-100"
                    whileHover={{ scale: 1.05 }}>
                    <p className="text-sm text-red-500">Special 50% Discount</p>
                    <h3 className="text-lg font-semibold">Latest Women's Trends This Season</h3>
                    <p className="mt-2 text-red-500 cursor-pointer">+ View Collections</p>
                </motion.div>
            </div>
        </div>
    );
}

export default Collections;
