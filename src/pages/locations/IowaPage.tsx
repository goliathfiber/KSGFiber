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
          { name: 'Van Meter', status: 'Sign Up Now' },
          { name: 'Earlham', status: 'Sign Up Now' },
          { name: 'Atlantic', status: 'Planned' },
          { name: 'Exira', status: 'Planned' },
          { name: 'Martensdale', status: 'Planned' },
          { name: 'Winterset', status: 'Planned' },
          { name: 'Audubon', status: 'Planned' },
        ],
        highlights: [
          { label: 'Headquarters', value: 'Van Meter' },
          { label: 'Sign Up Now', value: '2' },
          { label: 'Planned Communities', value: '5' },
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
          'Service sign-ups are currently available in Van Meter and Earlham. Atlantic, Exira, Martensdale, Winterset, and Audubon are planned communities as KSG Fiber continues its Iowa expansion.',
        ],
      }}
    />
  );
}
