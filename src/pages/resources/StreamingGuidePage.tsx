import { Tv, Wifi, ArrowRight } from 'lucide-react';
import PageHero from '../../components/PageHero';
import SEO from '../../components/SEO';
import { breadcrumbSchema } from '../../lib/structuredData';
import { useContactModal } from '../../context/ContactModalContext';

const services = [
  { name: 'Netflix', speed: '25 Mbps', quality: '4K Ultra HD', note: 'Per stream' },
  { name: 'YouTube TV', speed: '13 Mbps', quality: '1080p', note: 'Live TV + DVR' },
  { name: 'Disney+', speed: '25 Mbps', quality: '4K Ultra HD', note: 'Per stream' },
  { name: 'Hulu', speed: '16 Mbps', quality: '4K (select)', note: 'With Live TV option' },
  { name: 'Apple TV+', speed: '25 Mbps', quality: '4K Dolby Vision', note: 'Per stream' },
  { name: 'Peacock', speed: '13 Mbps', quality: '1080p', note: 'Live sports included' },
];

const sportsOptions = [
  { name: 'YouTube TV', sports: 'FOX, CBS, NBC, ESPN, NFL Network, Big Ten Network' },
  { name: 'Hulu + Live TV', sports: 'FOX, CBS, NBC, ESPN, NFL Network' },
  { name: 'FuboTV', sports: 'FOX, CBS, NBC, ESPN, NFL Network, beIN Sports' },
  { name: 'Peacock', sports: 'NBC Sports, Premier League, Sunday Night Football' },
];


export default function StreamingGuidePage() {
  const { openContactModal } = useContactModal();

  return (
    <>
      <SEO
        title="Streaming & Cord-Cutting Guide"
        description="Complete guide to cutting the cord. Compare streaming services, bandwidth requirements, and how to watch Hawkeyes, Cyclones, and Midwest sports without cable."
        path="/resources/streaming-guide"
      >
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema([{ name: 'Resources', path: '/resources/streaming-guide' }, { name: 'Streaming Guide', path: '/resources/streaming-guide' }]))}</script>
      </SEO>
      <PageHero
        label="Streaming & Cord-Cutting"
        title="Your Complete Guide to Cutting the Cord"
        description="Save hundreds per year by switching from cable TV to streaming. Here's everything you need to know — including how to watch the Hawkeyes."
        image="https://images.pexels.com/photos/4009402/pexels-photo-4009402.jpeg?auto=compress&cs=tinysrgb&w=1920&h=800&fit=crop"
      />

      <section className="bg-[#0a0e1b] py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="section-label">Bandwidth Guide</p>
            <h2 className="font-display font-bold text-3xl tracking-tight text-white mb-4">How Much Speed Do You Need?</h2>
          </div>
          <div className="max-w-lg mx-auto mb-16">
            <div className="bg-[#1a1e2b] rounded-xl p-8 text-center">
              <p className="font-body text-[14px] text-slate-500 mb-4">For every household size</p>
              <p className="font-display font-extrabold text-3xl text-fiber-blue tracking-tight mb-1">1,000 Mbps</p>
              <p className="font-display font-semibold text-lg text-white">KSG Gig</p>
              <p className="font-body text-[13px] text-slate-500 mt-2">One plan covers it all — stream on every screen simultaneously without buffering.</p>
            </div>
          </div>

          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="section-label">Streaming Services</p>
            <h2 className="font-display font-bold text-3xl tracking-tight text-white mb-4">Popular Services & Their Requirements</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {services.map((s) => (
              <div key={s.name} className="bg-[#0a0e1b] border border-white/10 rounded-xl p-6 hover:shadow-md transition-shadow">
                <h3 className="font-display font-semibold text-lg text-white mb-3">{s.name}</h3>
                <div className="space-y-2 text-[14px]">
                  <p className="flex items-center gap-2"><Wifi className="w-4 h-4 text-fiber-blue" /><span className="text-slate-200">{s.speed} recommended</span></p>
                  <p className="flex items-center gap-2"><Tv className="w-4 h-4 text-fiber-blue" /><span className="text-slate-200">{s.quality}</span></p>
                  <p className="font-body text-[13px] text-slate-500">{s.note}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#1a1e2b]/50 py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="section-label">Midwest Sports</p>
            <h2 className="font-display font-bold text-3xl tracking-tight text-white mb-4">How to Watch Your Midwest Teams</h2>
            <p className="font-body text-lg text-slate-500">Hawkeyes, Cyclones, Cubs, Chiefs — here's how to watch them all without cable.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {sportsOptions.map((opt) => (
              <div key={opt.name} className="bg-[#0a0e1b] rounded-xl p-6 shadow-sm">
                <h3 className="font-display font-semibold text-lg text-white mb-3">{opt.name}</h3>
                <p className="font-body text-[14px] text-slate-600 leading-relaxed">{opt.sports}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-fiber-blue py-16">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <h2 className="font-display font-bold text-3xl text-white tracking-tight mb-4">Stream Everything. Buffer Nothing.</h2>
          <p className="font-body text-lg text-white/80 max-w-xl mx-auto mb-8">KSG Fiber's symmetrical speeds handle every screen in your home simultaneously.</p>
          <button onClick={() => openContactModal('Streaming Guide Page')} className="btn-green text-base px-8 py-4">View Plans <ArrowRight className="w-5 h-5" /></button>
        </div>
      </section>
    </>
  );
}
