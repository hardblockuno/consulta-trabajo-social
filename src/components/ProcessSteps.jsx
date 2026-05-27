import { ArrowRight } from 'lucide-react'

const steps = [
  'Nos cuentas tu situación',
  'Revisamos el tipo de trámite o necesidad',
  'Te entregamos una ruta social inicial',
  'Preparamos checklist o documentos orientativos',
  'Te acompañamos o derivamos según corresponda',
]

export default function ProcessSteps() {
  return (
    <section id="como-funciona" className="bg-white py-20 sm:py-24">
      <div className="section-shell">
        <div className="max-w-3xl">
          <p className="eyebrow">Cómo funciona</p>
          <h2 className="section-title mt-3">Un proceso simple para pasar de la duda a una ruta de acción</h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            El acompañamiento prioriza claridad, documentación y derivación responsable cuando una situación requiere
            apoyo institucional o profesional especializado.
          </p>
        </div>

        <ol className="mt-12 grid gap-4 lg:grid-cols-5">
          {steps.map((step, index) => (
            <li key={step} className="relative rounded-lg border border-slate-200 bg-slate-50 p-5">
              <div className="flex items-center justify-between gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-md bg-brand-700 text-sm font-black text-white">
                  {index + 1}
                </span>
                {index < steps.length - 1 && (
                  <ArrowRight className="hidden h-5 w-5 text-brand-500 lg:block" aria-hidden="true" />
                )}
              </div>
              <p className="mt-6 text-base font-bold leading-6 text-slate-950">{step}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
