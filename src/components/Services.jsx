import { services } from '../data/services.js'
import ServiceCard from './ServiceCard.jsx'

export default function Services() {
  return (
    <section id="servicios" className="bg-slate-50 py-14 sm:py-16">
      <div className="section-shell">
        <div className="max-w-2xl">
          <p className="eyebrow">Atenciones</p>
          <h2 className="section-title mt-3">Categorías simples para encontrar ayuda más rápido</h2>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </div>
    </section>
  )
}
