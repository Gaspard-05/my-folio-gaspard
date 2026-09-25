import { Link } from 'react-router-dom'
import RevealSectionComponent from './ui/RevealSectionComponent'
import SectionTitleComponent from './ui/SectionTitleComponent'

const experiences = [
  {
    year: 'Février 2026 - Présent',
    formation: 'Formation en Développement web',
    ecole: 'Ecole Internationale de Graphisme (EIG) BENIN',
    diplomes: 'Formation en cours.',
  },
  {
    year: 'Octobre 2022 - Octobre 2025',
    formation: 'Licence en Systèmes Informatiques et Logiciels',
    ecole: 'Haute Ecole de Commerce et de Management (HECM) BENIN',
    diplomes: 'Diplôme de Technicien Supérieur en Système Informatiques et Logiciels.',
  },
  {
    year: 'Période à renseigner',
    formation: 'Expérience 3',
    ecole: 'Entreprise ou structure à renseigner',
    diplomes: 'Description de la mission et des compétences acquises.',
  },
  {
    year: 'Mars 2025 - Mai 2025',
    formation: 'Expérience 4',
    ecole: 'CITECH SARL',
    diplomes: 'Développeur Web Stagiaire ',
  },
]

export default function ExperiencesComponent() {
  return (
    <RevealSectionComponent id="experiences" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitleComponent title="Mes expériences" className="mb-10" />

        <div className="relative space-y-6">
          <div className="absolute left-4 top-0 h-full w-px bg-slate-300 dark:bg-slate-700 sm:left-6" />

          {experiences.map((item, index) => (
            <div key={index} className="relative pl-12 sm:pl-16">
              <div className="absolute left-2 top-2 h-5 w-5 rounded-full border-4 border-[#faf8f5] bg-red-500 shadow-sm dark:border-slate-950 sm:left-4" />
              <div className="rounded-2xl border border-slate-200 bg-[#faf8f5]/70 p-6 shadow-[0_10px_35px_-25px_rgba(15,23,42,0.13)] backdrop-blur-xl dark:border-slate-800 dark:bg-slate-900/70">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-red-500">{item.year}</p>
                <h3 className="mt-3 text-xl font-semibold text-slate-900 dark:text-white">{item.formation}</h3>
                <p className="mt-1 text-sm font-medium text-slate-600 dark:text-slate-300">{item.ecole}</p>
                <p className="mt-4 text-slate-600 dark:text-slate-300">{item.diplomes}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 pl-12 sm:pl-16">
          <Link
            to="/#experience"
            className="inline-flex items-center rounded-full border border-slate-300 px-6 py-3 text-sm font-medium text-slate-700 transition hover:border-red-500 hover:text-red-500 dark:border-slate-700 dark:text-slate-200"
          >
            ← Retour à l'accueil
          </Link>
        </div>
      </div>
    </RevealSectionComponent>
  )
}
