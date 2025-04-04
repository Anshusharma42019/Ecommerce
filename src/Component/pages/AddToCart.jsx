import { useState, useEffect } from "react";

const AddToCart = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  const handleQuantityChange = (id, change) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, item.quantity + change) } : item
      )
    );
  };

  const handleRemoveItem = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const subtotal = cart.reduce(
    (sum, item) => sum + parseFloat(item.price.replace("$", "")) * item.quantity, 
    0
  );

  const freeShippingThreshold = 1159.69;
  const remainingForFreeShipping = Math.max(0, freeShippingThreshold - subtotal);

  return (
    <div className="p-4 md:p-10 bg-gray-100 min-h-screen flex flex-col items-center">
      <div className="w-full max-w-4xl bg-white shadow-md p-6 rounded-lg">
        <p className="text-sm text-gray-700">
          Add <span className="text-red-500 font-bold">${remainingForFreeShipping.toFixed(2)}</span> to cart and get free shipping
        </p>
        <div className="mt-4">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="text-left border-b">
                  <th className="p-2">Products</th>
                  <th className="p-2">Price</th>
                  <th className="p-2">Quantity</th>
                  <th className="p-2">Total</th>
                  <th className="p-2">Action</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item) => (
                  <tr key={item.id} className="border-b">
                    <td className="p-2">{item.title}</td>
                    <td className="p-2">
                      ${parseFloat(item.price.replace("$", "")).toFixed(2)}
                    </td>
                    <td className="p-2 flex items-center gap-2">
                      <button
                        className="px-2 bg-gray-200 rounded"
                        onClick={() => handleQuantityChange(item.id, -1)}
                      >-</button>
                      <span>{item.quantity}</span>
                      <button
                        className="px-2 bg-gray-200 rounded"
                        onClick={() => handleQuantityChange(item.id, 1)}
                      >+</button>
                    </td>
                    <td className="p-2 font-bold">${(parseFloat(item.price.replace("$", "")) * item.quantity).toFixed(2)}</td>
                    <td className="p-2">
                      <button
                        className="bg-red-500 text-white px-3 py-1 rounded-md"
                        onClick={() => handleRemoveItem(item.id)}
                      >Remove</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4 flex flex-col md:flex-row justify-between items-center">
            <input
              type="text"
              placeholder="Coupon Code"
              className="border p-2 w-full md:w-1/2 rounded-md"
            />
            <button className="bg-black text-white px-4 py-2 rounded-md mt-2 md:mt-0">APPLY COUPON</button>
          </div>
        </div>
      </div>
      
      <div className="w-full max-w-4xl bg-white shadow-md p-6 rounded-lg mt-6">
        <h3 className="text-lg font-semibold">Cart Totals</h3>
        <div className="mt-4">
          <div className="flex justify-between">
        
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="mt-2">
            <span>Shipping</span>
            <div className="mt-1">
              <label className="block"><input type="radio" checked readOnly /> Free Shipping</label>
              <label className="block"><input type="radio" /> Flat Rate</label>
              <label className="block"><input type="radio" /> Local Pickup</label>
            </div>
          </div>
          <button className="w-full bg-red-500 text-white py-2 rounded-md mt-4">PROCEED TO CHECKOUT</button>
        </div>
      </div>
    </div>
  );
};

export default AddToCart;
