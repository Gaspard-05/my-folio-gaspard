import RevealSectionComponent from './ui/RevealSectionComponent'
import SectionTitleComponent from './ui/SectionTitleComponent'

const educationItems = [
  {
    title: 'Certfication en Gestion de projet Agile',
    institution: 'HP LIFE FOUNDATION',
    year: '2026',
    certificate: '/certificates/Gestion-Projet-Agile.pdf',
  },
  {
    title: 'Certification APIs Back-End',
    institution: 'IBM SkillsBuild',
    year: 'En cours',
  },
]

export default function EducationComponent() {
  return (
    <RevealSectionComponent id="education" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitleComponent title="Formations et certifications" className="mb-10" />

        <div className="grid gap-6 lg:grid-cols-3">
          {educationItems.map((item) => (
            <div key={item.title} className="rounded-2xl border border-slate-200 bg-[#faf8f5]/70 p-6 shadow-[0_11px_35px_-25px_rgba(15,23,42,0.12)] backdrop-blur-xl transition hover:-translate-y-1 hover:border-red-300 dark:border-slate-800 dark:bg-slate-900/70">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-red-500">{item.year}</p>
              <h3 className="mt-3 text-lg font-semibold text-slate-900 dark:text-white">{item.title}</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{item.institution}</p>
              {item.certificate && (
                <a href={item.certificate} target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-2 rounded-full border border-slate-300 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-700 transition hover:-translate-y-0.5 hover:border-red-500 hover:text-red-500 dark:border-slate-700 dark:text-slate-200">
                  Voir le certificat
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </RevealSectionComponent>
  )
}
