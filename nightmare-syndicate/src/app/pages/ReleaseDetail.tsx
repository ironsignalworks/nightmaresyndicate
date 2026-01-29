import { useParams, Link } from 'react-router-dom';
import { Panel } from '@/app/components/Panel';
import { Stamp } from '@/app/components/Stamp';
import { WarningBox } from '@/app/components/WarningBox';
import { LightboxImage } from '@/app/components/LightboxImage';
import { releases } from '@/app/data/mockData';

export function ReleaseDetail() {
  const { id } = useParams();
  const release = releases.find((r) => r.id === id);

  if (!release) {
    return (
      <main className="max-w-6xl mx-auto px-4 pt-0 pb-12">
        <Panel>
          <p>FILE NOT FOUND</p>
          <Link to="/releases" className="text-[#896000] hover:underline">
            RETURN TO CATALOG
          </Link>
        </Panel>
      </main>
    );
  }

  const normalizedStatus = release.status.toUpperCase();
  const isAvailable =
    normalizedStatus.includes('AVAILABLE') ||
    normalizedStatus.includes('PRE-ORDER');

  return (
    <main className="max-w-6xl mx-auto px-4 pt-0 pb-12">
      <Link
        to="/releases"
        className="text-sm text-white hover:text-[#878785] mb-6 inline-block"
      >
        &larr; BACK TO RELEASES
      </Link>

      <Panel>
        <div className="mb-6">
          <Stamp text={release.status} variant={isAvailable ? 'white' : 'red'} />
        </div>

        <h1 className="text-2xl mb-2">{release.title}</h1>
        <p className="text-[#7fd1ae] mb-8">{release.artist}</p>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="border-b border-[#7fd1ae]/30 pb-3">
            <span className="text-xs text-[#7fd1ae] block mb-1">CATALOG</span>
            <p className="text-sm font-bold">{release.catalogId}</p>
          </div>

          <div className="border-b border-[#7fd1ae]/30 pb-3">
            <span className="text-xs text-[#7fd1ae] block mb-1">FORMAT</span>
            <p className="text-sm">{release.format}</p>
          </div>

          <div className="border-b border-[#7fd1ae]/30 pb-3">
            <span className="text-xs text-[#7fd1ae] block mb-1">YEAR</span>
            <p className="text-sm">{release.year}</p>
          </div>
        </div>

        {(release.coverImage || release.backImage) && (
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            {release.coverImage && (
              <LightboxImage
                src={release.coverImage}
                alt={`${release.title} cover art`}
                className="w-full"
                imageClassName="object-cover border border-[#7fd1ae]/30 rounded"
              />
            )}
            {release.backImage && (
              <LightboxImage
                src={release.backImage}
                alt={`${release.title} back cover art`}
                className="w-full"
                imageClassName="object-cover border border-[#7fd1ae]/30 rounded"
              />
            )}
          </div>
        )}

        <div className="mb-8">
          <h2 className="text-sm text-[#7fd1ae] mb-3">DESCRIPTION</h2>
          <p className="text-sm leading-relaxed whitespace-pre-line">
            {release.description}
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-sm text-[#7fd1ae] mb-3">TAGS</h2>
          <div className="flex flex-wrap gap-2">
            {release.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center justify-center text-center text-xs border border-[#7fd1ae]/30 px-3 py-1"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {release.selvajariaUrl && (
          <p className="text-xs text-white mb-8">
            Selvajaria Records:{' '}
            <a
              href={release.selvajariaUrl}
              target="_blank"
              rel="noreferrer"
              className="underline"
            >
              selvajariarecords.com
            </a>
          </p>
        )}

        {release.videos && release.videos.length > 0 && (
          <div className="mb-8">
            <h2 className="text-sm text-[#7fd1ae] mb-3">VIDEO FILES</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {release.videos.map((videoUrl) => {
                const id = (() => {
                  try {
                    const parsed = new URL(videoUrl);
                    if (parsed.hostname.includes('youtu.be')) {
                      return parsed.pathname.replace('/', '');
                    }
                    if (parsed.searchParams.get('v')) {
                      return parsed.searchParams.get('v');
                    }
                    const match = parsed.pathname.match(/\/embed\/(.+)$/);
                    return match ? match[1] : null;
                  } catch {
                    return null;
                  }
                })();
                if (!id) return null;
                return (
                  <div key={id} className="aspect-video border border-[#7fd1ae]/30 rounded overflow-hidden">
                    <iframe
                      src={`https://www.youtube.com/embed/${id}`}
                      title={`Video ${id}`}
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                );
              })}
            </div>
          </div>
        )}

        <WarningBox tag="[NOTICE]">
          LIMITED RUN. WHEN IT'S GONE, IT'S GONE. [REDACTED]
        </WarningBox>

        <div className="mt-6 flex flex-col gap-3">
          {isAvailable && (
            <button className="w-full border border-[#896000] px-6 py-3 text-sm text-center hover:bg-[#896000] hover:text-[#7fd1ae] transition-colors">
              ACQUIRE [CONTACT REQUIRED]
            </button>
          )}

          {release.externalUrl && (
            <a
              href={release.externalUrl}
              target="_blank"
              rel="noreferrer"
              className="w-full border border-[#7fd1ae]/50 px-6 py-3 text-center text-sm hover:bg-[#7fd1ae]/10 transition-colors"
            >
              VISIT BANDCAMP
            </a>
          )}
          <p className="text-xs text-white text-center w-full">
            Need intel?{' '}
            <a href="mailto:info@nightmaresyndicaterecords.com" className="underline">
              info@nightmaresyndicaterecords.com
            </a>
          </p>
        </div>
      </Panel>
    </main>
  );
}
