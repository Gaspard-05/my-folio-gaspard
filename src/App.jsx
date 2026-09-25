import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import NavbarComponent from './components/NavbarComponent'
import HeroComponent from './components/HeroComponent'
import AboutComponent from './components/AboutComponent'
import SkillsComponent from './components/SkillsComponent'
import ParcoursComponent from './components/ParcoursComponent'
import ProjectsComponent from './components/ProjectsComponent'
import ServicesComponent from './components/ServicesComponent'
import TechnologiesComponent from './components/TechnologiesComponent'
import EducationComponent from './components/EducationComponent'
import ContactComponent from './components/ContactComponent'
import FooterComponent from './components/FooterComponent'
import ExperiencesComponent from './components/ExperiencesComponent'
import ProjectDetailComponent from './components/ProjectDetailComponent'
import WhatsAppButtonComponent from './components/WhatsAppButtonComponent'

function ScrollToHash() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0)
      return
    }

    const timeout = setTimeout(() => {
      document.getElementById(hash.slice(1))?.scrollIntoView()
    }, 0)

    return () => clearTimeout(timeout)
  }, [pathname, hash])

  return null
}

function Home() {
  return (
    <>
      <HeroComponent />
      <AboutComponent />
      <SkillsComponent />
      <ParcoursComponent />
      <ProjectsComponent />
      <ServicesComponent />
      <TechnologiesComponent />
      <EducationComponent />
      <ContactComponent />
    </>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-[#f0eee9] text-slate-900 transition-colors duration-300">
      <div className="relative overflow-hidden">
        <div className="relative">
          <ScrollToHash />
          <NavbarComponent />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/experiences" element={<ExperiencesComponent />} />
              <Route path="/projets/:slug" element={<ProjectDetailComponent />} />
            </Routes>
          </main>
          <FooterComponent />
          <WhatsAppButtonComponent />
        </div>
      </div>
    </div>
  )
}
