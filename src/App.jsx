import Hero from './components/Hero'
import About from './components/About'
import Appointment from './components/Appointment'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen text-slate-900 bg-white">
      <Hero />
      <About />
      <Appointment />
      <Contact />
    </div>
  )
}

export default App
