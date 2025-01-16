import React, { useState } from 'react';
import { ShoppingCart } from 'lucide-react';

const Products = () => {
  const categories = ["All", "Necklaces", "Rings", "Earrings", "Bracelets"];
  const collections = ["Bridal", "Traditional", "Modern", "Classic"];
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeCollection, setActiveCollection] = useState("All");

  const products = [
    {
      id: 1,
      name: "Diamond Necklace",
      category: "Necklaces",
      collection: "Bridal",
      price: 250000,
      image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&q=80"
    },
    // Add more products here
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Filters */}
        <div className="w-full md:w-64 space-y-6">
          <div>
            <h3 className="text-lg font-bold mb-3">Categories</h3>
            <div className="space-y-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`block w-full text-left px-3 py-2 rounded ${
                    activeCategory === category ? 'bg-amber-600 text-white' : 'hover:bg-gray-100'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-3">Collections</h3>
            <div className="space-y-2">
              {collections.map((collection) => (
                <button
                  key={collection}
                  onClick={() => setActiveCollection(collection)}
                  className={`block w-full text-left px-3 py-2 rounded ${
                    activeCollection === collection ? 'bg-amber-600 text-white' : 'hover:bg-gray-100'
                  }`}
                >
                  {collection}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="flex-1">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-bold">{product.name}</h3>
                  <p className="text-gray-600">{product.collection}</p>
                  <div className="mt-4 flex justify-between items-center">
                    <span className="text-xl font-bold">₹{product.price.toLocaleString()}</span>
                    <button className="bg-amber-600 text-white p-2 rounded-full hover:bg-amber-700">
                      <ShoppingCart className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;