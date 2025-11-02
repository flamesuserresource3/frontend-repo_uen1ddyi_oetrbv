import { Gavel, Users, Clock, Calendar } from 'lucide-react'

export default function Hero() {
  const handleScroll = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-slate-50 to-emerald-50" />
      <div className="relative">
        <nav className="sticky top-0 z-20 backdrop-blur bg-white/70 border-b border-slate-200">
          <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Gavel className="h-6 w-6 text-blue-600" />
              <span className="font-semibold tracking-tight">Adv. Sanjay Patil</span>
            </div>
            <div className="hidden md:flex items-center gap-6 text-sm text-slate-700">
              <button onClick={() => handleScroll('about')} className="hover:text-blue-700">About</button>
              <button onClick={() => handleScroll('appointment')} className="hover:text-blue-700">Schedule</button>
              <button onClick={() => handleScroll('contact')} className="hover:text-blue-700">Contact</button>
            </div>
            <button onClick={() => handleScroll('appointment')} className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-md shadow hover:bg-blue-700">
              <Calendar className="h-4 w-4" /> Book Meeting
            </button>
          </div>
        </nav>

        <div className="max-w-6xl mx-auto px-4 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs text-blue-800">Serving Bhiwandi, Thane District</div>
              <h1 className="mt-4 text-4xl md:text-5xl font-extrabold tracking-tight leading-tight text-slate-900">
                Criminal, Civil & Family Law Advocate
              </h1>
              <p className="mt-4 text-slate-600 text-lg">
                Adv. Sanjay Patil brings over 20 years of courtroom experience, practical counsel, and dedicated representation to individuals and businesses across Bhiwandi and Thane.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <button onClick={() => handleScroll('appointment')} className="bg-blue-600 text-white px-5 py-3 rounded-md shadow hover:bg-blue-700">Schedule a Consultation</button>
                <button onClick={() => handleScroll('about')} className="px-5 py-3 rounded-md border border-slate-300 text-slate-700 hover:bg-slate-50">Learn more</button>
              </div>
              <div className="mt-8 grid grid-cols-3 gap-4">
                <div className="rounded-lg border bg-white p-4">
                  <div className="flex items-center gap-2 text-slate-700"><Clock className="h-5 w-5 text-blue-600" /><span className="font-medium">20+ Years</span></div>
                  <p className="text-xs text-slate-500 mt-1">of practice</p>
                </div>
                <div className="rounded-lg border bg-white p-4">
                  <div className="flex items-center gap-2 text-slate-700"><Users className="h-5 w-5 text-blue-600" /><span className="font-medium">Client-first</span></div>
                  <p className="text-xs text-slate-500 mt-1">transparent approach</p>
                </div>
                <div className="rounded-lg border bg-white p-4">
                  <div className="flex items-center gap-2 text-slate-700"><Gavel className="h-5 w-5 text-blue-600" /><span className="font-medium">Courtroom</span></div>
                  <p className="text-xs text-slate-500 mt-1">trial-tested advocacy</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-blue-600 to-emerald-500 opacity-10 absolute inset-0 blur-3xl" />
              <div className="relative rounded-2xl border bg-white shadow-xl p-6">
                <div className="rounded-xl bg-slate-50 border p-6">
                  <p className="text-slate-600 leading-relaxed">
                    “Justice is not an abstract ideal — it is the outcome of preparation, precision, and perseverance. My commitment is to stand with you, every step of the way.”
                  </p>
                  <div className="mt-4">
                    <p className="font-semibold text-slate-900">Adv. Sanjay Patil</p>
                    <p className="text-sm text-slate-500">Bhiwandi, Thane District</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div className="rounded-lg border p-4">
                    <p className="text-xs text-slate-500">Practice</p>
                    <p className="font-medium text-slate-800">Criminal Law</p>
                  </div>
                  <div className="rounded-lg border p-4">
                    <p className="text-xs text-slate-500">Practice</p>
                    <p className="font-medium text-slate-800">Civil Litigation</p>
                  </div>
                  <div className="rounded-lg border p-4">
                    <p className="text-xs text-slate-500">Practice</p>
                    <p className="font-medium text-slate-800">Family Matters</p>
                  </div>
                  <div className="rounded-lg border p-4">
                    <p className="text-xs text-slate-500">Availability</p>
                    <p className="font-medium text-slate-800">Mon–Sat</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
