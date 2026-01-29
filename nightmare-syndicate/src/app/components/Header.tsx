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
            <Link to="/" className="inline-block">
              <img
                src={headerLogo}
                alt="Nightmare Syndicate"
                className="w-48 md:w-64 object-contain"
              />
            </Link>
            <p className="text-sm subtitle-font tracking-wide text-[#7fd1ae]">
              CAME FOR THE RIFFS, STAYED FOR THE RADIATION
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 items-stretch">
            <div className="border border-[#896000] px-3 py-1 flex items-center justify-center">
              <span className="text-xs text-[#896000] font-bold tracking-wider">
                CLASSIFICATION: REDACTED
              </span>
            </div>
            <Link
              to="/login"
              className="border border-[#7fd1ae]/40 px-4 py-2 text-xs uppercase tracking-[0.3em] text-center hover:bg-[#7fd1ae]/10 transition-colors"
            >
              LOG IN
            </Link>
          </div>
        </div>

        <div className="folder-rail mt-3">
          <nav className="folder-rail__tabs flex gap-2 flex-wrap items-end">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`folder-tab ${isActive ? 'folder-tab--active' : ''}`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
}
