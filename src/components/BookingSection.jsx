import { CalendarDays, CheckCircle2, Clock, MessageCircle, Monitor, ShieldCheck } from 'lucide-react'
import { professionals } from '../data/professionals.js'

const whatsappBase = 'https://wa.me/56900000000'
const bookingServices = ['RSH', 'Informes sociales', 'Familia', 'Vivienda', 'Otros trámites']

function buildWhatsappUrl(message) {
  return `${whatsappBase}?text=${encodeURIComponent(message)}`
}

function buildRoleLine(professional) {
  return `${professional.role.toUpperCase()} / ${professional.specialties.join(' - ').toUpperCase()}`
}

export default function BookingSection() {
  return (
    <section id="reserva" className="bg-white py-14 sm:py-16">
      <div className="section-shell">
        <div className="grid gap-6 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
          <aside className="rounded-lg border border-civic-100 bg-[#f7f9fb] p-5 lg:sticky lg:top-24">
            <p className="eyebrow">Agenda</p>
            <h2 className="mt-3 text-3xl font-black leading-tight text-brand-900">Reserva por necesidad social</h2>
            <p className="mt-4 text-sm leading-6 text-slate-600">
              Elige un área, revisa profesionales disponibles y solicita una hora por WhatsApp. La reserva inicial usa
              datos mínimos y no reemplaza la atención de organismos públicos.
            </p>

            <div className="mt-5 grid gap-2">
              {bookingServices.map((service) => (
                <a
                  key={service}
                  href="#profesionales"
                  className="focus-ring flex items-center justify-between rounded-md border border-civic-100 bg-white px-3 py-3 text-sm font-black text-brand-900 transition hover:border-brand-100 hover:bg-brand-50"
                >
                  {service}
                  <CheckCircle2 className="h-4 w-4 text-brand-500" aria-hidden="true" />
                </a>
              ))}
            </div>

            <div className="mt-5 rounded-md bg-brand-900 p-4 text-white">
              <p className="inline-flex items-start gap-2 text-sm font-semibold leading-6">
                <ShieldCheck className="mt-0.5 h-5 w-5 flex-none text-trust-500" aria-hidden="true" />
                No se solicita ClaveÚnica ni se promete aprobación de beneficios, subsidios o prestaciones.
              </p>
            </div>
          </aside>

          <div id="profesionales">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="eyebrow">Profesionales</p>
                <h2 className="section-title mt-3">Disponibilidad publicada</h2>
              </div>
              <p className="max-w-md text-sm leading-6 text-slate-600">
                Perfiles simples, especialidad visible y horarios estandarizados para que la decisión sea rápida.
              </p>
            </div>

            <div className="mt-6 grid gap-4">
              {professionals.map((professional) => (
                <article key={professional.id} className="rounded-lg border border-civic-100 bg-white p-4 shadow-sm">
                  <div className="grid gap-5 md:grid-cols-[auto_1fr_auto] md:items-start">
                    {professional.photo ? (
                      <img
                        src={professional.photo}
                        alt={`Foto de ${professional.name}`}
                        className="h-32 w-28 rounded-md object-cover object-top"
                        loading="lazy"
                      />
                    ) : (
                      <div className="grid h-28 w-24 place-items-center rounded-md bg-brand-900 text-xl font-black text-white">
                        {professional.initials}
                      </div>
                    )}

                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="text-2xl font-black leading-tight text-brand-900">{professional.name}</h3>
                        <span className="rounded-md bg-trust-50 px-2 py-1 text-xs font-black uppercase tracking-[0.14em] text-brand-700">
                          Disponible
                        </span>
                      </div>
                      <p className="mt-2 text-xs font-black uppercase leading-5 tracking-[0.12em] text-brand-500">
                        {buildRoleLine(professional)}
                      </p>
                      <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600">{professional.summary}</p>

                      <div className="mt-4 flex flex-wrap gap-2">
                        {professional.specialties.map((specialty) => (
                          <span
                            key={specialty}
                            className="rounded-md border border-civic-100 bg-[#f7f9fb] px-3 py-2 text-xs font-bold text-slate-700"
                          >
                            {specialty}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="grid gap-3 md:min-w-40">
                      <div className="grid gap-2 text-sm font-bold text-slate-700">
                        <span className="inline-flex items-center gap-2 rounded-md bg-[#f7f9fb] px-3 py-2">
                          <Monitor className="h-4 w-4 text-brand-500" aria-hidden="true" />
                          {professional.modality}
                        </span>
                        <span className="inline-flex items-center gap-2 rounded-md bg-[#f7f9fb] px-3 py-2">
                          <Clock className="h-4 w-4 text-brand-500" aria-hidden="true" />
                          {professional.duration}
                        </span>
                      </div>
                      <p className="text-lg font-black text-brand-900">{professional.price}</p>
                    </div>
                  </div>

                  <div className="mt-5 border-t border-civic-100 pt-5">
                    <p className="inline-flex items-center gap-2 text-sm font-black text-brand-900">
                      <CalendarDays className="h-4 w-4 text-brand-500" aria-hidden="true" />
                      Próximas horas
                    </p>
                    <div className="mt-3 grid gap-2 sm:grid-cols-[1fr_1fr_1fr_auto]">
                      {professional.nextSlots.map((slot) => (
                        <a
                          key={slot}
                          href={buildWhatsappUrl(`${professional.whatsappText} Especialidad: ${buildRoleLine(professional)}. Horario sugerido: ${slot}`)}
                          target="_blank"
                          rel="noreferrer"
                          className="focus-ring rounded-md border border-civic-100 bg-[#f7f9fb] px-2 py-3 text-center text-sm font-black text-brand-900 transition hover:border-brand-100 hover:bg-brand-50"
                        >
                          {slot}
                        </a>
                      ))}
                      <a
                        href={buildWhatsappUrl(`${professional.whatsappText} Especialidad: ${buildRoleLine(professional)}.`)}
                        target="_blank"
                        rel="noreferrer"
                        className="focus-ring inline-flex items-center justify-center gap-2 rounded-md bg-brand-900 px-4 py-3 text-sm font-bold text-white transition hover:bg-brand-700"
                      >
                        <MessageCircle className="h-4 w-4" aria-hidden="true" />
                        Solicitar
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
