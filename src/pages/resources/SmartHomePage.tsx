import { Home, Thermometer, Camera, Lightbulb, Speaker, Lock, ArrowRight, Wifi } from 'lucide-react';
import PageHero from '../../components/PageHero';
import SEO from '../../components/SEO';
import { breadcrumbSchema } from '../../lib/structuredData';
import { useContactModal } from '../../context/ContactModalContext';

const categories = [
  { icon: Thermometer, title: 'Smart Thermostats', desc: 'Nest, Ecobee, and other smart thermostats need about 1-2 Mbps each. Essential for Iowa winters.' },
  { icon: Camera, title: 'Security Cameras', desc: 'Each camera uses 2-5 Mbps for HD streaming. Upload speed matters — fiber\'s symmetrical speeds shine here.' },
  { icon: Lightbulb, title: 'Smart Lighting', desc: 'Philips Hue, LIFX, and smart switches use minimal bandwidth but benefit from a reliable connection.' },
  { icon: Speaker, title: 'Voice Assistants', desc: 'Alexa, Google Home, and HomePod need consistent low-latency connections for responsive performance.' },
  { icon: Lock, title: 'Smart Locks', desc: 'Remote lock control, guest codes, and activity logs. Needs reliable always-on connectivity.' },
  { icon: Home, title: 'Smart Hubs', desc: 'Hub devices connecting Zigbee, Z-Wave, and Thread protocols for whole-home automation.' },
];


export default function SmartHomePage() {
  const { openContactModal } = useContactModal();

  return (
    <>
      <SEO
        title="Smart Home & IoT Guide"
        description="Connect every smart device in your home. Bandwidth guide for thermostats, cameras, voice assistants, and more. Tips for Midwest smart homes."
        path="/resources/smart-home"
      >
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema([{ name: 'Resources', path: '/resources/smart-home' }, { name: 'Smart Home', path: '/resources/smart-home' }]))}</script>
      </SEO>
      <PageHero
        label="Smart Home & IoT"
        title="Connect Every Device in Your Home"
        description="From smart thermostats to security cameras, your connected home needs reliable, high-speed internet. Here's how to set it up right."
        image="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1920&h=800&fit=crop"
      />

      <section className="bg-[#0a0e1b] py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="section-label">Device Categories</p>
            <h2 className="font-display font-bold text-3xl tracking-tight text-white mb-4">Smart Home Devices & Bandwidth</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map(({ icon: Icon, title, desc }) => (
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
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <p className="section-label">Bandwidth Calculator</p>
            <h2 className="font-display font-bold text-3xl tracking-tight text-white mb-4">How Much Speed Do You Need?</h2>
          </div>
          <div className="max-w-lg mx-auto">
            <div className="bg-[#0a0e1b] rounded-xl p-8 text-center shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-fiber-blue-subtle flex items-center justify-center mx-auto mb-4">
                <Wifi className="w-6 h-6 text-fiber-blue" />
              </div>
              <p className="font-display font-semibold text-lg text-white mb-1">Any number of devices</p>
              <p className="font-body text-[13px] text-slate-500 mb-4">Smart home, streaming, gaming, 4K — all at once</p>
              <p className="font-mono text-[11px] tracking-[1px] uppercase text-fiber-blue">KSG Gig (1,000 Mbps)</p>
              <p className="font-body text-[13px] text-slate-500 mt-3">One plan handles it all. No need to guess — KSG Gig has more than enough bandwidth for every connected device in your home.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-midnight py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="font-mono text-[11px] tracking-[3px] uppercase text-signal-green mb-4">Midwest Winter Tips</p>
              <h2 className="font-display font-bold text-3xl text-white tracking-tight mb-6">Smart Home Tips for Midwest Winters</h2>
              <div className="space-y-4 font-body text-[16px] text-slate-300 leading-relaxed">
                <p>Iowa winters put your smart home to the test. Smart thermostats can save 10-15% on heating bills by learning your schedule and adjusting when you're away.</p>
                <p>Outdoor security cameras should be rated for -20F or lower. Fiber's reliability means your cameras stay connected even when other connections might drop during ice storms.</p>
                <p>Consider smart plugs for space heaters with auto-shutoff features, and smart leak sensors for pipes that might freeze.</p>
              </div>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/2157404/pexels-photo-2157404.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Cozy home on a snowy winter day"
                className="rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-fiber-blue py-16">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <h2 className="font-display font-bold text-3xl text-white tracking-tight mb-4">Power Your Smart Home With True Fiber</h2>
          <button onClick={() => openContactModal('Smart Home Page')} className="btn-green text-base px-8 py-4 mt-4">View Plans <ArrowRight className="w-5 h-5" /></button>
        </div>
      </section>
    </>
  );
}
