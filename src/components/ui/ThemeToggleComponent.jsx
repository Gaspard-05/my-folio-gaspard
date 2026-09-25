import useTheme from '../../hooks/useTheme'

export default function ThemeToggleComponent() {
  const { theme, cycleTheme, resolvedTheme } = useTheme()

  return (
    <button
      type="button"
      onClick={cycleTheme}
      className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-3 py-2 text-sm font-medium text-slate-700 transition hover:border-red-500 hover:text-red-500 dark:border-slate-700 dark:text-slate-200"
      aria-label={`Thème actuel : ${theme}`}
    >
      <span>{resolvedTheme === 'dark' ? '🌙' : '☀️'}</span>
      <span>{theme === 'system' ? 'Système' : theme === 'dark' ? 'Sombre' : 'Clair'}</span>
    </button>
  )
}
