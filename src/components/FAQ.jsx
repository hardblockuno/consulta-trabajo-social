import { ChevronDown } from 'lucide-react'
import { faqs } from '../data/faqs.js'

export default function FAQ() {
  return (
    <section id="faq" className="bg-white py-20 sm:py-24">
      <div className="section-shell max-w-5xl">
        <div className="max-w-3xl">
          <p className="eyebrow">Preguntas frecuentes</p>
          <h2 className="section-title mt-3">Dudas comunes antes de solicitar orientación</h2>
        </div>

        <div className="mt-10 divide-y divide-slate-200 rounded-lg border border-slate-200 bg-white">
          {faqs.map((faq, index) => (
            <details key={faq.question} className="group p-5" open={index === 0}>
              <summary className="focus-ring flex cursor-pointer list-none items-center justify-between gap-4 rounded-md text-left text-base font-bold text-slate-950">
                {faq.question}
                <ChevronDown
                  className="h-5 w-5 flex-none text-brand-700 transition group-open:rotate-180"
                  aria-hidden="true"
                />
              </summary>
              <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-600">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
