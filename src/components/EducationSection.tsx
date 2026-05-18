import { education } from '../data/portfolio'

export function EducationSection() {
  return (
    <section className="section education-panel">
      <div>
        <p className="eyebrow">Education</p>
        <h2>Formal design training plus modern full-stack and cloud certifications.</h2>
      </div>
      <ul>
        {education.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  )
}
