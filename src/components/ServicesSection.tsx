import { services } from '../data/portfolio'

export function ServicesSection() {
  return (
    <section className="section split" id="services">
      <div>
        <p className="eyebrow">Services</p>
        <h2>Creative, flexible, and practical services for businesses that need design and development together.</h2>
      </div>
      <div className="service-grid">
        {services.map((service, index) => (
          <article className="service-card" key={service}>
            <span>{String(index + 1).padStart(2, '0')}</span>
            <h3>{service}</h3>
            <p>
              From concept and visual direction to production-ready files, responsive interfaces, and
              working application screens.
            </p>
          </article>
        ))}
      </div>
    </section>
  )
}
