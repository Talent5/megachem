import React, { useState } from 'react';
import { Search } from 'lucide-react';

export function SearchBar() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle search logic here
  };

  return (
    <section className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="flex gap-2">
            <div className="relative flex-grow">
              <input
                type="text"
                placeholder="Search for products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              />
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            </div>
            <button
              type="submit"
              className="bg-blue-900 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition-colors duration-200"
            >
              Search
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}