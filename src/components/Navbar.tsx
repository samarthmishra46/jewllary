import React from 'react';
import { Link } from 'react-router-dom';
import { Diamond, ShoppingCart } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Diamond className="h-8 w-8 text-amber-600" />
            <span className="text-2xl font-bold text-amber-600">Ratna</span>
          </Link>
          
          <div className="flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-amber-600">Home</Link>
            <Link to="/products" className="text-gray-700 hover:text-amber-600">Products</Link>
            <Link to="/contact" className="text-gray-700 hover:text-amber-600">Contact</Link>
            <Link to="/cart" className="text-gray-700 hover:text-amber-600">
              <ShoppingCart className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;