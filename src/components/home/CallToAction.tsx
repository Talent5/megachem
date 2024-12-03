import React from 'react';
import { ArrowRight } from 'lucide-react';

export function CallToAction() {
  return (
    <section className="py-16 bg-blue-900 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-lg mb-8">
            Contact our team today to discuss your chemical supply needs and discover how we can help optimize your operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200"
            >
              Contact Us <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="/products"
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors duration-200"
            >
              View Products
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}