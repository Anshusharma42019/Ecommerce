import React from "react";

const DealOfTheDays = () => {
  return (
    <div className="bg-gray-100 py-12 px-4 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900">DEAL OF THE DAYS</h2>
        <p className="text-gray-600 mt-2">
          Elegant pink origami design three type of dimensional view and
          decoration in Gray for adding a decorative touch.
        </p>
        <div className="mt-4 flex items-center">
          <span className="text-red-500 font-semibold">
            ⏳ Limited Time offer. The Deal will expire on August 18, 2024
          </span>
        </div>
        <button className="mt-4 bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600">
          View All Collections
        </button>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Product Card 1 */}
          <div className="bg-white shadow-md rounded-lg p-4">
            <div className="h-48 bg-gray-300 rounded-lg flex items-center justify-center">
              <span className="text-gray-500">Image Placeholder</span>
            </div>
            <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full mt-2 inline-block">New</span>
            <h3 className="text-lg font-semibold mt-2">D'vale Office Cotton Suite</h3>
            <p className="text-sm text-gray-600">⭐⭐⭐⭐⭐ (35 Reviews)</p>
            <p className="text-lg font-bold mt-1">$893.00</p>
          </div>
          {/* Product Card 2 */}
          <div className="bg-white shadow-md rounded-lg p-4">
            <div className="h-48 bg-gray-300 rounded-lg flex items-center justify-center">
              <span className="text-gray-500">Image Placeholder</span>
            </div>
            <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full mt-2 inline-block">New</span>
            <h3 className="text-lg font-semibold mt-2">Montana Jungle Cap</h3>
            <p className="text-sm text-gray-600">⭐⭐⭐⭐⭐ (35 Reviews)</p>
            <p className="text-lg font-bold mt-1">$893.00</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DealOfTheDays;
