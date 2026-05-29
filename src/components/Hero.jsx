import { ArrowRight, CalendarCheck, Clock, MapPin, Search, ShieldCheck, Video } from 'lucide-react'
import heroImage from '../assets/hero-agenda-social.png'

export default function Hero() {
  return (
    <section id="inicio" className="relative isolate overflow-hidden pt-20">
      <div className="absolute inset-0 -z-10">
        <img src={heroImage} alt="" className="h-full w-full object-cover object-center" loading="eager" />
        <div className="absolute inset-0 bg-brand-900/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-900/95 via-brand-900/75 to-brand-900/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-900/60 via-transparent to-white/5" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-50 to-transparent" />
      </div>

      <div className="section-shell grid min-h-[68svh] items-center gap-8 py-8 sm:py-12 lg:grid-cols-[1fr_0.78fr]">
        <div className="max-w-3xl text-white">
          <p className="mb-5 inline-flex items-center gap-2 rounded-md border border-white/25 bg-white/10 px-3 py-2 text-sm font-semibold backdrop-blur">
            <CalendarCheck className="h-4 w-4" aria-hidden="true" />
            Plataforma piloto de agenda social
          </p>
          <h1 className="max-w-sm text-[2.05rem] font-black leading-[1.08] drop-shadow-sm sm:max-w-4xl sm:text-5xl lg:text-6xl">
            Agenda atención social con profesionales del área
          </h1>
          <p className="mt-6 max-w-sm text-base leading-7 text-slate-50 drop-shadow-sm sm:max-w-xl sm:text-xl sm:leading-8">
            Encuentra orientación, revisa disponibilidad y coordina una primera atención sin entregar RUT, ClaveÚnica ni
            documentos sensibles en el primer paso.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#profesionales"
              className="focus-ring inline-flex w-full items-center justify-center gap-2 rounded-md bg-trust-500 px-5 py-4 text-base font-bold text-white shadow-soft transition hover:bg-trust-700 sm:w-auto"
            >
              Ver profesionales
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </a>
            <a
              href="#como-funciona"
              className="focus-ring inline-flex w-full items-center justify-center rounded-md border border-white/40 bg-white/10 px-5 py-4 text-base font-bold text-white backdrop-blur transition hover:bg-white/20 sm:w-auto"
            >
              Cómo funciona
            </a>
          </div>

          <dl className="mt-8 grid max-w-xl grid-cols-3 gap-3 text-sm font-bold text-white">
            <div className="rounded-md border border-white/20 bg-white/10 p-3 backdrop-blur">
              <dt className="flex items-center gap-2 text-slate-100">
                <Video className="h-4 w-4" aria-hidden="true" />
                Modalidad
              </dt>
              <dd className="mt-1">Online</dd>
            </div>
            <div className="rounded-md border border-white/20 bg-white/10 p-3 backdrop-blur">
              <dt className="flex items-center gap-2 text-slate-100">
                <ShieldCheck className="h-4 w-4" aria-hidden="true" />
                Acceso
              </dt>
              <dd className="mt-1">Sin ClaveÚnica</dd>
            </div>
            <div className="rounded-md border border-white/20 bg-white/10 p-3 backdrop-blur">
              <dt className="flex items-center gap-2 text-slate-100">
                <Clock className="h-4 w-4" aria-hidden="true" />
                Cupos
              </dt>
              <dd className="mt-1">Piloto</dd>
            </div>
          </dl>
        </div>

        <div className="rounded-lg border border-white/25 bg-white p-5 shadow-soft">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-sm font-bold text-brand-700">Buscar atención</p>
              <h2 className="mt-1 text-2xl font-black text-slate-950">Agenda rápida</h2>
            </div>
            <Search className="h-6 w-6 text-brand-700" aria-hidden="true" />
          </div>

          <div className="mt-5 grid gap-4">
            <label className="grid gap-2 text-sm font-bold text-slate-800">
              Especialidad
              <select className="focus-ring h-12 rounded-md border border-slate-200 bg-slate-50 px-3 text-sm font-semibold text-slate-700">
                <option>Registro Social de Hogares</option>
                <option>Beneficios sociales</option>
                <option>Vivienda y comités</option>
                <option>Informes sociales</option>
              </select>
            </label>

            <div className="grid gap-4 sm:grid-cols-2">
              <label className="grid gap-2 text-sm font-bold text-slate-800">
                Modalidad
                <select className="focus-ring h-12 rounded-md border border-slate-200 bg-slate-50 px-3 text-sm font-semibold text-slate-700">
                  <option>Online</option>
                  <option>Presencial</option>
                  <option>Mixta</option>
                </select>
              </label>
              <label className="grid gap-2 text-sm font-bold text-slate-800">
                Comuna
                <span className="flex h-12 items-center gap-2 rounded-md border border-slate-200 bg-slate-50 px-3 text-sm font-semibold text-slate-700">
                  <MapPin className="h-4 w-4 text-brand-700" aria-hidden="true" />
                  Chile
                </span>
              </label>
            </div>

            <div>
              <p className="text-sm font-bold text-slate-800">Próximos cupos</p>
              <div className="mt-2 grid grid-cols-3 gap-2">
                {['Hoy', 'Mañana', 'Semana'].map((slot) => (
                  <button
                    key={slot}
                    type="button"
                    className="focus-ring rounded-md border border-slate-200 bg-slate-50 px-3 py-3 text-sm font-black text-slate-800 transition hover:border-brand-500 hover:bg-brand-50"
                  >
                    {slot}
                  </button>
                ))}
              </div>
            </div>

            <a
              href="#contacto"
              className="focus-ring inline-flex items-center justify-center gap-2 rounded-md bg-brand-700 px-5 py-4 text-base font-bold text-white transition hover:bg-brand-900"
            >
              Ver agenda disponible
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </a>
            <p className="rounded-md bg-civic-50 px-3 py-3 text-xs font-bold leading-5 text-slate-800">
              MVP piloto: la reserva real se coordina por WhatsApp mientras se implementa el motor de agenda.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
