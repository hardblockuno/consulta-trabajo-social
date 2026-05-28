import { useState } from 'react'
import { Menu, MessageCircle, X } from 'lucide-react'

const navItems = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Profesionales', href: '#profesionales' },
  { label: 'Atenciones', href: '#servicios' },
  { label: 'Cómo funciona', href: '#como-funciona' },
  { label: 'Agenda', href: '#precios' },
  { label: 'Confianza', href: '#confianza' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/30 bg-white/90 backdrop-blur-xl">
      <nav className="section-shell flex min-h-20 items-center justify-between gap-4" aria-label="Principal">
        <a href="#inicio" className="focus-ring flex items-center gap-3 rounded-md">
          <span className="grid h-11 w-11 place-items-center rounded-md bg-brand-700 text-base font-black text-white shadow-soft">
            CTS
          </span>
          <span className="text-sm font-black uppercase leading-tight text-brand-900 sm:text-base">
            CONSULTA
            <span className="block text-brand-700">SOCIAL</span>
          </span>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="focus-ring rounded-md px-3 py-2 text-sm font-semibold text-slate-700 transition hover:bg-brand-50 hover:text-brand-800"
            >
              {item.label}
            </a>
          ))}
        </div>

        <a
          href="#contacto"
          className="focus-ring hidden items-center gap-2 rounded-md bg-brand-700 px-4 py-3 text-sm font-bold text-white shadow-soft transition hover:bg-brand-900 lg:inline-flex"
        >
          <MessageCircle className="h-4 w-4" aria-hidden="true" />
          Agendar piloto
        </a>

        <button
          type="button"
          className="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-md border border-slate-200 bg-white text-slate-800 lg:hidden"
          onClick={() => setOpen((current) => !current)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Cerrar navegación' : 'Abrir navegación'}
        >
          {open ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
        </button>
      </nav>

      {open && (
        <div id="mobile-menu" className="border-t border-slate-200 bg-white lg:hidden">
          <div className="section-shell grid gap-2 py-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="focus-ring rounded-md px-3 py-3 text-sm font-semibold text-slate-700 hover:bg-brand-50"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contacto"
              className="focus-ring mt-2 inline-flex items-center justify-center gap-2 rounded-md bg-brand-700 px-4 py-3 text-sm font-bold text-white"
              onClick={() => setOpen(false)}
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              Agendar piloto
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
