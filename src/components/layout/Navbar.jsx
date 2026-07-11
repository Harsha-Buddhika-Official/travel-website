import useScrollPosition from '../../hooks/useScrollPosition.js'
import { navLinks } from '../../data/navLinks.js'

export default function Navbar() {
  const scrollY = useScrollPosition()
  const isCompact = scrollY > 24

  return (
    <header className={`navbar ${isCompact ? 'navbar-compact' : ''}`}>
      <div className="navbar-inner page-section">
        <a className="brand" href="#home">
          Aurora Trails
        </a>
        <nav aria-label="Primary">
          <ul className="nav-links">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
