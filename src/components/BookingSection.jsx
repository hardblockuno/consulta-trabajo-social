import { CalendarDays, Clock, MessageCircle, Monitor, ShieldCheck } from 'lucide-react'
import { professionals } from '../data/professionals.js'

const whatsappBase = 'https://wa.me/56900000000'
const bookingServices = ['RSH', 'Beneficios', 'Vivienda', 'Informe social']

function buildWhatsappUrl(message) {
  return `${whatsappBase}?text=${encodeURIComponent(message)}`
}

export default function BookingSection() {
  return (
    <section id="reserva" className="bg-slate-50 py-12 sm:py-14">
      <div className="section-shell">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow">Reservar hora</p>
            <h2 className="section-title mt-3">Elige profesional y horario</h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {bookingServices.map((service) => (
              <span
                key={service}
                className="rounded-md border border-slate-200 bg-white px-3 py-2 text-sm font-bold text-slate-700"
              >
                {service}
              </span>
            ))}
          </div>
        </div>

        <div id="profesionales" className="mt-8 grid gap-4 lg:grid-cols-2">
          {professionals.map((professional) => (
            <article key={professional.id} className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="grid h-14 w-14 flex-none place-items-center rounded-md bg-brand-700 text-base font-black text-white">
                  {professional.initials}
                </div>
                <div className="min-w-0">
                  <h3 className="text-xl font-black leading-tight text-slate-950">{professional.name}</h3>
                  <p className="mt-1 text-sm font-bold text-brand-700">{professional.role}</p>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{professional.focus}</p>
                </div>
              </div>

              <div className="mt-5 grid gap-3 text-sm font-bold text-slate-700 sm:grid-cols-3">
                <span className="inline-flex items-center gap-2 rounded-md bg-slate-50 px-3 py-2">
                  <Monitor className="h-4 w-4 text-brand-700" aria-hidden="true" />
                  {professional.modality}
                </span>
                <span className="inline-flex items-center gap-2 rounded-md bg-slate-50 px-3 py-2">
                  <Clock className="h-4 w-4 text-brand-700" aria-hidden="true" />
                  {professional.duration}
                </span>
                <span className="inline-flex items-center gap-2 rounded-md bg-slate-50 px-3 py-2">
                  <ShieldCheck className="h-4 w-4 text-trust-500" aria-hidden="true" />
                  Datos mínimos
                </span>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {professional.tags.map((tag) => (
                  <span key={tag} className="rounded-md border border-slate-200 px-3 py-2 text-xs font-bold text-slate-700">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-6 border-t border-slate-200 pt-5">
                <p className="inline-flex items-center gap-2 text-sm font-black text-slate-950">
                  <CalendarDays className="h-4 w-4 text-brand-700" aria-hidden="true" />
                  Próximas horas
                </p>
                <div className="mt-3 grid grid-cols-3 gap-2">
                  {professional.nextSlots.map((slot) => (
                    <a
                      key={slot}
                      href={buildWhatsappUrl(`${professional.whatsappText} Horario sugerido: ${slot}`)}
                      target="_blank"
                      rel="noreferrer"
                      className="focus-ring rounded-md border border-slate-200 bg-slate-50 px-2 py-3 text-center text-sm font-black text-slate-800 transition hover:border-brand-500 hover:bg-brand-50"
                    >
                      {slot}
                    </a>
                  ))}
                </div>
              </div>

              <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-lg font-black text-brand-700">{professional.price}</p>
                <a
                  href={buildWhatsappUrl(professional.whatsappText)}
                  target="_blank"
                  rel="noreferrer"
                  className="focus-ring inline-flex items-center justify-center gap-2 rounded-md bg-brand-700 px-4 py-3 text-sm font-bold text-white transition hover:bg-brand-900"
                >
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  Solicitar hora
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
