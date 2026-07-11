export default function DestinationCard({ destination }) {
  return (
    <article className="destination-card reveal">
      <p className="card-category">{destination.category}</p>
      <h3>{destination.name}</h3>
      <p>{destination.description}</p>
    </article>
  )
}
