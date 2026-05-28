import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import ProfessionalDirectory from './components/ProfessionalDirectory.jsx'
import Services from './components/Services.jsx'
import ProcessSteps from './components/ProcessSteps.jsx'
import Pricing from './components/Pricing.jsx'
import TrustAndEthics from './components/TrustAndEthics.jsx'
import FAQ from './components/FAQ.jsx'
import ContactCTA from './components/ContactCTA.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Header />
      <main>
        <Hero />
        <ProfessionalDirectory />
        <Services />
        <ProcessSteps />
        <Pricing />
        <TrustAndEthics />
        <FAQ />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  )
}
