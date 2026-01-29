import { useState } from 'react';
import { Panel } from '@/app/components/Panel';
import {
  dossiers,
  dossierUnitSummary,
  dossierTransmissionLog,
} from '@/app/data/mockData';

export function Dossiers() {
  const [openId, setOpenId] = useState<string | null>(dossiers[0]?.id ?? null);

  return (
    <main className="max-w-5xl mx-auto px-4 py-12 font-mono text-[#fef9e8]">
      <div className="mb-8">
        <h1 className="text-3xl mb-2 tracking-[0.2em] uppercase">DOSSIERS</h1>
        <p className="text-sm text-[#fef9e8]">CLASSIFIED PERSONNEL FILES / HOSTILE NETWORK ACCESS</p>
      </div>

      <Panel className="mb-8">
        <p className="text-xs tracking-[0.3em] uppercase mb-2">
          {dossierUnitSummary.classification}
        </p>
        <h2 className="text-xl uppercase">{dossierUnitSummary.unit}</h2>
        <p className="text-sm mt-3">
          Personnel dossiers and operative profiles. Structured as classified intelligence files with role
          assignments, locations, clearance levels, activity logs, directives, and addendum artifacts.
        </p>
      </Panel>

      <Panel className="mb-8 whitespace-pre-line text-sm leading-relaxed">
        <h2 className="text-base uppercase tracking-[0.3em] mb-3">
          {dossierTransmissionLog.title}
        </h2>
        <p>{dossierTransmissionLog.body}</p>
      </Panel>

      <div className="space-y-4">
        {dossiers.map((dossier) => {
          const isOpen = openId === dossier.id;
          return (
            <Panel key={dossier.id} className="border-[#878785]/60 bg-[#050505] p-0 overflow-hidden">
              <button
                type="button"
                onClick={() => setOpenId(isOpen ? null : dossier.id)}
                aria-expanded={isOpen}
                className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left uppercase tracking-[0.2em] text-sm border-b border-[#7fd1ae]/20"
              >
                <div>
                  <p className="text-base text-[#fef9e8]">{dossier.name}</p>
                  <p className="text-xs text-[#7fd1ae]">{dossier.header}</p>
                  <p className="text-xs text-[#896000]">{dossier.status}</p>
                </div>
                <span className="text-xl text-[#7fd1ae]" aria-hidden="true">
                  {isOpen ? '−' : '+'}
                </span>
              </button>

              {isOpen && (
                <div className="px-6 py-6 space-y-6 text-sm">
                  <section>
                    <h3 className="text-xs uppercase tracking-[0.3em] mb-2">Overview</h3>
                    <p className="leading-relaxed">{dossier.overview}</p>
                  </section>

                  <section>
                    <h3 className="text-xs uppercase tracking-[0.3em] mb-2">Operative Profile</h3>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <span className="text-[11px] uppercase text-[#7fd1ae] block">Designation</span>
                        <p className="font-bold">{dossier.designation}</p>
                      </div>
                      <div>
                        <span className="text-[11px] uppercase text-[#7fd1ae] block">File Ref</span>
                        <p>{dossier.fileRef}</p>
                      </div>
                    </div>
                  </section>

                  <section>
                    <h3 className="text-xs uppercase tracking-[0.3em] mb-2">Role</h3>
                    <ul className="space-y-1">
                      {dossier.role.map((item) => (
                        <li key={item} className="flex gap-2">
                          <span className="text-[#896000]">-</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </section>

                  <section className="grid sm:grid-cols-3 gap-4">
                    <div>
                      <span className="text-[11px] uppercase text-[#7fd1ae] block">Location</span>
                      <p>{dossier.location}</p>
                    </div>
                    <div>
                      <span className="text-[11px] uppercase text-[#7fd1ae] block">Alias</span>
                      <p>{dossier.alias}</p>
                    </div>
                    <div>
                      <span className="text-[11px] uppercase text-[#7fd1ae] block">Clearance</span>
                      <p>{dossier.clearance}</p>
                    </div>
                  </section>

                  <section>
                    <h3 className="text-xs uppercase tracking-[0.3em] mb-2">Activity Log</h3>
                    <div className="space-y-2">
                      {dossier.activityLog.map((entry, index) => (
                        <div key={`${dossier.id}-log-${index}`} className="flex gap-4">
                          <span className="w-20 text-[#7fd1ae] uppercase">{entry.label}</span>
                          <p className="flex-1">{entry.detail}</p>
                        </div>
                      ))}
                    </div>
                  </section>

                  <section className="border border-dashed border-[#7fd1ae]/40 p-4">
                    <h3 className="text-[11px] uppercase tracking-[0.3em] text-[#7fd1ae] mb-2">
                      Final Directive
                    </h3>
                    <p>{dossier.finalDirective}</p>
                  </section>

                  <section>
                    <h3 className="text-xs uppercase tracking-[0.3em] mb-2">Addendum</h3>
                    <ul className="space-y-1">
                      {dossier.addendum.map((item, index) => (
                        <li key={`${dossier.id}-add-${index}`} className="flex gap-2">
                          <span className="text-[#896000]">-</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </section>

                  {dossier.artifactName && dossier.artifactDetail && (
                    <section className="border border-[#896000]/60 p-4">
                      <h3 className="text-[11px] uppercase tracking-[0.3em] text-[#896000] mb-1">
                        Redacted Artifact
                      </h3>
                      <p className="font-bold">{dossier.artifactName}</p>
                      <p className="mt-1">{dossier.artifactDetail}</p>
                    </section>
                  )}
                </div>
              )}
            </Panel>
          );
        })}
      </div>
    </main>
  );
}
