import { Gavel, Users } from 'lucide-react'

export default function About() {
  return (
    <section id="about" className="bg-white border-t">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">About Adv. Sanjay Patil</h2>
            <p className="mt-4 text-slate-600 leading-relaxed">
              Based in Bhiwandi, District Thane (Maharashtra), Adv. Sanjay Patil has practiced for over two decades across
              criminal defense, civil disputes, property litigation, recovery matters, matrimonial and family law. He is known
              for a practical, detail-oriented approach and consistent courtroom preparation.
            </p>
            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              <div className="rounded-lg border p-4">
                <div className="flex items-center gap-2 text-slate-800 font-medium"><Gavel className="h-5 w-5 text-blue-600"/> Key Strengths</div>
                <ul className="mt-2 text-sm text-slate-600 list-disc list-inside space-y-1">
                  <li>Case strategy and drafting</li>
                  <li>Rigorous cross-examination</li>
                  <li>Negotiation and settlements</li>
                </ul>
              </div>
              <div className="rounded-lg border p-4">
                <div className="flex items-center gap-2 text-slate-800 font-medium"><Users className="h-5 w-5 text-blue-600"/> Client Focus</div>
                <ul className="mt-2 text-sm text-slate-600 list-disc list-inside space-y-1">
                  <li>Clear communication</li>
                  <li>Transparent fee structure</li>
                  <li>Timely updates and support</li>
                </ul>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-slate-900">Select Portfolio</h3>
            <p className="text-sm text-slate-500">Representative work (identities anonymized)</p>
            <div className="mt-4 space-y-4">
              <div className="rounded-lg border p-4">
                <p className="font-medium text-slate-800">Acquittal in a complex criminal trial</p>
                <p className="text-sm text-slate-600 mt-1">Secured acquittal after detailed investigation review and examination of witnesses; highlighted procedural lapses.</p>
              </div>
              <div className="rounded-lg border p-4">
                <p className="font-medium text-slate-800">Property dispute resolved through decree</p>
                <p className="text-sm text-slate-600 mt-1">Obtained civil court decree in a long-standing property possession and title matter.</p>
              </div>
              <div className="rounded-lg border p-4">
                <p className="font-medium text-slate-800">Mutual consent divorce with fair settlement</p>
                <p className="text-sm text-slate-600 mt-1">Guided parties to an amicable settlement protecting child welfare and long-term interests.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
