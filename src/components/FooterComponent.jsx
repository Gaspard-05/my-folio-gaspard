import { Link } from 'react-router-dom'

const navigation = [
  { label: 'Accueil', href: '/#home' },
  { label: 'À propos', href: '/#about' },
  { label: 'Projets', href: '/#projects' },
  { label: 'Contact', href: '/#contact' },
]

export default function FooterComponent() {
  return (
    <footer className="border-t border-slate-200/80 bg-[#faf8f5]/70 px-4 pb-24 pt-10 backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/70 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-lg font-semibold tracking-normal text-slate-900 dark:text-white">ADIRO Olouwafèmi Gaspard</p>
        </div>

        <div className="flex flex-wrap gap-4">
          {navigation.map((item) => (
            <Link key={item.href} to={item.href} className="text-sm font-medium text-slate-600 transition hover:text-red-500 dark:text-slate-300">
              {item.label}
            </Link>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-8 flex max-w-7xl flex-col gap-4 border-t border-slate-200 pt-6 text-sm text-slate-500 dark:border-slate-800 dark:text-slate-400 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Portfolio. Tous droits réservés.</p>
        <button type="button" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="font-medium text-red-500 transition hover:text-red-600">Retour en haut ↑</button>
      </div>
    </footer>
  )
}
