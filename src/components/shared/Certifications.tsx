import React from 'react';
import { CheckCircle } from 'lucide-react';

const certifications = [
  {
    name: 'ISO 9001:2015',
    description: 'Quality Management System Certification'
  },
  {
    name: 'ISO 14001:2015',
    description: 'Environmental Management System Certification'
  },
  {
    name: 'OHSAS 18001',
    description: 'Occupational Health and Safety Management Certification'
  }
];

export function Certifications() {
  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Certifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md text-center"
            >
              <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">{cert.name}</h3>
              <p className="text-gray-600">{cert.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}