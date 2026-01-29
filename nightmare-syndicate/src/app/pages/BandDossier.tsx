import { useParams, Link } from 'react-router-dom';
import { Panel } from '@/app/components/Panel';
import { Stamp } from '@/app/components/Stamp';
import { bands } from '@/app/data/mockData';

export function BandDossier() {
  const { id } = useParams();
  const band = bands.find((b) => b.id === id);

  if (!band) {
    return (
      <main className="max-w-6xl mx-auto px-4 py-12">
        <Panel>
          <p>DOSSIER NOT FOUND</p>
          <Link to="/roster" className="text-[#ff2b2b] hover:underline">
            RETURN TO ROSTER
          </Link>
        </Panel>
      </main>
    );
  }

  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <Link
        to="/roster"
        className="text-sm text-[#8a8a8c] hover:text-[#e9e9ea] mb-6 inline-block"
      >
        ← BACK TO ROSTER
      </Link>

      <Panel>
        <div className="mb-6">
          <Stamp text={band.status} variant={band.status === 'ACTIVE' ? 'red' : 'white'} />
        </div>

        <h1 className="text-3xl mb-6">{band.name}</h1>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="border-b border-[#8a8a8c]/30 pb-3">
            <span className="text-xs text-[#8a8a8c] block mb-1">CLASSIFICATION</span>
            <p className="text-sm">{band.classification}</p>
          </div>

          <div className="border-b border-[#8a8a8c]/30 pb-3">
            <span className="text-xs text-[#8a8a8c] block mb-1">REGION</span>
            <p className="text-sm">{band.region}</p>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-sm text-[#8a8a8c] mb-3">SUMMARY</h2>
          <p className="text-sm leading-relaxed">{band.summary}</p>
        </div>

        <div>
          <h2 className="text-sm text-[#8a8a8c] mb-3">DOSSIER NOTES</h2>
          <ul className="space-y-2">
            {band.notes.map((note, index) => (
              <li key={index} className="text-sm flex gap-3">
                <span className="text-[#ff2b2b]">▪</span>
                <span>{note}</span>
              </li>
            ))}
          </ul>
        </div>
      </Panel>
    </main>
  );
}
