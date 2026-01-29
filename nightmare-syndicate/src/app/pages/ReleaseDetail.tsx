import { useParams, Link } from 'react-router-dom';
import { Panel } from '@/app/components/Panel';
import { Stamp } from '@/app/components/Stamp';
import { WarningBox } from '@/app/components/WarningBox';
import { releases } from '@/app/data/mockData';

export function ReleaseDetail() {
  const { id } = useParams();
  const release = releases.find((r) => r.id === id);

  if (!release) {
    return (
      <main className="max-w-6xl mx-auto px-4 py-12">
        <Panel>
          <p>FILE NOT FOUND</p>
          <Link to="/releases" className="text-[#896000] hover:underline">
            RETURN TO CATALOG
          </Link>
        </Panel>
      </main>
    );
  }

  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <Link
        to="/releases"
        className="text-sm text-[#7fd1ae] hover:text-[#878785] mb-6 inline-block"
      >
        ← BACK TO RELEASES
      </Link>

      <Panel>
        <div className="mb-6">
          <Stamp text={release.status} variant={release.status === 'AVAILABLE' ? 'white' : 'red'} />
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

        <div className="mb-8">
          <h2 className="text-sm text-[#7fd1ae] mb-3">DESCRIPTION</h2>
          <p className="text-sm leading-relaxed">{release.description}</p>
        </div>

        <div className="mb-8">
          <h2 className="text-sm text-[#7fd1ae] mb-3">TAGS</h2>
          <div className="flex flex-wrap gap-2">
            {release.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs border border-[#7fd1ae]/30 px-3 py-1"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <WarningBox tag="[NOTICE]">
          LIMITED RUN. WHEN IT'S GONE, IT'S GONE. [REDACTED]
        </WarningBox>

        {release.status === 'AVAILABLE' && (
          <div className="mt-6">
            <button className="w-full border border-[#896000] px-6 py-3 text-sm hover:bg-[#896000] hover:text-[#7fd1ae] transition-colors">
              ACQUIRE [CONTACT REQUIRED]
            </button>
          </div>
        )}
      </Panel>
    </main>
  );
}
