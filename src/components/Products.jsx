import { useState } from "react";
import { products } from "../data/data (1)";
import Filters from "./Filters";

function Products() {
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedPrice, setSelectedPrice] = useState("");

  function clearFilters() {
    setSelectedBrand("");
    setSelectedCategory("");
    setSelectedPrice("");
  }

  const filteredProducts = products.filter(function (item) {
    let brandMatch = true;
    let categoryMatch = true;
    let priceMatch = true;

    if (selectedBrand !== "") {
      brandMatch = item.brand === selectedBrand;
    }

    if (selectedCategory !== "") {
      categoryMatch = item.category === selectedCategory;
    }

    const price = Number(item.price);
    if (selectedPrice === "under1500") {
      priceMatch = price < 1500;
    } else if (selectedPrice === "1500-5000") {
      priceMatch = price >= 1500 && price <= 5000;
    } else if (selectedPrice === "above5000") {
      priceMatch = price > 5000;
    }

    return brandMatch && categoryMatch && priceMatch;
  });

  const groupedProducts = {};
  for (let i = 0; i < filteredProducts.length; i++) {
    const product = filteredProducts[i];
    const category = product.category;

    if (!groupedProducts[category]) {
      groupedProducts[category] = [];
    }
    groupedProducts[category].push(product);
  }

  return (
    <div className="flex gap-6">
      <Filters
        selectedBrand={selectedBrand}
        setSelectedBrand={setSelectedBrand}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        selectedPrice={selectedPrice}
        setSelectedPrice={setSelectedPrice}
        clearFilters={clearFilters}
      />

      <div className="flex-1 space-y-8">
        {Object.keys(groupedProducts).length === 0 && (
          <p className="text-gray-500">No products found!</p>
        )}

        {Object.keys(groupedProducts).map(function (category) {
          return (
            <div key={category}>
              <h2 className="text-xl font-bold mb-4">{category}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {groupedProducts[category].map(function (item) {
                  return (
                    <div
                      key={item.id}
                      className="bg-white shadow-md rounded-md p-4 hover:shadow-lg transition"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-40 object-cover rounded"
                      />
                      <h3 className="mt-3 font-medium text-gray-800">
                        {item.name}
                      </h3>
                      <p className="text-sm text-gray-500">₹{item.price}</p>
                      <div className="text-yellow-500 text-sm mt-1">
                        ⭐{item.rating}
                      </div>
                      <button className="mt-3 w-full bg-blue-600 text-white py-1.5 rounded hover:bg-blue-700 transition">
                        Add to Cart
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Products;
