import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

export default function NavbarComponent() {
  const [open, setOpen] = useState(false)

  const links = [
    { label: 'Accueil', href: '/#home' },
    { label: 'À propos', href: '/#about' },
    { label: 'Compétences', href: '/#skills' },
    { label: 'Parcours', href: '/#experience' },
    { label: 'Projets', href: '/#projects' },
    { label: 'Services', href: '/#services' },
    { label: 'Certifications', href: '/#education' },
    { label: 'Contact', href: '/#contact' },
  ]

  useEffect(() => {
    if (!open) return

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setOpen(false)
    }

    document.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-[#faf8f5]/80 backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/80">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-6 sm:px-6 lg:px-8" aria-label="Navigation principale">
          <Link to="/#home" className="flex items-center gap-2 text-xl font-semibold tracking-wide text-slate-900 transition-colors hover:text-red-500 dark:text-white">
            <span className="inline-flex h-10 items-center rounded-lg bg-[#1D3BB3] px-3 font-['Playfair_Display'] text-lg font-bold italic tracking-normal text-white">
              AG
            </span>
            ADIRO Gaspard
          </Link>

          <div className="hidden items-center gap-6 lg:flex">
            {links.map((link) => (
              <Link key={link.href} to={link.href} className="text-sm font-medium text-slate-700 transition-colors hover:text-red-500 dark:text-slate-200">
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center lg:hidden">
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-300 text-slate-700 transition hover:border-red-500 hover:text-red-500 dark:border-slate-700 dark:text-slate-200"
              onClick={() => setOpen(true)}
              aria-label="Ouvrir le menu"
              aria-expanded={open}
            >
              <span className="text-xl leading-none">☰</span>
            </button>
          </div>
        </nav>
      </header>

      <div
        className={`fixed inset-0 z-[60] bg-slate-950/40 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${open ? 'opacity-100' : 'pointer-events-none opacity-0'}`}
        aria-hidden={!open}
        onClick={() => setOpen(false)}
      />

      <div
        className={`fixed inset-y-0 right-0 z-[70] flex w-[80%] max-w-xs transform flex-col bg-[#1D3BB3] shadow-2xl transition-transform duration-300 ease-out lg:hidden ${open ? 'translate-x-0' : 'translate-x-full'}`}
        role="dialog"
        aria-modal="true"
        aria-label="Menu de navigation"
      >
        <div className="flex items-center justify-between border-b border-white/15 px-4 py-6">
          <span className="text-sm font-semibold tracking-[0.25em] text-white">MENU</span>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/30 text-white transition hover:border-white hover:bg-white/10"
            onClick={() => setOpen(false)}
            aria-label="Fermer le menu"
          >
            <span className="text-xl leading-none">✕</span>
          </button>
        </div>

        <div className="flex flex-col gap-1 px-4 py-6">
          {links.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="rounded-lg px-3 py-3 text-sm font-medium text-white/90 transition hover:bg-white/10 hover:text-white"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}
