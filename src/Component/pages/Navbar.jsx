import { useState } from "react";
import { FaShoppingCart, FaPhone, FaBars, FaTimes } from "react-icons/fa";
import { IoHeartOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const Navbar=()=>{
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="w-full border-b">
      {/* Top Bar */}
      <div className="bg-red-600 text-white flex justify-between items-center p-2 text-sm">
        <div className="flex space-x-4">
          <Link to="/about">About</Link>
          <Link to="/account">My Account</Link>
          <Link to="/wishlist">Wishlist</Link>
          <Link to="/checkout">Checkout</Link>
        </div>
        <p>Free shipping for all orders of $150</p>
        <div className="flex space-x-4">
          <Link to="/store-location">Store Location</Link>
          <Link to="/language">Language ▼</Link>
          <Link to="/currency">Currency ▼</Link>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="flex justify-between items-center p-4 bg-white shadow-md relative">
        <div className="flex items-center space-x-4">
          <FaBars className="text-2xl cursor-pointer md:hidden" onClick={() => setMenuOpen(!menuOpen)} />
          <h1 className="text-2xl font-bold flex items-center">
          <Link to="/addtocart"> <span className="text-red-600">🛒</span> ROISER</Link>
           
          </h1>
        </div>

        <div className="hidden md:flex items-center space-x-2 border p-2 rounded-md">
          <button onClick={() => setDropdownOpen(!dropdownOpen)} className="px-2">All Categories ▼</button>
          {dropdownOpen && (
            <ul className="absolute bg-white border shadow-md mt-1 w-40">
              <li className="p-2 hover:bg-gray-200">Electronics</li>
              <li className="p-2 hover:bg-gray-200">Fashion</li>
              <li className="p-2 hover:bg-gray-200">Home & Kitchen</li>
            </ul>
          )}
          <input type="text" placeholder="Search Keywords..." className="px-2 py-1 border" />
          <button className="bg-red-600 text-white px-4 py-1">SEARCH HERE</button>
        </div>

        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-1">
            <FaPhone />
            <span>+ (258) 2159-2159</span>
          </div>
          <IoHeartOutline className="text-2xl cursor-pointer" />
          <div className="flex items-center space-x-1">
          <Link to="/addtocart" className="text-2xl cursor-pointer flex items-center space-x-1"> <FaShoppingCart />
          <span>$1280.00</span></Link>
           
          </div>
        </div>
      </div>

      {/* Bottom Menu */}
      <nav className="bg-black text-white hidden md:flex justify-between items-center px-4 py-3">
  <div className="flex space-x-6">
    <Link to="/" className="hover:text-red-500">HOME</Link>
    <Link to="/collections" className="hover:text-red-500">SHOP</Link>
    <Link to="/product" className="hover:text-red-500">WOMEN</Link>
    <Link to="/product" className="hover:text-red-500">MEN</Link>
    <Link to="/categories" className="hover:text-red-500">PAGES</Link>
    <Link to="/blog" className="hover:text-red-500">BLOG</Link>
    <Link to="/contact" className="hover:text-red-500">CONTACT</Link>
  </div>

  <div className="bg-red-600 text-white px-4 py-2 rounded-tr-xl flex items-center">
    <span className="mr-2">Get 30% Discount Now</span>
    <span className="bg-white text-red-600 font-bold px-2 py-1 rounded-full text-xs">SALE</span>
  </div>
</nav>


      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 z-10 flex flex-col items-center space-y-6 p-6 text-white">
          <FaTimes className="text-2xl cursor-pointer self-end" onClick={() => setMenuOpen(false)} />
          <Link to="/" className="hover:underline">HOME</Link>
          <Link to="/shop" className="hover:underline">SHOP</Link>
          <Link to="/product" className="hover:underline">WOMEN</Link>
          <Link to="/product" className="hover:underline">MEN</Link>
          <Link to="/pages" className="hover:underline">PAGES</Link>
          <Link to="/blog" className="hover:underline">BLOG</Link>
          <Link to="/contact" className="hover:underline">CONTACT</Link>
        </div>
      )}
    </header>
  );
}
export default Navbar;