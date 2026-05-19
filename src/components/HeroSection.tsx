import { heroTools } from '../data/portfolio'
import { assetPath } from '../utils/assets'

type HeroSectionProps = {
  styleMode: string
}

export function HeroSection({ styleMode }: HeroSectionProps) {
  return (
    <section className="hero-section" id="home">
      <div className="hero-copy">
        <h1>Umair Ahmad</h1>
        <p className="hero-role">Graphic design, brand identity, print production, and web development.</p>
        <p className="hero-text">
          I create eye-catching visuals and practical digital experiences for businesses that need
          design sense and development skill in one workflow.
        </p>
        <div className="hero-actions">
          <a className="button primary" href="#work">
            View Work
          </a>
          <a className="button secondary" href="#contact">
            Start a Project
          </a>
        </div>
      </div>

      <div className="hero-visual" aria-label="Interactive portfolio preview">
        {styleMode === 'three-d' && (
          <div className="scene-3d" aria-hidden="true">
            <div className="cube-3d">
              <span className="cube-face cube-front">UA</span>
              <span className="cube-face cube-back">Web</span>
              <span className="cube-face cube-right">3D</span>
              <span className="cube-face cube-left">Print</span>
              <span className="cube-face cube-top">Brand</span>
              <span className="cube-face cube-bottom">Cloud</span>
            </div>
            <span className="orbital-ring ring-x"></span>
            <span className="orbital-ring ring-y"></span>
            <span className="orbital-ring ring-z"></span>
          </div>
        )}
        <div className="visual-panel panel-main">
          <span>Umair Ahmad Studio</span>
          <strong>Design, print, web, and cloud</strong>
        </div>
        <div className="hero-logo-stage">
          <span className="pulse-ring ring-one"></span>
          <span className="pulse-ring ring-two"></span>
          <img className="hero-logo" src={assetPath('umair-ahmad-logo.svg')} alt="Umair Ahmad UA logo" />
        </div>
        <div className="visual-panel panel-small">
          <span>Live Studio</span>
          <strong>
            {styleMode === 'classic'
              ? 'Print discipline'
              : styleMode === 'three-d'
                ? '3D portfolio'
                : 'Cloud apps'}
          </strong>
        </div>
        <div className="tool-orbit" aria-hidden="true">
          {heroTools.map((tool) => (
            <span className="tool-chip" key={tool.label}>
              <b>{tool.mark}</b>
              {tool.label}
            </span>
          ))}
        </div>
        <div className="signal-bars" aria-hidden="true">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </section>
  )
}
