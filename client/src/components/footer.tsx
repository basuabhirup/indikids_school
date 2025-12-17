import { MapPin, Phone, Mail, Facebook } from "lucide-react";

export function Footer() {
  return (
    <footer id="footer" className="bg-slate-900 text-white pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold font-heading text-white">INDIKIDS</h3>
            <p className="text-slate-400">
              Where kids learn to be illuminated. A premium English medium primary school committed to a fearless, homely learning environment.
            </p>
            <a 
              href="https://www.facebook.com/groups/1254664802074917" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 hover:bg-blue-700 transition-colors"
            >
              <Facebook className="w-5 h-5" />
            </a>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3 text-slate-400">
                <MapPin className="w-5 h-5 shrink-0 mt-1" />
                <span>Rathtala, Lalpur, P.O. Chakdaha, District- Nadia. PIN- 741222. West Bengal, India.</span>
              </div>
              <div className="flex items-center gap-3 text-slate-400">
                <Phone className="w-5 h-5 shrink-0" />
                <a href="tel:9564177559" className="hover:text-white transition-colors">9564177559</a>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">School Authority</h4>
            <ul className="space-y-3 text-slate-400">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                Dr. Ruma Banerjee
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                Mr. Arpan Biswas
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                Mr. Sushovan Guha
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><button onClick={() => document.querySelector('#home')?.scrollIntoView({behavior: 'smooth'})} className="text-slate-400 hover:text-white transition-colors">Home</button></li>
              <li><button onClick={() => document.querySelector('#about')?.scrollIntoView({behavior: 'smooth'})} className="text-slate-400 hover:text-white transition-colors">About Us</button></li>
              <li><button onClick={() => document.querySelector('#curriculum')?.scrollIntoView({behavior: 'smooth'})} className="text-slate-400 hover:text-white transition-colors">Academics</button></li>
              <li><button onClick={() => document.querySelector('#fees')?.scrollIntoView({behavior: 'smooth'})} className="text-slate-400 hover:text-white transition-colors">Admissions</button></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-slate-500 text-sm">
          <p>&copy; {new Date().getFullYear()} INDIKIDS. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
