import {
  Building2,
  FileText,
  HeartHandshake,
  Home,
  Presentation,
} from 'lucide-react'

const icons = {
  Building2,
  FileText,
  HeartHandshake,
  Home,
  Presentation,
}

export default function ServiceCard({ service }) {
  const Icon = icons[service.icon] ?? FileText

  return (
    <article className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-soft">
      <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-md bg-brand-50 text-brand-700">
        <Icon className="h-6 w-6" aria-hidden="true" />
      </div>
      <h3 className="text-lg font-black text-slate-950">{service.title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-600">{service.description}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {service.tags.map((tag) => (
          <span key={tag} className="rounded-md bg-slate-50 px-3 py-2 text-xs font-bold text-slate-700">
            {tag}
          </span>
        ))}
      </div>
    </article>
  )
}
