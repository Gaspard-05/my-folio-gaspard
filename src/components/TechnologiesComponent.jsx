import RevealSectionComponent from './ui/RevealSectionComponent'
import SectionTitleComponent from './ui/SectionTitleComponent'

const technologies = [
  'React',
  'Tailwind CSS',
  'JavaScript',
  'PHP',
  'Laravel',
  'PostgreSQL',
  'MySQL',
  'Git/GitHub/GitLab',
  'UML/Mérise',
  'REST API',
  'Notions de sécurité : OAuth2/JWT, HTTPS',
  'Notions de conteneurisation : Docker, Kubernetes, Helm',
  'Notions de CI/CD : GitHub Actions, GitLab CI/CD',
  'Notions de tests : Tests unitaires et d’intégration',
]

export default function TechnologiesComponent() {
  return (
    <RevealSectionComponent id="technologies" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitleComponent title="Stack technique, Outils & Notions" className="mb-10" />

        <div className="rounded-2xl border border-slate-200 bg-[#faf8f5]/70 p-8 shadow-[0_14px_50px_-25px_rgba(15,23,42,0.13)] backdrop-blur-xl dark:border-slate-800 dark:bg-slate-900/70">
          <div className="flex flex-wrap gap-3">
            {technologies.map((tech, index) => (
              <span
                key={tech}
                className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700 transition hover:-translate-y-0.5 hover:border-red-300 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </RevealSectionComponent>
  )
}
