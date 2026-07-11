import { experiences } from '../../data/experiences.js'
import ExperienceCard from './ExperienceCard.jsx'

export default function Experiences() {
  return (
    <section id="experiences" className="page-section">
      <div className="section-header">
        <h2 className="section-heading">Travel experiences designed to feel effortless</h2>
        <p className="section-copy">
          Build days around rest, discovery, and the kind of moments people remember later.
        </p>
      </div>
      <div className="experience-grid">
        {experiences.map((experience) => (
          <ExperienceCard key={experience.id} experience={experience} />
        ))}
      </div>
    </section>
  )
}
