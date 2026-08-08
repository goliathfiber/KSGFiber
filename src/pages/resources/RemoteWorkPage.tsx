import { Monitor, Video, Cloud, Wifi, Shield, ArrowRight } from 'lucide-react';
import PageHero from '../../components/PageHero';
import SEO from '../../components/SEO';
import { breadcrumbSchema } from '../../lib/structuredData';
import { useContactModal } from '../../context/ContactModalContext';

const setupTips = [
  { icon: Monitor, title: 'Dedicated Workspace', desc: 'Set up your home office in a room with a strong Wi-Fi signal — or use a wired ethernet connection for maximum reliability.' },
  { icon: Video, title: 'Video Conferencing', desc: 'Zoom, Teams, and Meet need 3-8 Mbps per call. Symmetrical fiber speeds mean crystal-clear video without affecting other household users.' },
  { icon: Cloud, title: 'Cloud & VPN Access', desc: 'Upload speeds matter for cloud file syncing and VPN connections. Fiber\'s symmetrical speeds make cloud workflows seamless.' },
  { icon: Shield, title: 'Network Security', desc: 'Segment your home network with a guest network for IoT devices. Keep your work devices on a separate, more secure network.' },
];

const bandwidthGuide = [
  { activity: 'Video call (HD)', download: '3 Mbps', upload: '3 Mbps' },
  { activity: 'Video call (4K)', download: '8 Mbps', upload: '8 Mbps' },
  { activity: 'VPN connection', download: '10+ Mbps', upload: '10+ Mbps' },
  { activity: 'Cloud file sync', download: '5+ Mbps', upload: '5+ Mbps' },
  { activity: 'Screen sharing', download: '3 Mbps', upload: '3 Mbps' },
  { activity: 'Large file transfers', download: '50+ Mbps', upload: '50+ Mbps' },
];

export default function RemoteWorkPage() {
  const { openContactModal } = useContactModal();

  return (
    <>
      <SEO
        title="Remote Work Guide"
        description="Work from home without compromise. Bandwidth requirements for Zoom, Teams, VPN, and cloud apps. Why symmetrical fiber speeds matter for remote workers."
        path="/resources/remote-work"
      >
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema([{ name: 'Resources', path: '/resources/remote-work' }, { name: 'Remote Work', path: '/resources/remote-work' }]))}</script>
      </SEO>
      <PageHero
        label="Remote Work Guide"
        title="Work From Home Without Compromise"
        description="Your internet connection is your lifeline to the office. KSG Fiber's symmetrical speeds keep you productive, connected, and professional."
        image="https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg?auto=compress&cs=tinysrgb&w=1920&h=800&fit=crop"
      />

      <section className="bg-[#0a0e1b] py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="section-label">Home Office Setup</p>
            <h2 className="font-display font-bold text-3xl tracking-tight text-white mb-4">Build Your Ideal Home Office</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {setupTips.map(({ icon: Icon, title, desc }) => (
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
            <p className="section-label">Bandwidth Guide</p>
            <h2 className="font-display font-bold text-3xl tracking-tight text-white mb-4">Remote Work Bandwidth Requirements</h2>
          </div>
          <div className="bg-[#0a0e1b] rounded-xl shadow-sm overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-white/10">
                  <th className="text-left font-mono text-[10px] tracking-[2px] uppercase text-slate-500 py-3 px-6">Activity</th>
                  <th className="text-left font-mono text-[10px] tracking-[2px] uppercase text-slate-500 py-3 px-6">Download</th>
                  <th className="text-left font-mono text-[10px] tracking-[2px] uppercase text-slate-500 py-3 px-6">Upload</th>
                </tr>
              </thead>
              <tbody>
                {bandwidthGuide.map((row) => (
                  <tr key={row.activity} className="border-b border-slate-100">
                    <td className="font-body text-[14px] text-white py-4 px-6">{row.activity}</td>
                    <td className="font-mono text-[13px] text-fiber-blue py-4 px-6">{row.download}</td>
                    <td className="font-mono text-[13px] text-fiber-blue py-4 px-6">{row.upload}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-8 bg-amber-subtle rounded-xl p-6 border border-amber/20">
            <div className="flex items-start gap-3">
              <Wifi className="w-5 h-5 text-amber-dark flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-display font-semibold text-[15px] text-white mb-1">Why Upload Speed Matters for Remote Work</p>
                <p className="font-body text-[14px] text-slate-600 leading-relaxed">
                  Cable internet typically provides 10-35 Mbps upload speeds. If you're on a video call while syncing files to the cloud, that upload bandwidth gets consumed fast. KSG Fiber's symmetrical speeds mean your upload matches your download — so everything works smoothly, simultaneously.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-fiber-blue py-16">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <h2 className="font-display font-bold text-3xl text-white tracking-tight mb-4">Your Home Office Deserves Fiber</h2>
          <p className="font-body text-lg text-white/80 max-w-xl mx-auto mb-8">Symmetrical speeds, no data caps, and rock-solid reliability for the modern remote worker.</p>
          <button onClick={() => openContactModal('Remote Work Page')} className="btn-green text-base px-8 py-4">Check Availability <ArrowRight className="w-5 h-5" /></button>
        </div>
      </section>
    </>
  );
}
