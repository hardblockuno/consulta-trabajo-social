import { services } from '../data/services.js'
import ServiceCard from './ServiceCard.jsx'

const serviceModes = ['Personas', 'Comunidades', 'Instituciones', 'Empresas']

export default function Services() {
  return (
    <section id="servicios" className="bg-[#f7f9fb] py-14 sm:py-16">
      <div className="section-shell">
        <div className="grid gap-5 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="eyebrow">Servicios</p>
            <h2 className="section-title mt-3">Líneas de gestión social integral</h2>
          </div>
          <div>
            <p className="text-sm leading-6 text-slate-600 lg:max-w-2xl">
              Ordenamos la oferta en módulos claros: atención directa, diagnóstico, estrategia, participación,
              formación e impacto. Cada servicio mantiene alcance profesional y límites éticos visibles.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {serviceModes.map((mode) => (
                <span key={mode} className="rounded-md bg-white px-3 py-2 text-xs font-black uppercase tracking-[0.14em] text-brand-900 ring-1 ring-civic-100">
                  {mode}
                </span>
              ))}
            </div>
          </div>
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
