import RevealSectionComponent from './ui/RevealSectionComponent'
import SectionTitleComponent from './ui/SectionTitleComponent'

const highlights = [
  'Sécurité informatique',
  'Bases de données',
  'API back-end',
  'Gestion de projet',
  'Analyse informatique avec UML & Mérise'
]

export default function AboutComponent() {
  return (
    <RevealSectionComponent id="about" className="py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitleComponent title="À propos de moi" className="mb-8" />

        <div className="rounded-2xl border border-slate-200/80 bg-[#faf8f5]/80 p-7 shadow-[0_16px_60px_-25px_rgba(15,23,42,0.14)] backdrop-blur-xl dark:border-slate-800 dark:bg-slate-900/80 sm:p-10">
          <p className="text-lg leading-8 text-slate-600 dark:text-slate-300">
            Développeur web <strong className="font-semibold text-slate-900 dark:text-white">Full-Stack junior</strong>, je m’intéresse particulièrement aux systèmes qui allient <strong className="font-semibold text-slate-900 dark:text-white">robustesse</strong> et <strong className="font-semibold text-slate-900 dark:text-white">sécurité</strong>. J’aime comprendre les <strong className="font-semibold text-slate-900 dark:text-white">besoins d’un projet</strong> avant de le construire, structurer les <strong className="font-semibold text-slate-900 dark:text-white">données</strong> qui le portent, puis développer des services <strong className="font-semibold text-slate-900 dark:text-white">back-end</strong> comme <strong className="font-semibold text-slate-900 dark:text-white">front-end</strong>, solides et fiables, sur lesquels une application peut durablement s’appuyer.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            {highlights.map((item) => (
              <div key={item} className="rounded-full border border-slate-200 bg-gradient-to-br from-slate-50 to-[#faf8f5] px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition hover:-translate-y-1 hover:border-red-300 dark:border-slate-700 dark:from-slate-800 dark:to-slate-900 dark:text-slate-200">
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </RevealSectionComponent>
  )
}
