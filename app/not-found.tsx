import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-paper text-ink flex flex-col justify-between pt-24 pb-20 px-6 md:px-12 selection:bg-black selection:text-paper">
      {/* Top Monograph Status */}
      <div className="border-b border-ink/15 pb-6 font-mono text-xs flex justify-between items-baseline text-ink-muted">
        <div>
          <span className="text-signal-red font-bold animate-pulse">FAULT // 404</span>
          <span className="text-ink-faint"> · UNRESOLVED TRAJECTORY</span>
        </div>
        <div>
          <span>STATE: DENIED</span>
        </div>
      </div>

      {/* Main Monumental 404 Statement */}
      <div className="my-auto py-12 max-w-4xl space-y-6">
        <span className="display-monumental text-ink block leading-none select-none tracking-tighter">
          404.
        </span>
        <h1 className="text-2xl sm:text-3xl font-bold uppercase text-ink tracking-tight">
          THE COORDINATE DOES NOT EXIST IN THIS SYSTEM.
        </h1>
        <p className="font-sans text-sm sm:text-base text-ink-muted max-w-lg leading-relaxed">
          The requested endpoint does not correspond to a valid physical invariant, repository route, or archival document.
        </p>

        <div className="pt-6">
          <Link
            href="/"
            className="px-6 py-3 bg-ink text-paper hover:bg-signal-red transition-colors font-mono text-xs font-bold uppercase tracking-wider inline-block"
          >
            ← RE-ENTER VALID TRAJECTORY
          </Link>
        </div>
      </div>

      {/* Bottom Status */}
      <div className="border-t border-ink/15 pt-6 font-mono text-xs text-ink-faint flex justify-between items-center">
        <span>CHRISTOPHER JOSHY // SYSTEM RECOVERY ENGINE</span>
        <Link href="/archive" className="hover:text-ink underline">
          BROWSE COMPLETE ARCHIVE
        </Link>
      </div>
    </div>
  );
}
