import { Link } from 'react-router-dom';
import { Panel } from '@/app/components/Panel';
import { WarningBox } from '@/app/components/WarningBox';
import { Stamp } from '@/app/components/Stamp';
import { RedactedText } from '@/app/components/RedactedText';
import { releases } from '@/app/data/mockData';
import tourPoster from '../../../img/poster1.png';

export function Home() {
  const latestRelease = releases[0];
  const upcomingRelease = releases.find((r) =>
    r.title.toLowerCase().includes('human crust of war'),
  );

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

      {upcomingRelease && (
        <div className="mt-10 grid lg:grid-cols-[1.5fr_1fr] gap-6">
          <Panel>
            <div className="flex items-center gap-2 mb-4">
              <Stamp text="INCOMING TRANSMISSION" />
              <span className="text-xs text-[#7fd1ae] uppercase tracking-[0.3em]">
                videos · promos · posters
              </span>
            </div>
            <h3 className="text-xl mb-2">{upcomingRelease.title}</h3>
            <p className="text-sm text-[#7fd1ae] mb-4">
              Fatal Exposure are finalizing the assault titled{' '}
              <span className="font-bold">"{upcomingRelease.title}"</span>. Expect
              bio film, live videos, promo dumps, and poster drops as we cycle
              toward launch.
            </p>
            <ul className="text-sm text-[#7fd1ae] space-y-2 mb-6">
              <li>• Tour visuals and poster proofs updated daily.</li>
              <li>• Email intel: info@nightmaresyndicaterecords.com.</li>
              <li>• Secure streams via Bandcamp ahead of street date.</li>
            </ul>
            <div className="flex flex-wrap gap-3">
              <Link
                to={`/releases/${upcomingRelease.id}`}
                className="border border-[#896000] px-4 py-2 text-sm hover:bg-[#896000] hover:text-[#7fd1ae] transition-colors"
              >
                READ DOSSIER
              </Link>
              <a
                href="https://fatalexposure.bandcamp.com/"
                target="_blank"
                rel="noreferrer"
                className="border border-[#7fd1ae]/40 px-4 py-2 text-sm hover:bg-[#7fd1ae]/10 transition-colors"
              >
                BANDCAMP
              </a>
              <a
                href="mailto:info@nightmaresyndicaterecords.com"
                className="border border-[#7fd1ae]/40 px-4 py-2 text-sm hover:bg-[#7fd1ae]/10 transition-colors"
              >
                EMAIL HQ
              </a>
            </div>
          </Panel>

          <div className="border border-[#7fd1ae]/30 bg-[#242422]/40 p-4 flex flex-col gap-3">
            <img
              src={tourPoster}
              alt="Fatal Exposure promo poster"
              className="w-full object-cover rounded"
            />
            <p className="text-xs text-[#7fd1ae] uppercase tracking-[0.3em] text-center">
              promo poster · tour broadcast assets
            </p>
          </div>
        </div>
      )}
    </main>
  );
}
