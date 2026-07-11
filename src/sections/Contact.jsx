export default function Contact() {
  return (
    <section id="contact" className="page-section contact reveal">
      <div className="section-header">
        <h2 className="section-heading">Contact</h2>
        <p className="section-copy">This section is ready for a form or booking flow when you want to add one.</p>
      </div>
      <form className="contact-form">
        <input type="text" name="name" placeholder="Your name" aria-label="Your name" />
        <input type="email" name="email" placeholder="Email address" aria-label="Email address" />
        <textarea name="message" rows="5" placeholder="Tell us where you want to go" aria-label="Tell us where you want to go" />
        <button type="submit" className="primary-action">
          Send inquiry
        </button>
      </form>
    </section>
  )
}
