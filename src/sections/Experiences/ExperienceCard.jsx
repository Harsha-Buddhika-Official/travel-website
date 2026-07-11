export default function ExperienceCard({ experience }) {
  return (
    <article className="experience-card reveal">
      <h3>{experience.title}</h3>
      <p>{experience.description}</p>
    </article>
  )
}
