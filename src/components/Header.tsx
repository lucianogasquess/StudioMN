import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-black/90 backdrop-blur-sm z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
      
          <a href="#" className="text-2xl font-bold text-gold">
            Studio MN
          </a>

          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              <li><a href="#home" className="text-white hover:text-gold transition">Home</a></li>
              <li><a href="#services" className="text-white hover:text-gold transition">Serviços</a></li>
              <li><a href="#team" className="text-white hover:text-gold transition">Profissionais</a></li>
              <li><a href="#contact" className="text-white hover:text-gold transition">Contato</a></li>
            </ul>
          </nav>

          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/95">
          <ul className="px-4 py-6 space-y-4">
            <li><a href="#home" className="block text-white hover:text-gold transition" onClick={() => setIsMenuOpen(false)}>Home</a></li>
            <li><a href="#services" className="block text-white hover:text-gold transition" onClick={() => setIsMenuOpen(false)}>Serviços</a></li>
            <li><a href="#team" className="block text-white hover:text-gold transition" onClick={() => setIsMenuOpen(false)}>Profissionais</a></li>
            <li><a href="#contact" className="block text-white hover:text-gold transition" onClick={() => setIsMenuOpen(false)}>Contato</a></li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;