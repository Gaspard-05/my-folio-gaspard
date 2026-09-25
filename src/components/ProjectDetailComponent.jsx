import { Link, useParams } from 'react-router-dom'
import RevealSectionComponent from './ui/RevealSectionComponent'
import { projects } from '../data/projects'

export default function ProjectDetailComponent() {
  const { slug } = useParams()
  const index = projects.findIndex((project) => project.slug === slug)
  const project = projects[index]

  if (!project) {
    return (
      <RevealSectionComponent className="py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <p className="text-slate-600 dark:text-slate-300">Projet introuvable.</p>
          <Link to="/#projects" className="mt-6 inline-flex items-center rounded-full border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-red-500 hover:text-red-500 dark:border-slate-700 dark:text-slate-200">
            ← Retour aux projets
          </Link>
        </div>
      </RevealSectionComponent>
    )
  }

  const previous = projects[index - 1]
  const next = projects[index + 1]

  return (
    <RevealSectionComponent className="py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Link to="/#projects" className="inline-flex items-center rounded-full border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-red-500 hover:text-red-500 dark:border-slate-700 dark:text-slate-200">
          ← Retour aux projets
        </Link>

        <h1 className="mt-6 break-words text-3xl font-semibold text-slate-900 dark:text-white sm:text-4xl">{project.title}</h1>

        <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200/80 bg-[#faf8f5]/80 dark:border-slate-800 dark:bg-slate-900/80">
          <img src={project.image} alt={project.title} className="h-64 w-full object-cover sm:h-96" />
        </div>

        <section className="mt-10">
          <h2 className="text-sm font-semibold uppercase tracking-[0.3em] text-red-500">Description</h2>
          <p className="mt-4 leading-8 text-slate-600 dark:text-slate-300">{project.description}</p>
        </section>

        <section className="mt-10">
          <h2 className="text-sm font-semibold uppercase tracking-[0.3em] text-red-500">Fonctionnalités</h2>
          <ul className="mt-4 space-y-2 text-slate-600 dark:text-slate-300">
            {project.features.map((feature) => (
              <li key={feature} className="flex gap-3">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-red-500" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="text-sm font-semibold uppercase tracking-[0.3em] text-red-500">Technologies</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span key={tech} className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-700 shadow-sm dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200">
                {tech}
              </span>
            ))}
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-sm font-semibold uppercase tracking-[0.3em] text-red-500">Ce que j'ai appris</h2>
          <ul className="mt-4 space-y-2 text-slate-600 dark:text-slate-300">
            {project.learned.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-red-500" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <div className="mt-10 flex flex-wrap gap-3">
          {project.github && (
            <a href={project.github} target="_blank" rel="noreferrer" className="inline-flex items-center rounded-full border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-red-500 hover:text-red-500 dark:border-slate-700 dark:text-slate-200">
              GitHub
            </a>
          )}
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noreferrer" className="inline-flex items-center rounded-full bg-red-500 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-red-500/20 transition hover:bg-red-600">
              Démo
            </a>
          )}
        </div>

        <nav className="mt-14 flex items-center justify-between gap-4 border-t border-slate-200 pt-6 dark:border-slate-800" aria-label="Navigation entre projets">
          {previous ? (
            <Link to={`/projets/${previous.slug}`} className="inline-flex min-w-0 max-w-[48%] items-center rounded-full border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-red-500 hover:text-red-500 dark:border-slate-700 dark:text-slate-200">
              <span className="truncate">← {previous.shortTitle ?? previous.title}</span>
            </Link>
          ) : <span />}
          {next ? (
            <Link to={`/projets/${next.slug}`} className="inline-flex min-w-0 max-w-[48%] items-center rounded-full bg-red-500 px-5 py-2.5 text-right text-sm font-semibold text-white shadow-md shadow-red-500/20 transition hover:bg-red-600">
              <span className="truncate">{next.shortTitle ?? next.title} →</span>
            </Link>
          ) : <span />}
        </nav>
      </div>
    </RevealSectionComponent>
  )
}
