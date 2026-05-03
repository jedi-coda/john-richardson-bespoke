import React from 'react';
import { Phone, CheckCircle, ShieldCheck, Clock, MapPin } from 'lucide-react';

const BespokeDecorating = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      {/* Navigation / Header */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="font-bold text-xl tracking-tight text-blue-900">
            BESPOKE DECORATING
          </div>
          <a 
            href="tel:01903802214" 
            className="bg-blue-600 text-white px-5 py-2 rounded-full font-semibold text-sm flex items-center gap-2 hover:bg-blue-700 transition-all"
          >
            <Phone size={16} /> CALL JOHN
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="py-16 px-6 max-w-5xl mx-auto text-center md:text-left md:flex items-center gap-12">
        <div className="md:w-3/5">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
            <Clock size={14} /> 30 Years Experience
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 leading-tight mb-6">
            Flawless Finishes for <span className="text-blue-600 font-serif italic">Horsham Homes.</span>
          </h1>
          <p className="text-lg text-slate-600 mb-8 max-w-xl">
            Professional Interior & Exterior decorating. Domestic and Commercial excellence backed by three decades of local reputation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button className="bg-slate-900 text-white px-8 py-4 rounded-xl font-bold hover:bg-slate-800 transition-all shadow-lg shadow-slate-200">
              Request a Fast Quote
            </button>
            <div className="flex items-center gap-2 text-slate-500 font-medium px-4">
              <ShieldCheck className="text-green-500" /> Fully Insured
            </div>
          </div>
        </div>
        <div className="w-full mb-10 md:mb-0 md:w-2/5">
          <div className="bg-slate-200 aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
             <img src="/hero.jpg" className="w-full h-full object-cover" alt="Bespoke Decorating Work" />
          </div>
        </div>
      </header>

      {/* Authority Section */}
      <section className="bg-white py-12 border-y border-slate-200">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600">30+</div>
            <div className="text-sm text-slate-500">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600">100%</div>
            <div className="text-sm text-slate-500">Fully Insured</div>
          </div>
          <div className="text-center">
             <MapPin className="mx-auto mb-1 text-blue-600" />
            <div className="text-sm font-bold text-slate-900">Horsham & Beyond</div>
          </div>
          <div className="text-center">
            <CheckCircle className="mx-auto mb-1 text-blue-600" />
            <div className="text-sm font-bold text-slate-900">Bespoke Quality</div>
          </div>
        </div>
      </section>

      {/* AnswerMate Feature CTA */}
      <section className="py-20 px-6 max-w-3xl mx-auto text-center">
        <div className="bg-blue-900 text-white rounded-[2.5rem] p-10 md:p-16 shadow-2xl relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-4 text-white">Need a Quote Fast?</h2>
            <p className="text-blue-200 mb-8 text-lg">
              John is usually on-site, but our smart system never misses a call. Your inquiry is captured instantly.
            </p>
            <form className="space-y-4 max-w-sm mx-auto">
              <input type="text" placeholder="Your Name" className="w-full p-4 rounded-xl text-slate-900 border-none focus:ring-4 focus:ring-blue-400" />
              <input type="tel" placeholder="Your Phone Number" className="w-full p-4 rounded-xl text-slate-900 border-none focus:ring-4 focus:ring-blue-400" />
              <button className="w-full bg-white text-blue-900 font-black py-4 rounded-xl hover:bg-blue-50 transition-colors">
                SEND REQUEST
              </button>
            </form>
          </div>
          {/* Subtle decorative background circle */}
          <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-blue-800 rounded-full opacity-50"></div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-slate-200 text-center text-slate-400 text-sm">
        <p>© {new Date().getFullYear()} John Richardson - Bespoke Decorating.</p>
        <p className="mt-2">Systems Engineered by ZALABS.</p>
      </footer>
    </div>
  );
};

export default BespokeDecorating;
