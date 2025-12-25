import React from "react";

const Filters = ({
  selectedBrand,
  setSelectedBrand,
  selectedCategory,
  setSelectedCategory,
  selectedPrice,
  setSelectedPrice,
}) => {
  return (
    <div className="w-64 bg-white shadow-md p-4 rounded-md h-fit">
      <h2 className="text-lg font-semibold mb-4">Filters</h2>

      {/* Brand Filter */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Brand</label>
        <select
          className="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={selectedBrand}
          onChange={(e) => setSelectedBrand(e.target.value)}
        >
          <option value="">All Brands</option>
          <option value="Zara">Zara</option>
          <option value="Zudio">Zudio</option>
          <option value="Louis Vuitton">Louis Vuitton</option>
        </select>
      </div>

      {/* Category Filter */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Category</label>
        <select
          className="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="">All Categories</option>
          <option value="Kids">Kids</option>
          <option value="Mens">Mens</option>
          <option value="Womens">Womens</option>
        </select>
      </div>

      {/* Price Filter */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Price Range</label>
        <select
          className="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={selectedPrice}
          onChange={(e) => setSelectedPrice(e.target.value)}
        >
          <option value="">All Prices</option>
          <option value="under1500">Under ₹1500</option>
          <option value="1500-5000">₹1500 - ₹5000</option>
          <option value="above5000">Above ₹5000</option>
        </select>
      </div>
    </div>
  );
};

export default Filters;
