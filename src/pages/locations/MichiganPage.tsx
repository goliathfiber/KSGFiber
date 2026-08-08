import { TreePine, Car, Building2, Sun } from 'lucide-react';
import LocationTemplate from './LocationTemplate';

export default function MichiganPage() {
  return (
    <LocationTemplate
      data={{
        state: 'Michigan',
        tagline: 'Fiber Internet for Michigan\'s Upper Peninsula & Western Coast',
        description: 'KSG Fiber is expanding into Michigan, connecting the Upper Peninsula and western Michigan communities with true fiber optic internet.',
        heroImage: 'https://images.pexels.com/photos/1586298/pexels-photo-1586298.jpeg?auto=compress&cs=tinysrgb&w=1920&h=800&fit=crop',
        communities: [
          'Marquette', 'Traverse City', 'Petoskey', 'Escanaba',
          'Iron Mountain', 'Houghton', 'Manistee', 'Ludington',
        ],
        highlights: [
          { label: 'Target Communities', value: '20+' },
          { label: 'Planned Fiber Miles', value: '1,200+' },
          { label: 'Expansion Phase', value: 'Planning' },
          { label: 'UP Coverage', value: 'Priority' },
        ],
        industries: [
          { icon: <TreePine className="w-5 h-5" />, title: 'Tourism', desc: 'Michigan\'s tourism economy needs reliable connectivity for resorts, vacation rentals, and seasonal businesses.' },
          { icon: <Car className="w-5 h-5" />, title: 'Automotive & EV', desc: 'Supporting Michigan\'s evolving automotive and electric vehicle industry with high-speed fiber.' },
          { icon: <Building2 className="w-5 h-5" />, title: 'Education', desc: 'Connecting Michigan\'s universities and schools with reliable fiber for remote learning and research.' },
          { icon: <Sun className="w-5 h-5" />, title: 'Seasonal Communities', desc: 'Year-round fiber infrastructure for communities that swell with summer visitors and seasonal residents.' },
        ],
        bodyContent: [
          'Michigan\'s Upper Peninsula and western coast represent some of the most underserved broadband markets in the Midwest. KSG Fiber is changing that with a comprehensive fiber buildout targeting these communities.',
          'The UP\'s unique geography and harsh winters have historically made broadband deployment challenging. Fiber optic cable, however, is immune to the electrical interference that degrades copper connections — making it the ideal technology for Michigan\'s climate.',
          'From Marquette to Traverse City, KSG Fiber is building infrastructure that serves both year-round residents and the seasonal communities that drive Michigan\'s tourism economy.',
        ],
      }}
    />
  );
}
