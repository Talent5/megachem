import React from 'react';

const productCategories = [
  {
    title: 'Industrial Chemicals',
    image: 'https://images.unsplash.com/photo-1616458964840-5108e4d3adb3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    description: 'High-quality chemicals for various industrial applications'
  },
  {
    title: 'Mining Chemicals',
    image: 'https://images.unsplash.com/photo-1578735799467-6a8d89f21e12?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    description: 'Essential chemicals for mining operations and mineral processing'
  },
  {
    title: 'Water Treatment',
    image: 'https://images.unsplash.com/photo-1527074456279-9bc8efd4c9f4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    description: 'Solutions for water purification and treatment systems'
  }
];

export function Products() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
          Our Product Categories
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {productCategories.map((category, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-200"
            >
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={category.image}
                  alt={category.title}
                  className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-200"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-xl font-bold text-white mb-2">{category.title}</h3>
                <p className="text-white/90 mb-4">{category.description}</p>
                <a
                  href={`/products/${category.title.toLowerCase().replace(' ', '-')}`}
                  className="text-white font-semibold hover:text-blue-200 transition-colors duration-200"
                >
                  Learn More →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}