import { Link } from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ExploreIcon from "@mui/icons-material/Explore";
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";
import { destinations } from "../../data/destinations";
import DestinationCard from "./DestinationCard";

/**
 * Trailing bento tile that closes out the grid. Keeping the destination
 * count + CTA card as the final cell makes the total tile count even,
 * so grid-flow-row-dense has no leftover cell to leave blank.
 */
function ExploreMoreCard() {
  return (
    <Link
      to="/destinations"
      className="group relative rounded-3xl overflow-hidden h-full w-full flex flex-col items-center justify-center text-center p-6 bg-stone-900 hover:bg-stone-800 transition-all duration-400 ease-out hover:-translate-y-1 hover:shadow-2xl"
    >
      <div
        className="absolute inset-0 opacity-40"
        style={{ background: "radial-gradient(circle at 30% 20%, rgba(52,211,153,0.25), transparent 60%)" }}
      />
      <div className="relative z-10 w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-emerald-400/20 transition-colors duration-300">
        <ExploreIcon sx={{ fontSize: 20 }} className="text-emerald-400" />
      </div>
      <p className="relative z-10 text-white text-base font-semibold tracking-tight mb-1">
        {destinations.length}+ Destinations
      </p>
      <p className="relative z-10 text-white/50 text-xs font-light mb-4">Explore the full collection</p>
      <span className="relative z-10 inline-flex items-center gap-1.5 text-xs font-medium text-emerald-400">
        View all
        <ArrowForwardIcon sx={{ fontSize: 14 }} className="group-hover:translate-x-1 transition-transform" />
      </span>
    </Link>
  );
}

export default function Destinations() {
  const [ref, visible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section id="destinations" ref={ref} className="py-24 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div className={visible ? "anim-fade-in-up" : "opacity-0"}>
            <span className="inline-block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-3">Popular Destinations</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight">
              Places that <span className="italic font-normal text-stone-400">inspire</span>
            </h2>
          </div>
          <Link
            to="/destinations"
            className="group flex items-center gap-2 text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors"
          >
            View all destinations
            <ArrowForwardIcon sx={{ fontSize: 16 }} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* grid-flow-row-dense backfills any gaps left by the col-span-2/row-span-2
            tiles instead of skipping cells — this is what fixes the empty holes */}
        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[200px] sm:auto-rows-[240px] md:auto-rows-[280px] gap-4 md:gap-5 grid-flow-row-dense">
          {destinations.map((d, i) => (
            <div
              key={d.id}
              className={`h-full ${d.span} ${visible ? "anim-fade-in-up" : "opacity-0"}`}
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <DestinationCard destination={d} />
            </div>
          ))}
          <div className={visible ? "anim-fade-in-up" : "opacity-0"} style={{ animationDelay: `${destinations.length * 0.08}s` }}>
            <ExploreMoreCard />
          </div>
        </div>
      </div>
    </section>
  );
}