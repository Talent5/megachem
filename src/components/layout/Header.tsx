import React from 'react';
import { Menu, X, Phone, Mail, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { NavLink } from './NavLink';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header>
      <div className="bg-blue-900 text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <a href="tel:+263242757873" className="flex items-center text-sm">
              <Phone className="w-4 h-4 mr-2" />
              +263 242 757873
            </a>
            <a href="mailto:info@megachem.co.zw" className="flex items-center text-sm">
              <Mail className="w-4 h-4 mr-2" />
              info@megachem.co.zw
            </a>
          </div>
        </div>
      </div>
      
      <nav className="bg-white shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-blue-900">MEGACHEM</h1>
            </div>

            <div className="hidden md:flex space-x-8">
              <NavLink href="/">Home</NavLink>
              <div className="relative group">
                <button className="flex items-center text-gray-700 hover:text-blue-900">
                  Products
                  <ChevronDown className="w-4 h-4 ml-1" />
                </button>
                <div className="absolute hidden group-hover:block w-48 bg-white shadow-lg py-2 mt-2">
                  <a href="/products/industrial" className="block px-4 py-2 text-gray-700 hover:bg-blue-50">Industrial Chemicals</a>
                  <a href="/products/mining" className="block px-4 py-2 text-gray-700 hover:bg-blue-50">Mining Chemicals</a>
                  <a href="/products/water" className="block px-4 py-2 text-gray-700 hover:bg-blue-50">Water Treatment</a>
                </div>
              </div>
              <NavLink href="/about">About Us</NavLink>
              <NavLink href="/contact">Contact</NavLink>
            </div>

            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="/" className="block px-3 py-2 text-gray-700 hover:bg-blue-50">Home</a>
              <a href="/products" className="block px-3 py-2 text-gray-700 hover:bg-blue-50">Products</a>
              <a href="/about" className="block px-3 py-2 text-gray-700 hover:bg-blue-50">About Us</a>
              <a href="/contact" className="block px-3 py-2 text-gray-700 hover:bg-blue-50">Contact</a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}