import React from 'react';
import { Beaker, Truck, Award, Users } from 'lucide-react';

const features = [
  {
    icon: Beaker,
    title: 'Quality Products',
    description: 'We source and supply high-quality chemicals that meet international standards'
  },
  {
    icon: Truck,
    title: 'Reliable Delivery',
    description: 'Efficient logistics ensuring timely delivery across Zimbabwe'
  },
  {
    icon: Award,
    title: 'Expert Support',
    description: 'Technical expertise and support from our experienced team'
  },
  {
    icon: Users,
    title: 'Customer Service',
    description: '30+ years of dedicated service to our valued customers'
  }
];

export function Features() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
          Why Choose Megachem?
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
            >
              <feature.icon className="w-12 h-12 text-blue-900 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}