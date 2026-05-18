import { useState } from 'react'
import { assetPath } from '../utils/assets'

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const closeMenu = () => setIsOpen(false)

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
        <a href="#work" onClick={closeMenu}>
          Work
        </a>
        <a href="#design" onClick={closeMenu}>
          Design
        </a>
        <a href="#about" onClick={closeMenu}>
          About
        </a>
        <a href="#services" onClick={closeMenu}>
          Services
        </a>
        <a href="#contact" onClick={closeMenu}>
          Contact
        </a>
      </div>
    </nav>
  )
}
