import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";
import { experiences } from "../../data/experiences";
import ExperienceCard from "./ExperienceCard";

export default function Experiences() {
  const [ref, visible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section id="experiences" ref={ref} className="py-24 md:py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className={`inline-block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-3 ${visible ? "anim-fade-in" : "opacity-0"}`}>
            Curated Experiences
          </span>
          <h2 className={`text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight mb-4 ${visible ? "anim-fade-in-up" : "opacity-0"}`} style={{ animationDelay: "0.1s" }}>
            Travel <span className="italic font-normal text-stone-400">your way</span>
          </h2>
          <p className={`text-stone-500 font-light leading-relaxed ${visible ? "anim-fade-in-up" : "opacity-0"}`} style={{ animationDelay: "0.2s" }}>
            Hand-picked experiences designed by local experts. Choose your style, we handle the rest.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {experiences.map((exp, i) => (
            <ExperienceCard key={exp.title} experience={exp} index={i} visible={visible} />
          ))}
        </div>
      </div>
    </section>
  );
}