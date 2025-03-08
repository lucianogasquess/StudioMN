import React from 'react';
import { Scissors, MapPin, Phone, Instagram, Facebook } from 'lucide-react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Team from './components/Team';
import Contact from './components/Contact';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main>
        <Hero />
        <Services />
        <Team />
        <Contact />
      </main>
      <WhatsAppButton />
      <footer className="bg-zinc-900 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gold">© 2025 Studio MN. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;