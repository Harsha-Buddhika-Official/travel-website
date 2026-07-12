import { useState, useEffect } from "react";
import StarIcon from "@mui/icons-material/Star";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import { testimonials } from "../data/testimonials";

const AUTOPLAY_INTERVAL_MS = 5000;

export default function Testimonials() {
  const [ref, visible] = useIntersectionObserver({ threshold: 0.1 });
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setActive((prev) => (prev + 1) % testimonials.length), AUTOPLAY_INTERVAL_MS);
    return () => clearInterval(timer);
  }, []);

  return (
    <section ref={ref} className="py-24 md:py-32 px-6 bg-stone-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className={`inline-block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-3 ${visible ? "anim-fade-in" : "opacity-0"}`}>Testimonials</span>
          <h2 className={`text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight ${visible ? "anim-fade-in-up" : "opacity-0"}`} style={{ animationDelay: "0.1s" }}>
            Loved by <span className="italic font-normal text-stone-500">travelers</span>
          </h2>
        </div>
        <div className="max-w-3xl mx-auto text-center">
          <div className="relative min-h-[280px] flex flex-col items-center justify-center">
            {testimonials.map((t, i) => (
              <div
                key={t.name}
                className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-700 ${
                  i === active ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
                }`}
              >
                <div className="flex items-center gap-0.5 mb-6">
                  {[...Array(5)].map((_, j) => (
                    <StarIcon key={j} sx={{ fontSize: 16, color: "#fbbf24" }} />
                  ))}
                </div>
                <p className="text-lg md:text-xl font-light leading-relaxed text-white/80 mb-8 max-w-xl">&ldquo;{t.text}&rdquo;</p>
                <div className="flex items-center gap-4">
                  <img src={`https://picsum.photos/seed/${t.img}/80/80.jpg`} alt={t.name} className="w-12 h-12 rounded-full object-cover ring-2 ring-white/20" />
                  <div className="text-left">
                    <p className="text-sm font-semibold text-white">{t.name}</p>
                    <p className="text-xs text-white/50">{t.role} · {t.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-center gap-2 mt-8">
            {testimonials.map((t, i) => (
              <button
                key={t.name}
                type="button"
                onClick={() => setActive(i)}
                aria-label={`Show testimonial from ${t.name}`}
                className={`h-2 rounded-full transition-all duration-300 ${i === active ? "w-8 bg-emerald-400" : "w-2 bg-white/20 hover:bg-white/40"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}