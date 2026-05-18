import { experience } from '../data/portfolio'

export function ExperienceSection() {
  return (
    <section className="section split">
      <div>
        <p className="eyebrow">Career History</p>
        <h2>A practical design background built through real client, vendor, and production work.</h2>
      </div>
      <div className="timeline">
        {experience.map((item) => (
          <article key={item.company}>
            <span>{item.dates}</span>
            <h3>{item.company}</h3>
            <strong>{item.role}</strong>
            <p>{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
