import { Shield, Lock, Eye, AlertTriangle, Server, ArrowRight, Check } from 'lucide-react';
import PageHero from '../../components/PageHero';
import SEO from '../../components/SEO';
import { breadcrumbSchema } from '../../lib/structuredData';
import { useContactModal } from '../../context/ContactModalContext';

const homeTips = [
  { icon: Lock, title: 'Secure Your Wi-Fi', tips: ['Change default router passwords', 'Use WPA3 encryption', 'Create a separate guest network', 'Update router firmware regularly'] },
  { icon: Eye, title: 'Protect Your Privacy', tips: ['Use unique passwords for every account', 'Enable two-factor authentication', 'Be cautious with public Wi-Fi', 'Keep software and devices updated'] },
  { icon: AlertTriangle, title: 'Recognize Threats', tips: ['Don\'t click suspicious links or emails', 'Verify sender identity before sharing info', 'Watch for urgent or threatening language', 'Report phishing attempts to your provider'] },
];

const businessCompliance = [
  { name: 'HIPAA', desc: 'Healthcare data protection. Encrypted connections, access controls, and audit logging.', industries: 'Healthcare, Insurance' },
  { name: 'PCI DSS', desc: 'Payment card data security. Secure network, encryption, and access management.', industries: 'Retail, E-commerce' },
  { name: 'CMMC', desc: 'Cybersecurity maturity for defense contractors. Multi-level security framework.', industries: 'Manufacturing, Defense' },
];

const builtInProtections = [
  'DDoS protection on our network backbone',
  'DNS-based threat filtering',
  'Automated traffic anomaly detection',
  'IPv6 and IPv4 dual-stack support',
  'Network-level ad and malware blocking',
  '24/7 network operations center monitoring',
];

export default function CybersecurityPage() {
  const { openContactModal } = useContactModal();

  return (
    <>
      <SEO
        title="Cybersecurity Center"
        description="Practical cybersecurity tips for homes and businesses. Wi-Fi security, privacy protection, threat recognition, and built-in KSG Fiber network protections."
        path="/resources/cybersecurity"
      >
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema([{ name: 'Resources', path: '/resources/cybersecurity' }, { name: 'Cybersecurity', path: '/resources/cybersecurity' }]))}</script>
      </SEO>
      <PageHero
        label="Cybersecurity Center"
        title="Stay Safe Online With KSG Fiber"
        description="Practical cybersecurity guidance for homes and businesses. Plus, learn about the security built into every KSG Fiber connection."
        image="https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=1920&h=800&fit=crop"
      />

      <section className="bg-[#0a0e1b] py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="section-label">Home Security</p>
            <h2 className="font-display font-bold text-3xl tracking-tight text-white mb-4">Protect Your Home Network</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {homeTips.map(({ icon: Icon, title, tips }) => (
              <div key={title} className="bg-[#1a1e2b] rounded-xl p-8">
                <Icon className="w-8 h-8 text-fiber-blue mb-4" />
                <h3 className="font-display font-semibold text-lg text-white mb-4">{title}</h3>
                <ul className="space-y-2">
                  {tips.map((tip) => (
                    <li key={tip} className="flex items-start gap-2 font-body text-[14px] text-slate-600">
                      <Check className="w-4 h-4 text-signal-green flex-shrink-0 mt-0.5" />
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#1a1e2b]/50 py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="section-label">Business Compliance</p>
            <h2 className="font-display font-bold text-3xl tracking-tight text-white mb-4">Compliance & Regulatory Support</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {businessCompliance.map((item) => (
              <div key={item.name} className="bg-[#0a0e1b] rounded-xl p-8 shadow-sm">
                <span className="font-mono text-[10px] tracking-[2px] uppercase text-fiber-blue bg-fiber-blue-subtle px-3 py-1 rounded-full">{item.name}</span>
                <p className="font-body text-[14px] text-slate-600 leading-relaxed mt-4 mb-3">{item.desc}</p>
                <p className="font-mono text-[11px] text-slate-400">{item.industries}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-midnight py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="font-mono text-[11px] tracking-[3px] uppercase text-signal-green mb-4">Built-In Security</p>
              <h2 className="font-display font-bold text-3xl text-white tracking-tight mb-6">Security Built Into Every Connection</h2>
              <p className="font-body text-lg text-slate-300 leading-relaxed mb-8">
                Every KSG Fiber connection includes network-level protections that work automatically, with no software to install.
              </p>
              <ul className="space-y-3">
                {builtInProtections.map((item) => (
                  <li key={item} className="flex items-center gap-3 font-body text-[15px] text-white">
                    <Shield className="w-5 h-5 text-signal-green flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="hidden lg:flex items-center justify-center">
              <div className="relative w-64 h-64">
                <div className="absolute inset-0 bg-fiber-blue/20 rounded-full animate-pulse" />
                <div className="absolute inset-8 bg-fiber-blue/30 rounded-full" />
                <div className="absolute inset-16 bg-fiber-blue rounded-full flex items-center justify-center">
                  <Server className="w-12 h-12 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-fiber-blue py-16">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <h2 className="font-display font-bold text-3xl text-white tracking-tight mb-4">Secure, Fast, Reliable Internet</h2>
          <button onClick={() => openContactModal('Cybersecurity Page')} className="btn-green text-base px-8 py-4 mt-4">Check Availability <ArrowRight className="w-5 h-5" /></button>
        </div>
      </section>
    </>
  );
}
