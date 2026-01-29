import { Panel } from '@/app/components/Panel';

export function SignalTraffic() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12 font-mono text-[#fef9e8]">
      <div className="mb-8">
        <h1 className="text-3xl mb-2 tracking-[0.2em]">SIGNAL TRAFFIC</h1>
        <p className="text-sm">
          INTERCEPTED TRANSMISSIONS / BROADCAST TEXT / PROPAGANDA FRAGMENTS
        </p>
      </div>

      <Panel className="border-[#878785]/60 bg-[#0c0c0c]">
        <h2 className="text-base uppercase tracking-[0.2em] mb-3">Channel Status</h2>
        <p className="text-sm leading-relaxed">
          Signal logs are being collated from Bikini Atoll Broadcast monitoring arrays, Selvajaria
          microwave relays, and Vortex basement repeaters. Expect decoded manifestos, intercepted lyric
          clusters, and audio contamination reports as soon as decryption completes.
        </p>

        <div className="mt-6 border border-dashed border-[#7fd1ae]/40 p-4">
          <p className="text-xs uppercase tracking-[0.3em] text-[#7fd1ae] mb-1">Pending</p>
          <ul className="text-sm space-y-1">
            <li>- Bikini Atoll Broadcast video intercepts</li>
            <li>- Vortex operations pamphlets</li>
            <li>- Fatal Exposure propaganda bursts</li>
          </ul>
        </div>
      </Panel>
    </main>
  );
}
