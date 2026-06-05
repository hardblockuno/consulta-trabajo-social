const steps = [
  {
    title: 'Comprender',
    description: 'Levantamos contexto, actores, necesidades y condiciones territoriales.',
  },
  {
    title: 'Diseñar',
    description: 'Construimos estrategias, metodologías, instrumentos y planes de acción.',
  },
  {
    title: 'Implementar',
    description: 'Facilitamos talleres, reuniones, acompañamientos y procesos participativos.',
  },
  {
    title: 'Sistematizar',
    description: 'Ordenamos hallazgos, acuerdos, aprendizajes y evidencias.',
  },
  {
    title: 'Evaluar',
    description: 'Medimos avances, resultados y oportunidades de mejora.',
  },
]

export default function Methodology() {
  return (
    <section id="metodologia" className="bg-slate-50 py-14 sm:py-16">
      <div className="section-shell">
        <div className="max-w-2xl">
          <p className="eyebrow">Metodología</p>
          <h2 className="section-title mt-3">De la lectura territorial a la mejora continua</h2>
        </div>

        <ol className="mt-8 grid gap-3 md:grid-cols-5">
          {steps.map((step, index) => (
            <li key={step.title} className="rounded-lg border border-slate-200 bg-white p-4">
              <span className="grid h-9 w-9 place-items-center rounded-md bg-brand-700 text-sm font-black text-white">
                {index + 1}
              </span>
              <h3 className="mt-5 text-base font-black text-slate-950">{step.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
