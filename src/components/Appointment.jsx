import { useMemo, useState } from 'react'
import { Calendar, Clock } from 'lucide-react'

export default function Appointment() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('10:00')
  const [message, setMessage] = useState('')

  const timeSlots = ['10:00', '11:30', '14:30', '16:00', '18:00']

  const mailtoHref = useMemo(() => {
    const to = 'contact@sanjaypatillaw.in'
    const subject = encodeURIComponent(`Consultation Request: ${name || 'New Client'} (${date || 'Preferred date'})`)
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nPreferred Date: ${date}\nPreferred Time: ${time}\n\nMatter: ${message}`
    )
    return `mailto:${to}?subject=${subject}&body=${body}`
  }, [name, email, phone, date, time, message])

  return (
    <section id="appointment" className="bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">Schedule a Meeting</h2>
            <p className="mt-3 text-slate-600">Share a few details and your preferred slot. You will receive a confirmation shortly.</p>

            <form className="mt-6 space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700">Full Name</label>
                  <input value={name} onChange={(e) => setName(e.target.value)} type="text" className="mt-1 w-full rounded-md border-slate-300 focus:border-blue-500 focus:ring-blue-500" placeholder="Your name" required />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700">Phone</label>
                  <input value={phone} onChange={(e) => setPhone(e.target.value)} type="tel" className="mt-1 w-full rounded-md border-slate-300 focus:border-blue-500 focus:ring-blue-500" placeholder="e.g. +91 98xxxxxxx" required />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700">Email</label>
                  <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="mt-1 w-full rounded-md border-slate-300 focus:border-blue-500 focus:ring-blue-500" placeholder="you@example.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 flex items-center gap-2"><Calendar className="h-4 w-4 text-blue-600"/>Preferred Date</label>
                  <input value={date} onChange={(e) => setDate(e.target.value)} type="date" className="mt-1 w-full rounded-md border-slate-300 focus:border-blue-500 focus:ring-blue-500" required />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 flex items-center gap-2"><Clock className="h-4 w-4 text-blue-600"/>Preferred Time</label>
                  <select value={time} onChange={(e) => setTime(e.target.value)} className="mt-1 w-full rounded-md border-slate-300 focus:border-blue-500 focus:ring-blue-500">
                    {timeSlots.map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700">Matter Category</label>
                  <select className="mt-1 w-full rounded-md border-slate-300 focus:border-blue-500 focus:ring-blue-500">
                    <option>Criminal</option>
                    <option>Civil</option>
                    <option>Family / Matrimonial</option>
                    <option>Property</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Brief of Matter</label>
                <textarea value={message} onChange={(e) => setMessage(e.target.value)} rows={4} className="mt-1 w-full rounded-md border-slate-300 focus:border-blue-500 focus:ring-blue-500" placeholder="Share a short summary (avoid sharing sensitive information online)"></textarea>
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                <a href={mailtoHref} className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-5 py-3 rounded-md shadow hover:bg-blue-700">
                  <Calendar className="h-4 w-4"/> Request via Email
                </a>
                <a href="#contact" className="px-5 py-3 rounded-md border border-slate-300 text-slate-700 hover:bg-white">Call Office Instead</a>
              </div>
            </form>

            <p className="text-xs text-slate-500 mt-4">By requesting a meeting you agree that this does not create an attorney–client relationship until formally confirmed.</p>
          </div>

          <div className="rounded-2xl border bg-white p-6">
            <h3 className="text-lg font-semibold text-slate-900">Prefer instant booking?</h3>
            <p className="text-sm text-slate-600 mt-1">If you use an online scheduler (e.g., Calendly), it can be embedded here. Share your link to enable direct bookings.</p>
            <div className="mt-4 aspect-video rounded-lg bg-slate-100 grid place-items-center text-slate-500 text-sm">
              Scheduler embed placeholder
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
