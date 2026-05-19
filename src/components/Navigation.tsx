import { useEffect, useState } from 'react'
import { assetPath } from '../utils/assets'

const navItems = [
  { href: '#work', label: 'Work' },
  { href: '#design', label: 'Design' },
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#contact', label: 'Contact' },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  const closeMenu = () => setIsOpen(false)

  useEffect(() => {
    const sectionIds = navItems.map((item) => item.href.slice(1))
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section))

    const updateActiveSection = () => {
      const marker = window.innerHeight * 0.36
      const currentSection = sections.reduce<HTMLElement | null>((current, section) => {
        const rect = section.getBoundingClientRect()
        const hasReachedMarker = rect.top <= marker
        const isCloser = !current || rect.top > current.getBoundingClientRect().top

        if (hasReachedMarker && isCloser) {
          return section
        }

        return current
      }, null)

      setActiveSection(currentSection?.id ?? sectionIds[0])
    }

    updateActiveSection()
    window.addEventListener('scroll', updateActiveSection, { passive: true })
    window.addEventListener('resize', updateActiveSection)

    return () => {
      window.removeEventListener('scroll', updateActiveSection)
      window.removeEventListener('resize', updateActiveSection)
    }
  }, [])

  return (
    <nav className={`nav ${isOpen ? 'nav-open' : ''}`} aria-label="Main navigation">
      <a className="brand" href="#top" aria-label="Umair Ahmad home" onClick={closeMenu}>
        <img src={assetPath('umair-ahmad-logo.svg')} alt="" />
      </a>
      <button
        className="nav-toggle"
        type="button"
        aria-expanded={isOpen}
        aria-controls="main-nav-links"
        aria-label="Toggle navigation menu"
        onClick={() => setIsOpen((open) => !open)}
      >
        <span />
        <span />
        <span />
      </button>
      <div className="nav-links" id="main-nav-links">
        {navItems.map((item) => {
          const sectionId = item.href.slice(1)
          const isActive = activeSection === sectionId

          return (
            <a
              aria-current={isActive ? 'page' : undefined}
              className={isActive ? 'active' : undefined}
              href={item.href}
              key={item.href}
              onClick={closeMenu}
            >
              {item.label}
            </a>
          )
        })}
      </div>
    </nav>
  )
}
