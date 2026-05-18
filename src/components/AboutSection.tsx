export function AboutSection() {
  return (
    <section className="section about-section" id="about">
      <div className="section-heading">
        <p className="eyebrow">About</p>
        <h2>Over a decade of graphic design experience, now expanded into full-stack development.</h2>
        <p>
          Design is a visual form of communication that opens my imagination. I started with graphic,
          print, apparel, and packaging design, then added HTML, CSS, JavaScript, Python, SQL, Node,
          Express, MongoDB, React, Django, and cloud development to build complete digital experiences.
        </p>
      </div>
      <div className="stat-grid">
        <article>
          <strong>20+</strong>
          <span>Years in design and print production</span>
        </article>
        <article>
          <strong>7</strong>
          <span>Featured full-stack web applications</span>
        </article>
        <article>
          <strong>NYC</strong>
          <span>Based in Queens, New York</span>
        </article>
      </div>
    </section>
  )
}
