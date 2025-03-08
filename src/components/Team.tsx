import React from 'react';

const Team = () => {
  const team = [
    {
      name: 'Marcelo',
      role: 'Barbeiro',
      image: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=8',
      description: 'Especialista em cortes masculinos modernos e design de barba, com mais de 10 anos de experiência.'
    },
    {
      name: 'Nayara',
      role: 'Designer de Sobrancelhas & Maquiadora',
      image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=8',
      description: 'Profissional especializada em design de sobrancelhas e maquiagem profissional para todas as ocasiões.'
    }
  ];

  return (
    <section id="team" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">
          Nossa <span className="text-gold">Equipe</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {team.map((member, index) => (
            <div key={index} className="group">
              <div className="relative overflow-hidden rounded-lg mb-6">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-[400px] object-cover transform group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition"></div>
              </div>
              <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
              <p className="text-gold mb-4">{member.role}</p>
              <p className="text-gray-400">{member.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;