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

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-transparent flex flex-col">
        <Header />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/roster" element={<Roster />} />
            <Route path="/roster/:id" element={<BandDossier />} />
            <Route path="/releases" element={<Releases />} />
            <Route path="/releases/:id" element={<ReleaseDetail />} />
            <Route path="/dossiers" element={<Dossiers />} />
            <Route path="/submit" element={<Submit />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <footer className="text-center text-xs tracking-[0.3em] uppercase text-[#7fd1ae] py-6">
          nightmare syndicate records - all rights reserved - radiate and perish - info@nightmaresyndicaterecords.com
        </footer>
      </div>
    </Router>
  );
}
