import { MessageCircle } from 'lucide-react'

const whatsappUrl = 'https://wa.me/56900000000'

export default function ContactCTA() {
  return (
    <section id="contacto" className="bg-stone-50 py-12 sm:py-14">
      <div className="section-shell">
        <div className="grid gap-6 rounded-lg border border-stone-200 bg-white p-6 shadow-soft sm:p-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <h2 className="text-3xl font-bold leading-tight text-slate-950 sm:text-4xl">
              Hablemos de un proyecto social o territorial
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Diagnósticos, talleres, acompañamiento comunitario, formación o agenda profesional.
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
              Solicitar propuesta
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
