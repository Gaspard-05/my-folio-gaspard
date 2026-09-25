import { useState } from 'react'
import RevealSectionComponent from './ui/RevealSectionComponent'
import SectionTitleComponent from './ui/SectionTitleComponent'

const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/Gaspard-05' },
  { label: 'GitLab', href: 'https://gitlab.com/gaspard-dev-05' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/gaspard-adiro-8208933b0/' },
  { label: 'Email', href: 'mailto:gaspardadiro@gmail.com' },
  { label: 'WhatsApp', href: 'https://wa.me/2290168551193' },
]

export default function ContactComponent() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
  const [errors, setErrors] = useState({})

  const validate = () => {
    const nextErrors = {}
    if (!formData.name.trim()) nextErrors.name = 'Le nom est requis.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) nextErrors.email = 'Email invalide.'
    if (!formData.subject.trim()) nextErrors.subject = 'Le sujet est requis.'
    if (!formData.message.trim()) nextErrors.message = 'Le message est requis.'
    setErrors(nextErrors)
    return Object.keys(nextErrors).length === 0
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (validate()) {
      alert('Merci pour votre message. Je vous réponds bientôt.')
      setFormData({ name: '', email: '', subject: '', message: '' })
      setErrors({})
    }
  }

  return (
    <RevealSectionComponent id="contact" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitleComponent title="Discutons de votre projet" className="mb-10" />

        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-2xl border border-slate-200 bg-[#faf8f5]/70 p-8 shadow-[0_14px_50px_-25px_rgba(15,23,42,0.13)] backdrop-blur-xl dark:border-slate-800 dark:bg-slate-900/70">
            <p className="text-lg leading-8 text-slate-600 dark:text-slate-300">
              Discutons de votre projet. Je peux vous aider à créer une expérience web moderne, claire et impactante.
            </p>

            <div className="mt-8 space-y-4">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-red-500">Email</p>
                <a href="mailto:gaspardadiro@gmail.com" className="mt-2 inline-block text-slate-800 transition hover:text-red-500 dark:text-slate-100">gaspardadiro@gmail.com</a>
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-red-500">Localisation</p>
                <p className="mt-2 text-slate-800 dark:text-slate-100">Cotonou, Bénin</p>
                <p className="mt-2 text-slate-800 dark:text-slate-100">Mobilité possible dans le pays</p>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {socialLinks.map((link) => (
                <a key={link.label} href={link.href} target="_blank" rel="noreferrer" className="rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-800 transition hover:border-red-300 hover:text-red-500 dark:border-slate-700 dark:text-slate-100">
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <form onSubmit={handleSubmit} noValidate className="rounded-2xl border border-slate-200 bg-[#faf8f5]/70 p-4 shadow-[0_14px_50px_-25px_rgba(15,23,42,0.13)] backdrop-blur-xl dark:border-slate-800 dark:bg-slate-900/70 sm:p-8">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-800 dark:text-slate-100" htmlFor="name">Nom</label>
                <input id="name" name="name" autoComplete="name" value={formData.name} onChange={(event) => setFormData({ ...formData, name: event.target.value })} aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? 'name-error' : undefined} className="w-full rounded-none border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-red-400 dark:border-slate-700 dark:bg-slate-800" />
                {errors.name && <p id="name-error" className="mt-2 text-sm text-red-500" role="alert">{errors.name}</p>}
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-800 dark:text-slate-100" htmlFor="email">Email</label>
                <input id="email" type="email" name="email" autoComplete="email" value={formData.email} onChange={(event) => setFormData({ ...formData, email: event.target.value })} aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? 'email-error' : undefined} className="w-full rounded-none border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-red-400 dark:border-slate-700 dark:bg-slate-800" />
                {errors.email && <p id="email-error" className="mt-2 text-sm text-red-500" role="alert">{errors.email}</p>}
              </div>
            </div>

            <div className="mt-4">
              <label className="mb-2 block text-sm font-medium text-slate-800 dark:text-slate-100" htmlFor="subject">Sujet</label>
              <input id="subject" name="subject" value={formData.subject} onChange={(event) => setFormData({ ...formData, subject: event.target.value })} aria-invalid={Boolean(errors.subject)} aria-describedby={errors.subject ? 'subject-error' : undefined} className="w-full rounded-none border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-red-400 dark:border-slate-700 dark:bg-slate-800" />
              {errors.subject && <p id="subject-error" className="mt-2 text-sm text-red-500" role="alert">{errors.subject}</p>}
            </div>

            <div className="mt-4">
              <label className="mb-2 block text-sm font-medium text-slate-800 dark:text-slate-100" htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="5" value={formData.message} onChange={(event) => setFormData({ ...formData, message: event.target.value })} aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? 'message-error' : undefined} className="w-full rounded-none border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-red-400 dark:border-slate-700 dark:bg-slate-800" />
              {errors.message && <p id="message-error" className="mt-2 text-sm text-red-500" role="alert">{errors.message}</p>}
            </div>

            <button type="submit" className="mt-6 rounded-full bg-red-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-red-600">
              Envoyer le message
            </button>
          </form>
        </div>
      </div>
    </RevealSectionComponent>
  )
}
