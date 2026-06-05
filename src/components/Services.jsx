import { services } from '../data/services.js'
import ServiceCard from './ServiceCard.jsx'

export default function Services() {
  return (
    <section id="servicios" className="bg-stone-50 py-14 sm:py-16">
      <div className="section-shell">
        <div className="grid gap-5 lg:grid-cols-[0.82fr_1.1fr] lg:items-end">
          <div>
            <p className="eyebrow">Soluciones</p>
            <h2 className="section-title mt-3">Áreas estratégicas de gestión social</h2>
          </div>
          <p className="text-sm leading-6 text-slate-600 lg:max-w-xl">
            Ordenamos servicios como capacidades consultivas: diagnóstico, estrategia, implementación, formación y
            evaluación para distintos tipos de clientes.
          </p>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </div>
    </section>
  )
}
