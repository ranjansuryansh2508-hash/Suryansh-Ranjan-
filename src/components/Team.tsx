import { motion } from 'motion/react';

const artists = [
  {
    name: 'Dr. Kumod',
    role: 'Lead Dental Artist',
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=800',
    specialty: 'Aesthetic & Implantology'
  },
  {
    name: 'Dr. Ananya',
    role: 'Orthodontic Specialist',
    image: 'https://images.unsplash.com/photo-1594824436951-7f1267a45e25?auto=format&fit=crop&q=80&w=800',
    specialty: 'Invisible Aligners'
  },
  {
    name: 'Dr. Vikram',
    role: 'Endodontist',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=800',
    specialty: 'Microscopic Root Canals'
  }
];

export default function Team() {
  return (
    <section className="py-32 px-6 md:px-24 bg-matte-black relative overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal-glow/5 rounded-full blur-[150px] -z-10" />
      
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-display font-light tracking-tighter mb-6">
            EXPERT DENTAL <span className="font-bold text-gradient-teal">ARTISTS</span>
          </h2>
          <p className="text-zinc-400 text-lg md:text-xl font-light max-w-2xl">
            Our specialists blend medical precision with an artist's eye, ensuring your smile is both healthy and breathtaking.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {artists.map((artist, index) => (
            <motion.div
              key={artist.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group relative"
            >
              <div className="glass-panel rounded-3xl overflow-hidden aspect-[3/4] relative">
                <img 
                  src={artist.image} 
                  alt={artist.name} 
                  className="w-full h-full object-cover opacity-80 mix-blend-luminosity group-hover:mix-blend-normal group-hover:scale-105 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                
                {/* Frosted Glass Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-matte-black via-matte-black/40 to-transparent" />
                
                <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-2xl font-display font-medium mb-1">{artist.name}</h3>
                  <p className="text-teal-glow font-mono text-sm uppercase tracking-widest mb-3">
                    {artist.role}
                  </p>
                  <p className="text-zinc-400 text-sm font-light opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    {artist.specialty}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
