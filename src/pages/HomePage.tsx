import { Link } from 'react-router-dom';
import {
  Zap, Shield, Wifi, ArrowRight, Check,
  Home, Building2, Sparkles, ChevronRight, Star, MapPin,
} from 'lucide-react';
import SEO from '../components/SEO';
import { organizationSchema, localBusinessSchema } from '../lib/structuredData';
import { useContactModal } from '../context/ContactModalContext';

const plan = {
  name: 'KSG Gig',
  speed: '1,000',
  price: '89.95',
  description: 'Blazing-fast gigabit fiber for your entire household. Streaming, gaming, smart home, remote work — all without compromise.',
  features: ['1 Gbps symmetrical speeds', 'No data caps', 'No contracts', 'Free installation', 'Free equipment', 'Whole-home mesh Wi-Fi', '24/7 support'],
};

const stats = [
  { value: '<10ms', label: 'Latency' },
  { value: '0', label: 'Data Caps' },
  { value: '100%', label: 'Fiber Optic' },
];

const testimonials = [
  {
    quote: "Out here in Van Meter, our options used to be terrible. KSG Fiber changed everything — the speeds are incredible and the price hasn't budged in two years.",
    name: 'Sarah M.',
    location: 'Van Meter, IA',
    rating: 5,
  },
  {
    quote: "As a remote worker in a small town, I need reliable uploads. KSG's symmetrical speeds mean my video calls are crystal clear every single time.",
    name: 'James R.',
    location: 'Adel, IA',
    rating: 5,
  },
  {
    quote: "We run a grain and cattle operation and KSG Fiber handles all our IoT monitoring, bookkeeping software, and our kids' homework without a hiccup.",
    name: 'Linda & Tom K.',
    location: 'Winterset, IA',
    rating: 5,
  },
];

export default function HomePage() {
  const { openContactModal } = useContactModal();

  return (
    <>
      <SEO
        path="/"
        description="KSG Fiber delivers symmetrical gigabit fiber optic internet to homes and businesses across the Midwest. No data caps. No contracts. Your neighbors in fiber."
      >
        <script type="application/ld+json">{JSON.stringify(organizationSchema())}</script>
        <script type="application/ld+json">{JSON.stringify(localBusinessSchema())}</script>
      </SEO>
      <section className="relative min-h-screen flex items-center bg-midnight overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/design/hero-bg-gemini.jpg"
            alt="Fiber connectivity reaching a rural Midwest community"
            className="w-full h-full object-cover opacity-75"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-midnight via-midnight/85 to-midnight/50" />
        </div>
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              'radial-gradient(ellipse at 30% 20%, rgba(27,58,107,0.3) 0%, transparent 50%), radial-gradient(ellipse at 70% 80%, rgba(244,123,32,0.15) 0%, transparent 40%)',
          }}
        />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-32 lg:py-0 w-full">
          <div className="max-w-4xl lg:pr-32">
            <div className="inline-flex items-center gap-2 font-mono text-[11px] tracking-[3px] uppercase text-signal-green bg-signal-green/10 border border-signal-green/20 px-5 py-2 rounded-full mb-8">
              <span className="w-2 h-2 rounded-full bg-signal-green animate-pulse" />
              Now Available in the Midwest
            </div>
            <h1 className="font-display font-extrabold text-5xl md:text-6xl lg:text-[76px] text-white leading-[1.05] tracking-tight mb-6">
              Connecting Rural America with{' '}
              <span className="bg-gradient-to-r from-signal-green to-signal-green-light bg-clip-text text-transparent">
                High-Speed Fiber
              </span>
            </h1>
            <p className="font-body text-lg md:text-xl text-slate-300 leading-relaxed max-w-xl mb-10">
              World-class gigabit speeds are here. Fast, reliable connectivity from neighbors who know your community.
            </p>
            <div className="flex flex-wrap gap-4">
              <button onClick={() => openContactModal('Homepage - Hero')} className="btn-green text-base px-8 py-4">
                Check Availability
                <ArrowRight className="w-5 h-5" />
              </button>
              <Link to="/resources/what-is-fiber" className="btn-ghost text-base px-8 py-4">
                Why Fiber?
              </Link>
            </div>
          </div>
        </div>

        <img src="/design/worker-tech2.png" alt="KSG Fiber field technician" className="hidden xl:block absolute right-0 bottom-[-7rem] h-[82%] object-contain drop-shadow-[0_24px_60px_rgba(0,0,0,0.7)] pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0">
          <div className="gradient-bar h-1" />
        </div>
      </section>

      <section className="bg-[#0a0e1b] py-4 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-3 gap-8 py-8 border-b border-white/10">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-display font-extrabold text-3xl md:text-4xl text-signal-green tracking-tight">{stat.value}</p>
                <p className="font-mono text-[10px] tracking-[2px] uppercase text-slate-500 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0a0e1b] py-24 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="section-label">Why KSG Fiber</p>
            <h2 className="font-display font-bold text-3xl md:text-4xl tracking-tight text-white mb-4">
              Internet That Works as Hard as You Do
            </h2>
            <p className="font-body text-lg text-slate-500 leading-relaxed">
              Built on 100% fiber optic infrastructure, KSG delivers the speed, reliability, and simplicity your household deserves.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: 'Symmetrical Speeds',
                desc: 'Your uploads are just as fast as your downloads. Essential for video calls, cloud backups, and working from home.',
              },
              {
                icon: Shield,
                title: 'No Data Caps',
                desc: 'Stream, game, and work without worrying about overage fees. Use as much as you need, whenever you need it.',
              },
              {
                icon: Wifi,
                title: 'Whole-Home Wi-Fi',
                desc: 'Our managed mesh system blankets every room with strong, consistent signal. No dead zones.',
              },
            ].map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="group bg-[#1a1e2b] border border-white/10 rounded-xl p-8 hover:border-signal-green hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(0,0,0,0.35)] transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-signal-green-subtle flex items-center justify-center mb-5 group-hover:bg-signal-green group-hover:text-white transition-colors">
                  <Icon className="w-6 h-6 text-signal-green group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-display font-semibold text-lg text-white mb-2">{title}</h3>
                <p className="font-body text-[14px] text-slate-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/design/fiber-field.jpg"
            alt="Aerial view of a small Midwest town surrounded by farmland"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-fiber-blue/90" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="font-mono text-[11px] tracking-[3px] uppercase text-signal-green mb-4">Our Services</p>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-white tracking-tight mb-6">
                Plans for Every Need
              </h2>
              <p className="font-body text-lg text-white/80 leading-relaxed mb-8">
                Whether you're streaming the Hawkeyes, running a business, or connecting the barn, KSG Fiber has a plan built for you.
              </p>
              <div className="space-y-4">
                {[
                  { icon: Home, label: 'Residential Internet', desc: '1 Gbps symmetrical for $89.95/mo', to: '/services/residential' },
                  { icon: Building2, label: 'Business Internet', desc: '1 Gbps dedicated fiber for your business', to: '/services/business' },
                  { icon: Sparkles, label: 'More Services', desc: 'New offerings coming soon — stay tuned', to: '/about' },
                ].map(({ icon: Icon, label, desc, to }) => (
                  <Link
                    key={to}
                    to={to}
                    className="flex items-center gap-4 bg-white/10 rounded-lg p-4 hover:bg-white/20 transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="font-display font-semibold text-white">{label}</p>
                      <p className="font-body text-[14px] text-white/60">{desc}</p>
                    </div>
                    <ChevronRight className="w-5 h-5 text-white/40 group-hover:text-white transition-colors" />
                  </Link>
                ))}
              </div>
            </div>
            <div className="hidden lg:block">
              <img
                src="/design/salesagentnew2.png"
                alt="KSG Fiber plan specialist"
                className="max-h-[620px] mx-auto object-contain drop-shadow-[0_24px_60px_rgba(0,0,0,0.7)]"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#101522] py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="section-label">Plans & Pricing</p>
            <h2 className="font-display font-bold text-3xl md:text-4xl tracking-tight text-white mb-4">
              Simple, Honest Pricing
            </h2>
            <p className="font-body text-lg text-slate-500 leading-relaxed">
              No hidden fees. No contracts. No data caps. The price you see is the price you pay.
            </p>
          </div>

          <div className="max-w-lg mx-auto">
            <div className="relative bg-[#1a1e2b] rounded-xl p-8 shadow-[0_18px_50px_rgba(0,0,0,0.45)] ring-2 ring-signal-green transition-all duration-300 hover:-translate-y-1">
              <span className="absolute -top-3 left-8 font-mono text-[10px] tracking-[2px] uppercase bg-signal-green-subtle text-signal-green-dark px-3 py-1 rounded-full">
                Special Pricing
              </span>
              <h3 className="font-display font-bold text-xl text-white mb-1">{plan.name}</h3>
              <p className="font-body text-[14px] text-slate-500 mb-6">{plan.description}</p>
              <div className="mb-6">
                <span className="font-display font-extrabold text-5xl text-signal-green tracking-tight">{plan.speed}</span>
                <span className="font-body text-[14px] text-slate-500 ml-2">Mbps up/down</span>
              </div>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="font-display font-bold text-2xl text-white">${plan.price}</span>
                <span className="font-body text-[14px] text-slate-500">/month</span>
              </div>
              <ul className="space-y-2 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 font-body text-[14px] text-slate-200">
                    <Check className="w-4 h-4 text-signal-green flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => openContactModal('Homepage - KSG Gig')}
                className="w-full block text-center font-display font-semibold text-[14px] py-3 rounded-full bg-signal-green text-white hover:bg-signal-green-dark transition-all"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#0a0e1b] py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="section-label">Testimonials</p>
            <h2 className="font-display font-bold text-3xl md:text-4xl tracking-tight text-white mb-4">
              What Our Neighbors Say
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-[#1a1e2b] rounded-xl p-8 border border-white/10">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber text-amber" />
                  ))}
                </div>
                <p className="font-body text-[15px] text-slate-200 leading-relaxed mb-6 italic">"{t.quote}"</p>
                <div>
                  <p className="font-display font-semibold text-[14px] text-white">{t.name}</p>
                  <p className="flex items-center gap-1 font-body text-[13px] text-slate-500">
                    <MapPin className="w-3 h-3" />
                    {t.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/design/community.png"
            alt="Sunset over a quiet rural town"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-midnight/75" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-white tracking-tight mb-4">
            Ready to Experience True Fiber?
          </h2>
          <p className="font-body text-lg text-slate-300 max-w-xl mx-auto mb-8">
            Check if KSG Fiber is available at your address. No contracts, no commitments.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-lg mx-auto">
            <button onClick={() => openContactModal('Homepage - Bottom CTA')} className="btn-green text-base px-8 py-4 w-full sm:w-auto justify-center">
              Check Availability
              <ArrowRight className="w-5 h-5" />
            </button>
            <Link to="/about" className="btn-ghost text-base px-8 py-4 w-full sm:w-auto justify-center">
              Learn About Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
