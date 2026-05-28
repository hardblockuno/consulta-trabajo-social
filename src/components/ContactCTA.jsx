import { MessageCircle } from 'lucide-react'

const whatsappUrl = 'https://wa.me/56900000000'

export default function ContactCTA() {
  return (
    <section id="contacto" className="bg-slate-50 py-14 sm:py-16">
      <div className="section-shell">
        <div className="grid gap-8 rounded-lg border border-slate-200 bg-white p-6 shadow-soft sm:p-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="eyebrow">Contacto</p>
            <h2 className="mt-3 text-3xl font-bold leading-tight text-slate-950 sm:text-4xl">
              Súmate al piloto de agenda social
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Recibe solicitudes, valida perfiles profesionales y coordina las primeras atenciones sin construir todavía
              un sistema complejo.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="focus-ring inline-flex w-full items-center justify-center gap-2 rounded-md bg-trust-500 px-5 py-4 text-base font-bold text-white transition hover:bg-trust-700 sm:w-auto"
            >
              <MessageCircle className="h-5 w-5" aria-hidden="true" />
              Necesito atención
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="focus-ring inline-flex w-full items-center justify-center gap-2 rounded-md border border-brand-700 bg-white px-5 py-4 text-base font-bold text-brand-700 transition hover:bg-brand-50 sm:w-auto"
            >
              <MessageCircle className="h-5 w-5" aria-hidden="true" />
              Soy profesional
            </a>
            <p className="text-sm leading-6 text-slate-600">
              WhatsApp demo pendiente de configurar con el número oficial del proyecto.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
