import React from 'react';
import { Shield, Clock, BadgeCheck, HeartHandshake } from 'lucide-react';

const values = [
  {
    icon: Shield,
    title: 'Quality Assured',
    description: 'All our products meet international quality standards and specifications'
  },
  {
    icon: Clock,
    title: 'Fast Delivery',
    description: 'Efficient logistics network ensuring timely delivery across Zimbabwe'
  },
  {
    icon: BadgeCheck,
    title: 'Certified Products',
    description: 'ISO certified products with full documentation and support'
  },
  {
    icon: HeartHandshake,
    title: 'Customer First',
    description: 'Dedicated support team providing personalized service'
  }
];

export function ValueProposition() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Why Partner With Us</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            With over 30 years of experience in the chemical industry, we provide comprehensive solutions tailored to your needs.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-lg hover:bg-gray-50 transition-colors duration-200"
            >
              <value.icon className="w-12 h-12 text-blue-900 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}