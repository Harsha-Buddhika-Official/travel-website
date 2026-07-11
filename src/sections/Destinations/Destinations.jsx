import { destinations } from '../../data/destinations.js'
import DestinationCard from './DestinationCard.jsx'

export default function Destinations() {
  return (
    <section id="destinations" className="page-section">
      <div className="section-header">
        <h2 className="section-heading">Destinations with clear character</h2>
        <p className="section-copy">
          Every stop is chosen for a different mood, so the journey feels deliberate instead of generic.
        </p>
      </div>
      <div className="destination-grid">
        {destinations.map((destination) => (
          <DestinationCard key={destination.id} destination={destination} />
        ))}
      </div>
    </section>
  )
}
