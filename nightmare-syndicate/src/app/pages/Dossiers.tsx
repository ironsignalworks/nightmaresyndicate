import { Panel } from '@/app/components/Panel';
import { dossiers } from '@/app/data/mockData';

export function Dossiers() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <div className="mb-8">
        <h1 className="text-3xl mb-2">DOSSIERS</h1>
        <p className="text-sm text-[#8a8a8c]">
          CLASSIFIED INTELLIGENCE LOGS AND INTERCEPTS
        </p>
      </div>

      <Panel>
        <div className="space-y-1">
          {dossiers.map((dossier) => (
            <div
              key={dossier.id}
              className="border-b border-[#8a8a8c]/20 py-3 hover:bg-[#0b0c0f]/30 px-3 -mx-3 cursor-pointer transition-colors"
            >
              <div className="flex items-center gap-4">
                <span className="text-[#ff2b2b] text-xs font-bold shrink-0">
                  {dossier.tag}
                </span>
                <p className="text-sm">{dossier.title}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 pt-6 border-t border-[#8a8a8c]/30">
          <p className="text-xs text-[#8a8a8c]">
            ACCESS TO FULL DOSSIER CONTENT REQUIRES CLEARANCE. 
            UNAUTHORIZED VIEWING IS PROHIBITED.
          </p>
        </div>
      </Panel>
    </main>
  );
}
