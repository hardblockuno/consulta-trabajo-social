import { ArrowRight, Map, ShieldCheck } from 'lucide-react'
import heroImage from '../assets/hero-consultoria-territorial.webp'

const heroCapabilities = [
  'Diagnóstico social-territorial',
  'Relacionamiento comunitario',
  'Participación y formación',
]

export default function Hero() {
  return (
    <section id="inicio" className="relative isolate overflow-hidden pt-20">
      <div className="absolute inset-0 -z-10">
        <img src={heroImage} alt="" className="h-full w-full object-cover object-center" loading="eager" />
        <div className="absolute inset-0 bg-brand-900/25" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-900/95 via-brand-900/72 to-brand-900/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-900/55 via-transparent to-stone-50/5" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-stone-50 to-transparent" />
      </div>

      <div className="section-shell grid min-h-[68svh] items-center gap-8 py-8 sm:py-12 lg:grid-cols-[1fr_0.78fr]">
        <div className="max-w-3xl text-white">
          <p className="mb-5 inline-flex items-center gap-2 rounded-md border border-white/25 bg-white/10 px-3 py-2 text-sm font-semibold backdrop-blur">
            <Map className="h-4 w-4" aria-hidden="true" />
            Consultoría social-territorial
          </p>
          <h1 className="max-w-sm text-[2.05rem] font-black leading-[1.08] drop-shadow-sm sm:max-w-4xl sm:text-5xl lg:text-6xl">
            Estrategia social, comunidad e impacto territorial
          </h1>
          <p className="mt-6 max-w-sm text-base leading-7 text-slate-50 drop-shadow-sm sm:max-w-lg sm:text-xl sm:leading-8">
            Diseñamos diagnósticos, procesos participativos y estrategias de gestión social para comunidades,
            instituciones, empresas y territorios.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#servicios"
              className="focus-ring inline-flex w-full items-center justify-center gap-2 rounded-md bg-trust-500 px-5 py-4 text-base font-bold text-white shadow-soft transition hover:bg-trust-700 sm:w-auto"
            >
              Ver soluciones
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </a>
            <a
              href="#reserva"
              className="focus-ring inline-flex w-full items-center justify-center rounded-md border border-white/40 bg-white/10 px-5 py-4 text-base font-bold text-white backdrop-blur transition hover:bg-white/20 sm:w-auto"
            >
              Agenda social
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-2 text-sm font-bold text-white">
            {['Personas', 'Comunidades', 'Instituciones', 'Empresas'].map((item) => (
              <span key={item} className="rounded-md border border-white/20 bg-white/10 px-3 py-2 backdrop-blur">
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="rounded-lg border border-white/20 bg-stone-50/95 p-5 shadow-soft backdrop-blur">
          <div>
            <p className="text-sm font-bold text-trust-700">Qué hacemos</p>
            <h2 className="mt-1 text-2xl font-black text-slate-950">Soluciones para gestionar procesos sociales</h2>
          </div>

          <div className="mt-5 grid gap-3">
            {heroCapabilities.map((capability) => (
              <a
                key={capability}
                href="#servicios"
                className="focus-ring flex items-center justify-between gap-4 rounded-md border border-stone-200 bg-white p-4 transition hover:border-brand-500 hover:bg-brand-50"
              >
                <span className="font-black text-slate-950">{capability}</span>
                <span className="shrink-0 text-brand-700">
                  <ArrowRight className="h-5 w-5" aria-hidden="true" />
                </span>
              </a>
            ))}

            <a
              href="#contacto"
              className="focus-ring inline-flex items-center justify-center gap-2 rounded-md bg-brand-900 px-5 py-4 text-base font-bold text-white transition hover:bg-brand-700"
            >
              Solicitar propuesta
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </a>
            <p className="inline-flex items-start gap-2 rounded-md bg-trust-50 px-3 py-3 text-xs font-bold leading-5 text-trust-700">
              <ShieldCheck className="mt-0.5 h-4 w-4 flex-none" aria-hidden="true" />
              La agenda social queda disponible para atención directa.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
