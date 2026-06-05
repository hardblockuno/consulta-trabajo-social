import { ArrowRight, CalendarDays, CheckCircle2, Clock, Search, ShieldCheck, SlidersHorizontal } from 'lucide-react'
import { BrandMark } from './BrandIdentity.jsx'

const searchFields = [
  { label: 'Necesidad', value: 'RSH, informe social, familia' },
  { label: 'Modalidad', value: 'Online o derivación territorial' },
  { label: 'Agenda', value: 'Horas disponibles esta semana' },
]

const nextSlots = [
  { name: 'Lucas Villar', specialty: 'RSH / Informes sociales', time: 'Lun 18:30' },
  { name: 'Kassandra Cifuentes', specialty: 'Vivienda / Familia', time: 'Mar 19:00' },
]

const principles = ['Estrategia', 'Territorio', 'Diálogo', 'Conexión', 'Impacto']

export default function Hero() {
  return (
    <section id="inicio" className="relative isolate overflow-hidden border-b border-civic-100 bg-white pt-20">
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(120deg,#ffffff_0%,#f7fbfc_46%,#edf6f7_100%)]" />
      <div className="absolute left-1/2 top-20 -z-10 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full border border-brand-100 opacity-60" />

      <div className="section-shell grid min-h-[calc(100svh-5rem)] gap-10 py-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:py-12">
        <div className="max-w-2xl">
          <p className="eyebrow">GSI Consultores / Gestión Social Integral</p>
          <h1 className="mt-5 max-w-3xl text-4xl font-black leading-[1.03] text-brand-900 sm:text-5xl lg:text-6xl">
            Agenda social profesional, simple y conectada al territorio.
          </h1>
          <p className="mt-5 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
            Plataforma piloto para reservar orientación con profesionales del área social y ordenar servicios de gestión
            social para personas, comunidades e instituciones.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#reserva"
              className="focus-ring inline-flex w-full items-center justify-center gap-2 rounded-md bg-brand-900 px-5 py-4 text-base font-bold text-white shadow-soft transition hover:bg-brand-700 sm:w-auto"
            >
              Buscar hora
              <Search className="h-5 w-5" aria-hidden="true" />
            </a>
            <a
              href="#servicios"
              className="focus-ring inline-flex w-full items-center justify-center gap-2 rounded-md border border-civic-100 bg-white px-5 py-4 text-base font-bold text-brand-900 transition hover:border-brand-100 hover:bg-brand-50 sm:w-auto"
            >
              Ver servicios
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </a>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-2 text-xs font-black uppercase tracking-[0.14em] text-brand-900 sm:flex sm:flex-wrap">
            {principles.map((principle) => (
              <span key={principle} className="rounded-md border border-civic-100 bg-white px-3 py-2">
                {principle}
              </span>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute -right-8 -top-8 hidden h-40 w-40 rounded-full border border-brand-100 lg:block" />
          <div className="grid gap-4 rounded-lg border border-civic-100 bg-white p-4 shadow-soft sm:p-5">
            <div className="flex items-start justify-between gap-4 border-b border-civic-100 pb-4">
              <div>
                <p className="text-sm font-black text-brand-500">Buscar atención</p>
                <h2 className="mt-1 text-2xl font-black text-brand-900">Agenda disponible</h2>
              </div>
              <BrandMark className="h-16 w-16 shrink-0" />
            </div>

            <div className="grid gap-3 lg:grid-cols-[1fr_1fr_1fr_auto]">
              {searchFields.map((field) => (
                <div key={field.label} className="rounded-md border border-civic-100 bg-[#f7f9fb] p-3">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-slate-500">{field.label}</p>
                  <p className="mt-2 text-sm font-black leading-5 text-brand-900">{field.value}</p>
                </div>
              ))}
              <a
                href="#reserva"
                className="focus-ring inline-flex items-center justify-center rounded-md bg-brand-500 px-4 py-3 text-sm font-black text-white transition hover:bg-brand-700"
                aria-label="Filtrar agenda"
              >
                <SlidersHorizontal className="h-5 w-5" aria-hidden="true" />
              </a>
            </div>

            <div className="grid gap-3">
              {nextSlots.map((slot) => (
                <a
                  key={`${slot.name}-${slot.time}`}
                  href="#reserva"
                  className="focus-ring grid gap-3 rounded-md border border-civic-100 p-4 transition hover:border-brand-100 hover:bg-brand-50 sm:grid-cols-[1fr_auto] sm:items-center"
                >
                  <span>
                    <span className="block text-base font-black text-brand-900">{slot.name}</span>
                    <span className="mt-1 block text-sm font-semibold text-slate-600">{slot.specialty}</span>
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-md bg-brand-900 px-3 py-2 text-sm font-black text-white">
                    <Clock className="h-4 w-4" aria-hidden="true" />
                    {slot.time}
                  </span>
                </a>
              ))}
            </div>

            <div className="grid gap-3 rounded-md bg-brand-900 p-4 text-white sm:grid-cols-[1fr_auto] sm:items-center">
              <p className="inline-flex items-start gap-2 text-sm font-semibold leading-6">
                <ShieldCheck className="mt-0.5 h-5 w-5 flex-none text-trust-500" aria-hidden="true" />
                Reserva inicial con datos mínimos. No se solicita ClaveÚnica ni se prometen resultados de beneficios.
              </p>
              <span className="inline-flex items-center gap-2 text-sm font-black">
                <CalendarDays className="h-5 w-5" aria-hidden="true" />
                45 min
              </span>
            </div>
          </div>

          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            {['Profesionales', 'Servicios', 'Instituciones'].map((item) => (
              <div key={item} className="flex items-center gap-2 rounded-md border border-civic-100 bg-white px-3 py-3 text-sm font-black text-brand-900">
                <CheckCircle2 className="h-4 w-4 text-brand-500" aria-hidden="true" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
