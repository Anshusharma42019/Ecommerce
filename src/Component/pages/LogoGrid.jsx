import React, { useState } from "react";

const brands = [
  "crcle",
  "Investyr",
  "asterisk",
  "NEDBLOK",
  ":>yodel!:",
  "FLOWEN",
  "covein",
  "SHYKEI",
  "aspire",
  "Goldust",
];

const LogoGrid = () => {
  const [active, setActive] = useState(0);

  return (
    <div className="flex justify-center items-center h-20 bg-gray-100 my-20">
      <div className="grid grid-cols-2  md:grid-cols-3 lg:grid-cols-5 gap-4 bg-white shadow-lg rounded-lg">
        {brands.map((brand, index) => (
          <div
            key={index}
            className={`text-center py-3 px-2 rounded-lg cursor-pointer transition-all duration-300 text-gray-400 h-20 font-semibold ${
              active === index ? "bg-gray-100 text-black shadow-md" : "hover:text-gray-600"
            }`}
            onClick={() => setActive(index)}
          >
            {brand}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoGrid;
