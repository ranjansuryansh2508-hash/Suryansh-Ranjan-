import { Canvas } from '@react-three/fiber';
import { Environment, ContactShadows } from '@react-three/drei';
import { motion } from 'motion/react';
import ToothShard from './ToothShard';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-glow/20 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gold-glow/10 rounded-full blur-[120px] -z-10" />

      {/* 3D Canvas */}
      <div className="absolute inset-0 z-0 pointer-events-none lg:pointer-events-auto">
        <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} color="#2dd4bf" />
          <spotLight position={[-10, -10, -10]} angle={0.15} penumbra={1} intensity={0.5} color="#fbbf24" />
          <ToothShard />
          <Environment preset="city" />
          <ContactShadows position={[0, -2.5, 0]} opacity={0.4} scale={10} blur={2} far={4} />
        </Canvas>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 h-full flex flex-col justify-center pointer-events-none">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-teal-glow font-mono text-sm uppercase tracking-[0.2em] mb-4">
              Patliputra Colony, Patna
            </h2>
          </motion.div>
          
          <motion.h1 
            className="text-6xl md:text-8xl lg:text-9xl font-display font-light leading-[0.9] tracking-tighter mb-8"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="block text-arctic-silver">PERFECT</span>
            <span className="block text-gradient-teal font-bold">SYMMETRY.</span>
          </motion.h1>

          <motion.p 
            className="text-lg md:text-xl text-zinc-400 max-w-xl mb-12 font-light leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Kumod Dental Clinic merges digital precision with artistic warmth. 
            Experience painless, hyper-modern dentistry designed for the future.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="pointer-events-auto"
          >
            <button className="aurora-button group flex items-center gap-3">
              <span>Book Patna Appointment</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
