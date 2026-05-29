import { services } from '../data/services.js'
import ServiceCard from './ServiceCard.jsx'

export default function Services() {
  return (
    <section id="servicios" className="bg-white py-12 sm:py-14">
      <div className="section-shell">
        <div className="max-w-xl">
          <p className="eyebrow">Atenciones</p>
          <h2 className="section-title mt-3">Qué puedes agendar</h2>
        </div>

        <div className="mt-7 grid gap-3 md:grid-cols-2 xl:grid-cols-5">
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </div>
    </section>
  )
}
