import { Link } from 'react-router-dom';
import { Check, Wifi, Shield, Tv, Gamepad2, Home, ArrowRight, ChevronDown } from 'lucide-react';
import PageHero from '../../components/PageHero';
import SEO from '../../components/SEO';
import { breadcrumbSchema, faqSchema, serviceSchema } from '../../lib/structuredData';
import { useState } from 'react';
import { useContactModal } from '../../context/ContactModalContext';

const plan = {
  name: 'KSG Gig',
  speed: '1,000',
  price: '89.95',
  desc: 'Blazing-fast gigabit fiber for your entire household. No compromises.',
  features: ['1 Gbps symmetrical', 'No data caps', 'No contracts', 'Free installation', 'Free equipment', 'Whole-home mesh Wi-Fi', '24/7 support', 'Parental controls'],
};

const faqs = [
  {
    q: 'Is there a contract or early termination fee?',
    a: 'No. KSG Fiber is month-to-month. You can cancel anytime with no penalties or fees.',
  },
  {
    q: 'What does "symmetrical speeds" mean?',
    a: 'It means your upload speed is the same as your download speed. Cable internet typically has much slower uploads, which affects video calls, cloud backups, and working from home.',
  },
  {
    q: 'Is there a data cap?',
    a: 'No. KSG Fiber has no data caps on any plan. Use as much internet as you need.',
  },
  {
    q: 'How long does installation take?',
    a: 'Standard installation takes 2-4 hours. Our technician will run fiber to your home, install the ONT (fiber terminal), set up your router, and make sure every device is connected.',
  },
  {
    q: 'What equipment do I need?',
    a: 'We provide everything: the ONT (fiber terminal), Wi-Fi router, and mesh extenders if needed. All included at no extra cost.',
  },
];

export default function ResidentialPage() {
  const { openContactModal } = useContactModal();

  return (
    <>
      <SEO
        title="Residential Fiber Internet"
        description="KSG Fiber residential 1 Gbps internet. Symmetrical speeds, no data caps, no contracts. Just $89.95/month with free equipment and installation."
        path="/services/residential"
      >
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema([{ name: 'Services', path: '/services/residential' }, { name: 'Residential', path: '/services/residential' }]))}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema(faqs))}</script>
        <script type="application/ld+json">{JSON.stringify(serviceSchema('KSG Fiber Residential Internet', 'Symmetrical 1 Gbps fiber internet for homes. No data caps, no contracts. Free equipment and installation.', '89.95', '/services/residential'))}</script>
      </SEO>
      <PageHero
        label="Residential Internet"
        title="Internet That Keeps Up With Your Life"
        description="Symmetrical fiber speeds, no data caps, no contracts. Stream, game, work, and connect on every device without compromise."
        image="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1920&h=800&fit=crop"
      >
        <Link to="#plans" className="btn-green">
          View Plans <ArrowRight className="w-5 h-5" />
        </Link>
        <Link to="/resources/what-is-fiber" className="btn-ghost">
          Why Fiber?
        </Link>
      </PageHero>

      <section className="bg-[#0a0e1b] py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Wifi, title: 'Whole-Home Wi-Fi', desc: 'Managed mesh system eliminates dead zones. Every room, every floor, strong signal.' },
              { icon: Shield, title: 'Built-In Security', desc: 'Advanced threat protection, ad blocking, and parental controls at no extra charge.' },
              { icon: Tv, title: 'Stream Everything', desc: '4K on every TV, simultaneously. No buffering, no throttling, no compromises.' },
              { icon: Gamepad2, title: 'Low-Latency Gaming', desc: 'Under 10ms latency and symmetrical speeds keep you competitive online.' },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="text-center">
                <div className="w-14 h-14 rounded-xl bg-fiber-blue-subtle flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-7 h-7 text-fiber-blue" />
                </div>
                <h3 className="font-display font-semibold text-lg text-white mb-2">{title}</h3>
                <p className="font-body text-[14px] text-slate-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="plans" className="bg-[#1a1e2b]/50 py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="section-label">Special Pricing</p>
            <h2 className="font-display font-bold text-3xl md:text-4xl tracking-tight text-white mb-4">
              One Plan. One Great Price.
            </h2>
            <p className="font-body text-lg text-slate-500 leading-relaxed">
              No hidden fees. No contracts. No data caps. Free equipment and free installation.
            </p>
          </div>

          <div className="max-w-lg mx-auto">
            <div className="relative bg-[#0a0e1b] rounded-xl p-8 shadow-[0_8px_40px_rgba(27,58,107,0.15)] ring-2 ring-fiber-blue transition-all duration-300 hover:-translate-y-1">
              <span className="absolute -top-3 left-7 font-mono text-[10px] tracking-[2px] uppercase bg-signal-green-subtle text-signal-green-dark px-3 py-1 rounded-full">
                Special Pricing
              </span>
              <h3 className="font-display font-bold text-xl text-white mb-1">{plan.name}</h3>
              <p className="font-body text-[13px] text-slate-500 mb-5">{plan.desc}</p>
              <div className="mb-2">
                <span className="font-display font-extrabold text-4xl text-fiber-blue tracking-tight">{plan.speed}</span>
                <span className="font-body text-[13px] text-slate-500 ml-1">Mbps</span>
              </div>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="font-display font-bold text-xl text-white">${plan.price}</span>
                <span className="font-body text-[13px] text-slate-500">/mo</span>
              </div>
              <ul className="space-y-2 mb-6">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 font-body text-[13px] text-slate-200">
                    <Check className="w-4 h-4 text-signal-green flex-shrink-0 mt-0.5" />
                    {f}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => openContactModal('Residential - KSG Gig')}
                className="w-full block text-center font-display font-semibold text-[14px] py-3 rounded-full bg-fiber-blue text-white hover:bg-fiber-blue-dark transition-all"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg?auto=compress&cs=tinysrgb&w=1920&h=800&fit=crop"
            alt="Cozy living room interior in a Midwest home"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-midnight/85" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="font-mono text-[11px] tracking-[3px] uppercase text-signal-green mb-4">Smart Home Ready</p>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-white tracking-tight mb-6">
                Your Smart Home Needs Smart Internet
              </h2>
              <p className="font-body text-lg text-slate-300 leading-relaxed mb-8">
                The average home now has 15+ connected devices. KSG Fiber's symmetrical speeds and whole-home Wi-Fi keep every device running smoothly — from smart thermostats to security cameras to streaming on every TV.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Home, label: 'Smart Thermostats' },
                  { icon: Shield, label: 'Security Cameras' },
                  { icon: Tv, label: '4K Streaming' },
                  { icon: Gamepad2, label: 'Cloud Gaming' },
                ].map(({ icon: Icon, label }) => (
                  <div key={label} className="flex items-center gap-3 bg-[#0a0e1b]/10 rounded-lg p-3">
                    <Icon className="w-5 h-5 text-signal-green" />
                    <span className="font-body text-[14px] text-white">{label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="hidden lg:block">
              <img
                src="/avecalan_Editorial_lifestyle_photograph_capturing_a_candid_mome_a746d7cb-5a61-41f4-94a5-ba030976bf68.png"
                alt="Father working from home on laptop while holding his baby"
                className="rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#0a0e1b] py-24">
        <div className="max-w-3xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <p className="section-label">FAQ</p>
            <h2 className="font-display font-bold text-3xl tracking-tight text-white">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <FaqItem key={faq.q} question={faq.q} answer={faq.a} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-white/10 rounded-lg overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-5 text-left hover:bg-[#101522] transition-colors"
      >
        <span className="font-display font-semibold text-[15px] text-white pr-4">{question}</span>
        <ChevronDown className={`w-5 h-5 text-slate-400 flex-shrink-0 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <div className="px-5 pb-5 -mt-1">
          <p className="font-body text-[14px] text-slate-600 leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
}
