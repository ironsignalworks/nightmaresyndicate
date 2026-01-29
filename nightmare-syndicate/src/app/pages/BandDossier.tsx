import { useParams, Link } from 'react-router-dom';
import { Panel } from '@/app/components/Panel';
import { Stamp } from '@/app/components/Stamp';
import { LightboxImage } from '@/app/components/LightboxImage';
import { bands, releases } from '@/app/data/mockData';

export function BandDossier() {
  const { id } = useParams();
  const band = bands.find((b) => b.id === id);
  const latestRelease =
    band?.latestReleaseId != null
      ? releases.find((release) => release.id === band.latestReleaseId)
      : undefined;

  if (!band) {
    return (
      <main className="max-w-6xl mx-auto px-4 pt-0 pb-12">
        <Panel>
          <p>DOSSIER NOT FOUND</p>
          <Link to="/roster" className="text-[#896000] hover:underline">
            RETURN TO ROSTER
          </Link>
        </Panel>
      </main>
    );
  }

  const statusVariant = band.status.toUpperCase().includes('ACTIVE') ? 'red' : 'white';

  return (
    <main className="max-w-6xl mx-auto px-4 pt-0 pb-12">
      <Link
        to="/roster"
        className="text-sm text-white hover:text-[#878785] mb-6 inline-block"
      >
        &larr; BACK TO ROSTER
      </Link>

      <Panel>
        <div className="mb-6">
          <Stamp text={band.status} variant={statusVariant} />
        </div>

        <h1 className="text-3xl mb-4">{band.name}</h1>

        {band.logo && (
          <div className="mb-6 flex justify-start">
            <LightboxImage
              src={band.logo}
              alt={`${band.name} insignia`}
              className={`block w-full ${
                band.id === 'vortex' ? 'max-w-lg' : 'max-w-xl'
              }`}
              imageClassName={`w-full object-contain ${
                band.id === 'vortex' ? 'max-h-56' : 'max-h-64'
              }`}
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

        {band.gallery && band.gallery.length > 0 && (
          <div className="mb-8">
            <h2 className="text-sm text-[#7fd1ae] mb-3">VISUAL FILES</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {band.gallery.map((image, idx) => (
                <LightboxImage
                  key={`${image}-${idx}`}
                  src={image}
                  alt={`${band.name} bio asset ${idx + 1}`}
                  className="block w-full aspect-video"
                  imageClassName="h-full w-full object-cover border border-[#7fd1ae]/30 rounded"
                />
              ))}
            </div>
          </div>
        )}

        {latestRelease && (
          <div className="mb-6 border border-[#7fd1ae]/40 p-4 space-y-2">
            <span className="text-xs text-[#7fd1ae] block uppercase tracking-[0.3em]">
              LATEST RELEASE // {latestRelease.status}
            </span>
            <Link
              to={`/releases/${latestRelease.id}`}
              className="text-lg text-white font-bold leading-tight hover:text-[#7fd1ae] transition-colors"
            >
              {latestRelease.title}
            </Link>
            <p className="text-sm text-[#7fd1ae]">
              {latestRelease.catalogId} · {latestRelease.year}
            </p>
            <p className="text-xs text-white">{latestRelease.format}</p>
            <p className="text-sm text-white leading-relaxed">
              Fatal Exposure&apos;s Bikini Atoll Broadcast detonation remains the current dossier:
              eleven tracks sourced from the Sector 19-X blast radius, limited to 300 units and routed
              jointly by Selvajaria, Vortex, and Nightmare Syndicate Records.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <Link
                to={`/releases/${latestRelease.id}`}
                className="border border-[#878785] px-4 py-2 text-xs uppercase tracking-[0.3em] text-center hover:bg-[#878785] hover:text-[#7fd1ae] transition-colors"
              >
                OPEN RELEASE FILE
              </Link>
              {latestRelease.externalUrl && (
                <a
                  href={latestRelease.externalUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="border border-[#7fd1ae]/50 px-4 py-2 text-xs uppercase tracking-[0.3em] text-center hover:bg-[#7fd1ae]/10 transition-colors"
                >
                  BANDCAMP
                </a>
              )}
            </div>
          </div>
        )}

        {band.upcomingRelease && (
          <div className="mb-6 border border-dashed border-[#7fd1ae]/30 p-4">
            <span className="text-xs text-[#7fd1ae] block mb-1">UPCOMING TRANSMISSION</span>
            <p className="text-sm text-[#7fd1ae] font-bold">{band.upcomingRelease}</p>
            <p className="text-xs text-[#7fd1ae] mt-1 uppercase tracking-[0.3em]">
              VIDEOS - PROMOS - POSTERS INBOUND
            </p>
          </div>
        )}

        {band.bandcampUrl && (
          <div className="mb-4">
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

        <p className="text-xs text-white mb-6">
          Contact: <a href="mailto:info@nightmaresyndicaterecords.com" className="underline">info@nightmaresyndicaterecords.com</a>
        </p>

        <div>
          <h2 className="text-sm text-[#7fd1ae] mb-3">DOSSIER NOTES</h2>
          <ul className="space-y-2">
            {band.notes.map((note, index) => (
              <li key={index} className="text-sm flex gap-3">
                <span className="text-[#896000]">-</span>
                <span>{note}</span>
              </li>
            ))}
          </ul>
        </div>
      </Panel>
    </main>
  );
}
