import { MapPin, ArrowRight, Check } from 'lucide-react';
import PageHero from '../../components/PageHero';
import SEO from '../../components/SEO';
import { breadcrumbSchema } from '../../lib/structuredData';
import { ReactNode } from 'react';
import { useContactModal } from '../../context/ContactModalContext';

interface LocationData {
  state: string;
  tagline: string;
  description: string;
  heroImage: string;
  isHQ?: boolean;
  communities: string[];
  industries: { icon: ReactNode; title: string; desc: string }[];
  highlights: { label: string; value: string }[];
  bodyContent: string[];
}

export default function LocationTemplate({ data }: { data: LocationData }) {
  const { openContactModal } = useContactModal();
  const stateSlug = data.state.toLowerCase();
  const path = `/locations/${stateSlug}`;

  return (
    <>
      <SEO
        title={`Fiber Internet in ${data.state}`}
        description={data.description}
        path={path}
      >
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema([{ name: 'Locations', path }, { name: data.state, path }]))}</script>
      </SEO>
      <PageHero
        label={data.isHQ ? 'Headquarters — ' + data.state : 'Expansion Market — ' + data.state}
        title={data.tagline}
        description={data.description}
        image={data.heroImage}
      >
        <button onClick={() => openContactModal(`Location - ${data.state}`)} className="btn-green">Check Availability <ArrowRight className="w-5 h-5" /></button>
      </PageHero>

      <section className="bg-[#0a0e1b] py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <p className="section-label">{data.state} Coverage</p>
              <h2 className="font-display font-bold text-3xl tracking-tight text-white mb-6">Serving {data.state} Communities</h2>
              <div className="space-y-4 font-body text-[16px] text-slate-200 leading-relaxed">
                {data.bodyContent.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>
            <div>
              <div className="bg-[#1a1e2b] rounded-xl p-8">
                <h3 className="font-display font-semibold text-lg text-white mb-4 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-fiber-blue" />
                  Communities We Serve
                </h3>
                <div className="grid grid-cols-2 gap-2">
                  {data.communities.map((c) => (
                    <div key={c} className="flex items-center gap-2 font-body text-[14px] text-slate-200">
                      <Check className="w-4 h-4 text-signal-green flex-shrink-0" />
                      {c}
                    </div>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-6">
                {data.highlights.map((h) => (
                  <div key={h.label} className="bg-fiber-blue-subtle rounded-lg p-4 text-center">
                    <p className="font-display font-extrabold text-2xl text-fiber-blue tracking-tight">{h.value}</p>
                    <p className="font-mono text-[10px] tracking-[1px] uppercase text-slate-500">{h.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#1a1e2b]/50 py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="section-label">Industry Focus</p>
            <h2 className="font-display font-bold text-3xl tracking-tight text-white mb-4">
              Connecting {data.state}'s Key Industries
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {data.industries.map((ind) => (
              <div key={ind.title} className="bg-[#0a0e1b] rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow">
                <div className="w-10 h-10 rounded-lg bg-fiber-blue-subtle flex items-center justify-center mb-4 text-fiber-blue">
                  {ind.icon}
                </div>
                <h3 className="font-display font-semibold text-lg text-white mb-2">{ind.title}</h3>
                <p className="font-body text-[14px] text-slate-500 leading-relaxed">{ind.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-fiber-blue py-16">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <h2 className="font-display font-bold text-3xl text-white tracking-tight mb-4">
            Bring KSG Fiber to Your {data.state} Community
          </h2>
          <p className="font-body text-lg text-white/80 max-w-xl mx-auto mb-8">
            Check availability at your address or request service in your area.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button onClick={() => openContactModal(`Location - ${data.state}`)} className="btn-green text-base px-8 py-4">Check Availability <ArrowRight className="w-5 h-5" /></button>
          </div>
        </div>
      </section>
    </>
  );
}
