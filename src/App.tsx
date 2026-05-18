import { useMemo, useState } from 'react'
import './App.css'

const assetPath = (path: string) => `${import.meta.env.BASE_URL}${path}`

const services = [
  'Brand Identity & Logo Design',
  'Graphic Design for Print',
  'Custom Apparel Graphics',
  'Responsive Web Development',
  'Django & React Applications',
  'Packaging & Production Design',
]

const skills = [
  { name: 'Adobe Illustrator / Photoshop / InDesign', level: 96 },
  { name: 'Print, Packaging & Apparel Design', level: 94 },
  { name: 'HTML / CSS / JavaScript', level: 88 },
  { name: 'Python / Django / SQL', level: 86 },
  { name: 'React / Node / Express / MongoDB', level: 82 },
  { name: 'IBM Cloud / Docker / Kubernetes', level: 76 },
]

const projects = [
  {
    title: 'Cars Dealership App',
    type: 'Python / Django / IBM Watson AI / IBM Cloud',
    text: 'A dealership platform with user accounts, dealership detail pages, reviews, Cloudant storage, IBM Cloud actions, and language-understanding sentiment feedback.',
    links: [
      ['Try App', 'http://um-bestcar.us-south.cf.appdomain.cloud/djangoapp/'],
      ['GitHub', 'https://github.com/umairny/agfzb-CloudAppDevelopment_Capstone'],
    ],
  },
  {
    title: 'Auction App',
    type: 'Python / Django',
    text: 'A marketplace app inspired by eBay where users can create listings, comment, bid, manage a watchlist, browse categories, and see winning bids.',
    links: [
      ['Try App', 'https://umairny.pythonanywhere.com/auctions/'],
      ['GitHub', 'https://github.com/umairny/django_py_any_where/tree/main/auctions'],
    ],
  },
  {
    title: 'Restaurant App',
    type: 'React / Redux / Node / Express / MongoDB',
    text: 'A full-stack restaurant experience with dishes, leaders, favorites, comments, authentication flows, and a feedback form.',
    links: [
      ['Backend', 'https://github.com/umairny/express'],
      ['Frontend', 'https://github.com/umairny/restaurant'],
    ],
  },
  {
    title: 'Social Network App',
    type: 'Python / Django',
    text: 'A social web app with posting, editing, commenting, liking, following, profile editing, and a feed for followed users.',
    links: [
      ['Try App', 'https://umairny.pythonanywhere.com/network/'],
      ['GitHub', 'https://github.com/umairny/django_py_any_where/tree/main/network'],
    ],
  },
]

const experience = [
  {
    company: 'CAPTEEVATE, NYC',
    role: 'Graphic Designer',
    dates: 'July 2014 - Dec 2018',
    text: 'Created custom print designs for T-shirts, sweaters, and hoodies while guiding coworkers on tools, workflow, and client requirements.',
  },
  {
    company: 'CONCEPTION ART, Lahore',
    role: 'Senior Graphic Designer',
    dates: 'Feb 2013 - Feb 2014',
    text: 'Met clients, shaped budgets and objectives, produced promotional artwork, and trained junior designers on production-ready tools.',
  },
  {
    company: 'STYLO GRAPHICS, Lahore',
    role: 'Senior / Junior Graphic Designer',
    dates: 'Dec 1997 - Feb 2013',
    text: 'Designed for paper and tin printing, coordinated with vendors, supported colleagues, and explained visual concepts directly to customers.',
  },
]

const education = [
  'IBM Full Stack Cloud Developer Professional Certificate',
  'Full-Stack Web Development with React, HKUST',
  'Django for Everybody, University of Michigan',
  'Python for Everybody, University of Michigan',
  'Graphic Designing Certificate, Hunter College NYC',
]

const heroTools = [
  { label: 'Illustrator', mark: 'Ai' },
  { label: 'Photoshop', mark: 'Ps' },
  { label: 'React', mark: 'Rx' },
  { label: 'Django', mark: 'Dj' },
  { label: 'Print', mark: 'Pr' },
  { label: 'Cloud', mark: 'Cl' },
]

const designGallery = [
  {
    title: 'Packaging Concept',
    type: 'Print Design',
    image: assetPath('gallery/img01.png'),
  },
  {
    title: 'Product Label System',
    type: 'Packaging',
    image: assetPath('gallery/img02.png'),
  },
  {
    title: 'Promotional Artwork',
    type: 'Graphic Design',
    image: assetPath('gallery/img03.png'),
  },
  {
    title: 'Brand Visual',
    type: 'Identity Design',
    image: assetPath('gallery/img04.png'),
  },
  {
    title: 'Apparel Graphic',
    type: 'Custom Print',
    image: assetPath('gallery/img05.png'),
  },
  {
    title: 'Marketing Layout',
    type: 'Print / Digital',
    image: assetPath('gallery/img06.png'),
  },
  {
    title: 'Visual Campaign',
    type: 'Graphic Design',
    image: assetPath('gallery/img07.png'),
  },
  {
    title: 'Production Artwork',
    type: 'Prepress Design',
    image: assetPath('gallery/img08.png'),
  },
]

function App() {
  const [theme, setTheme] = useState('midnight')
  const [style, setStyle] = useState('classic')
  const [activeProject, setActiveProject] = useState(0)
  const [activeDesign, setActiveDesign] = useState(designGallery[0])
  const [spotlight, setSpotlight] = useState({ x: 50, y: 28 })

  const selectedProject = useMemo(() => projects[activeProject], [activeProject])

  return (
    <main
      className={`site theme-${theme} style-${style}`}
      style={
        {
          '--spot-x': `${spotlight.x}%`,
          '--spot-y': `${spotlight.y}%`,
        } as React.CSSProperties
      }
      onMouseMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect()
        setSpotlight({
          x: ((event.clientX - rect.left) / rect.width) * 100,
          y: ((event.clientY - rect.top) / rect.height) * 100,
        })
      }}
    >
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
          <div className="visual-panel panel-main">
            <span>Umair Ahmad Studio</span>
            <strong>Design, print, web, and cloud</strong>
          </div>
          <div className="hero-logo-stage">
            <span className="pulse-ring ring-one"></span>
            <span className="pulse-ring ring-two"></span>
            <img
              className="hero-logo"
              src={assetPath('umair-ahmad-logo.svg')}
              alt="Umair Ahmad UA logo"
            />
          </div>
          <div className="visual-panel panel-small">
            <span>Live Studio</span>
            <strong>{style === 'classic' ? 'Print discipline' : 'Cloud apps'}</strong>
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

      <section className="section studio-panel" aria-label="Interactive creative controls">
        <div>
          <p className="eyebrow">Creative Playground</p>
          <h2>A portfolio visitors can touch: switch moods, explore work, and understand the range fast.</h2>
        </div>
        <div className="controls">
          <div className="control-group" aria-label="Theme color">
            {['midnight', 'paper', 'gold'].map((item) => (
              <button
                className={theme === item ? 'active' : ''}
                key={item}
                type="button"
                onClick={() => setTheme(item)}
              >
                {item}
              </button>
            ))}
          </div>
          <div className="control-group" aria-label="Design style">
            {['classic', 'future'].map((item) => (
              <button
                className={style === item ? 'active' : ''}
                key={item}
                type="button"
                onClick={() => setStyle(item)}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </section>

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
                From concept and visual direction to production-ready files, responsive interfaces,
                and working application screens.
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="section design-section" id="design">
        <div className="section-heading">
          <p className="eyebrow">Graphic Design Gallery</p>
          <h2>Selected visual work from print, packaging, apparel, and brand production.</h2>
          <p>
            A more visual portfolio moment for Umair’s design background, rebuilt from the old gallery
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
                onClick={() => setActiveDesign(item)}
                type="button"
              >
                <img src={item.image} alt="" />
                <span>{item.type}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

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
                onClick={() => setActiveProject(index)}
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

      <section className="section about-section" id="about">
        <div className="section-heading">
          <p className="eyebrow">About</p>
          <h2>Over a decade of graphic design experience, now expanded into full-stack development.</h2>
          <p>
            Design is a visual form of communication that opens my imagination. I started with
            graphic, print, apparel, and packaging design, then added HTML, CSS, JavaScript, Python,
            SQL, Node, Express, MongoDB, React, Django, and cloud development to build complete
            digital experiences.
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

      <section className="section testimonials">
        <article>
          <p>
            “Bringing your creativity to life.”
          </p>
          <span>Original portfolio tagline</span>
        </article>
        <article>
          <p>
            “We build design that builds your business.”
          </p>
          <span>Original portfolio tagline</span>
        </article>
      </section>

      <section className="section contact" id="contact">
        <div>
          <p className="eyebrow">Start Your Project</p>
          <h2>Let’s build something memorable, useful, and beautifully made.</h2>
          <div className="contact-info">
            <a href="mailto:umairny1@gmail.com">umairny1@gmail.com</a>
            <a href="tel:+19292613767">+1 929 261 3767</a>
            <span>Queens NYC, New York, USA</span>
            <a href="https://www.linkedin.com/in/umairny/" target="_blank">
              LinkedIn
            </a>
          </div>
        </div>
        <form>
          <label>
            Name
            <input type="text" placeholder="Your name" />
          </label>
          <label>
            Email
            <input type="email" placeholder="you@example.com" />
          </label>
          <label>
            Project Type
            <select defaultValue="Brand + Website">
              <option>Brand + Website</option>
              <option>Graphic Design</option>
              <option>Web Development</option>
              <option>App Interface</option>
            </select>
          </label>
          <label>
            Message
            <textarea placeholder="Tell me about your project" rows={4}></textarea>
          </label>
          <button className="button primary" type="button">
            Send Inquiry
          </button>
        </form>
      </section>
    </main>
  )
}

export default App
