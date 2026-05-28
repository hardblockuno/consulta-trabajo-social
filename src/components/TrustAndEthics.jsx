import { ShieldCheck } from 'lucide-react'

const commitments = [
  'Agenda inicial sin RUT, ClaveÚnica ni documentos personales.',
  'Perfiles profesionales con identidad, alcance y modalidad visibles.',
  'Sin promesas de aprobación de beneficios, subsidios o prestaciones.',
  'Derivación responsable cuando el caso requiere otra institución o especialidad.',
]

export default function TrustAndEthics() {
  return (
    <section id="confianza" className="bg-brand-900 py-14 text-white sm:py-16" aria-labelledby="etica-title">
      <div className="section-shell">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.25fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-trust-50">Confianza</p>
            <h2 id="etica-title" className="mt-3 text-3xl font-bold leading-tight sm:text-4xl">
              Reglas claras antes de escalar la plataforma
            </h2>
            <p className="mt-4 text-sm leading-6 text-brand-50">
              La agenda puede crecer, pero el estándar debe quedar desde el primer día: datos mínimos, consentimiento
              claro y límites profesionales visibles.
            </p>
          </div>

          <ul className="grid gap-3 md:grid-cols-2">
            {commitments.map((commitment) => (
              <li key={commitment} className="flex gap-3 rounded-lg border border-white/15 bg-white/10 p-4">
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
