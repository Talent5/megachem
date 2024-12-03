import React from 'react';
import { Star, ArrowRight } from 'lucide-react';

export function FeaturedProduct() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1631549916768-4119b2e5f926?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Featured Product"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-1/2">
            <div className="flex items-center gap-2 mb-4">
              <Star className="w-5 h-5 text-yellow-500 fill-current" />
              <span className="text-sm font-semibold text-gray-600">Featured Product</span>
            </div>
            <h2 className="text-3xl font-bold mb-4">Industrial Grade Sodium Hydroxide</h2>
            <p className="text-gray-600 mb-6">
              High-purity sodium hydroxide (NaOH) suitable for various industrial applications. 
              Available in different concentrations and quantities to meet your specific needs.
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-900 rounded-full"></div>
                <span>99.9% purity guaranteed</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-900 rounded-full"></div>
                <span>Available in bulk quantities</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-900 rounded-full"></div>
                <span>Competitive pricing</span>
              </li>
            </ul>
            <a
              href="/products/sodium-hydroxide"
              className="inline-flex items-center gap-2 text-blue-900 font-semibold hover:text-blue-700"
            >
              Learn More <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}