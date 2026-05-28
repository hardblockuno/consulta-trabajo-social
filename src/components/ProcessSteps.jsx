import { ArrowRight } from 'lucide-react'

const steps = [
  'Elige especialidad',
  'Revisa perfil y cupos',
  'Agenda una primera atención',
  'Recibe ruta o derivación',
]

export default function ProcessSteps() {
  return (
    <section id="como-funciona" className="bg-white py-14 sm:py-16">
      <div className="section-shell">
        <div className="max-w-2xl">
          <p className="eyebrow">Cómo funciona</p>
          <h2 className="section-title mt-3">De la búsqueda a la agenda en cuatro pasos</h2>
        </div>

        <ol className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
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
              <p className="mt-6 text-base font-black leading-6 text-slate-950">{step}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
