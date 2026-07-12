import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Hero from "../sections/Hero";
import StatsMarquee from "../sections/StatsMarquee";
import Destinations from "../sections/Destinations/Destinations";
import Experiences from "../sections/Experiences/Experiences";
import Showcase from "../sections/Showcase";
import About from "../sections/About";
import Testimonials from "../sections/Testimonials";
import CTA from "../sections/CTA";
import Contact from "../sections/Contact";

export default function HomePage({ onNavigate }) {
  return (
    <>
      <Navbar onNavigate={onNavigate} />
      <Hero onNavigate={onNavigate} />
      <StatsMarquee />
      <Destinations />
      <Experiences />
      <Showcase />
      <About />
      <Testimonials />
      <CTA onNavigate={onNavigate} />
      <Contact onNavigate={onNavigate} />
      <Footer />
    </>
  );
}