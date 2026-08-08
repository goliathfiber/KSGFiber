import { Tractor, Building2, Cpu, Wifi } from 'lucide-react';
import LocationTemplate from './LocationTemplate';

export default function IowaPage() {
  return (
    <LocationTemplate
      data={{
        state: 'Iowa',
        tagline: 'Headquartered in Iowa. Built for Iowa.',
        description: 'KSG Fiber is headquartered in Van Meter, Iowa. We\'re building fiber infrastructure for Iowa\'s communities, farms, and businesses across the state.',
        heroImage: 'https://images.pexels.com/photos/2901209/pexels-photo-2901209.jpeg?auto=compress&cs=tinysrgb&w=1920&h=800&fit=crop',
        isHQ: true,
        communities: [
          'Van Meter', 'Adel', 'Winterset', 'Des Moines Metro',
          'Cedar Rapids', 'Quad Cities', 'Iowa City', 'Dubuque',
          'Waterloo', 'Mason City', 'Decorah', 'Clinton',
        ],
        highlights: [
          { label: 'Headquarters', value: 'Van Meter' },
          { label: 'Target Communities', value: '30+' },
          { label: 'Planned Fiber Miles', value: '1,500+' },
          { label: 'Fiber Optic', value: '100%' },
        ],
        industries: [
          { icon: <Tractor className="w-5 h-5" />, title: 'Agriculture & AgTech', desc: 'Precision agriculture, autonomous equipment, and IoT soil monitoring need reliable rural connectivity.' },
          { icon: <Building2 className="w-5 h-5" />, title: 'Manufacturing', desc: 'Iowa\'s manufacturing corridor from the Quad Cities to Cedar Rapids needs high-speed fiber for Industry 4.0.' },
          { icon: <Cpu className="w-5 h-5" />, title: 'Data Centers', desc: 'Iowa\'s growing data center industry benefits from KSG Fiber\'s high-capacity backbone.' },
          { icon: <Wifi className="w-5 h-5" />, title: 'Rural Connectivity', desc: 'Bringing true broadband to Iowa\'s rural communities that have been left behind by national providers.' },
        ],
        bodyContent: [
          'Iowa is home. KSG Fiber is headquartered in Van Meter and we\'re building outward from central Iowa to connect communities, businesses, and farms across the state with true fiber optic internet.',
          'Iowa\'s agriculture sector is rapidly modernizing with precision farming technology, GPS-guided equipment, and IoT sensors — all of which require reliable internet connectivity. KSG Fiber is building the infrastructure to support Iowa\'s agricultural future.',
          'Our Iowa network extends from the Des Moines metro through the I-380 corridor to Cedar Rapids and Iowa City, and into the Quad Cities — bringing symmetrical fiber speeds to communities that have been underserved for too long.',
        ],
      }}
    />
  );
}
