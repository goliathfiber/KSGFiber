import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, User, ExternalLink } from 'lucide-react';
import Logo from './Logo';
import { useContactModal } from '../context/ContactModalContext';

const ACCOUNT_URL = 'https://ksgfiber.invoicing.co/client/login';

const services = [
  { label: 'Residential Internet', to: '/services/residential' },
  { label: 'Business Internet', to: '/services/business' },
];

const resources = [
  { label: 'What Is Fiber Internet', to: '/resources/what-is-fiber' },
  { label: 'Streaming & Cord-Cutting', to: '/resources/streaming-guide' },
  { label: 'Smart Home & IoT', to: '/resources/smart-home' },
  { label: 'Remote Work Guide', to: '/resources/remote-work' },
  { label: 'Cybersecurity Center', to: '/resources/cybersecurity' },
];

const locations = [
  { label: 'Wisconsin', to: '/locations/wisconsin' },
  { label: 'Minnesota', to: '/locations/minnesota' },
  { label: 'Iowa', to: '/locations/iowa' },
  { label: 'Illinois', to: '/locations/illinois' },
  { label: 'Michigan', to: '/locations/michigan' },
];

function DropdownMenu({ label, items, dark }: { label: string; items: { label: string; to: string }[]; dark?: boolean }) {
  const [open, setOpen] = useState(false);

  const btnColor = dark
    ? 'text-white/90 hover:text-signal-green'
    : 'text-white/90 hover:text-signal-green';

  return (
    <div className="relative" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <button aria-expanded={open} className={`flex items-center gap-1 font-body text-[14px] uppercase tracking-wider font-extrabold transition-colors py-2 ${btnColor}`}>
        {label}
        <ChevronDown className={`w-4 h-4 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <div className="absolute top-full left-0 pt-2 z-50">
          <div className="bg-[#1a1e2b] rounded-lg shadow-[0_18px_44px_rgba(0,0,0,0.45)] border border-white/10 py-2 min-w-[220px]">
            {items.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="block px-4 py-2.5 text-[14px] font-body text-slate-200 hover:bg-signal-green/10 hover:text-signal-green transition-colors"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';
  const { openContactModal } = useContactModal();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const isSolid = scrolled || !isHome;
  const headerBg = 'bg-[#0a0e1b]/95 border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.4)] backdrop-blur-xl';
  const logoVariant = 'light';
  const linkColor = 'text-white/90 hover:text-signal-green';

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerBg}`}>
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 flex items-center justify-between h-[76px]">
        <Logo variant={logoVariant} />

        <nav className="hidden lg:flex items-center gap-8">
          <DropdownMenu label="Services" items={services} dark={isSolid} />
          <DropdownMenu label="Resources" items={resources} dark={isSolid} />
          <DropdownMenu label="Locations" items={locations} dark={isSolid} />
          <Link to="/about" className={`font-body font-extrabold uppercase tracking-wider text-[14px] ${linkColor} transition-colors`}>About</Link>
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <a href={ACCOUNT_URL} target="_blank" rel="noopener noreferrer" className={`flex items-center gap-2 font-body text-[14px] font-semibold ${linkColor} transition-colors`}>
            <User className="w-4 h-4" />
            My Account
            <ExternalLink className="w-3 h-3 opacity-60" />
          </a>
          <button onClick={() => openContactModal('Header')} className="btn-green text-[13px] px-5 py-2.5">
            Check Availability
          </button>
        </div>

        <button
          aria-label="Toggle navigation menu"
          aria-expanded={mobileOpen}
          className="lg:hidden text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-[#101522] border-t border-white/10 shadow-lg max-h-[calc(100vh-76px)] overflow-y-auto">
          <div className="px-6 py-6 space-y-1">
            <p className="font-mono text-[10px] tracking-[2px] uppercase text-slate-400 mb-2">Services</p>
            {services.map((item) => (
              <Link key={item.to} to={item.to} className="block py-2 text-[15px] text-slate-200 hover:text-signal-green">
                {item.label}
              </Link>
            ))}
            <div className="h-px bg-slate-200 my-3" />
            <p className="font-mono text-[10px] tracking-[2px] uppercase text-slate-400 mb-2">Resources</p>
            {resources.map((item) => (
              <Link key={item.to} to={item.to} className="block py-2 text-[15px] text-slate-200 hover:text-signal-green">
                {item.label}
              </Link>
            ))}
            <div className="h-px bg-slate-200 my-3" />
            <p className="font-mono text-[10px] tracking-[2px] uppercase text-slate-400 mb-2">Locations</p>
            {locations.map((item) => (
              <Link key={item.to} to={item.to} className="block py-2 text-[15px] text-slate-200 hover:text-signal-green">
                {item.label}
              </Link>
            ))}
            <div className="h-px bg-slate-200 my-3" />
            <Link to="/about" className="block py-2 text-[15px] text-slate-200 hover:text-signal-green">About</Link>
            <a href={ACCOUNT_URL} target="_blank" rel="noopener noreferrer" className="block py-2 text-[15px] text-slate-200 hover:text-signal-green">My Account</a>
            <div className="pt-4">
              <button onClick={() => openContactModal('Header - Mobile')} className="btn-green w-full justify-center text-[14px]">
                Check Availability
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
