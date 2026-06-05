const steps = [
  {
    title: 'Entender',
    description: 'Levantamos necesidad, contexto y actores relevantes.',
  },
  {
    title: 'Orientar',
    description: 'Definimos ruta de acción, límites y próximos pasos.',
  },
  {
    title: 'Conectar',
    description: 'Articulamos agenda, comunidad, instituciones o equipos.',
  },
  {
    title: 'Sistematizar',
    description: 'Ordenamos acuerdos, evidencia, documentos y aprendizajes.',
  },
  {
    title: 'Mejorar',
    description: 'Revisamos avances e identificamos oportunidades de ajuste.',
  },
]

export default function Methodology() {
  return (
    <section id="metodologia" className="bg-white py-14 sm:py-16">
      <div className="section-shell">
        <div className="grid gap-5 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
          <div>
            <p className="eyebrow">Método</p>
            <h2 className="section-title mt-3">Una ruta simple para casos y proyectos</h2>
          </div>
          <p className="text-sm leading-6 text-slate-600 lg:max-w-2xl">
            El mismo marco permite orientar una atención individual, preparar un informe o conducir un proceso social
            con comunidades e instituciones.
          </p>
        </div>

        <ol className="mt-8 grid gap-3 md:grid-cols-5">
          {steps.map((step, index) => (
            <li key={step.title} className="rounded-lg border border-civic-100 bg-[#f7f9fb] p-4">
              <span className="grid h-9 w-9 place-items-center rounded-md bg-brand-900 text-sm font-black text-white">
                {index + 1}
              </span>
              <h3 className="mt-5 text-base font-black text-brand-900">{step.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
