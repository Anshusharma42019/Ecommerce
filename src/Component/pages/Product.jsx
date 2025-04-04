import { useState, useEffect } from "react";
import { ShoppingCart } from "lucide-react";

const products = [
  { id: 1, title: "Men's Jacket", date: "March 15, 2022", category: "Men", price: "$49.99", image: "https://via.placeholder.com/150" },
  { id: 2, title: "Women's Dress", date: "March 15, 2022", category: "Women", price: "$59.99", image: "https://via.placeholder.com/150" },
  { id: 3, title: "Men's Shoes", date: "March 15, 2022", category: "Men", price: "$39.99", image: "https://via.placeholder.com/150" },
  { id: 4, title: "Women's Handbag", date: "March 15, 2022", category: "Women", price: "$79.99", image: "https://via.placeholder.com/150" },
  { id: 5, title: "Men's Watch", date: "March 15, 2022", category: "Men", price: "$99.99", image: "https://via.placeholder.com/150" },
  { id: 6, title: "Women's Earrings", date: "March 15, 2022", category: "Women", price: "$29.99", image: "https://via.placeholder.com/150" },
  { id: 7, title: "Men's T-shirt", date: "March 15, 2022", category: "Men", price: "$19.99", image: "https://via.placeholder.com/150" },
  { id: 8, title: "Women's Sandals", date: "March 15, 2022", category: "Women", price: "$34.99", image: "https://via.placeholder.com/150" },
  { id: 9, title: "Men's Sunglasses", date: "March 15, 2022", category: "Men", price: "$24.99", image: "https://via.placeholder.com/150" }
];

const Product = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  const addToCart = (product) => {
    const updatedCart = [...cart, product];
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  return (
    <div className="p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product, index) => (
          <div key={index} className="shadow-md rounded-lg overflow-hidden border p-4">
            <img src={product.image} alt={product.title} className="w-full h-40 object-cover" />
            <p className="text-sm text-gray-500 mt-2">{product.date} • {product.category}</p>
            <h3 className="text-lg font-semibold mt-2">{product.title}</h3>
            <p className="text-md font-bold mt-2">{product.price}</p>
            <button
              className="mt-4 w-full bg-black text-white py-2 rounded flex items-center justify-center gap-2 hover:bg-gray-800"
              onClick={() => addToCart(product)}
            >
              <ShoppingCart size={16} /> Add to Cart
            </button>
          </div>
        ))}
      </div>
      {/* <div className="mt-6 p-4 border-t">
        <h2 className="text-xl font-semibold">Cart ({cart.length})</h2>
        <ul className="mt-2">
          {cart.map((item, index) => (
            <li key={index} className="text-gray-700">{item.title} - {item.price}</li>
          ))}
        </ul>
      </div> */}
    </div>
  );
}

export default Product;
