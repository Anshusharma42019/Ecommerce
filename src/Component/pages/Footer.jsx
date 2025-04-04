import { motion } from 'framer-motion';
import { FaShippingFast, FaPhoneAlt, FaCreditCard, FaPaypal, FaCcVisa, FaCcMastercard, FaCcAmex } from 'react-icons/fa';
import { MdOutlineAutorenew } from 'react-icons/md';
import { FiHeadphones } from 'react-icons/fi';

const Footer=()=>{
  return (
    <footer className="bg-gray-100 text-gray-800 py-10 px-5 md:px-20 font-sans">
      {/* Top Banner */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center border-b pb-5 mb-5 bg-white border-protected px-4 py-1 rounded-sm"
      >
        <div className="flex items-center justify-center gap-2">
          <FaShippingFast className="text-xl" />
          <p className="font-medium"><strong>Free Shipping</strong><br />Free shipping on orders over $65.</p>
        </div>
        <div className="flex items-center justify-center gap-2">
          <MdOutlineAutorenew className="text-xl" />
          <p className="font-medium"><strong>Free Returns</strong><br />30-days free return policy.</p>
        </div>
        <div className="flex items-center justify-center gap-2">
          <FaCreditCard className="text-xl" />
          <p className="font-medium"><strong>Secured Payments</strong><br />We accept all major credit cards.</p>
        </div>
        <div className="flex items-center justify-center gap-2">
          <FiHeadphones className="text-xl" />
          <p className="font-medium"><strong>Customer Service</strong><br />Top-notch customer service.</p>
        </div>
      </motion.div>

      {/* Store Info */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="font-bold text-lg">About Store</h3>
          <div className="flex items-center gap-2 mt-2">
            <FaPhoneAlt className="text-red-500" />
            <p className="text-red-500 font-bold text-lg">+258 3692 2569</p>
          </div>
          <p className="font-light"><strong>Monday - Saturday:</strong> 8:00am - 6:00pm</p>
          <p className="font-light"><strong>Sunday:</strong> Closed</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <h3 className="font-bold text-lg">Our Stores</h3>
          <p className="font-light">New York</p>
          <p className="font-light">London SF</p>
          <p className="font-light">Los Angeles</p>
          <p className="font-light">Chicago</p>
          <p className="font-light">Las Vegas</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <h3 className="font-bold text-lg">Shop Categories</h3>
          <p className="font-light">New Arrivals</p>
          <p className="font-light">Best Selling</p>
          <p className="font-light">Vegetables</p>
          <p className="font-light">Fresh Meat</p>
          <p className="font-light">Fresh Seafood</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
          <h3 className="font-bold text-lg">Our Newsletter</h3>
          <p className="font-light">Subscribe for updates on new arrivals and discounts.</p>
          <div className="flex mt-2">
            <input type="email" placeholder="Your email address" className="p-2 w-full border rounded-l-lg font-light" />
            <button className="bg-red-500 text-white px-4 rounded-r-lg font-semibold">Subscribe</button>
          </div>
        </motion.div>
      </div>

      {/* Payment Icons */}
      <div className="flex justify-center gap-4 mt-5">
        <FaCcVisa className="text-3xl text-blue-600" />
        <FaCcMastercard className="text-3xl text-red-600" />
        <FaCcAmex className="text-3xl text-blue-500" />
        <FaPaypal className="text-3xl text-blue-700" />
      </div>

      {/* Footer Bottom */}
      <div className="text-center text-gray-600 mt-10 border-t pt-5 font-light">
        <p>&copy; 2024 <strong>Roiser</strong>. All rights reserved.</p>
      </div>
    </footer>
  );
}
export default Footer;
