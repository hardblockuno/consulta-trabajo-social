import { ArrowRight, ClipboardCheck } from 'lucide-react'
import heroImage from '../assets/hero-consulta-social.png'

export default function Hero() {
  return (
    <section id="inicio" className="relative isolate overflow-hidden pt-20">
      <div className="absolute inset-0 -z-10">
        <img src={heroImage} alt="" className="h-full w-full object-cover" loading="eager" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-900/96 via-brand-900/88 to-brand-900/35" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/45 via-transparent to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-50 to-transparent" />
      </div>

      <div className="section-shell grid min-h-[58svh] items-center py-8 sm:py-12">
        <div className="max-w-3xl text-white">
          <p className="mb-5 inline-flex items-center gap-2 rounded-md border border-white/25 bg-white/12 px-3 py-2 text-sm font-semibold backdrop-blur">
            <ClipboardCheck className="h-4 w-4" aria-hidden="true" />
            Orientación social profesional en Chile
          </p>
          <h1 className="max-w-sm text-[2rem] font-black leading-[1.08] sm:max-w-4xl sm:text-5xl lg:text-6xl">
            Orientación profesional para trámites sociales en Chile
          </h1>
          <p className="mt-6 max-w-sm text-base leading-7 text-slate-50 drop-shadow-sm sm:max-w-xl sm:text-xl sm:leading-8">
            Te ayudamos a entender qué trámite necesitas, qué documentos preparar y cuál es la ruta correcta para
            avanzar, sin prometer resultados ni reemplazar a instituciones públicas.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#contacto"
              className="focus-ring inline-flex w-full items-center justify-center gap-2 rounded-md bg-trust-500 px-5 py-4 text-base font-bold text-white shadow-soft transition hover:bg-trust-700 sm:w-auto"
            >
              Solicitar diagnóstico inicial
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </a>
            <a
              href="#servicios"
              className="focus-ring inline-flex w-full items-center justify-center rounded-md border border-white/40 bg-white/12 px-5 py-4 text-base font-bold text-white backdrop-blur transition hover:bg-white/20 sm:w-auto"
            >
              Ver servicios
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
