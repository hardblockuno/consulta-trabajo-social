import { ArrowRight, CalendarDays, ShieldCheck, Video } from 'lucide-react'
import { professionals } from '../data/professionals.js'

export default function ProfessionalDirectory() {
  return (
    <section id="profesionales" className="bg-white py-14 sm:py-16">
      <div className="section-shell">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="eyebrow">Perfiles profesionales</p>
            <h2 className="section-title mt-3">Agenda por especialidad, disponibilidad y alcance</h2>
          </div>
          <p className="max-w-md text-sm leading-6 text-slate-600">
            Primer diseño del marketplace: perfiles claros, cupos visibles y agendamiento sin pedir datos sensibles al
            inicio.
          </p>
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {professionals.map((profile) => (
            <article key={profile.title} className="rounded-lg border border-slate-200 bg-slate-50 p-5">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-bold text-brand-700">{profile.role}</p>
                  <h3 className="mt-2 text-xl font-black leading-tight text-slate-950">{profile.title}</h3>
                </div>
                <ShieldCheck className="h-6 w-6 flex-none text-trust-500" aria-hidden="true" />
              </div>

              <div className="mt-5 grid gap-3 text-sm font-semibold text-slate-700">
                <span className="inline-flex items-center gap-2">
                  <Video className="h-4 w-4 text-brand-700" aria-hidden="true" />
                  {profile.modality}
                </span>
                <span className="inline-flex items-center gap-2">
                  <CalendarDays className="h-4 w-4 text-brand-700" aria-hidden="true" />
                  {profile.availability}
                </span>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {profile.tags.map((tag) => (
                  <span key={tag} className="rounded-md bg-white px-3 py-2 text-xs font-bold text-slate-700">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex items-center justify-between gap-4 border-t border-slate-200 pt-5">
                <p className="text-lg font-black text-brand-700">{profile.price}</p>
                <a href="#contacto" className="focus-ring inline-flex items-center gap-2 rounded-md text-sm font-bold text-brand-700">
                  Agendar
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
