import { MapPin, Phone, Mail, Clock } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="bg-white border-t">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">Contact & Location</h2>
            <p className="mt-3 text-slate-600">Reach out for consultations, case updates, or document reviews.</p>

            <div className="mt-6 space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-blue-600 mt-1" />
                <p className="text-slate-700">
                  Office: Near Bhiwandi Court, Bhiwandi, Dist. Thane, Maharashtra 421302, India
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-blue-600" />
                <a className="text-blue-700 hover:underline" href="tel:+919900000000">+91 99000 00000</a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-blue-600" />
                <a className="text-blue-700 hover:underline" href="mailto:contact@sanjaypatillaw.in">contact@sanjaypatillaw.in</a>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-blue-600" />
                <p className="text-slate-700">Mon–Sat: 10:00 AM – 7:00 PM</p>
              </div>
            </div>
          </div>

          <div className="w-full overflow-hidden rounded-xl border">
            <iframe
              title="Office Location"
              src="https://www.google.com/maps?q=Bhiwandi,+Thane,+Maharashtra,+India&output=embed"
              width="100%"
              height="380"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
      <footer className="border-t bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 py-6 text-sm text-slate-600 flex flex-col md:flex-row items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} Adv. Sanjay Patil. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#home" className="hover:text-blue-700">Home</a>
            <a href="#about" className="hover:text-blue-700">About</a>
            <a href="#appointment" className="hover:text-blue-700">Schedule</a>
          </div>
        </div>
      </footer>
    </section>
  )
}
