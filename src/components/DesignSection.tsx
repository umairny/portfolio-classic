import type { DesignItem } from '../data/portfolio'
import { designGallery } from '../data/portfolio'

type DesignSectionProps = {
  activeDesign: DesignItem
  onDesignChange: (design: DesignItem) => void
}

export function DesignSection({ activeDesign, onDesignChange }: DesignSectionProps) {
  return (
    <section className="section design-section" id="design">
      <div className="section-heading">
        <p className="eyebrow">Graphic Design Gallery</p>
        <h2>Selected visual work from print, packaging, apparel, and brand production.</h2>
        <p>
          A more visual portfolio moment for Umair's design background, rebuilt from the old gallery
          into a modern browsing experience.
        </p>
      </div>
      <div className="design-layout">
        <article className="design-preview">
          <img src={activeDesign.image} alt={activeDesign.title} />
          <div>
            <span>{activeDesign.type}</span>
            <h3>{activeDesign.title}</h3>
          </div>
        </article>
        <div className="design-grid" aria-label="Design gallery thumbnails">
          {designGallery.map((item) => (
            <button
              className={activeDesign.image === item.image ? 'active' : ''}
              key={item.image}
              onClick={() => onDesignChange(item)}
              type="button"
            >
              <img src={item.image} alt="" />
              <span>{item.type}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
