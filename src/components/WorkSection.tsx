import { useMemo } from 'react'
import { projects } from '../data/portfolio'

type WorkSectionProps = {
  activeProject: number
  onProjectChange: (projectIndex: number) => void
}

export function WorkSection({ activeProject, onProjectChange }: WorkSectionProps) {
  const selectedProject = useMemo(() => projects[activeProject], [activeProject])

  return (
    <section className="section work-section" id="work">
      <div className="section-heading">
        <p className="eyebrow">Selected Work</p>
        <h2>Full-stack projects rebuilt as premium case studies with live and source links.</h2>
      </div>
      <div className="work-layout">
        <div className="project-list" role="tablist" aria-label="Projects">
          {projects.map((project, index) => (
            <button
              aria-selected={activeProject === index}
              className={activeProject === index ? 'active' : ''}
              key={project.title}
              onClick={() => onProjectChange(index)}
              role="tab"
              type="button"
            >
              <span>{project.type}</span>
              {project.title}
            </button>
          ))}
        </div>
        <article className="project-preview">
          <p>{selectedProject.type}</p>
          <h3>{selectedProject.title}</h3>
          <div className="mock-window">
            <span></span>
            <span></span>
            <span></span>
            <div></div>
          </div>
          <p>{selectedProject.text}</p>
          <div className="project-links">
            {selectedProject.links.map(([label, href]) => (
              <a href={href} key={href} target="_blank">
                {label}
              </a>
            ))}
          </div>
        </article>
      </div>
    </section>
  )
}
