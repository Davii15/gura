import { ArrowUpRight, ClipboardList, Sprout } from 'lucide-react'

const REGISTRATION_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSf_i2PArXcn6w8Z4vgOFs2oQlR9e0Qof5ebPDLTKBwbo9S7Bg/viewform?pli=1&authuser=0'

export function FarmkodiRegistration() {
  return (
    <section aria-labelledby="farmkodi-register-title" className="bg-white px-5 py-20 sm:px-8">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-[#173b2b] text-white">
        <div className="grid gap-8 p-8 sm:p-12 lg:grid-cols-[1fr_auto] lg:items-center lg:p-16">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-semibold tracking-wide text-[#e4c27c]">
              <Sprout aria-hidden="true" className="size-4" /> JOIN THE FARMKODI COMMUNITY
            </span>
            <h2 id="farmkodi-register-title" className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
              Ready to get started?
            </h2>
            <p className="mt-4 max-w-xl text-base leading-7 text-white/75">
              Register through our form to join Farmkodi. It only takes a few minutes to share your details and get connected. NB:Registration Fee is 500 Non-refundable! Piga Simu hii kwa maelezo zaidi +254 798639180
            </p>
          </div>
          <a
            href={REGISTRATION_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-14 items-center justify-center gap-3 self-start rounded-xl bg-[#e4c27c] px-6 py-3 text-base font-semibold text-[#173b2b] shadow-lg transition hover:bg-[#edd39a] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/50 lg:self-center"
          >
            <ClipboardList aria-hidden="true" className="size-5" />
            Register with Farmkodi
            <ArrowUpRight aria-hidden="true" className="size-4" />
          </a>
        </div>
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 border-t border-white/10 bg-black/10 px-8 py-4 text-xs text-white/60 sm:px-12 lg:px-16">
          <span>Opens Google Forms in a new tab</span>
          <span aria-hidden="true">·</span>
          <span>Complete and submit the form to finish registration</span>
        </div>
      </div>
    </section>
  )
}
