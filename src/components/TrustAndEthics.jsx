import { ShieldCheck } from 'lucide-react'

const commitments = [
  'No solicitamos ni guardamos tu ClaveÚnica.',
  'No garantizamos aprobación de beneficios, subsidios o prestaciones.',
  'No reemplazamos a municipalidades, SERVIU, ChileAtiende, IPS u otros organismos públicos.',
  'Orientamos, preparamos antecedentes y acompañamos técnicamente.',
  'Tus datos deben ser tratados solo para la finalidad de la atención solicitada.',
  'Los casos complejos pueden requerir derivación profesional o institucional.',
]

export default function TrustAndEthics() {
  return (
    <section className="bg-brand-900 py-20 text-white sm:py-24" aria-labelledby="etica-title">
      <div className="section-shell">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.3fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-trust-50">Confianza y límites éticos</p>
            <h2 id="etica-title" className="mt-3 text-3xl font-bold leading-tight sm:text-4xl">
              Acompañamiento responsable, claro y sin promesas indebidas
            </h2>
            <p className="mt-5 text-lg leading-8 text-brand-50">
              La plataforma se construye con foco en orientación profesional, protección de datos y respeto por las
              instituciones que evalúan cada trámite.
            </p>
          </div>

          <ul className="grid gap-4 md:grid-cols-2">
            {commitments.map((commitment) => (
              <li key={commitment} className="flex gap-3 rounded-lg border border-white/15 bg-white/10 p-5">
                <ShieldCheck className="mt-1 h-5 w-5 flex-none text-trust-50" aria-hidden="true" />
                <span className="text-sm font-semibold leading-6 text-white">{commitment}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
