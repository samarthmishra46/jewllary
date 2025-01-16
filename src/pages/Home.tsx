import React from 'react';
import { ArrowRight } from 'lucide-react';

const Home = () => {
  const rates = {
    gold: { "24K": 6245, "22K": 5725, "18K": 4684 },
    silver: 75.50,
    platinum: 3200,
    diamond: { "1 Carat": 750000 }
  };

  return (
    <div className="space-y-12 py-8">
      {/* Hero Section */}
      <div className="relative h-[500px]">
        <img 
          src="https://images.unsplash.com/photo-1584302179602-e4c3d3fd629d?auto=format&fit=crop&q=80"
          alt="Jewelry collection"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">Exquisite Jewelry Collection</h1>
            <p className="text-xl mb-8">Discover our timeless pieces</p>
            <a href="/products" className="bg-amber-600 text-white px-8 py-3 rounded-full hover:bg-amber-700 transition">
              Shop Now
            </a>
          </div>
        </div>
      </div>

      {/* Live Rates Section */}
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Today's Precious Metal Rates</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Gold Card */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-amber-600 mb-4">Gold (per gram)</h3>
            <ul className="space-y-2">
              {Object.entries(rates.gold).map(([purity, rate]) => (
                <li key={purity} className="flex justify-between">
                  <span>{purity}</span>
                  <span>₹{rate}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Silver Card */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-gray-600 mb-4">Silver (per gram)</h3>
            <div className="text-2xl font-bold">₹{rates.silver}</div>
          </div>

          {/* Platinum Card */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Platinum (per gram)</h3>
            <div className="text-2xl font-bold">₹{rates.platinum}</div>
          </div>

          {/* Diamond Card */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-blue-600 mb-4">Diamond</h3>
            <ul className="space-y-2">
              {Object.entries(rates.diamond).map(([weight, rate]) => (
                <li key={weight} className="flex justify-between">
                  <span>{weight}</span>
                  <span>₹{rate}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Featured Categories */}
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Featured Categories</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { name: "Necklaces", image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&q=80" },
            { name: "Rings", image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&q=80" },
            { name: "Earrings", image: "https://images.unsplash.com/photo-1635767798638-3665c302e27c?auto=format&fit=crop&q=80" }
          ].map((category) => (
            <div key={category.name} className="group relative h-64 overflow-hidden rounded-lg">
              <img 
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <h3 className="text-white text-2xl font-bold">{category.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;