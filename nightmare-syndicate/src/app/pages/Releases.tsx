import { Link } from 'react-router-dom';
import { Panel } from '@/app/components/Panel';
import { releases } from '@/app/data/mockData';

export function Releases() {
  const visibleReleases = releases.filter((release) => {
    const normalized = release.status.toUpperCase();
    return !normalized.includes('CLASSIFIED') && !normalized.includes('PRE-ORDER');
  });

  return (
    <main className="max-w-6xl mx-auto px-4 pt-0 pb-12">
      <div className="mb-8">
        <h1 className="text-3xl mb-2">RELEASES</h1>
        <p className="text-sm text-white">
          COMPLETE CATALOG OF SYNDICATE OPERATIONS
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
        {visibleReleases.map((release) => {
          const show2026Banner = release.id === 'nsr-04-hcw';

          return (
            <Panel key={release.id} className="flex flex-col h-full">
              {release.coverImage && (
                <div className="mb-4 border border-[#7fd1ae]/30 relative">
                  <img
                    src={release.coverImage}
                    alt={`${release.title} cover`}
                    className="w-full object-contain"
                  />
                  {show2026Banner && (
                    <div className="banner-strap translate-y-4">
                      <span className="stencil-font">
                        DROPPING
                        <br />
                        2026
                      </span>
                    </div>
                  )}
                </div>
              )}
              <div className="mb-4" />

            <div className="space-y-3 mb-6 flex-grow">
              <div className="border-b border-[#7fd1ae]/30 pb-2">
                <span className="text-xs text-[#7fd1ae]">CATALOG</span>
                <p className="font-bold text-sm">{release.catalogId}</p>
              </div>

              <div className="border-b border-[#7fd1ae]/30 pb-2">
                <span className="text-xs text-[#7fd1ae]">ARTIST</span>
                <p className="text-sm">{release.artist}</p>
              </div>

              <div className="border-b border-[#7fd1ae]/30 pb-2">
                <span className="text-xs text-[#7fd1ae]">TITLE</span>
                <p className="font-bold text-sm">{release.title}</p>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <span className="text-xs text-[#7fd1ae] block">FORMAT</span>
                  <p className="text-xs">{release.format}</p>
                </div>
                <div>
                  <span className="text-xs text-[#7fd1ae] block">YEAR</span>
                  <p className="text-xs">{release.year}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-1">
                {release.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center justify-center text-center text-xs border border-[#7fd1ae]/30 px-2 py-0.5"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <Link
              to={`/releases/${release.id}`}
              className="block border border-[#878785] px-4 py-2 text-xs text-center hover:bg-[#878785] hover:text-[#7fd1ae] transition-colors"
            >
              OPEN FILE
            </Link>
            </Panel>
          );
        })}
      </div>
    </main>
  );
}
