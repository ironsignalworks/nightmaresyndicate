import { Link } from 'react-router-dom';
import { Panel } from '@/app/components/Panel';
import { Stamp } from '@/app/components/Stamp';
import { bands } from '@/app/data/mockData';

export function Roster() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-12">
      <div className="mb-8">
        <h1 className="text-3xl mb-2">ROSTER</h1>
        <p className="text-sm text-[#7fd1ae]">
          CURRENT OPERATIONS AND AFFILIATED UNITS
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {bands.map((band) => (
          <Panel key={band.id}>
            <div className="mb-4 flex gap-2 flex-wrap">
              <Stamp text={band.status} variant={band.status === 'ACTIVE' ? 'red' : 'white'} />
              <Stamp text={band.classification} variant="white" />
            </div>

            <h2 className="text-xl mb-2">{band.name}</h2>
            <p className="text-xs text-[#7fd1ae] mb-4">{band.region}</p>

            <p className="text-sm text-[#878785] mb-6 leading-relaxed">
              {band.summary}
            </p>

            <Link
              to={`/roster/${band.id}`}
              className="block border border-[#878785] px-6 py-2 text-sm text-center hover:bg-[#878785] hover:text-[#7fd1ae] transition-colors"
            >
              OPEN DOSSIER
            </Link>
          </Panel>
        ))}
      </div>
    </main>
  );
}
