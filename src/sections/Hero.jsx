import { heroSlides } from '../data/heroSlides.js'

export default function Hero() {
  const feature = heroSlides[0]

  return (
    <section id="home" className="page-section hero reveal">
      <div className="section-chip">Curated travel for modern explorers</div>
      <h1 className="section-heading">{feature.title}</h1>
      <p className="section-copy">{feature.description}</p>
      <div className="hero-actions">
        <a className="primary-action" href="#destinations">
          Explore destinations
        </a>
        <a className="secondary-action" href="#contact">
          Start planning
        </a>
      </div>
      <div className="hero-highlight floaty">
        <span>{feature.accent}</span>
      </div>
    </section>
  )
}
