import { stats } from '../data/stats.js'

export default function StatsMarquee() {
  return (
    <section className="stats-marquee">
      <div className="marquee-track">
        {[...stats, ...stats].map((stat, index) => (
          <div className="stat-pill" key={`${stat.id}-${index}`}>
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
