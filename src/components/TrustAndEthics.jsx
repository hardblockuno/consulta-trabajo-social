import { ShieldCheck } from 'lucide-react'

const commitments = [
  'Agenda inicial sin RUT, ClaveÚnica ni documentos personales.',
  'Servicios con alcance, entregables y públicos visibles.',
  'Sin promesas de aprobación de beneficios, subsidios o prestaciones.',
  'Derivación responsable cuando el caso requiere otra institución, disciplina o especialidad.',
]

export default function TrustAndEthics() {
  return (
    <section id="confianza" className="bg-brand-900 py-12 text-white sm:py-14" aria-labelledby="etica-title">
      <div className="section-shell">
        <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-trust-500">Confianza</p>
            <h2 id="etica-title" className="mt-3 text-3xl font-black leading-tight sm:text-4xl">
              Gestión social con límites claros
            </h2>
            <p className="mt-4 text-sm leading-6 text-white/75">
              La plataforma debe ser útil sin cruzar límites éticos ni exponer datos sensibles.
            </p>
          </div>

          <ul className="grid gap-3 md:grid-cols-2">
            {commitments.map((commitment) => (
              <li key={commitment} className="flex gap-3 rounded-lg border border-white/15 bg-white/10 p-4">
                <ShieldCheck className="mt-1 h-5 w-5 flex-none text-trust-500" aria-hidden="true" />
                <span className="text-sm font-semibold leading-6 text-white">{commitment}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
