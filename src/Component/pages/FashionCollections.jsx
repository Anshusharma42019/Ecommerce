import { motion } from 'framer-motion';

const categories = [
  {
    title: "WOMEN COLLECTIONS",
    description: "We’re spreading the love here through the walls of cloth and we’d like to invite you to have a look.",
    items: ["Blazer", "Blouses & Shirts", "Dresses", "Jeans", "Knit", "Pants", "Sets", "Suits", "Sweaters & Knits", "T-Shirts", "Tops & Bodysuits"],
  },
  {
    title: "MEN COLLECTIONS",
    items: ["Blazer", "Blouses & Shirts", "Dresses", "Jeans"],
  },
  {
    title: "TOP ACCESSORIES",
    items: ["Blazer", "Blouses & Shirts", "Dresses", "Jeans"],
  }
];

const Card = ({ title, description, items, index }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="p-6 bg-gray-100 rounded-2xl shadow-md w-full md:w-[48%] lg:w-[32%] relative"
    >
      <span className="text-xs uppercase text-red-400 font-bold">TOP PRODUCTS</span>
      <h2 className="text-xl font-semibold mt-2">{title}</h2>
      {description && <p className="text-sm text-gray-600 mt-1">{description}</p>}
      <ul className="mt-3 space-y-1">
        {items.map((item, idx) => (
          <li key={idx} className="text-gray-700 text-sm">{item}</li>
        ))}
      </ul>
      {index > 0 && (
        <motion.div 
          className="w-24 h-24 bg-red-300 rounded-full absolute inset-0 m-auto opacity-40"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        />
      )}
    </motion.div>
  );
};

const FashionCollections=()=>{
  return (
    <div className="p-6 md:p-12 flex flex-wrap gap-4 justify-center">
      {categories.map((category, index) => (
        <Card key={index} index={index} {...category} />
      ))}
    </div>
  );
}
export default FashionCollections;
