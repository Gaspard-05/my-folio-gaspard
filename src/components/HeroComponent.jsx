import RevealSectionComponent from './ui/RevealSectionComponent'

export default function HeroComponent() {
  return (
    <RevealSectionComponent id="home" className="relative overflow-hidden py-14 lg:py-20">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-4 sm:px-6 lg:flex-row lg:items-stretch lg:justify-between lg:px-8">
        <div className="max-w-2xl flex-1 lg:flex lg:min-h-[34rem] lg:flex-col lg:justify-between lg:pt-2 lg:pb-2">
          {/* <div className="inline-flex items-center gap-2 rounded-full border border-red-200/80 bg-[#faf8f5]/80 px-4 py-2 text-sm font-medium text-red-600 shadow-sm backdrop-blur dark:border-red-900/60 dark:bg-slate-900/70 dark:text-red-300">
            <span className="h-2.5 w-2.5 rounded-full bg-red-500" />
            Développeur Frontend • React • Tailwind
          </div> */}

          <div className="space-y-8 lg:pt-6">
            <div className="inline-flex max-w-full items-center gap-2.5 rounded-full border border-slate-200/80 bg-[#faf8f5]/80 px-3 py-1.5 text-xs font-medium leading-snug text-slate-700 shadow-sm backdrop-blur dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-200 sm:px-4 sm:py-2 sm:text-sm">
              <span className="relative flex h-2.5 w-2.5 shrink-0">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
              </span>
              Disponible pour stage, emploi, projets
            </div>

            <div className="space-y-4">
              <p className=" text-sm font-semibold uppercase tracking-[0.35em] text-red-500">Bienvenue, je suis</p>
              <h1 className="text-2xl font-semibold leading-tight tracking-tight text-slate-950 sm:text-3xl md:text-4xl lg:whitespace-nowrap dark:text-white">
                ADIRO <span className="text-red-500">Olouwafèmi</span> Gaspard
              </h1>
            </div>
            <h2 className="text-xl font-semibold leading-[1.1] text-slate-900 sm:text-2xl md:text-3xl lg:text-[2rem] dark:text-white">
              Développeur web <span className="text-red-500">Full-Stack Junior</span>
            </h2>
            <p className="max-w-xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8 lg:text-xl dark:text-slate-300">
              De l'<strong className="font-semibold text-slate-900 dark:text-white">analyse des besoins</strong> à la <strong className="font-semibold text-slate-900 dark:text-white">gestion de projet</strong>, je conçois des systèmes informatiques fiables et sécurisés : modélisation des <strong className="font-semibold text-slate-900 dark:text-white">bases de données</strong>, développement d'<strong className="font-semibold text-slate-900 dark:text-white">API back-end</strong> robustes, avec une exigence constante de <strong className="font-semibold text-slate-900 dark:text-white">sécurité</strong> et de qualité du code.
            </p>
          </div>

          <div className="mt-4 flex flex-col gap-3 sm:flex-row lg:mt-0">
            <a href="#projects" className="rounded-2xl bg-red-500 px-6 py-3 text-center text-sm font-semibold text-white shadow-lg shadow-red-500/20 transition duration-300 hover:-translate-y-0.5 hover:bg-red-600">
              Voir mes projets
            </a>
            <a href="#contact" className="rounded-2xl border border-slate-300 bg-[#faf8f5]/70 px-6 py-3 text-center text-sm font-semibold text-slate-700 transition duration-300 hover:-translate-y-0.5 hover:border-red-500 hover:text-red-500 dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-200">
              Me contacter
            </a>
          </div>
        </div>

        <div className="relative w-full max-w-lg flex-1 overflow-hidden rounded-2xl border border-slate-200/80 bg-[#faf8f5]/80 p-4 shadow-[0_16px_60px_-20px_rgba(15,23,42,0.2)] backdrop-blur-xl dark:border-slate-800 dark:bg-slate-900/80 sm:p-6">
          <div className="absolute inset-0 rounded-none bg-[radial-gradient(circle_at_top_left,_rgba(29,59,179,0.16),_transparent_50%)]" />
          <div className="relative space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">Profil</span>
              <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-300">Disponible</span>
            </div>

            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 dark:border-slate-700 dark:bg-slate-800">
              <img
                src="/img/gaspard-photo-dev.jpg"
                alt="Portrait du développeur"
                className="aspect-[4/5] w-full object-cover object-top sm:aspect-auto sm:h-[22rem] lg:h-[27rem]"
              />
            </div>

            {/* <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-none border border-slate-200 bg-slate-50/80 p-4 transition hover:-translate-y-1 hover:border-red-300 dark:border-slate-700 dark:bg-slate-800/70">
                <p className="text-2xl font-semibold text-slate-900 dark:text-white">8+</p>
                <p className="text-sm text-slate-600 dark:text-slate-300">années d’expérience</p>
              </div>
              <div className="rounded-none border border-slate-200 bg-slate-50/80 p-4 transition hover:-translate-y-1 hover:border-red-300 dark:border-slate-700 dark:bg-slate-800/70">
                <p className="text-2xl font-semibold text-slate-900 dark:text-white">20+</p>
                <p className="text-sm text-slate-600 dark:text-slate-300">projets livrés</p>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </RevealSectionComponent>
  )
}
