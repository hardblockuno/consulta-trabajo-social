import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import BookingSection from './components/BookingSection.jsx'
import Services from './components/Services.jsx'
import TrustAndEthics from './components/TrustAndEthics.jsx'
import ContactCTA from './components/ContactCTA.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Header />
      <main>
        <Hero />
        <BookingSection />
        <Services />
        <TrustAndEthics />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  )
}
