import { Link } from 'react-router-dom';

export default function Logo({ variant = 'dark', className = '' }: { variant?: 'dark' | 'light'; className?: string }) {
  return (
    <Link to="/" className={`block flex-shrink-0 ${className}`}>
      <img
        src={`${import.meta.env.BASE_URL}KSG_LOGO_FULL.png`}
        alt="KSG Fiber"
        data-variant={variant}
        className="h-20 md:h-24 w-auto drop-shadow-[0_6px_14px_rgba(0,0,0,0.55)]"
      />
    </Link>
  );
}
