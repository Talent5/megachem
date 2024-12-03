import React from 'react';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/home/Hero';
import { SearchBar } from './components/home/SearchBar';
import { FeaturedProduct } from './components/home/FeaturedProduct';
import { ValueProposition } from './components/home/ValueProposition';
import { Testimonials } from './components/home/Testimonials';
import { CallToAction } from './components/home/CallToAction';
import { ChatWidget } from './components/shared/ChatWidget';
import { Products } from './components/home/Products';
import { Features } from './components/home/Features';
import { Certifications } from './components/shared/Certifications';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <SearchBar />
        <Features />
        <Products />
        <FeaturedProduct />
        <ValueProposition />
        <Certifications />
        <Testimonials />
        <CallToAction />
      </main>
      <Footer />
      <ChatWidget />
    </div>
  );
}

export default App;