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
          <Link to="/roster" className="text-[#896000] hover:underline">
            RETURN TO ROSTER
          </Link>
        </Panel>
      </main>
    );
  }

  const statusVariant = band.status.toUpperCase().includes('ACTIVE')
    ? 'red'
    : 'white';

  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <Link
        to="/roster"
        className="text-sm text-[#7fd1ae] hover:text-[#878785] mb-6 inline-block"
      >
        &larr; BACK TO ROSTER
      </Link>

      <Panel>
        <div className="mb-6">
          <Stamp text={band.status} variant={statusVariant} />
        </div>

        <h1 className="text-3xl mb-4">{band.name}</h1>

        {band.logo && (
          <div className="mb-6">
            <img
              src={band.logo}
              alt={`${band.name} insignia`}
              className="w-full max-h-64 object-contain border border-[#7fd1ae]/30 rounded bg-[#242422]/30 p-4"
            />
          </div>
        )}

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="border-b border-[#7fd1ae]/30 pb-3">
            <span className="text-xs text-[#7fd1ae] block mb-1">CLASSIFICATION</span>
            <p className="text-sm">{band.classification}</p>
          </div>

          <div className="border-b border-[#7fd1ae]/30 pb-3">
            <span className="text-xs text-[#7fd1ae] block mb-1">REGION</span>
            <p className="text-sm">{band.region}</p>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-sm text-[#7fd1ae] mb-3">SUMMARY</h2>
          <p className="text-sm leading-relaxed">{band.summary}</p>
        </div>

        {band.upcomingRelease && (
          <div className="mb-6 border border-dashed border-[#7fd1ae]/30 p-4">
            <span className="text-xs text-[#7fd1ae] block mb-1">
              UPCOMING TRANSMISSION
            </span>
            <p className="text-sm text-[#7fd1ae] font-bold">
              {band.upcomingRelease}
            </p>
            <p className="text-xs text-[#7fd1ae] mt-1 uppercase tracking-[0.3em]">
              VIDEOS · PROMOS · POSTERS INBOUND
            </p>
          </div>
        )}

        {band.bandcampUrl && (
          <div className="mb-8">
            <a
              href={band.bandcampUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-full items-center justify-center border border-[#7fd1ae]/50 px-4 py-3 text-sm uppercase tracking-[0.3em] hover:bg-[#7fd1ae]/10 transition-colors"
            >
              VISIT BANDCAMP
            </a>
          </div>
        )}

        <div>
          <h2 className="text-sm text-[#7fd1ae] mb-3">DOSSIER NOTES</h2>
          <ul className="space-y-2">
            {band.notes.map((note, index) => (
              <li key={index} className="text-sm flex gap-3">
                <span className="text-[#896000]">&bull;</span>
                <span>{note}</span>
              </li>
            ))}
          </ul>
        </div>
      </Panel>
    </main>
  );
}
