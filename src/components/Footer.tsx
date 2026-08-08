import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';
import Logo from './Logo';

const serviceLinks = [
  { label: 'Residential Internet', to: '/services/residential' },
  { label: 'Business Internet', to: '/services/business' },
];

const resourceLinks = [
  { label: 'What Is Fiber Internet', to: '/resources/what-is-fiber' },
  { label: 'Streaming Guide', to: '/resources/streaming-guide' },
  { label: 'Smart Home & IoT', to: '/resources/smart-home' },
  { label: 'Remote Work Guide', to: '/resources/remote-work' },
  { label: 'Cybersecurity Center', to: '/resources/cybersecurity' },
];

const locationLinks = [
  { label: 'Iowa', to: '/locations/iowa' },
];

const companyLinks = [
  { label: 'About Us', to: '/about' },
  { label: 'My Account', to: 'https://ksgfiber.invoicing.co/client/login', external: true },
];

export default function Footer() {
  return (
    <footer className="bg-[#070a12] text-white">
      <div className="gradient-bar" />
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          <div className="lg:col-span-1">
            <Logo variant="light" />
            <p className="font-body text-[14px] text-slate-400 mt-4 leading-relaxed">
              Your neighbors in fiber. Serving Iowa from Van Meter.
            </p>
            <div className="mt-6 space-y-3">
              <a href="tel:+17757434237" className="flex items-center gap-2 text-[14px] text-slate-300 hover:text-white transition-colors">
                <Phone className="w-4 h-4 text-signal-green" />
                (775) 743-4237
              </a>
              <a href="mailto:hello@ksgfiber.com" className="flex items-center gap-2 text-[14px] text-slate-300 hover:text-white transition-colors">
                <Mail className="w-4 h-4 text-signal-green" />
                hello@ksgfiber.com
              </a>
              <div className="flex items-start gap-2 text-[14px] text-slate-300">
                <MapPin className="w-4 h-4 text-signal-green mt-0.5 flex-shrink-0" />
                <span>408 Grant St. #6<br />Van Meter, IA 50261</span>
              </div>
            </div>
          </div>

          <FooterColumn title="Services" links={serviceLinks} />
          <FooterColumn title="Resources" links={resourceLinks} />
          <FooterColumn title="Locations" links={locationLinks} />
          <FooterColumn title="Company" links={companyLinks} />
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-[13px] text-slate-500">
            &copy; {new Date().getFullYear()} KSG Fiber. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/about" className="font-body text-[13px] text-slate-500 hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/about" className="font-body text-[13px] text-slate-500 hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, links }: { title: string; links: { label: string; to: string; external?: boolean }[] }) {
  return (
    <div>
      <h4 className="font-mono text-[10px] tracking-[2px] uppercase text-signal-green mb-4">{title}</h4>
      <ul className="space-y-3">
        {links.map((link) => (
          <li key={link.to}>
            {link.external ? (
              <a href={link.to} target="_blank" rel="noopener noreferrer" className="font-body text-[14px] text-slate-300 hover:text-white transition-colors">
                {link.label}
              </a>
            ) : (
              <Link to={link.to} className="font-body text-[14px] text-slate-300 hover:text-white transition-colors">
                {link.label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
