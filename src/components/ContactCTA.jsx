import { MessageCircle } from 'lucide-react'

const whatsappUrl = 'https://wa.me/56900000000'

export default function ContactCTA() {
  return (
    <section id="contacto" className="bg-slate-50 py-20 sm:py-24">
      <div className="section-shell">
        <div className="grid gap-8 rounded-lg border border-slate-200 bg-white p-6 shadow-soft sm:p-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div>
            <p className="eyebrow">Contacto</p>
            <h2 className="mt-3 text-3xl font-bold leading-tight text-slate-950 sm:text-4xl">
              Solicita una primera orientación y ordenemos el punto de partida
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              El canal de WhatsApp permite coordinar una atención inicial sin compartir información sensible en esta
              etapa del MVP.
            </p>
            <p className="mt-4 rounded-md bg-civic-50 px-4 py-3 text-sm font-semibold leading-6 text-slate-800">
              Este canal es solo referencial y debe ser configurado con el número oficial del proyecto.
            </p>
          </div>

          <div className="flex flex-col gap-3 lg:items-end">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="focus-ring inline-flex w-full items-center justify-center gap-2 rounded-md bg-trust-500 px-5 py-4 text-base font-bold text-white transition hover:bg-trust-700 sm:w-auto"
            >
              <MessageCircle className="h-5 w-5" aria-hidden="true" />
              Solicitar orientación por WhatsApp
            </a>
            <p className="text-sm leading-6 text-slate-600 lg:max-w-xs lg:text-right">
              No envíes RUT, datos de salud, ingresos, discapacidad u otros antecedentes sensibles por este canal demo.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
