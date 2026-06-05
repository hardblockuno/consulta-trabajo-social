import { useState } from 'react'
import { CalendarDays, Menu, X } from 'lucide-react'
import { BrandWordmark } from './BrandIdentity.jsx'

const navItems = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Agenda', href: '#reserva' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Método', href: '#metodologia' },
  { label: 'Confianza', href: '#confianza' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-civic-100 bg-white/95 backdrop-blur-xl">
      <nav className="section-shell flex min-h-20 items-center justify-between gap-4" aria-label="Principal">
        <a href="#inicio" className="focus-ring flex items-center rounded-md">
          <BrandWordmark compact />
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="focus-ring rounded-md px-3 py-2 text-sm font-bold text-slate-700 transition hover:bg-brand-50 hover:text-brand-900"
            >
              {item.label}
            </a>
          ))}
        </div>

        <a
          href="#reserva"
          className="focus-ring hidden items-center gap-2 rounded-md bg-brand-900 px-4 py-3 text-sm font-bold text-white shadow-soft transition hover:bg-brand-700 lg:inline-flex"
        >
          <CalendarDays className="h-4 w-4" aria-hidden="true" />
          Ver agenda
        </a>

        <button
          type="button"
          className="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-md border border-civic-100 bg-white text-brand-900 lg:hidden"
          onClick={() => setOpen((current) => !current)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Cerrar navegación' : 'Abrir navegación'}
        >
          {open ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
        </button>
      </nav>

      {open && (
        <div id="mobile-menu" className="border-t border-civic-100 bg-white lg:hidden">
          <div className="section-shell grid gap-2 py-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="focus-ring rounded-md px-3 py-3 text-sm font-bold text-slate-700 hover:bg-brand-50"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#reserva"
              className="focus-ring mt-2 inline-flex items-center justify-center gap-2 rounded-md bg-brand-900 px-4 py-3 text-sm font-bold text-white"
              onClick={() => setOpen(false)}
            >
              <CalendarDays className="h-4 w-4" aria-hidden="true" />
              Ver agenda
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
