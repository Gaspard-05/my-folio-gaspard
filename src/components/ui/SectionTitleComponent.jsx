export default function SectionTitleComponent({ eyebrow, title, accent = 'text-red-500', className = '' }) {
  return (
    <div className={`space-y-4 ${className}`}>
      {eyebrow && (
        <div className="inline-flex items-center gap-3">
          <span className="h-px w-8 bg-red-400/70" />
          <p className="text-[11px] uppercase tracking-[0.4em] text-slate-500 dark:text-slate-400">
            {eyebrow}
          </p>
        </div>
      )}
      <h2 className="text-lg font-semibold uppercase tracking-[0.12em] text-slate-900 sm:text-2xl sm:tracking-[0.16em] dark:text-white">
        {title.split(' ').map((word, idx) => (
          <span key={`${word}-${idx}`} className={idx % 2 === 0 ? accent : ''}>
            {word}{' '}
          </span>
        ))}
      </h2>
    </div>
  )
}
