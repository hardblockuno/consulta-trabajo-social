import { BadgeCheck } from 'lucide-react'
import { prices } from '../data/prices.js'

export default function Pricing() {
  return (
    <section id="precios" className="bg-slate-50 py-14 sm:py-16">
      <div className="section-shell">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.4fr] lg:items-start">
          <div>
            <p className="eyebrow">Agenda</p>
            <h2 className="section-title mt-3">Modalidades para partir liviano</h2>
            <p className="mt-4 text-sm leading-6 text-slate-600">
              Valores referenciales. El alcance final depende del caso, modalidad y profesional disponible.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {prices.map((item) => (
              <article key={item.service} className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
                <div className="flex items-start gap-3">
                  <BadgeCheck className="mt-1 h-5 w-5 flex-none text-trust-500" aria-hidden="true" />
                  <div>
                    <h3 className="font-black text-slate-950">{item.service}</h3>
                    <p className="mt-2 text-xl font-black text-brand-700">{item.price}</p>
                    <p className="mt-3 text-sm leading-6 text-slate-600">{item.detail}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
