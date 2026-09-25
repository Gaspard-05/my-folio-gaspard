import RevealSectionComponent from './ui/RevealSectionComponent'
import SectionTitleComponent from './ui/SectionTitleComponent'

const icons = {
  code: (
    <>
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
      <line x1="14" y1="4" x2="10" y2="20" />
    </>
  ),
  analysis: (
    <>
      <path d="M9 3h6a1 1 0 0 1 1 1v1H8V4a1 1 0 0 1 1-1Z" />
      <path d="M8 5H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" />
      <line x1="8" y1="17" x2="8" y2="13" />
      <line x1="12" y1="17" x2="12" y2="10" />
      <line x1="16" y1="17" x2="16" y2="15" />
    </>
  ),
  management: (
    <>
      <rect x="3" y="4" width="18" height="17" rx="2" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
      <polyline points="9 16 11 18 15 14" />
    </>
  ),
  maintenance: (
    <path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18v3h3l6.3-6.3a4 4 0 0 0 5.4-5.4l-2.7 2.7-2.3-.7-.7-2.3 2.7-2.7Z" />
  ),
}

const services = [
  {
    icon: 'code',
    title: 'Développement d’applications',
    description: 'Conception et développement d’applications web robustes, du back-end aux interfaces utilisateur.',
  },
  {
    icon: 'analysis',
    title: 'Analyse de Projet',
    description: 'Étude des besoins, modélisation et structuration des données pour poser des bases solides à chaque projet.',
  },
  {
    icon: 'management',
    title: 'Gestion de Projet Informatique',
    description: 'Planification, suivi et coordination des différentes étapes d’un projet jusqu’à sa livraison.',
  },
  {
    icon: 'maintenance',
    title: 'Maintenance & amélioration',
    description: 'Optimisation continue, corrections et évolution des interfaces existantes.',
  },
]

export default function ServicesComponent() {
  return (
    <RevealSectionComponent id="services" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitleComponent title="Ce que je propose" className="mb-10" />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => (
            <div key={service.title} className="rounded-2xl border border-slate-200/80 bg-[#faf8f5]/80 p-6 shadow-[0_13px_40px_-25px_rgba(15,23,42,0.12)] backdrop-blur-xl transition hover:-translate-y-1 hover:border-red-300 dark:border-slate-800 dark:bg-slate-900/80">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#1D3BB3]">
                <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="#FFC107" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  {icons[service.icon]}
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{service.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </RevealSectionComponent>
  )
}
