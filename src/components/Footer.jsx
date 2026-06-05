import { BrandWordmark } from './BrandIdentity.jsx'

export default function Footer() {
  return (
    <footer className="border-t border-civic-100 bg-white py-10">
      <div className="section-shell flex flex-col gap-5 text-sm text-slate-600 md:flex-row md:items-center md:justify-between">
        <BrandWordmark compact />
        <p className="max-w-2xl">
          Plataforma piloto de atención y agenda social. Orienta, no reemplaza organismos públicos ni garantiza
          resultados. Estrategia, territorio, diálogo, conexión e impacto.
        </p>
      </div>
    </footer>
  )
}
