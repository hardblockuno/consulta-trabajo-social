import { services } from '../data/services.js'
import ServiceCard from './ServiceCard.jsx'

export default function Services() {
  return (
    <section id="servicios" className="bg-slate-50 py-20 sm:py-24">
      <div className="section-shell">
        <div className="max-w-3xl">
          <p className="eyebrow">Servicios</p>
          <h2 className="section-title mt-3">Rutas claras para trámites sociales, vivienda y gestión comunitaria</h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            Cada servicio está diseñado para orientar, ordenar antecedentes y explicar opciones de avance con lenguaje
            claro, resguardando límites profesionales y datos personales.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </div>
    </section>
  )
}
