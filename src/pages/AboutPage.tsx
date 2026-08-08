import { Link } from 'react-router-dom';
import { Users, Heart, Zap, Shield, Target, ArrowRight } from 'lucide-react';
import PageHero from '../components/PageHero';
import SEO from '../components/SEO';
import { breadcrumbSchema } from '../lib/structuredData';

const values = [
  { icon: Heart, title: 'Community First', desc: 'We live and work in the communities we serve. Your success is our success.' },
  { icon: Zap, title: 'Relentless Reliability', desc: 'Fiber optic infrastructure means your connection stays strong through any weather, any season, any day.' },
  { icon: Shield, title: 'Honest Pricing', desc: 'No contracts, no data caps, no hidden fees. The price you see is the price you pay, period.' },
  { icon: Target, title: 'Future-Ready', desc: 'We build infrastructure designed to serve communities for decades, not just until the next quarterly report.' },
];

const team = [
  { name: 'Leadership Team', role: 'Building fiber infrastructure across the Midwest', image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop' },
  { name: 'Installation Crews', role: 'Expert technicians who bring fiber to your door', image: 'https://images.pexels.com/photos/8961065/pexels-photo-8961065.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop' },
  { name: 'Customer Support', role: 'Real people, right here in Iowa', image: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop' },
];

export default function AboutPage() {
  return (
    <>
      <SEO
        title="About Us"
        description="KSG Fiber is a regional fiber optic internet provider headquartered in Iowa, building 100% fiber networks for Midwest communities."
        path="/about"
      >
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema([{ name: 'About', path: '/about' }]))}</script>
      </SEO>
      <PageHero
        label="About Us"
        title="Built in Iowa. Built for the Midwest."
        description="KSG Fiber started with a simple idea: every community in the Midwest deserves access to the same world-class internet that big cities take for granted."
        image="https://images.pexels.com/photos/2901209/pexels-photo-2901209.jpeg?auto=compress&cs=tinysrgb&w=1920&h=800&fit=crop"
      />

      <section className="bg-[#0a0e1b] py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="section-label">Our Story</p>
              <h2 className="font-display font-bold text-3xl md:text-4xl tracking-tight text-white mb-6">
                From Iowa, With Purpose
              </h2>
              <div className="space-y-4 font-body text-[16px] text-slate-200 leading-relaxed">
                <p>
                  KSG Fiber was founded on the belief that where you live shouldn't determine the quality of your internet connection. Too many communities across Iowa and the greater Midwest have been left behind by national providers who prioritize quarterly earnings over community investment.
                </p>
                <p>
                  We're changing that. As a regional fiber provider headquartered right here in Iowa, we build 100% fiber optic networks from the ground up — not patched-together upgrades to aging copper infrastructure.
                </p>
                <p>
                  Every mile of fiber we lay is an investment in the communities we serve. When you call KSG, you talk to someone who knows your area, understands the local challenges, and is genuinely invested in making sure your connection works.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1595108/pexels-photo-1595108.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Iowa countryside with rolling farmland"
                className="rounded-xl shadow-lg"
              />
              <div className="absolute -bottom-6 -left-6 bg-fiber-blue text-white rounded-lg p-6 shadow-xl">
                <p className="font-display font-extrabold text-3xl tracking-tight">100%</p>
                <p className="font-mono text-[10px] tracking-[2px] uppercase">Fiber Optic</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#1a1e2b]/50 py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="section-label">Our Values</p>
            <h2 className="font-display font-bold text-3xl md:text-4xl tracking-tight text-white mb-4">
              What We Stand For
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-[#0a0e1b] rounded-xl p-8 shadow-sm">
                <div className="w-12 h-12 rounded-lg bg-fiber-blue-subtle flex items-center justify-center mb-5">
                  <Icon className="w-6 h-6 text-fiber-blue" />
                </div>
                <h3 className="font-display font-semibold text-lg text-white mb-2">{title}</h3>
                <p className="font-body text-[14px] text-slate-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0a0e1b] py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="section-label">Our Team</p>
            <h2 className="font-display font-bold text-3xl md:text-4xl tracking-tight text-white mb-4">
              The People Behind the Connection
            </h2>
            <p className="font-body text-lg text-slate-500 leading-relaxed">
              From our leadership team to our installation crews, every member of the KSG family is committed to delivering exceptional service.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member) => (
              <div key={member.name} className="group rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
                <div className="h-56 overflow-hidden">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="bg-[#0a0e1b] p-6">
                  <h3 className="font-display font-semibold text-lg text-white">{member.name}</h3>
                  <p className="font-body text-[14px] text-slate-500">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-midnight py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              { icon: Users, value: '25,000+', label: 'Customers Served' },
              { icon: Zap, value: '5,000+', label: 'Miles of Fiber' },
              { icon: Heart, value: '4.9/5', label: 'Customer Rating' },
            ].map(({ icon: Icon, value, label }) => (
              <div key={label}>
                <Icon className="w-8 h-8 text-signal-green mx-auto mb-3" />
                <p className="font-display font-extrabold text-3xl text-white tracking-tight">{value}</p>
                <p className="font-mono text-[10px] tracking-[2px] uppercase text-slate-500 mt-1">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0a0e1b] py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="bg-fiber-blue rounded-2xl p-12 md:p-16 text-center">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-white tracking-tight mb-4">
              Join the KSG Fiber Team
            </h2>
            <p className="font-body text-lg text-white/80 max-w-xl mx-auto mb-8">
              We're growing fast and always looking for talented people who are passionate about connecting communities.
            </p>
            <Link to="/about" className="btn-green text-base px-8 py-4">
              View Open Positions
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
