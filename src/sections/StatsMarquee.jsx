import { marqueeStats } from "../data/stats";

export default function StatsMarquee() {
  return (
    <section className="py-10 xs:py-12 sm:py-16 bg-white border-y border-stone-200/50 overflow-hidden">
      <div className="marquee-track sm:[animation-duration:30s] [animation-duration:20s]">
        {[...marqueeStats, ...marqueeStats].map((s, i) => (
          <div key={`${s.label}-${i}`} className="flex items-center gap-2 xs:gap-3 sm:gap-4 mx-4 xs:mx-6 sm:mx-10 shrink-0">
            <span
              className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-semibold bg-clip-text text-transparent whitespace-nowrap"
              style={{ backgroundImage: "linear-gradient(135deg, #1c1917, #78716c)" }}
            >
              {s.num}
            </span>
            <span className="text-[10px] xs:text-xs font-medium text-stone-500 uppercase tracking-widest whitespace-nowrap">
              {s.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}