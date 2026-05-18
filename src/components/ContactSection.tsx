export function ContactSection() {
  return (
    <section className="section contact" id="contact">
      <div>
        <p className="eyebrow">Start Your Project</p>
        <h2>Let's build something memorable, useful, and beautifully made.</h2>
        <div className="contact-info">
          <a href="mailto:umairny1@gmail.com">umairny1@gmail.com</a>
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
  )
}
