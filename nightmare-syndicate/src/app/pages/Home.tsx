import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { Panel } from '@/app/components/Panel';
import { WarningBox } from '@/app/components/WarningBox';
import { Stamp } from '@/app/components/Stamp';
import { RedactedText } from '@/app/components/RedactedText';
import { releases } from '@/app/data/mockData';
import type { Release } from '@/app/data/mockData';
import { LightboxImage } from '@/app/components/LightboxImage';
import tourPoster from '../../../img/poster1.png';
import tourPosterAlt from '../../../img/tour1.png';

type ReleaseCardProps = {
  release: Release;
  stampText: string;
  bodyCopy?: ReactNode;
  footerNote?: ReactNode;
  actions: ReactNode;
  className?: string;
};

function ReleaseCard({ release, stampText, bodyCopy, footerNote, actions, className = '' }: ReleaseCardProps) {
  const strapLines =
    release.id === 'nsr-01-a1x-rogue' && release.releaseDate
      ? ['OUT FEB 13', '2026']
      : release.id === 'nsr-04-hcw'
        ? ['DROPPING', '2026']
        : null;
  const soldOutText = release.soldOutBannerText;

  return (
    <Panel className={`self-stretch flex flex-col gap-4 ${className}`}>
      {release.coverImage && (
        <div className="relative">
          <LightboxImage
            src={release.coverImage}
            alt={`${release.title} cover`}
            className="w-full"
            imageClassName="object-cover border border-[#7fd1ae]/30 rounded"
          />
          {strapLines && (
            <div className="banner-strap">
              <span className="stencil-font">
                {strapLines.map((line, idx) => (
                  <span key={`${line}-${idx}`} className="block text-center">
                    {line}
                  </span>
                ))}
              </span>
            </div>
          )}
          {soldOutText && (
            <div className="banner-strap translate-y-4">
              <span className="stencil-font">{soldOutText}</span>
            </div>
          )}
        </div>
      )}
        <div className="flex items-center gap-3">
          <Stamp text={stampText} />
        </div>
      <div className="space-y-3 flex-grow">
        <div className="border-b border-[#7fd1ae]/30 pb-2">
          <span className="text-sm text-[#7fd1ae]">CATALOG</span>
          <p className="font-bold">{release.catalogId}</p>
        </div>
        <div className="border-b border-[#7fd1ae]/30 pb-2">
          <span className="text-sm text-[#7fd1ae]">ARTIST</span>
          <p className="font-bold">{release.artist}</p>
        </div>
        <div className="border-b border-[#7fd1ae]/30 pb-2">
          <span className="text-sm text-[#7fd1ae]">TITLE</span>
          <p className="font-bold">{release.title}</p>
        </div>
        <div className="grid grid-cols-3 gap-4 border-b border-[#7fd1ae]/30 pb-2">
          <div>
            <span className="text-sm text-[#7fd1ae] block">FORMAT</span>
            <p className="text-sm">{release.format}</p>
          </div>
          <div>
            <span className="text-sm text-[#7fd1ae] block">YEAR</span>
            <p className="text-sm">{release.year}</p>
          </div>
          <div>
            <span className="text-sm text-[#7fd1ae] block">STATUS</span>
            <Stamp text={release.status} />
          </div>
        </div>
        {release.releaseDate && (
          <div className="border-b border-[#7fd1ae]/30 pb-2">
            <span className="text-sm text-[#7fd1ae] block">RELEASE DATE</span>
            <p className="text-sm">{release.releaseDate}</p>
          </div>
        )}
        {release.limitedNote && (
          <div className="border-b border-[#7fd1ae]/30 pb-2">
            <span className="text-sm text-[#7fd1ae] block">LIMITED RUN</span>
            <p className="text-sm text-white">
              {release.limitedNote}
              {release.limitedLinkUrl && (
                <>
                  {' '}
                  <a
                    href={release.limitedLinkUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="underline"
                  >
                    {release.limitedLinkLabel ?? release.limitedLinkUrl}
                  </a>
                </>
              )}
            </p>
          </div>
        )}
      </div>
      {bodyCopy && <div className="space-y-3">{bodyCopy}</div>}
      {footerNote && <div>{footerNote}</div>}
      {actions && <div className="flex flex-wrap gap-3">{actions}</div>}
    </Panel>
  );
}

export function Home() {
  const availabilityFilter = (release: Release) => {
    const normalized = release.status.toUpperCase();
    return (
      !normalized.includes('COMING SOON') &&
      !normalized.includes('PRE-ORDER') &&
      !normalized.includes('CLASSIFIED')
    );
  };
  const fatalExposureReleases = releases.filter(
    (release) => release.artist.toUpperCase().includes('FATAL EXPOSURE') && availabilityFilter(release),
  );
  const latestRelease =
    fatalExposureReleases.reduce<Release | null>((latest, current) => {
      if (!latest) {
        return current;
      }
      if (current.year > latest.year) {
        return current;
      }
      if (current.year === latest.year) {
        const currentDate = current.releaseDate ? Date.parse(current.releaseDate) : 0;
        const latestDate = latest.releaseDate ? Date.parse(latest.releaseDate) : 0;
        return currentDate > latestDate ? current : latest;
      }
      return latest;
    }, null) ?? fatalExposureReleases[0] ?? releases.find((r) => r.artist.toUpperCase().includes('FATAL EXPOSURE')) ?? null;
  const upcomingRelease = releases.find((r) =>
    r.title.toLowerCase().includes('human crust of war'),
  );
  const bikiniRelease = releases.find((r) => r.id === 'nsr-01-a1x-rogue');
  const bikiniCd2 = bikiniRelease?.galleryImages?.[1];
  const bikiniCd3 = bikiniRelease?.galleryImages?.[2];

  const getYoutubeId = (url: string) => {
    try {
      const parsed = new URL(url);
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
  };

  const videoThumbs =
    bikiniRelease?.videos
      ?.map((url) => ({ url, id: getYoutubeId(url) }))
      .filter((item): item is { url: string; id: string } => Boolean(item.id))
      .slice(0, 2) ?? [];

  return (
    <main className="max-w-6xl mx-auto px-4 pt-0 pb-12">
      <Panel className="mb-10">
        <h2 className="text-2xl mb-6 tracking-tight">
          OFFICIAL RECORD OF UNOFFICIAL RELEASES
        </h2>
        <p className="text-sm text-white mb-6 leading-relaxed">
          NIGHTMARE SYNDICATE RECORDS operates outside conventional music industry structures. We
          document, preserve, and distribute irradiated underground music transmissions.
        </p>
        <p className="text-sm text-white mb-6">
          Intel line:{' '}
          <a href="mailto:info@nightmaresyndicaterecords.com" className="underline">
            info@nightmaresyndicaterecords.com
          </a>
        </p>
        <WarningBox tag="[REDACTED]">
          All operations are conducted independently. Locations are <RedactedText />. Distribution
          methods are <RedactedText />. Surveillance is assumed.
        </WarningBox>
        {(bikiniCd2 || bikiniCd3) && (
          <div className="mt-4">
            <div className="border border-dashed border-[#242422]/60 bg-[#242422]/50 p-4">
              <div className="flex items-center gap-3 flex-wrap">
                <span className="tab-control text-xs tracking-[0.3em] uppercase px-3 py-1">
                  [LATEST FEEDBACK]
                </span>
                <p className="text-sm text-white leading-relaxed">
                  <span className="font-bold">Bikini Atoll Broadcast</span> lands on 13 February 2026.
                </p>
              </div>
              <div className="flex items-start gap-3 mt-3">
                {bikiniCd2 && (
                  <LightboxImage
                    src={bikiniCd2}
                    alt="Bikini Atoll Broadcast cd2"
                    className="w-32 shrink-0"
                    imageClassName="object-cover border border-[#7fd1ae]/30 rounded"
                  />
                )}
                {bikiniCd3 && (
                  <LightboxImage
                    src={bikiniCd3}
                    alt="Bikini Atoll Broadcast cd3"
                    className="w-32 shrink-0"
                    imageClassName="object-cover border border-[#7fd1ae]/30 rounded"
                  />
                )}
              </div>
            </div>
          </div>
        )}
        <div className="flex gap-3 mt-6">
          <Link to="/releases" className="tab-control text-sm tracking-[0.3em]">
            VIEW RELEASES
          </Link>
          <Link to="/roster" className="tab-control text-sm tracking-[0.3em]">
            VIEW ROSTER
          </Link>
        </div>
      </Panel>

      <div className="grid md:grid-cols-2 gap-6 items-start mb-10">
        {latestRelease && (
          <ReleaseCard
            release={latestRelease}
            stampText="LATEST RELEASE"
            footerNote={
              <div className="text-sm text-white space-y-1">
                {latestRelease.selvajariaUrl && (
                  <p>
                    Distribution partner:{' '}
                    <a
                      href={latestRelease.selvajariaUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="underline"
                    >
                      selvajariarecords.com
                    </a>
                  </p>
                )}
                <p>
                  Vortex contact:{' '}
                  <a href="mailto:vortex.lisboa@gmail.com" className="underline">
                    vortex.lisboa@gmail.com
                  </a>
                </p>
              </div>
            }
            actions={
              <Link to={`/releases/${latestRelease.id}`} className="tab-control text-sm tracking-[0.3em]">
                READ DOSSIER
              </Link>
            }
          />
        )}

        {upcomingRelease && (
          <ReleaseCard
            release={upcomingRelease}
            stampText="INCOMING TRANSMISSION"
            bodyCopy={
              <>
                <p className="text-sm text-white leading-relaxed">
                  Fatal Exposure are finalizing the assault titled{' '}
                  <span className="font-bold">{upcomingRelease.title}</span>. Expect bio film, live videos,
                  promo dumps, poster drops, and dossier leaks as we cycle toward launch.
                </p>
                <ul className="text-sm text-white space-y-2">
                  <li>- Tour visuals and poster proofs updated daily.</li>
                  <li>- Intel dropbox: info@nightmaresyndicaterecords.com.</li>
                  <li>- Secure streams via Bandcamp ahead of street date.</li>
                </ul>
              </>
            }
            actions={
              <Link to={`/releases/${upcomingRelease.id}`} className="tab-control text-sm tracking-[0.3em]">
                READ DOSSIER
              </Link>
            }
          />
        )}
      </div>

      <Panel className="mb-10 overflow-hidden p-0">
        <div className="grid md:grid-cols-2">
          <LightboxImage
            src={tourPoster}
            alt="Fatal Exposure promo poster"
            className="w-full h-full"
            imageClassName="object-cover h-full"
          />
          <LightboxImage
            src={tourPosterAlt}
            alt="Fatal Exposure tour operations"
            className="w-full h-full"
            imageClassName="object-cover h-full"
          />
        </div>
        <div className="p-6 flex flex-col gap-3 bg-[#242422]/40">
          <Stamp text="FIELD PROMOTION" />
          <h2 className="text-2xl">POSTERS - TOURS - BROADCAST SIGNALS</h2>
          <p className="text-sm text-white leading-relaxed">
            Fatal Exposure propaganda posters, live video stills, and promo blasts are rolling out daily.
            Watch the channels for new dates, location leaks, and classified screenings.
          </p>
        </div>
      </Panel>

      {videoThumbs.length > 0 && (
        <Panel className="mt-10">
          <div className="mb-4 flex items-center gap-3">
            <Stamp text="LIVE FOOTAGE" />
            <p className="text-sm text-[#7fd1ae] tracking-[0.3em] uppercase">
              bikini atoll broadcast
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {videoThumbs.map(({ url, id }) => (
              <a
                key={id}
                href={url}
                target="_blank"
                rel="noreferrer"
                className="relative group border border-[#7fd1ae]/30 rounded overflow-hidden"
              >
                <img
                  src={`https://img.youtube.com/vi/${id}/hqdefault.jpg`}
                  alt="Bikini Atoll Broadcast footage"
                  className="w-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-[#7fd1ae] tracking-[0.3em] uppercase text-sm">
                    watch
                  </span>
                </div>
              </a>
            ))}
          </div>
          <div className="mt-6">
            <Link
              to="/releases/nsr-01-a1x-rogue#videos"
              className="tab-control text-sm tracking-[0.3em]"
            >
              WATCH ALL VIDEOS
            </Link>
          </div>
        </Panel>
      )}

    </main>
  );
}
