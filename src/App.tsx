import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Team from './components/Team';
import Footer from './components/Footer';

export default function App() {
  return (
    <main className="min-h-screen bg-matte-black text-arctic-silver selection:bg-teal-glow/30 selection:text-teal-glow">
      <Navbar />
      
      <div id="hero">
        <Hero />
      </div>
      
      <div id="services">
        <Services />
      </div>
      
      <div id="artists">
        <Team />
      </div>
      
      <div id="contact">
        <Footer />
      </div>
    </main>
  );
}
