import { Zap, ArrowRight, Check, X } from 'lucide-react';
import PageHero from '../../components/PageHero';
import SEO from '../../components/SEO';
import { breadcrumbSchema } from '../../lib/structuredData';
import { useContactModal } from '../../context/ContactModalContext';

const comparison = [
  { feature: 'Download Speed', fiber: 'Up to 10 Gbps', cable: 'Up to 1 Gbps', dsl: 'Up to 100 Mbps', satellite: 'Up to 150 Mbps' },
  { feature: 'Upload Speed', fiber: 'Symmetrical', cable: '10-35 Mbps', dsl: '1-10 Mbps', satellite: '3-5 Mbps' },
  { feature: 'Latency', fiber: '<10ms', cable: '15-35ms', dsl: '25-50ms', satellite: '500-700ms' },
  { feature: 'Data Caps', fiber: 'None', cable: 'Common', dsl: 'Some', satellite: 'Always' },
  { feature: 'Weather Impact', fiber: 'None', cable: 'Minimal', dsl: 'Some', satellite: 'Significant' },
];

const myths = [
  { myth: 'Fiber is only for businesses', truth: 'KSG Fiber offers 1 Gbps residential internet for just $89.95/month. Fiber is for everyone.' },
  { myth: 'I don\'t need speeds that fast', truth: 'Speed is about capacity. More devices, more users, more simultaneous streams all benefit from fiber.' },
  { myth: 'Fiber installation damages my property', truth: 'Modern micro-trenching and installation techniques are minimally invasive. Most installs require just a small hole for the fiber line.' },
  { myth: 'Fiber is too expensive', truth: 'KSG Fiber plans are competitively priced with cable. You get significantly more speed and reliability for a similar monthly cost.' },
];

export default function WhatIsFiberPage() {
  const { openContactModal } = useContactModal();

  return (
    <>
      <SEO
        title="What Is Fiber Internet"
        description="Learn how fiber optic internet works and why it's faster, more reliable, and lower latency than cable, DSL, or satellite. Fiber vs. competition comparison."
        path="/resources/what-is-fiber"
      >
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema([{ name: 'Resources', path: '/resources/what-is-fiber' }, { name: 'What Is Fiber', path: '/resources/what-is-fiber' }]))}</script>
      </SEO>
      <PageHero
        label="What Is Fiber Internet"
        title="Fiber Optic Internet, Explained Simply"
        description="Fiber optic internet transmits data as light pulses through glass strands, delivering the fastest, most reliable internet technology available."
      />

      <section className="bg-[#0a0e1b] py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="section-label">How It Works</p>
              <h2 className="font-display font-bold text-3xl tracking-tight text-white mb-6">Light-Speed Data Delivery</h2>
              <div className="space-y-4 font-body text-[16px] text-slate-200 leading-relaxed">
                <p>Traditional internet uses copper cables — the same technology that's been around since the telephone era. Copper transmits data as electrical signals, which degrade over distance and are susceptible to interference.</p>
                <p>Fiber optic cable transmits data as pulses of light through thin glass strands. Light doesn't degrade over distance the way electrical signals do, which means your speed stays consistent whether you're 1 mile or 50 miles from the source.</p>
                <p>This is why fiber delivers symmetrical speeds (uploads = downloads), lower latency, and vastly greater capacity than any copper-based technology.</p>
              </div>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/2881232/pexels-photo-2881232.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Fiber optic cables"
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#1a1e2b]/50 py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="section-label">Comparison</p>
            <h2 className="font-display font-bold text-3xl tracking-tight text-white mb-4">Fiber vs. The Competition</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[640px]">
              <thead>
                <tr className="border-b-2 border-white/10">
                  <th className="text-left font-mono text-[10px] tracking-[2px] uppercase text-slate-500 py-3 px-4">Feature</th>
                  <th className="text-left font-mono text-[10px] tracking-[2px] uppercase text-fiber-blue py-3 px-4 bg-fiber-blue-subtle rounded-t-lg">Fiber</th>
                  <th className="text-left font-mono text-[10px] tracking-[2px] uppercase text-slate-500 py-3 px-4">Cable</th>
                  <th className="text-left font-mono text-[10px] tracking-[2px] uppercase text-slate-500 py-3 px-4">DSL</th>
                  <th className="text-left font-mono text-[10px] tracking-[2px] uppercase text-slate-500 py-3 px-4">Satellite</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row) => (
                  <tr key={row.feature} className="border-b border-slate-100">
                    <td className="font-display font-semibold text-[14px] text-white py-4 px-4">{row.feature}</td>
                    <td className="font-body text-[14px] text-fiber-blue font-semibold py-4 px-4 bg-fiber-blue-subtle/50">{row.fiber}</td>
                    <td className="font-body text-[14px] text-slate-600 py-4 px-4">{row.cable}</td>
                    <td className="font-body text-[14px] text-slate-600 py-4 px-4">{row.dsl}</td>
                    <td className="font-body text-[14px] text-slate-600 py-4 px-4">{row.satellite}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="bg-[#0a0e1b] py-24">
        <div className="max-w-3xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <p className="section-label">Myth vs. Fact</p>
            <h2 className="font-display font-bold text-3xl tracking-tight text-white">Common Fiber Myths</h2>
          </div>
          <div className="space-y-6">
            {myths.map(({ myth, truth }) => (
              <div key={myth} className="bg-[#1a1e2b] rounded-xl p-6">
                <div className="flex items-start gap-3 mb-3">
                  <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <p className="font-display font-semibold text-[15px] text-white">"{myth}"</p>
                </div>
                <div className="flex items-start gap-3 ml-0">
                  <Check className="w-5 h-5 text-signal-green flex-shrink-0 mt-0.5" />
                  <p className="font-body text-[14px] text-slate-600 leading-relaxed">{truth}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-fiber-blue py-16">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <Zap className="w-10 h-10 text-white mx-auto mb-4" />
          <h2 className="font-display font-bold text-3xl text-white tracking-tight mb-4">Ready to Make the Switch?</h2>
          <p className="font-body text-lg text-white/80 max-w-xl mx-auto mb-8">See if KSG Fiber is available at your address.</p>
          <button onClick={() => openContactModal('What Is Fiber Page')} className="btn-green text-base px-8 py-4">Check Availability <ArrowRight className="w-5 h-5" /></button>
        </div>
      </section>
    </>
  );
}
