import { testimonials } from '../data/testimonials.js'

export default function Testimonials() {
  return (
    <section className="page-section">
      <div className="section-header">
        <h2 className="section-heading">What travelers notice first</h2>
        <p className="section-copy">Clear pacing and calm design tend to stand out more than flashy promises.</p>
      </div>
      <div className="testimonial-grid">
        {testimonials.map((testimonial) => (
          <blockquote key={testimonial.id} className="testimonial-card reveal">
            <p>“{testimonial.quote}”</p>
            <footer>
              <strong>{testimonial.author}</strong>
              <span>{testimonial.role}</span>
            </footer>
          </blockquote>
        ))}
      </div>
    </section>
  )
}
