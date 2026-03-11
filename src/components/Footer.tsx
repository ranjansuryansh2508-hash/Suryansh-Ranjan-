import { Hexagon, MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-matte-dark py-24 px-6 md:px-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        
        {/* Brand */}
        <div className="col-span-1 md:col-span-2 lg:col-span-1">
          <div className="flex items-center gap-3 mb-6">
            <Hexagon className="w-8 h-8 text-teal-glow" strokeWidth={1.5} />
            <span className="font-display font-bold text-2xl tracking-tight text-white">
              KUMOD
            </span>
          </div>
          <p className="text-zinc-400 font-light leading-relaxed mb-8">
            Hyper-modern dentistry merging digital precision with artistic warmth.
          </p>
          <div className="flex gap-4">
            {/* Social Icons Placeholders */}
            <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-teal-glow hover:text-teal-glow transition-colors cursor-pointer">
              <span className="font-mono text-xs">IG</span>
            </div>
            <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-teal-glow hover:text-teal-glow transition-colors cursor-pointer">
              <span className="font-mono text-xs">FB</span>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="space-y-6">
          <h4 className="font-display font-medium text-lg text-white mb-4">Location</h4>
          <div className="flex items-start gap-4 text-zinc-400 font-light">
            <MapPin className="w-5 h-5 text-teal-glow shrink-0 mt-1" />
            <p>
              Patliputra Colony,<br />
              Patna, Bihar<br />
              800013, India
            </p>
          </div>
        </div>

        {/* Quick Contact */}
        <div className="space-y-6">
          <h4 className="font-display font-medium text-lg text-white mb-4">Contact</h4>
          <div className="flex items-center gap-4 text-zinc-400 font-light">
            <Phone className="w-5 h-5 text-teal-glow shrink-0" />
            <p>+91 98765 43210</p>
          </div>
          <div className="flex items-center gap-4 text-zinc-400 font-light">
            <Mail className="w-5 h-5 text-teal-glow shrink-0" />
            <p>hello@kumoddental.com</p>
          </div>
        </div>

        {/* CTA */}
        <div className="space-y-6">
          <h4 className="font-display font-medium text-lg text-white mb-4">Ready?</h4>
          <p className="text-zinc-400 font-light mb-6">
            Schedule your consultation today.
          </p>
          <button className="aurora-button w-full text-center">
            <span>Book Now</span>
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between text-zinc-500 text-sm font-light">
        <p>&copy; {new Date().getFullYear()} Kumod Dental Clinic. All rights reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-teal-glow transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-teal-glow transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
