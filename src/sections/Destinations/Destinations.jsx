import { Link } from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";
import { destinations } from "../../data/destinations";
import DestinationCard from "./DestinationCard";

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

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[240px] md:auto-rows-[280px]">
          {destinations.map((d, i) => (
            <div
              key={d.name}
              className={`h-full ${d.span} ${visible ? "anim-fade-in-up" : "opacity-0"}`}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <DestinationCard destination={d} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}