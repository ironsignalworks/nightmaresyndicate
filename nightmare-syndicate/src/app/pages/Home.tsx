import { Link } from 'react-router-dom';
import { Panel } from '@/app/components/Panel';
import { WarningBox } from '@/app/components/WarningBox';
import { Stamp } from '@/app/components/Stamp';
import { RedactedText } from '@/app/components/RedactedText';
import { releases } from '@/app/data/mockData';

export function Home() {
  const latestRelease = releases[3]; // NS-004

  return (
    <main className="max-w-6xl mx-auto px-4 py-12">
      <div className="grid md:grid-cols-2 gap-6">
        {/* Left Panel */}
        <Panel>
          <h2 className="text-2xl mb-6 tracking-tight">
            OFFICIAL RECORD OF UNOFFICIAL RELEASES
          </h2>
          
          <p className="text-sm text-[#7fd1ae] mb-6 leading-relaxed">
            NIGHTMARE SYNDICATE operates outside conventional music industry structures. 
            We document, preserve, and distribute extreme underground sound. No compromises. 
            No safe spaces. If you're looking for comfort, you're in the wrong place.
          </p>

          <WarningBox tag="[REDACTED]">
            All operations are conducted independently. Locations are <RedactedText />. 
            Distribution methods are <RedactedText />. Surveillance is assumed.
          </WarningBox>

          <div className="flex gap-3 mt-6">
            <Link
              to="/releases"
              className="border border-[#878785] px-6 py-3 text-sm hover:bg-[#878785] hover:text-[#7fd1ae] transition-colors"
            >
              VIEW RELEASES
            </Link>
            <Link
              to="/roster"
              className="border border-[#878785] px-6 py-3 text-sm hover:bg-[#878785] hover:text-[#7fd1ae] transition-colors"
            >
              VIEW ROSTER
            </Link>
          </div>
        </Panel>

        {/* Right Panel - Latest Release */}
        <Panel>
          <div className="mb-4">
            <Stamp text="LATEST RELEASE" />
          </div>

          <div className="space-y-3">
            <div className="border-b border-[#7fd1ae]/30 pb-2">
              <span className="text-xs text-[#7fd1ae]">CATALOG</span>
              <p className="font-bold">{latestRelease.catalogId}</p>
            </div>

            <div className="border-b border-[#7fd1ae]/30 pb-2">
              <span className="text-xs text-[#7fd1ae]">ARTIST</span>
              <p className="font-bold">{latestRelease.artist}</p>
            </div>

            <div className="border-b border-[#7fd1ae]/30 pb-2">
              <span className="text-xs text-[#7fd1ae]">TITLE</span>
              <p className="font-bold">{latestRelease.title}</p>
            </div>

            <div className="grid grid-cols-3 gap-4 border-b border-[#7fd1ae]/30 pb-2">
              <div>
                <span className="text-xs text-[#7fd1ae] block">FORMAT</span>
                <p className="text-sm">{latestRelease.format}</p>
              </div>
              <div>
                <span className="text-xs text-[#7fd1ae] block">YEAR</span>
                <p className="text-sm">{latestRelease.year}</p>
              </div>
              <div>
                <span className="text-xs text-[#7fd1ae] block">STATUS</span>
                <Stamp text={latestRelease.status} variant="white" />
              </div>
            </div>
          </div>

          <Link
            to={`/releases/${latestRelease.id}`}
            className="block mt-6 border border-[#896000] px-6 py-3 text-sm text-center hover:bg-[#896000] hover:text-[#7fd1ae] transition-colors"
          >
            OPEN FILE
          </Link>
        </Panel>
      </div>
    </main>
  );
}
