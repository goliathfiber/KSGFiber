import { ReactNode } from 'react';

interface PageHeroProps {
  label: string;
  title: string;
  description: string;
  children?: ReactNode;
  image?: string;
}

export default function PageHero({ label, title, description, children, image }: PageHeroProps) {
  return (
    <section className="relative bg-midnight text-white pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(ellipse at 30% 20%, rgba(27,58,107,0.4) 0%, transparent 50%), radial-gradient(ellipse at 70% 80%, rgba(244,123,32,0.15) 0%, transparent 40%)',
          }}
        />
      </div>
      {image && (
        <div className="absolute inset-0">
          <img src={image} alt="" className="w-full h-full object-cover opacity-25" />
          <div className="absolute inset-0 bg-midnight/60" />
        </div>
      )}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        <p className="font-mono text-[11px] tracking-[3px] uppercase text-signal-green mb-4">{label}</p>
        <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-[56px] leading-[1.1] tracking-tight max-w-3xl mb-6">
          {title}
        </h1>
        <p className="font-body text-lg text-slate-300 max-w-2xl leading-relaxed">{description}</p>
        {children && <div className="mt-8 flex flex-wrap gap-4">{children}</div>}
      </div>
    </section>
  );
}
