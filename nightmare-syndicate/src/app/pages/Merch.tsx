import { Link } from 'react-router-dom';
import { Panel } from '@/app/components/Panel';
import { Stamp } from '@/app/components/Stamp';
import { LightboxImage } from '@/app/components/LightboxImage';
import teeOne from '../../../img/t1.gif';
import teeTwo from '../../../img/t2.gif';
import teeThree from '../../../img/t3.gif';
import posterAlt from '../../../img/poster2.png';

function MerchItem({
  title,
  desc,
  children,
}: {
  title: string;
  desc: string;
  children?: React.ReactNode;
}) {
  return (
    <Panel className="flex flex-col gap-3">
      <h2 className="text-xl">{title}</h2>
      <p className="text-sm text-white leading-relaxed">{desc}</p>
      {children}
    </Panel>
  );
}

export function Merch() {
  return (
    <main className="max-w-6xl mx-auto px-4 pt-0 pb-12 space-y-8">
      <div className="mb-4">
        <h1 className="text-3xl mb-2">MERCH</h1>
        <p className="text-sm text-white">
          AUTHORIZED STOCK: BIKINI ATOLL CD, FIELD SHIRTS, AND SIGNED POSTERS.
        </p>
      </div>

      <MerchItem
        title="BIKINI ATOLL BROADCAST / CD"
        desc="Official NSR-01-A1X-ROGUE disc. Includes the tour program fanzine plus access to the classified video dossier. 300 units only."
      >
        <div className="flex flex-wrap gap-3">
          <Stamp text="COMING SOON" />
          <Link
            to="/releases/nsr-01-a1x-rogue"
            className="tab-control text-[0.6rem] tracking-[0.3em]"
          >
            READ DOSSIER
          </Link>
        </div>
      </MerchItem>

      <MerchItem
        title="FIELD ISSUE SHIRTS"
        desc="Three shirt drops are in production. Expect radioactive inks, cyan embroidery, and dual-logo distortion."
      >
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { title: 'FATAL EXPOSURE SHIRT', img: teeOne, note: 'PREVIEW' },
            { title: 'FATAL EXPOSURE SHIRT', img: teeTwo, note: 'PREVIEW' },
            { title: 'TOUR CREW SHIRT', img: teeThree, note: 'PREVIEW' },
          ].map((shirt) => (
            <div
              key={shirt.title}
              className="border border-[#7fd1ae]/30 p-4 flex flex-col gap-3 items-center text-center"
            >
              <LightboxImage
                src={shirt.img}
                alt={shirt.title}
                className="w-full"
                imageClassName="w-full h-40 object-contain"
              />
              <p className="text-sm text-white font-semibold">{shirt.title}</p>
              <span className="text-xs text-[#7fd1ae] tracking-[0.2em] uppercase">{shirt.note}</span>
            </div>
          ))}
        </div>
      </MerchItem>

      <MerchItem
        title="SIGNED FATAL EXPOSURE POSTER"
        desc="Limited signed poster from the Bikini Atoll Broadcast tour cycle. Each print stamped, numbered, and irradiated."
      >
        <LightboxImage
          src={posterAlt}
          alt="Signed Fatal Exposure poster"
          className="w-full"
          imageClassName="w-full max-h-96 object-cover border border-[#7fd1ae]/30"
        />
      </MerchItem>
    </main>
  );
}
