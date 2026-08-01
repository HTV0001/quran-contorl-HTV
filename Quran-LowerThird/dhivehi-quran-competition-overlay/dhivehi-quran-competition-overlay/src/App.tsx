export default function App() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 px-6 py-10 text-slate-100">
      <section className="max-w-3xl space-y-6 text-center">
        <p className="text-sm uppercase tracking-[0.2em] text-emerald-300">Quran Lower Third Package</p>
        <h1 className="text-4xl font-semibold tracking-tight text-white">Broadcast overlay files are ready.</h1>
        <p className="text-lg text-slate-300">
          Use <code className="rounded bg-slate-900 px-2 py-1 text-emerald-200">overlay.html</code> as your OBS Browser
          Source and open <code className="rounded bg-slate-900 px-2 py-1 text-emerald-200">control.html</code> for the
          operator panel.
        </p>
        <div className="rounded-2xl border border-white/15 bg-white/5 p-5 text-left text-sm leading-7 text-slate-200">
          <p>Expected project files:</p>
          <p>overlay.html</p>
          <p>control.html</p>
          <p>style.css</p>
          <p>script.js</p>
        </div>
      </section>
    </main>
  );
}
