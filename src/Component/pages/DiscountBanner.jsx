import React from "react";

const DiscountBanner = () => {
  return (
    <div className="bg-red-500 text-white text-center py-16 px-4 flex flex-col items-center justify-center min-h-[200px]">
      <p className="text-xs uppercase tracking-widest">Spring Summer 23 Women’s Collection</p>
      <h2 className="text-3xl md:text-4xl font-bold my-2">-15% OFF DISCOUNT<br />ALL HERE</h2>
      <button className="mt-4 px-6 py-2 bg-white text-red-500 font-semibold rounded-lg shadow-md hover:bg-gray-200 transition">
        View Collection
      </button>
    </div>
  );
};

export default DiscountBanner;
