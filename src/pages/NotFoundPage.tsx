import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import SEO from '../components/SEO';

export default function NotFoundPage() {
  return (
    <section className="min-h-[75vh] bg-[#0a0e1b] text-white flex items-center pt-24">
      <SEO path="/404" title="Page Not Found" noIndex description="The requested KSG Fiber page could not be found." />
      <div className="max-w-3xl mx-auto px-6 py-24 text-center">
        <p className="font-mono text-signal-green tracking-[4px] uppercase text-xs mb-4">404</p>
        <h1 className="font-display font-extrabold text-5xl md:text-7xl mb-5">That route went dark.</h1>
        <p className="text-slate-400 text-lg mb-9">The page may have moved, but your route back to KSG Fiber is still connected.</p>
        <Link to="/" className="btn-green"><ArrowLeft className="w-5 h-5" /> Return Home</Link>
      </div>
    </section>
  );
}
