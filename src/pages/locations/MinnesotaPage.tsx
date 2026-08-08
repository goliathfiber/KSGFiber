import { Building2, Heart, Cpu, Snowflake } from 'lucide-react';
import LocationTemplate from './LocationTemplate';

export default function MinnesotaPage() {
  return (
    <LocationTemplate
      data={{
        state: 'Minnesota',
        tagline: 'Fiber Internet Expanding Across Minnesota',
        description: 'From the Twin Cities to Rochester and Duluth, KSG Fiber is bringing true fiber optic internet to Minnesota communities.',
        heroImage: 'https://images.pexels.com/photos/2132180/pexels-photo-2132180.jpeg?auto=compress&cs=tinysrgb&w=1920&h=800&fit=crop',
        communities: [
          'Twin Cities Metro', 'Rochester', 'Duluth', 'Mankato',
          'St. Cloud', 'Winona', 'Red Wing', 'Eau Claire Area',
        ],
        highlights: [
          { label: 'Target Communities', value: '25+' },
          { label: 'Planned Fiber Miles', value: '1,500+' },
          { label: 'Expansion Phase', value: 'Active' },
          { label: 'Available', value: '2026' },
        ],
        industries: [
          { icon: <Building2 className="w-5 h-5" />, title: 'Corporate HQs', desc: 'High-speed fiber for the Twin Cities\' Fortune 500 companies and growing startup scene.' },
          { icon: <Heart className="w-5 h-5" />, title: 'Healthcare', desc: 'Connecting Mayo Clinic\'s ecosystem and Minnesota\'s extensive healthcare network.' },
          { icon: <Cpu className="w-5 h-5" />, title: 'Technology', desc: 'Reliable fiber for Minnesota\'s growing tech sector and remote workforce.' },
          { icon: <Snowflake className="w-5 h-5" />, title: 'Winter Resilience', desc: 'Fiber optic cable is immune to the electrical interference that slows copper during Minnesota winters.' },
        ],
        bodyContent: [
          'Minnesota is KSG Fiber\'s first major expansion market. We\'re building fiber infrastructure across the state, starting with the Rochester corridor and expanding into the Twin Cities metro area.',
          'Minnesota\'s economy demands fast, reliable internet — from the healthcare innovation hub in Rochester to the corporate headquarters lining the 494 loop. KSG Fiber is building the infrastructure to match.',
          'Our expansion plan prioritizes communities that have been underserved by national providers, bringing true symmetrical fiber speeds where they\'re needed most.',
        ],
      }}
    />
  );
}
