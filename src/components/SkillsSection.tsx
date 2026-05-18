import { skills } from '../data/portfolio'

export function SkillsSection() {
  return (
    <section className="section split">
      <div>
        <p className="eyebrow">Skills</p>
        <h2>Design sense, print knowledge, and development craft in one workflow.</h2>
      </div>
      <div className="skill-grid">
        {skills.map((skill) => (
          <article className="skill-card" key={skill.name}>
            <div>
              <h3>{skill.name}</h3>
              <span>{skill.level}%</span>
            </div>
            <meter min="0" max="100" value={skill.level}>
              {skill.level}%
            </meter>
          </article>
        ))}
      </div>
    </section>
  )
}
