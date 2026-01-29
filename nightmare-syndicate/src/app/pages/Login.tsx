import { useState } from 'react';
import { Panel } from '@/app/components/Panel';

export function Login() {
  const [status, setStatus] = useState<'idle' | 'success'>('idle');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus('success');
  };

  return (
    <main className="max-w-4xl mx-auto px-4 pt-0 pb-12">
      <div className="mb-8">
        <h1 className="text-3xl mb-2">SECURE ACCESS</h1>
        <p className="text-sm text-white">
          AUTHORIZED PERSONNEL ONLY – ENTER YOUR CREDENTIALS
        </p>
      </div>

      <Panel>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-xs text-[#7fd1ae] uppercase tracking-[0.3em]">
              email
            </label>
            <input
              id="email"
              type="email"
              required
              className="bg-transparent border border-[#7fd1ae]/40 px-3 py-2 text-white placeholder:text-[#7fd1ae]/40 focus:outline-none focus:border-[#7fd1ae]"
              placeholder="agent@nightmaresyndicaterecords.com"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="password"
              className="text-xs text-[#7fd1ae] uppercase tracking-[0.3em]"
            >
              access key
            </label>
            <input
              id="password"
              type="password"
              required
              className="bg-transparent border border-[#7fd1ae]/40 px-3 py-2 text-white placeholder:text-[#7fd1ae]/40 focus:outline-none focus:border-[#7fd1ae]"
              placeholder="************"
            />
          </div>
          <button
            type="submit"
            className="w-full border border-[#896000] px-4 py-3 text-sm uppercase tracking-[0.3em] hover:bg-[#896000] hover:text-[#7fd1ae] transition-colors"
          >
            authorize login
          </button>
        </form>
        {status === 'success' && (
          <p className="text-xs text-[#7fd1ae] mt-4">
            Request received. Manual clearance required – standby for confirmation.
          </p>
        )}
      </Panel>
    </main>
  );
}
