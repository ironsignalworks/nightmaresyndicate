import { Panel } from '@/app/components/Panel';
import { WarningBox } from '@/app/components/WarningBox';

export function Submit() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <div className="mb-8">
        <h1 className="text-3xl mb-2">SUBMIT</h1>
        <p className="text-sm text-[#8a8a8c]">
          MATERIAL SUBMISSION PROTOCOL
        </p>
      </div>

      <Panel className="mb-6">
        <h2 className="text-lg mb-4">REQUIREMENTS</h2>
        
        <ul className="space-y-3 mb-8">
          <li className="text-sm flex gap-3">
            <span className="text-[#ff2b2b]">▪</span>
            <span>Material must be extreme, uncompromising, and authentic</span>
          </li>
          <li className="text-sm flex gap-3">
            <span className="text-[#ff2b2b]">▪</span>
            <span>No genre restrictions. Noise, hardcore, industrial, experimental accepted</span>
          </li>
          <li className="text-sm flex gap-3">
            <span className="text-[#ff2b2b]">▪</span>
            <span>Physical formats preferred. Cassette, vinyl, CDR</span>
          </li>
          <li className="text-sm flex gap-3">
            <span className="text-[#ff2b2b]">▪</span>
            <span>Must include artist statement and technical specifications</span>
          </li>
          <li className="text-sm flex gap-3">
            <span className="text-[#ff2b2b]">▪</span>
            <span>Previous releases or live documentation required</span>
          </li>
          <li className="text-sm flex gap-3">
            <span className="text-[#ff2b2b]">▪</span>
            <span>No social media promotion or mainstream visibility</span>
          </li>
        </ul>

        <WarningBox tag="[WARNING]">
          IF IT SOUNDS SAFE, IT'S REJECTED.
        </WarningBox>
      </Panel>

      <Panel>
        <h2 className="text-lg mb-4">SUBMISSION METHOD</h2>
        
        <div className="space-y-4 text-sm">
          <p>
            All submissions must be sent via encrypted channels. 
            Public submissions are not accepted.
          </p>

          <p className="text-[#8a8a8c]">
            Contact information available through [REDACTED] networks only.
            Clearance verification required.
          </p>

          <p>
            Response time: 4-8 weeks minimum. 
            No confirmation of receipt will be provided.
          </p>

          <p className="text-[#ff2b2b]">
            Unsolicited physical mail will be destroyed unopened.
          </p>
        </div>
      </Panel>
    </main>
  );
}
