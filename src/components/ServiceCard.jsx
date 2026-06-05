import {
  BarChart3,
  FileText,
  GraduationCap,
  Handshake,
  Landmark,
  Map,
  MessagesSquare,
  Users,
} from 'lucide-react'

const icons = {
  BarChart3,
  FileText,
  GraduationCap,
  Handshake,
  Landmark,
  Map,
  MessagesSquare,
  Users,
}

export default function ServiceCard({ service }) {
  const Icon = icons[service.icon] ?? FileText

  return (
    <article className="flex min-h-full flex-col rounded-lg border border-civic-100 bg-white p-5 transition hover:-translate-y-0.5 hover:border-brand-100 hover:shadow-soft">
      <div className="mb-4 flex items-center justify-between gap-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-md bg-brand-50 text-brand-700">
          <Icon className="h-5 w-5" aria-hidden="true" />
        </div>
        <span className="h-px flex-1 bg-civic-100" />
      </div>
      <h3 className="text-lg font-black text-brand-900">{service.title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-600">{service.description}</p>
      <div className="mt-5 border-t border-civic-100 pt-4">
        <p className="text-xs font-black uppercase tracking-[0.16em] text-brand-500">Entregables</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {service.deliverables.map((item) => (
            <span key={item} className="rounded-md bg-[#f7f9fb] px-3 py-2 text-xs font-bold text-slate-700">
              {item}
            </span>
          ))}
        </div>
      </div>
      <div className="mt-4">
        <p className="text-xs font-black uppercase tracking-[0.16em] text-slate-500">Para</p>
        <p className="mt-2 text-sm font-semibold leading-6 text-slate-700">{service.audiences.join(' / ')}</p>
      </div>
    </article>
  )
}
