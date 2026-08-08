import { Link } from 'react-router-dom';
import { Building2, Shield, Clock, Users, Server, Globe, ArrowRight, ChevronDown, Check } from 'lucide-react';
import PageHero from '../../components/PageHero';
import SEO from '../../components/SEO';
import { breadcrumbSchema, faqSchema, serviceSchema } from '../../lib/structuredData';
import { useState } from 'react';
import { useContactModal } from '../../context/ContactModalContext';

const plan = {
  name: 'Business Gig',
  speed: '1,000',
  price: '89.95',
  desc: 'Dedicated gigabit fiber for your business. SLA-backed reliability with free equipment and installation.',
  features: ['1 Gbps symmetrical', 'No data caps', 'Free installation', 'Free equipment', 'Uptime SLA', '24/7 support', 'Dedicated account manager'],
};

const industries = [
  { icon: Building2, title: 'Healthcare', desc: 'HIPAA-compliant connectivity for telemedicine, EHR systems, and medical imaging transfer.' },
  { icon: Server, title: 'Manufacturing', desc: 'Reliable connectivity for IoT sensors, supply chain systems, and facility management.' },
  { icon: Users, title: 'Education', desc: 'High-capacity networks for classrooms, remote learning, and administrative systems.' },
  { icon: Globe, title: 'Agriculture', desc: 'Connect precision agriculture systems, GPS-guided equipment, and farm management software.' },
];

const faqs = [
  { q: 'Do you offer SLAs?', a: 'Yes. All business plans include uptime SLAs. Enterprise plans include custom SLAs with guaranteed response times and dedicated account management.' },
  { q: 'Can I get service at multiple locations?', a: 'Absolutely. We offer multi-site networking with centralized management, SD-WAN, and inter-site connectivity.' },
  { q: 'Is your network HIPAA compliant?', a: 'Our network infrastructure supports HIPAA compliance. We can provide BAAs and help configure your network to meet compliance requirements.' },
];

export default function BusinessPage() {
  const { openContactModal } = useContactModal();

  return (
    <>
      <SEO
        title="Business Fiber Internet"
        description="KSG Fiber business internet. 1 Gbps dedicated fiber at $89.95/month. SLA-backed reliability, free equipment, free installation, and local support."
        path="/services/business"
      >
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema([{ name: 'Services', path: '/services/business' }, { name: 'Business', path: '/services/business' }]))}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema(faqs))}</script>
        <script type="application/ld+json">{JSON.stringify(serviceSchema('KSG Fiber Business Internet', 'Dedicated 1 Gbps fiber internet for businesses. SLA-backed reliability with free equipment and installation.', '89.95', '/services/business'))}</script>
      </SEO>
      <PageHero
        label="Business Internet"
        title="Fiber-Powered Connectivity for Midwest Businesses"
        description="Dedicated 1 Gbps fiber, SLA-backed reliability, and local support. $89.95/month with free equipment and installation."
        image="https://images.pexels.com/photos/2467285/pexels-photo-2467285.jpeg?auto=compress&cs=tinysrgb&w=1920&h=800&fit=crop"
      >
        <Link to="#plans" className="btn-green">View Business Plans <ArrowRight className="w-5 h-5" /></Link>
      </PageHero>

      <section className="bg-[#0a0e1b] py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: Clock, value: '99.99%', label: 'Uptime SLA', desc: 'Enterprise-grade reliability' },
              { icon: Shield, value: '24/7', label: 'Support', desc: 'Dedicated account manager' },
              { icon: Server, value: '<5ms', label: 'Latency', desc: 'Direct peering connections' },
              { icon: Globe, value: '1Gbps', label: 'Speed', desc: 'Symmetrical up/down' },
            ].map(({ icon: Icon, value, label, desc }) => (
              <div key={label} className="text-center">
                <Icon className="w-8 h-8 text-fiber-blue mx-auto mb-3" />
                <p className="font-display font-extrabold text-2xl text-white tracking-tight">{value}</p>
                <p className="font-mono text-[10px] tracking-[2px] uppercase text-fiber-blue">{label}</p>
                <p className="font-body text-[13px] text-slate-500 mt-1">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="plans" className="bg-[#1a1e2b]/50 py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="section-label">Special Pricing</p>
            <h2 className="font-display font-bold text-3xl md:text-4xl tracking-tight text-white mb-4">One Plan. Built for Business.</h2>
          </div>
          <div className="max-w-lg mx-auto">
            <div className="relative bg-[#0a0e1b] rounded-xl p-8 shadow-[0_8px_40px_rgba(27,58,107,0.15)] ring-2 ring-fiber-blue transition-all duration-300 hover:-translate-y-1">
              <span className="absolute -top-3 left-7 font-mono text-[10px] tracking-[2px] uppercase bg-signal-green-subtle text-signal-green-dark px-3 py-1 rounded-full">Special Pricing</span>
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
              <button onClick={() => openContactModal('Business - Business Gig')} className="w-full block text-center font-display font-semibold text-[14px] py-3 rounded-full bg-fiber-blue text-white hover:bg-fiber-blue-dark transition-all">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#0a0e1b] py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="section-label">Industries We Serve</p>
            <h2 className="font-display font-bold text-3xl md:text-4xl tracking-tight text-white mb-4">Built for Midwest Industries</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industries.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-[#1a1e2b] rounded-xl p-8 hover:bg-[#0a0e1b] hover:shadow-lg transition-all">
                <Icon className="w-8 h-8 text-fiber-blue mb-4" />
                <h3 className="font-display font-semibold text-lg text-white mb-2">{title}</h3>
                <p className="font-body text-[14px] text-slate-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#1a1e2b]/50 py-24">
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
    <div className="border border-white/10 rounded-lg overflow-hidden bg-[#0a0e1b]">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between p-5 text-left hover:bg-[#101522] transition-colors">
        <span className="font-display font-semibold text-[15px] text-white pr-4">{question}</span>
        <ChevronDown className={`w-5 h-5 text-slate-400 flex-shrink-0 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && <div className="px-5 pb-5 -mt-1"><p className="font-body text-[14px] text-slate-600 leading-relaxed">{answer}</p></div>}
    </div>
  );
}
