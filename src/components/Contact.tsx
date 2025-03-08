import React, { useState } from 'react';
import { MapPin, Phone, Instagram, Facebook } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <section id="contact" className="py-20 bg-zinc-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">
          Entre em <span className="text-gold">Contato</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">Informações de Contato</h3>
            <div className="space-y-6">
              <div className="flex items-center">
                <MapPin className="text-gold mr-4" size={24} />
                <p>Avenida Presidente Tancredo Neves número 73, Parque das Colinas- Valinhos</p>
              </div>
              <div className="flex items-center">
                <Phone className="text-gold mr-4" size={24} />
                <p>(11) 99999-9999</p>
              </div>
              <div className="flex space-x-4 mt-8">
                <a href="#" className="text-gold hover:text-white transition">
                  <Instagram size={24} />
                </a>
                <a href="#" className="text-gold hover:text-white transition">
                  <Facebook size={24} />
                </a>
              </div>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block mb-2">Nome</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 bg-black border border-zinc-800 rounded focus:border-gold focus:outline-none"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>
              <div>
                <label htmlFor="phone" className="block mb-2">Telefone</label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-2 bg-black border border-zinc-800 rounded focus:border-gold focus:outline-none"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2">Mensagem</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 bg-black border border-zinc-800 rounded focus:border-gold focus:outline-none"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-gold text-black font-semibold rounded hover:bg-gold/90 transition"
              >
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;