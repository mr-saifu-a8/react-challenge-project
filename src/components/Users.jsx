const Reviews = () => {
  const reviews = [
    {
      id: 1,
      name: "Men's Casual Shirt",
      brand: "Zudio",
      category: "Mens",
      price: 899,
      image:
        "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=400",
      rating: 4.2,
      inStock: true,
    },
    {
      id: 2,
      name: "Women's Floral Dress",
      brand: "Zara",
      category: "Womens",
      price: 2499,
      image:
        "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400",
      rating: 4.6,
      inStock: true,
    },
    {
      id: 3,
      name: "Kids Denim Jacket",
      brand: "Zudio",
      category: "Kids",
      price: 1299,
      image:
        "https://images.unsplash.com/photo-1514090458221-65bb69cf63e7?w=400",
      rating: 4.3,
      inStock: true,
    },
    {
      id: 4,
      name: "Men's Leather Wallet",
      brand: "Louis Vuitton",
      category: "Mens",
      price: 8999,
      image:
        "https://images.unsplash.com/photo-1627123424574-724758594e93?w=400",
      rating: 4.9,
      inStock: true,
    },
    {
      id: 5,
      name: "Women's Handbag",
      brand: "Louis Vuitton",
      category: "Womens",
      price: 12999,
      image:
        "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400",
      rating: 4.8,
      inStock: true,
    },
    {
      id: 6,
      name: "Kids Sneakers",
      brand: "Zara",
      category: "Kids",
      price: 1599,
      image:
        "https://images.unsplash.com/photo-1514989940723-e8e51635b782?w=400",
      rating: 4.4,
      inStock: true,
    },
    {
      id: 7,
      name: "Men's Winter Jacket",
      brand: "Zara",
      category: "Mens",
      price: 4299,
      image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400",
      rating: 4.7,
      inStock: true,
    },
    {
      id: 8,
      name: "Women's Sunglasses",
      brand: "Louis Vuitton",
      category: "Womens",
      price: 6499,
      image:
        "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=400",
      rating: 4.5,
      inStock: false,
    },
    {
      id: 9,
      name: "Kids T-Shirt Pack",
      brand: "Zudio",
      category: "Kids",
      price: 799,
      image:
        "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=400",
      rating: 4.1,
      inStock: true,
    },
    {
      id: 10,
      name: "Men's Running Shoes",
      brand: "Zara",
      category: "Mens",
      price: 3299,
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400",
      rating: 4.6,
      inStock: true,
    },
    {
      id: 11,
      name: "Women's Evening Gown",
      brand: "Zara",
      category: "Womens",
      price: 5999,
      image:
        "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=400",
      rating: 4.8,
      inStock: true,
    },
    {
      id: 12,
      name: "Kids Backpack",
      brand: "Zudio",
      category: "Kids",
      price: 699,
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400",
      rating: 4.0,
      inStock: true,
    },
    {
      id: 13,
      name: "Men's Formal Suit",
      brand: "Louis Vuitton",
      category: "Mens",
      price: 15999,
      image:
        "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400",
      rating: 4.9,
      inStock: true,
    },
    {
      id: 14,
      name: "Women's Casual Jeans",
      brand: "Zudio",
      category: "Womens",
      price: 1199,
      image:
        "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400",
      rating: 4.3,
      inStock: true,
    },
    {
      id: 15,
      name: "Kids Winter Cap",
      brand: "Zara",
      category: "Kids",
      price: 499,
      image:
        "https://images.unsplash.com/photo-1521369909029-2afed882baee?w=400",
      rating: 4.2,
      inStock: true,
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-center mb-8">Customer Reviews</h2>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {reviews.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl shadow-md p-5 hover:shadow-xl transition"
          >
            {/* User Info */}
            <div className="flex items-center gap-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h4 className="font-semibold">{item.name}</h4>

                {/* Rating */}
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      className={`w-5 h-5 ${
                        star <= item.rating
                          ? "text-yellow-400"
                          : "text-gray-300"
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.97a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.971c.3.921-.755 1.688-1.538 1.118l-3.381-2.454a1 1 0 00-1.175 0l-3.38 2.454c-.783.57-1.838-.197-1.539-1.118l1.287-3.97a1 1 0 00-.364-1.119L2.049 9.397c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.286-3.97z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>

            <p className="text-gray-600 mt-4 text-sm">{item.review}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
