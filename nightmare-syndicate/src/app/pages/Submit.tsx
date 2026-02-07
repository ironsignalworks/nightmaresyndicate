import { Panel } from '@/app/components/Panel';
import { WarningBox } from '@/app/components/WarningBox';

export function Submit() {
  return (
    <main className="max-w-6xl mx-auto px-4 pt-0 pb-12">
      <div className="mb-8">
        <h1 className="text-3xl mb-2">SUBMIT</h1>
        <p className="text-sm text-white">
          MATERIAL SUBMISSION PROTOCOL
        </p>
      </div>

      <Panel className="mb-6">
        <h2 className="text-lg mb-4">REQUIREMENTS</h2>
        
        <ul className="space-y-3 mb-8">
          <li className="text-sm flex gap-3">
            <span className="text-[#896000]">▪</span>
            <span>Material must be raw, uncompromising, and authentic</span>
          </li>
          <li className="text-sm flex gap-3">
            <span className="text-[#896000]">▪</span>
            <span>No genre restrictions. Anything goes, but we might not like it</span>
          </li>
          <li className="text-sm flex gap-3">
            <span className="text-[#896000]">▪</span>
            <span>Physical formats preferred. Cassette, vinyl, CDR</span>
          </li>
          <li className="text-sm flex gap-3">
            <span className="text-[#896000]">▪</span>
            <span>Must include artist statement and technical specifications</span>
          </li>
          <li className="text-sm flex gap-3">
            <span className="text-[#896000]">▪</span>
            <span>Previous releases or live documentation required</span>
          </li>
        </ul>

        <WarningBox tag="[WARNING]">
          IF IT SOUNDS LAME, WE DON'T WANT IT.
        </WarningBox>
      </Panel>

      <Panel>
        <h2 className="text-lg mb-4">SUBMISSION METHOD</h2>
        
        <div className="space-y-4 text-sm">
          <p>
            All submissions must be sent via encrypted channels. 
            Public submissions are not accepted.
          </p>

          <p className="text-white">
            Contact information available through [REDACTED] networks only.
            Clearance verification required.
          </p>

          <p>
            Response time: 4-8 weeks minimum. 
            No confirmation of receipt will be provided. We might not reply.
          </p>

          <p className="text-[#896000]">
            Unsolicited physical mail will be destroyed unopened.
          </p>
        </div>
      </Panel>
    </main>
  );
}
