import { Link } from 'react-router-dom';
import { Panel } from '@/app/components/Panel';
import { Stamp } from '@/app/components/Stamp';
import { bands } from '@/app/data/mockData';

export function Roster() {
  return (
    <main className="max-w-6xl mx-auto px-4 pt-0 pb-12">
      <div className="mb-8">
        <h1 className="text-3xl mb-2">ROSTER</h1>
        <p className="text-sm text-white">CURRENT OPERATIONS AND AFFILIATED UNITS</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 items-stretch">
        {bands.map((band) => (
          <Panel key={band.id} className="flex flex-col h-full">
            <div className="mb-4 flex gap-2 flex-wrap">
              <Stamp text={band.status} variant={band.status === 'ACTIVE' ? 'red' : 'white'} />
              <Stamp text={band.classification} variant="white" />
            </div>

            <h2 className="text-xl mb-4">{band.name}</h2>
            {band.logo && (
              <div className="mb-4 flex justify-start">
                <img
                  src={band.logo}
                  alt={`${band.name} insignia`}
                  className={`w-full object-contain ${
                    band.id === 'vortex' ? 'max-w-[9.6rem]' : 'max-w-[12rem]'
                  }`}
                />
              </div>
            )}

            <div className="space-y-3 mb-4">
              <div className="border-b border-[#7fd1ae]/30 pb-2">
                <span className="text-xs text-[#7fd1ae] block mb-1">CLASSIFICATION</span>
                <p className="text-sm">{band.classification}</p>
              </div>
              <div className="border-b border-[#7fd1ae]/30 pb-2">
                <span className="text-xs text-[#7fd1ae] block mb-1">REGION</span>
                <p className="text-sm">{band.region}</p>
              </div>
            </div>

            <p className="text-sm text-white leading-relaxed flex-grow">{band.summary}</p>

            <Link
              to={`/roster/${band.id}`}
              className="mt-6 block border border-[#878785] px-6 py-2 text-sm text-center hover:bg-[#878785] hover:text-[#7fd1ae] transition-colors"
            >
              OPEN DOSSIER
            </Link>
          </Panel>
        ))}
      </div>
    </main>
  );
}
