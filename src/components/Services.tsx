import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ScanFace, Sparkles, ShieldCheck } from 'lucide-react';

const services = [
  {
    id: '01',
    title: 'Digital Scanning',
    desc: 'Hyper-accurate 3D mapping of your dental structure for flawless, painless diagnostics.',
    icon: ScanFace,
    color: 'from-teal-500/20 to-transparent'
  },
  {
    id: '02',
    title: 'Painless Implants',
    desc: 'Next-generation materials and guided surgery ensure a seamless, comfortable restoration.',
    icon: ShieldCheck,
    color: 'from-blue-500/20 to-transparent'
  },
  {
    id: '03',
    title: 'Aesthetic Design',
    desc: 'Artistic smile curation using ultra-thin veneers and soft-gold glow whitening.',
    icon: Sparkles,
    color: 'from-gold-glow/20 to-transparent'
  }
];

export default function Services() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-66.66%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-matte-dark">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        
        {/* Section Header */}
        <div className="absolute top-24 left-6 md:left-24 z-10">
          <h2 className="text-4xl md:text-6xl font-display font-light tracking-tighter">
            OUR <span className="font-bold text-gradient-teal">SERVICES</span>
          </h2>
        </div>

        {/* Horizontal Scroll Container */}
        <motion.div style={{ x }} className="flex gap-8 px-6 md:px-24 pt-32 w-[300vw]">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="w-[85vw] md:w-[60vw] lg:w-[40vw] shrink-0 glass-panel rounded-3xl p-8 md:p-12 relative overflow-hidden group"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
              
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                  <span className="text-6xl md:text-8xl font-display font-bold text-white/5 mb-8 block">
                    {service.id}
                  </span>
                  <service.icon className="w-12 h-12 text-teal-glow mb-6" strokeWidth={1} />
                  <h3 className="text-3xl md:text-4xl font-display mb-4">{service.title}</h3>
                  <p className="text-zinc-400 text-lg md:text-xl font-light leading-relaxed">
                    {service.desc}
                  </p>
                </div>
                
                <div className="mt-12">
                  <button className="text-sm font-mono uppercase tracking-widest text-teal-glow hover:text-white transition-colors flex items-center gap-2">
                    Explore <div className="w-8 h-[1px] bg-current" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
