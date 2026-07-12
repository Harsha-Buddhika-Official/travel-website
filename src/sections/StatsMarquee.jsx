import { marqueeStats } from "../data/stats";

export default function StatsMarquee() {
  return (
    <section className="py-12 sm:py-16 bg-white border-y border-stone-200/50 overflow-hidden">
      <div className="marquee-track">
        {[...marqueeStats, ...marqueeStats].map((s, i) => (
          <div key={`${s.label}-${i}`} className="flex items-center gap-3 sm:gap-4 mx-6 sm:mx-10 shrink-0">
            <span
              className="text-2xl sm:text-3xl md:text-4xl font-semibold bg-clip-text text-transparent"
              style={{ backgroundImage: "linear-gradient(135deg, #1c1917, #78716c)" }}
            >
              {s.num}
            </span>
            <span className="text-xs font-medium text-stone-500 uppercase tracking-widest">{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}