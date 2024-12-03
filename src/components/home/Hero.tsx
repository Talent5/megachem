import React from 'react';

export function Hero() {
  return (
    <div className="relative h-[600px]">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")'
        }}
      >
        <div className="absolute inset-0 bg-blue-900/70"></div>
      </div>
      
      <div className="relative container mx-auto px-4 h-full flex items-center">
        <div className="max-w-2xl text-white">
          <h1 className="text-5xl font-bold mb-6">
            Leading Chemical Solutions Provider in Zimbabwe
          </h1>
          <p className="text-xl mb-8">
            Supplying quality industrial, mining, and water treatment chemicals with exceptional service since 1992
          </p>
          <div className="space-x-4">
            <a
              href="/products"
              className="bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200"
            >
              Our Products
            </a>
            <a
              href="/contact"
              className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors duration-200"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}