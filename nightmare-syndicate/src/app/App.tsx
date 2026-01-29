import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from '@/app/components/Header';
import { Home } from '@/app/pages/Home';
import { Roster } from '@/app/pages/Roster';
import { Releases } from '@/app/pages/Releases';
import { Dossiers } from '@/app/pages/Dossiers';
import { Submit } from '@/app/pages/Submit';
import { Contact } from '@/app/pages/Contact';
import { BandDossier } from '@/app/pages/BandDossier';
import { ReleaseDetail } from '@/app/pages/ReleaseDetail';
import { Login } from '@/app/pages/Login';
import { Merch } from '@/app/pages/Merch';

export default function App() {
  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Router basename="/nightmaresyndicate">
      <div className="min-h-screen bg-transparent flex flex-col">
        <Header />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/roster" element={<Roster />} />
            <Route path="/roster/:id" element={<BandDossier />} />
            <Route path="/releases" element={<Releases />} />
            <Route path="/releases/:id" element={<ReleaseDetail />} />
            <Route path="/merch" element={<Merch />} />
            <Route path="/dossiers" element={<Dossiers />} />
            <Route path="/submit" element={<Submit />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
        <button
          type="button"
          onClick={handleBackToTop}
          className="mx-auto mb-2 flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-white hover:text-[#7fd1ae] transition-colors"
          aria-label="Back to top"
        >
          <span aria-hidden="true">↑</span>
          back to top
        </button>
        <footer className="subtitle-font text-xs tracking-[0.3em] uppercase text-[#7fd1ae] py-6 flex flex-col items-center gap-2 sm:flex-row sm:flex-wrap sm:justify-center">
          <span>nightmare syndicate records</span>
          <span>all rights reserved</span>
          <span>radiate and perish</span>
          <a href="mailto:info@nightmaresyndicaterecords.com" className="underline">
            info@nightmaresyndicaterecords.com
          </a>
        </footer>
      </div>
    </Router>
  );
}
