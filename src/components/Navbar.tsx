import { motion } from 'motion/react';
import { Hexagon } from 'lucide-react';

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-6 mix-blend-difference"
    >
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Hexagon className="w-8 h-8 text-teal-glow" strokeWidth={1.5} />
          <span className="font-display font-bold text-xl tracking-tight text-white">
            KUMOD
          </span>
        </div>
        
        <div className="hidden md:flex items-center gap-12 font-mono text-xs uppercase tracking-[0.2em] text-zinc-400">
          <a href="#services" className="hover:text-teal-glow transition-colors">Services</a>
          <a href="#artists" className="hover:text-teal-glow transition-colors">Artists</a>
          <a href="#contact" className="hover:text-teal-glow transition-colors">Contact</a>
        </div>
        
        <button className="text-sm font-mono uppercase tracking-widest text-white border border-white/20 rounded-full px-6 py-2 hover:bg-white hover:text-black transition-colors">
          Menu
        </button>
      </div>
    </motion.nav>
  );
}
