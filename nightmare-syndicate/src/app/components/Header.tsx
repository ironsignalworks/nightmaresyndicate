import { Link, useLocation } from 'react-router-dom';
import headerLogo from '../../../img/syndicate_logo2.png';

export function Header() {
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'HOME' },
    { path: '/roster', label: 'ROSTER' },
    { path: '/releases', label: 'RELEASES' },
    { path: '/dossiers', label: 'DOSSIERS' },
    { path: '/submit', label: 'SUBMIT' },
    { path: '/contact', label: 'CONTACT' },
  ];

  return (
    <header>
      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="flex items-start justify-between mb-4 gap-6 flex-wrap">
          <div className="flex flex-col gap-2">
            <img
              src={headerLogo}
              alt="Nightmare Syndicate"
              className="w-48 md:w-64 object-contain"
            />
            <p className="text-sm text-[#7fd1ae] tracking-wider">
              UNDERGROUND OPERATIONS / DISTRO CULTURE
            </p>
          </div>
          <div className="border border-[#896000] px-3 py-1">
            <span className="text-xs text-[#896000] font-bold tracking-wider">
              CLASSIFICATION: REDACTED
            </span>
          </div>
        </div>

        <nav className="flex gap-2 flex-wrap">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`border border-[#7fd1ae]/30 px-4 py-2 text-sm transition-colors ${
                location.pathname === link.path
                  ? 'bg-[#896000]/10 border-[#896000] text-[#896000]'
                  : 'hover:border-[#878785] hover:bg-[#878785d9]'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
