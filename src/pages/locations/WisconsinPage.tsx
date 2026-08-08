import { Building2, Milk, Heart, TreePine } from 'lucide-react';
import LocationTemplate from './LocationTemplate';

export default function WisconsinPage() {
  return (
    <LocationTemplate
      data={{
        state: 'Wisconsin',
        tagline: 'Fiber Internet for the Badger State',
        description: 'KSG Fiber has deep roots in Wisconsin. We\'re building a fiber optic network that connects communities from the shores of Lake Michigan to the bluffs of the Driftless Area.',
        heroImage: 'https://images.pexels.com/photos/1486785/pexels-photo-1486785.jpeg?auto=compress&cs=tinysrgb&w=1920&h=800&fit=crop',
        communities: [
          'Green Bay', 'Appleton', 'Oshkosh', 'Fond du Lac',
          'Sheboygan', 'Manitowoc', 'Sturgeon Bay', 'Neenah',
          'De Pere', 'Kaukauna', 'Menasha', 'Waupaca',
        ],
        highlights: [
          { label: 'Communities Served', value: '50+' },
          { label: 'Miles of Fiber', value: '3,000+' },
          { label: 'Local Employees', value: '200+' },
          { label: 'Fiber Optic', value: '100%' },
        ],
        industries: [
          { icon: <Milk className="w-5 h-5" />, title: 'Dairy & Agriculture', desc: 'Connecting Wisconsin\'s dairy farms with precision agriculture, IoT monitoring, and market connectivity.' },
          { icon: <Building2 className="w-5 h-5" />, title: 'Manufacturing', desc: 'High-speed fiber for Wisconsin\'s manufacturing sector — from paper mills to precision machining.' },
          { icon: <Heart className="w-5 h-5" />, title: 'Healthcare', desc: 'HIPAA-compliant fiber connections for hospitals, clinics, and telemedicine across rural communities.' },
          { icon: <TreePine className="w-5 h-5" />, title: 'Tourism', desc: 'Reliable connectivity for Door County resorts, Northwoods lodges, and Wisconsin Dells attractions.' },
        ],
        bodyContent: [
          'Wisconsin is one of KSG Fiber\'s strongest markets, and we\'re building the most extensive fiber network in the state. From the Fox Valley to the Lake Michigan corridor, we\'re bringing true fiber optic internet to communities that have been underserved for too long.',
          'Our Wisconsin network is built for the long haul. Every mile of fiber we lay is designed to serve communities for decades. We understand the unique challenges Wisconsin faces — from brutal winters to rural geography.',
          'Whether you\'re a dairy farmer in Fond du Lac, a manufacturer in Appleton, or a family in Green Bay, KSG Fiber delivers the speed and reliability you need.',
        ],
      }}
    />
  );
}
