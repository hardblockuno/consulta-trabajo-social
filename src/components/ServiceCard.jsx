import {
  Blocks,
  Building2,
  FileText,
  HeartHandshake,
  Home,
  MessagesSquare,
  Presentation,
  Scale,
} from 'lucide-react'

const icons = {
  Blocks,
  Building2,
  FileText,
  HeartHandshake,
  Home,
  MessagesSquare,
  Presentation,
  Scale,
}

export default function ServiceCard({ service }) {
  const Icon = icons[service.icon] ?? FileText

  return (
    <article className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-soft">
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-md bg-brand-50 text-brand-700">
        <Icon className="h-6 w-6" aria-hidden="true" />
      </div>
      <h3 className="text-xl font-bold text-slate-950">{service.title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-600">{service.description}</p>
      <div className="mt-5 border-t border-slate-200 pt-5">
        <p className="text-sm font-bold text-slate-900">Alcance</p>
        <p className="mt-2 text-sm leading-6 text-slate-600">{service.scope}</p>
      </div>
      {service.ethicalLimit && (
        <p className="mt-4 rounded-md bg-trust-50 px-3 py-3 text-sm font-semibold leading-6 text-trust-700">
          {service.ethicalLimit}
        </p>
      )}
    </article>
  )
}
