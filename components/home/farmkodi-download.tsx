import { ArrowDownToLine, CheckCircle2, ShieldCheck, Smartphone } from 'lucide-react'

const INSTALL_STEPS = [
  {
    number: '01',
    title: 'Download the APK',
    description: 'Tap the download button and choose Download when your browser asks. The file will be saved to Downloads.',
  },
  {
    number: '02',
    title: 'Allow this source',
    description: 'Open the downloaded Farmkodi.apk file. If Android asks, allow your browser or Files app to install apps from this source, then return to the installer.',
  },
  {
    number: '03',
    title: 'Install Farmkodi',
    description: 'Review the installer prompt and tap Install. When it finishes, tap Open or find Farmkodi on your home screen.',
  },
]

export function FarmkodiDownload() {
  return (
    <section aria-labelledby="farmkodi-download-title" className="bg-[#f6f7f1] px-5 py-20 sm:px-8">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-900/10 bg-white px-3 py-1.5 text-xs font-semibold tracking-wide text-emerald-900">
            <Smartphone aria-hidden="true" className="size-4" /> FARMKODI FOR ANDROID
          </span>
          <h2 id="farmkodi-download-title" className="mt-5 max-w-xl text-4xl font-semibold tracking-tight text-[#173b2b] sm:text-5xl">
            Your farm, closer than ever.
          </h2>
          <p className="mt-5 max-w-lg text-base leading-7 text-[#536458]">
            Get the Farmkodi app on your Android phone and keep your farming marketplace within reach.
          </p>

          <a
            href="/FarmKodi.apk"
            download="FarmKodi.apk"
            className="mt-8 inline-flex min-h-14 items-center justify-center gap-3 rounded-xl bg-[#1e6845] px-6 py-3 text-base font-semibold text-white shadow-lg shadow-emerald-950/10 transition hover:bg-[#18573a] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-emerald-700/30"
          >
            <ArrowDownToLine aria-hidden="true" className="size-5" />
            Download Farmkodi APK
          </a>
          <p className="mt-3 text-sm text-[#68776d]">Android installation file · Place your app at <code className="rounded bg-white px-1.5 py-0.5 text-xs">public/Farmkodi.apk</code></p>

          <div className="mt-7 flex max-w-lg gap-3 rounded-xl border border-emerald-900/10 bg-white/80 p-4 text-sm leading-6 text-[#47584d]">
            <ShieldCheck aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-[#1e6845]" />
            <p><strong className="text-[#173b2b]">Keep your phone protected.</strong> Google Play Protect helps detect harmful apps. Only install this APK if you trust its source and have verified it is the official Farmkodi file. We do not recommend turning Play Protect off.</p>
          </div>
        </div>

        <div className="rounded-3xl border border-[#e4e8de] bg-white p-6 shadow-sm sm:p-8">
          <div className="mb-7">
            <p className="text-xs font-bold tracking-[0.18em] text-[#9a7136]">QUICK INSTALL GUIDE</p>
            <h3 className="mt-2 text-2xl font-semibold text-[#173b2b]">Up and running in 3 steps</h3>
          </div>
          <ol className="flex flex-col">
            {INSTALL_STEPS.map((step, index) => (
              <li key={step.number} className="relative flex gap-4 pb-7 last:pb-0">
                {index < INSTALL_STEPS.length - 1 && <span aria-hidden="true" className="absolute left-[19px] top-10 h-[calc(100%-2rem)] w-px bg-[#e5e9df]" />}
                <span className="relative z-10 flex size-10 shrink-0 items-center justify-center rounded-full bg-[#edf4ec] text-xs font-bold text-[#1e6845]">{step.number}</span>
                <div className="pt-1">
                  <h4 className="font-semibold text-[#203b2d]">{step.title}</h4>
                  <p className="mt-1 text-sm leading-6 text-[#68776d]">{step.description}</p>
                </div>
              </li>
            ))}
          </ol>
          <p className="mt-7 flex items-start gap-2 border-t border-[#edf0e9] pt-5 text-xs leading-5 text-[#68776d]">
            <CheckCircle2 aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-[#1e6845]" />
            Android menus vary by device. Use Settings search for “Install unknown apps” and allow only the app you used to open the APK. Turn that permission off again after installation if you no longer need it.
          </p>
        </div>
      </div>
    </section>
  )
}
