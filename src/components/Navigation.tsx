import { assetPath } from '../utils/assets'

export function Navigation() {
  return (
    <nav className="nav" aria-label="Main navigation">
      <a className="brand" href="#home" aria-label="Umair Ahmad home">
        <img src={assetPath('umair-ahmad-logo.svg')} alt="" />
      </a>
      <div className="nav-links">
        <a href="#work">Work</a>
        <a href="#design">Design</a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  )
}
