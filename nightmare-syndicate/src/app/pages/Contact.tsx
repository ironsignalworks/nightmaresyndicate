import { Panel } from '@/app/components/Panel';
import { WarningBox } from '@/app/components/WarningBox';
import { RedactedText } from '@/app/components/RedactedText';

export function Contact() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <div className="mb-8">
        <h1 className="text-3xl mb-2">CONTACT</h1>
        <p className="text-sm text-[#7fd1ae]">
          COMMUNICATION CHANNELS
        </p>
      </div>

      <div className="space-y-6">
        <Panel>
          <h2 className="text-lg mb-4">GENERAL INQUIRIES</h2>
          
          <div className="space-y-3 text-sm">
            <div className="border-b border-[#7fd1ae]/30 pb-3">
              <span className="text-xs text-[#7fd1ae] block mb-1">EMAIL</span>
              <p className="font-mono">info@nightmaresyndicaterecords.com</p>
            </div>

            <div className="border-b border-[#7fd1ae]/30 pb-3">
              <span className="text-xs text-[#7fd1ae] block mb-1">PGP KEY</span>
              <p className="font-mono text-xs break-all">
                A4F9 B21C 8D3E 7F6A 9C2B 5E1D 4A8C 7F3B 2D9E 6A1F
              </p>
            </div>

            <div className="border-b border-[#7fd1ae]/30 pb-3">
              <span className="text-xs text-[#7fd1ae] block mb-1">RESPONSE TIME</span>
              <p>7-14 days. Non-urgent inquiries only.</p>
            </div>
          </div>
        </Panel>

        <Panel>
          <h2 className="text-lg mb-4">SUBMISSIONS</h2>
          
          <div className="space-y-3 text-sm">
            <div className="border-b border-[#7fd1ae]/30 pb-3">
              <span className="text-xs text-[#7fd1ae] block mb-1">EMAIL</span>
              <p className="font-mono">demos@nightmaresyndicaterecords.com</p>
            </div>

            <div className="border-b border-[#7fd1ae]/30 pb-3">
              <span className="text-xs text-[#7fd1ae] block mb-1">FORMAT</span>
              <p>Encrypted attachments only. Max 50MB.</p>
            </div>

            <p className="text-[#7fd1ae]">
              See SUBMIT page for full requirements.
            </p>
          </div>
        </Panel>

        <Panel>
          <h2 className="text-lg mb-4">DISTRO</h2>
          
          <div className="space-y-3 text-sm">
            <div className="border-b border-[#7fd1ae]/30 pb-3">
              <span className="text-xs text-[#7fd1ae] block mb-1">EMAIL</span>
              <p className="font-mono">distro@nightmaresyndicaterecords.com</p>
            </div>

            <div className="border-b border-[#7fd1ae]/30 pb-3">
              <span className="text-xs text-[#7fd1ae] block mb-1">TRADES</span>
              <p>Contact for trade proposals. Selective approval only.</p>
            </div>

            <div className="border-b border-[#7fd1ae]/30 pb-3">
              <span className="text-xs text-[#7fd1ae] block mb-1">WHOLESALE</span>
              <p>Not available. Direct sales only.</p>
            </div>
          </div>
        </Panel>

        <WarningBox tag="[SECURITY NOTICE]">
          DO NOT DISCLOSE LOCATIONS. DO NOT REQUEST PERSONAL MEETINGS. 
          ALL OPERATIONS ARE CONDUCTED REMOTELY. PHYSICAL ADDRESS IS <RedactedText />.
        </WarningBox>

        <Panel>
          <p className="text-xs text-[#7fd1ae] leading-relaxed">
            NIGHTMARE SYNDICATE operates independently with no affiliations. 
            We do not participate in social media, festivals, or public events. 
            All communication is conducted through encrypted channels. 
            Response is not guaranteed. Patience required.
          </p>
        </Panel>
      </div>
    </main>
  );
}
