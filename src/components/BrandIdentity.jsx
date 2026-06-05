export function BrandMark({ className = 'h-12 w-12' }) {
  return (
    <svg className={className} viewBox="0 0 120 120" role="img" aria-label="GSI Consultores">
      <circle cx="60" cy="60" r="38" fill="none" stroke="#C7CCD1" strokeWidth="4" strokeDasharray="58 24" />
      <path d="M60 12l8 18H52l8-18ZM60 108l-8-18h16l-8 18ZM12 60l18-8v16l-18-8ZM108 60l-18 8V52l18 8Z" fill="#0D1F3D" />
      <path d="M35 37l25 23 24-16M35 37l12 40 29 16 8-49M47 77l30-9M60 60l17 8" fill="none" stroke="#0D1F3D" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M32 54l15 23M47 77l13 18M35 37l-9 22M84 44l14 19" fill="none" stroke="#0E7C86" strokeWidth="4" strokeLinecap="round" />
      {[
        [35, 37, '#0D1F3D', 6],
        [60, 60, '#0D1F3D', 8],
        [84, 44, '#0E7C86', 7],
        [47, 77, '#0D1F3D', 8],
        [77, 68, '#0E7C86', 7],
        [98, 63, '#0E7C86', 5],
        [26, 59, '#0E7C86', 5],
        [60, 95, '#0D1F3D', 4],
      ].map(([cx, cy, fill, r]) => (
        <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r={r} fill={fill} stroke="#FFFFFF" strokeWidth="2" />
      ))}
    </svg>
  )
}

export function BrandWordmark({ compact = false }) {
  return (
    <span className="flex items-center gap-3">
      <BrandMark className={compact ? 'h-10 w-10' : 'h-12 w-12'} />
      <span className="leading-none">
        <span className="block text-2xl font-black tracking-[0.16em] text-brand-900 sm:text-3xl">GSI</span>
        <span className="block text-[0.68rem] font-bold uppercase tracking-[0.34em] text-brand-900">Consultores</span>
        {!compact && (
          <span className="mt-1 hidden text-[0.62rem] font-bold uppercase tracking-[0.28em] text-brand-500 sm:block">
            Gestión Social Integral
          </span>
        )}
      </span>
    </span>
  )
}
