import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-4">
              <p className="flex items-center">
                <Phone className="w-5 h-5 mr-2" />
                +263 242 757873
              </p>
              <p className="flex items-center">
                <Mail className="w-5 h-5 mr-2" />
                info@megachem.co.zw
              </p>
              <p className="flex items-center">
                <MapPin className="w-5 h-5 mr-2" />
                7 Martin Drive, Msasa, Harare, Zimbabwe
              </p>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="hover:text-blue-200">About Us</a></li>
              <li><a href="/products" className="hover:text-blue-200">Products</a></li>
              <li><a href="/contact" className="hover:text-blue-200">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Business Hours</h3>
            <ul className="space-y-2">
              <li>Monday - Friday: 8:00 AM - 5:00 PM</li>
              <li>Saturday: 8:00 AM - 12:00 PM</li>
              <li>Sunday: Closed</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-blue-800 mt-8 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} Megachem. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}