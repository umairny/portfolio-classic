import type { CSSProperties } from 'react'
import { useState } from 'react'
import './App.css'
import { AboutSection } from './components/AboutSection'
import { ContactSection } from './components/ContactSection'
import { CreativeControls } from './components/CreativeControls'
import { DesignSection } from './components/DesignSection'
import { EducationSection } from './components/EducationSection'
import { ExperienceSection } from './components/ExperienceSection'
import { Footer } from './components/Footer'
import { HeroSection } from './components/HeroSection'
import { Navigation } from './components/Navigation'
import { ServicesSection } from './components/ServicesSection'
import { SkillsSection } from './components/SkillsSection'
import { TestimonialsSection } from './components/TestimonialsSection'
import { WorkSection } from './components/WorkSection'
import { designGallery } from './data/portfolio'

function App() {
  const [theme, setTheme] = useState('midnight')
  const [style, setStyle] = useState('classic')
  const [activeProject, setActiveProject] = useState(0)
  const [activeDesign, setActiveDesign] = useState(designGallery[0])
  const [spotlight, setSpotlight] = useState({ x: 50, y: 28 })

  return (
    <main
      id="top"
      className={`site theme-${theme} style-${style}`}
      style={
        {
          '--spot-x': `${spotlight.x}%`,
          '--spot-y': `${spotlight.y}%`,
        } as CSSProperties
      }
      onMouseMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect()
        setSpotlight({
          x: ((event.clientX - rect.left) / rect.width) * 100,
          y: ((event.clientY - rect.top) / rect.height) * 100,
        })
      }}
    >
      <Navigation />
      <CreativeControls
        theme={theme}
        styleMode={style}
        onThemeChange={setTheme}
        onStyleChange={setStyle}
      />
      <HeroSection styleMode={style} />
      <ServicesSection />
      <DesignSection activeDesign={activeDesign} onDesignChange={setActiveDesign} />
      <WorkSection activeProject={activeProject} onProjectChange={setActiveProject} />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <EducationSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}

export default App
