import Navbar from '../components/layout/Navbar.jsx'
import Footer from '../components/layout/Footer.jsx'
import Hero from '../sections/Hero.jsx'
import StatsMarquee from '../sections/StatsMarquee.jsx'
import Destinations from '../sections/Destinations/Destinations.jsx'
import Experiences from '../sections/Experiences/Experiences.jsx'
import Showcase from '../sections/Showcase.jsx'
import About from '../sections/About.jsx'
import Testimonials from '../sections/Testimonials.jsx'
import CTA from '../sections/CTA.jsx'
import Contact from '../sections/Contact.jsx'

export default function HomePage() {
  return (
    <div className="app-shell">
      <Navbar />
      <main>
        <Hero />
        <StatsMarquee />
        <Destinations />
        <Experiences />
        <Showcase />
        <About />
        <Testimonials />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
