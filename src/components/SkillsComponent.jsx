import RevealSectionComponent from './ui/RevealSectionComponent'
import SectionTitleComponent from './ui/SectionTitleComponent'

const skillGroups = [
  {
    title: 'Frontend',
    skills: ['JavaScript', 'React.js', 'Tailwind CSS', 'Bootstrap'],
  },
  {
    title: 'Backend',
    skills: ['PHP', 'MySQL', 'Laravel', 'REST API'],
  },
  {
    title: 'Outils',
    skills: ['Git/Github/GitLab', 'GitHub', 'VS Code', 'Postman', 'XAMPP', 'FileZilla'],
  },
  {
    title: 'Méthodologies',
    skills: ['Agile', 'Scrum', 'UML', 'Mérise'],
  },
  {
    title: 'Sécurité',
    skills: ['OWASP', 'Cryptographie', 'Sécurité des API', 'Sécurité des bases de données'],
  },
  {
    title: 'Notions',
    skills: ['Docker', 'Kubernetes', 'Helm', 'OAuth2', 'JWT', 'CI/CD/Github Actions', 'Tests unitaires et d’intégration'],
  }

]

export default function SkillsComponent() {
  return (
    <RevealSectionComponent id="skills" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitleComponent title="Mes compétences & outils" className="mb-10" />

        <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map((group) => (
            <div key={group.title} className="rounded-2xl border border-slate-200/80 bg-[#faf8f5]/80 p-6 shadow-[0_14px_50px_-25px_rgba(15,23,42,0.12)] backdrop-blur-xl transition hover:-translate-y-1 hover:border-red-300 dark:border-slate-800 dark:bg-slate-900/80">
              <div className="flex items-center gap-3">
                <span className="h-2.5 w-2.5 rounded-full bg-red-500" />
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{group.title}</h3>
              </div>
              <div className="mt-5 flex flex-wrap gap-3">
                {group.skills.map((skill) => (
                  <span key={skill} className="rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-700 shadow-sm dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </RevealSectionComponent>
  )
}
