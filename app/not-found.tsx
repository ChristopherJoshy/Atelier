import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-paper text-ink flex flex-col justify-between pt-24 pb-10 md:pb-12 selection:bg-black selection:text-paper">
      <div className="container-editorial section-pad flex-1 flex flex-col">
        {/* Top Monograph Status */}
        <div className="border-b border-line pb-6 font-mono text-[12px] flex flex-col sm:flex-row justify-between sm:items-baseline gap-2 text-ink-muted">
          <div>
            <span className="text-signal-red font-bold animate-pulse">FAULT // 404</span>
            <span className="text-ink-faint"> · UNRESOLVED TRAJECTORY</span>
          </div>
          <div>
            <span>STATE: DENIED</span>
          </div>
        </div>

        {/* Main Monumental 404 Statement */}
        <div className="my-auto py-10 md:py-12 max-w-4xl space-y-6">
          <span className="display-monumental text-ink block leading-none select-none tracking-tighter">404.</span>
          <h1 className="text-[24px] sm:text-3xl md:text-4xl font-bold uppercase text-ink tracking-tight leading-tight">
            THE COORDINATE DOES NOT EXIST IN THIS SYSTEM.
          </h1>
          <p className="font-sans text-[14px] sm:text-[15px] md:text-base text-ink-muted max-w-lg leading-[1.65]">
            The requested endpoint does not correspond to a valid physical invariant, repository route, or archival document.
          </p>

          <div className="pt-6">
            <Link
              href="/"
              className="px-6 py-3 bg-ink text-paper hover:bg-signal-red transition-colors font-mono text-[11px] font-bold uppercase tracking-[0.08em] inline-block"
            >
              ← RE-ENTER VALID TRAJECTORY
            </Link>
          </div>
        </div>

        {/* Bottom Status */}
        <div className="border-t border-line pt-6 font-mono text-[11px] tracking-wide text-ink-faint flex flex-col sm:flex-row justify-between gap-3">
          <span>CHRISTOPHER JOSHY // SYSTEM RECOVERY ENGINE</span>
          <Link href="/archive" className="hover:text-ink underline underline-offset-4">
            BROWSE COMPLETE ARCHIVE
          </Link>
        </div>
      </div>
    </div>
  );
}
