import { ArrowRight, MessageCircle, Users } from 'lucide-react'

const whatsappUrl = 'https://wa.me/56900000000'

export default function ContactCTA() {
  return (
    <section id="contacto" className="bg-[#f7f9fb] py-12 sm:py-14">
      <div className="section-shell">
        <div className="grid gap-4 lg:grid-cols-2">
          <div className="rounded-lg border border-civic-100 bg-white p-6 shadow-soft sm:p-8">
            <p className="eyebrow">Instituciones</p>
            <h2 className="mt-3 text-3xl font-black leading-tight text-brand-900 sm:text-4xl">
              Diseñemos un servicio social para tu organización
            </h2>
            <p className="mt-4 text-sm leading-6 text-slate-600">
              Diagnóstico, relacionamiento comunitario, participación, formación o evaluación de impacto.
            </p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="focus-ring mt-6 inline-flex items-center justify-center gap-2 rounded-md bg-brand-900 px-5 py-4 text-base font-bold text-white transition hover:bg-brand-700"
            >
              <MessageCircle className="h-5 w-5" aria-hidden="true" />
              Solicitar propuesta
            </a>
          </div>

          <div className="rounded-lg border border-civic-100 bg-brand-900 p-6 text-white shadow-soft sm:p-8">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-trust-500">Profesionales</p>
            <h2 className="mt-3 text-3xl font-black leading-tight sm:text-4xl">Súmate a la futura red GSI</h2>
            <p className="mt-4 text-sm leading-6 text-white/75">
              Próximo paso: perfiles profesionales, agenda configurable, especialidades y reglas claras de atención.
            </p>
            <a
              href="#reserva"
              className="focus-ring mt-6 inline-flex items-center justify-center gap-2 rounded-md bg-white px-5 py-4 text-base font-bold text-brand-900 transition hover:bg-trust-50"
            >
              <Users className="h-5 w-5" aria-hidden="true" />
              Ver formato de perfil
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
