import { useState } from 'react'
import { Link } from 'react-router-dom'
import RevealSectionComponent from './ui/RevealSectionComponent'
import SectionTitleComponent from './ui/SectionTitleComponent'
import { projects } from '../data/projects'

const filters = [
  { key: 'tout', label: 'Tout' },
  { key: 'developpement', label: 'Développement' },
  { key: 'analyse', label: 'Analyse' },
]

export default function ProjectsComponent() {
  const [activeFilter, setActiveFilter] = useState('tout')
  const filteredProjects = activeFilter === 'tout'
    ? projects
    : projects.filter((project) => project.category === activeFilter)

  return (
    <RevealSectionComponent id="projects" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitleComponent title="Mes projets" className="mb-6" />

        <div className="mb-10 inline-flex max-w-full flex-wrap gap-1.5 rounded-2xl border border-slate-200 bg-[#faf8f5]/80 p-1 sm:gap-2 sm:rounded-full sm:p-1.5 dark:border-slate-800 dark:bg-slate-900/80">
          {filters.map((filter) => (
            <button
              key={filter.key}
              type="button"
              onClick={() => setActiveFilter(filter.key)}
              className={`rounded-full px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.08em] transition sm:px-5 sm:py-2 sm:text-sm sm:tracking-[0.15em] ${
                activeFilter === filter.key
                  ? 'bg-red-500 text-white shadow-md shadow-red-500/20'
                  : 'text-slate-600 hover:text-red-500 dark:text-slate-300'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <article key={project.title} className="group overflow-hidden rounded-2xl border border-slate-200/80 bg-[#faf8f5]/80 shadow-[0_15px_55px_-25px_rgba(15,23,42,0.13)] backdrop-blur-xl transition hover:-translate-y-2 hover:border-red-300 dark:border-slate-800 dark:bg-slate-900/80">
              <div className="relative h-40 bg-[radial-gradient(circle_at_top_left,_rgba(29,59,179,0.2),_transparent_55%)]">
                <img src={project.image} alt={project.title} className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.2),transparent)]" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{project.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{project.description}</p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-700 shadow-sm dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <Link to={`/projets/${project.slug}`} className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:-translate-y-0.5 hover:border-red-500 hover:text-red-500 dark:border-slate-700 dark:text-slate-200">
                    Détails
                  </Link>

                  { project.github && (
                    <a href={project.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:-translate-y-0.5 hover:border-red-500 hover:text-red-500 dark:border-slate-700 dark:text-slate-200">
                      GitHub/GitLab
                    </a>
                  )}

                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-red-500 px-4 py-2 text-sm font-semibold text-white shadow-md shadow-red-500/20 transition hover:-translate-y-0.5 hover:bg-red-600">
                      Démo
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </RevealSectionComponent>
  )
}
