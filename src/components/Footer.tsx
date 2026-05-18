export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div>
        <strong>Umair Ahmad</strong>
        <span>Graphic design, web development, and production-ready creative work.</span>
      </div>
      <div className="footer-links" aria-label="Footer links">
        <a href="#top">Top</a>
        <a href="#work">Work</a>
        <a href="#contact">Contact</a>
        <a href="mailto:umairny1@gmail.com">Email</a>
      </div>
      <p>© {year} Umair Ahmad. All rights reserved.</p>
    </footer>
  )
}
