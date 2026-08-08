import { Building2, Truck, Factory, Globe } from 'lucide-react';
import LocationTemplate from './LocationTemplate';

export default function IllinoisPage() {
  return (
    <LocationTemplate
      data={{
        state: 'Illinois',
        tagline: 'Fiber Internet for Northern Illinois',
        description: 'KSG Fiber is expanding into northern Illinois, connecting the Rockford metro and the I-90 corridor with true fiber optic internet.',
        heroImage: 'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=1920&h=800&fit=crop',
        communities: [
          'Rockford', 'Belvidere', 'Freeport', 'DeKalb',
          'Dixon', 'Sterling', 'Oregon', 'Galena',
        ],
        highlights: [
          { label: 'Target Communities', value: '15+' },
          { label: 'Planned Fiber Miles', value: '800+' },
          { label: 'Expansion Phase', value: 'Planning' },
          { label: 'Cross-Border', value: 'WI-IL' },
        ],
        industries: [
          { icon: <Factory className="w-5 h-5" />, title: 'Manufacturing', desc: 'Rockford\'s aerospace and manufacturing sector needs reliable high-speed connectivity for Industry 4.0.' },
          { icon: <Truck className="w-5 h-5" />, title: 'Logistics', desc: 'Northern Illinois\'s logistics corridor benefits from fast, reliable fiber for supply chain management.' },
          { icon: <Building2 className="w-5 h-5" />, title: 'Small Business', desc: 'Supporting northern Illinois\'s small business community with affordable, high-speed fiber.' },
          { icon: <Globe className="w-5 h-5" />, title: 'Cross-Border Service', desc: 'Seamless connectivity for businesses operating across the Wisconsin-Illinois border.' },
        ],
        bodyContent: [
          'Northern Illinois shares deep economic ties with southern Wisconsin, and KSG Fiber is building the infrastructure to strengthen those connections. Our Illinois expansion targets the Rockford metro area and extends along the I-90 corridor.',
          'The northern Illinois corridor is home to a diverse economy spanning aerospace manufacturing, logistics, agriculture, and a growing technology sector. All of these industries need the kind of reliable, high-speed internet that fiber delivers.',
          'For businesses operating across the Wisconsin-Illinois border, KSG Fiber offers seamless connectivity and unified service — one provider, one bill, one support team.',
        ],
      }}
    />
  );
}
