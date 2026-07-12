import { useState } from "react";
import { Link } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";
import NorthEastIcon from "@mui/icons-material/NorthEast";

export default function DestinationCard({ destination }) {
  const [hovered, setHovered] = useState(false);
  const isLarge = destination.span.includes("row-span-2");

  return (
    <Link
      to={`/destinations/${destination.id}`}
      className="relative rounded-3xl overflow-hidden cursor-pointer group transition-all duration-400 ease-out hover:-translate-y-1 hover:shadow-2xl h-full w-full block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img
        src={isLarge ? destination.img : destination.img}
        alt={destination.name}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(to top, rgba(28,25,23,0.85), rgba(28,25,23,0.25) 55%, transparent)" }}
      />
      <div className="absolute inset-0 z-10 flex flex-col justify-end p-5 md:p-6">
        <div
          className="flex items-center gap-2 mb-2 transition-all duration-500"
          style={{ transform: hovered ? "translateY(0)" : "translateY(4px)", opacity: hovered ? 1 : 0.85 }}
        >
          <span className="bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-3 py-1 text-[10px] font-medium text-white uppercase tracking-wider flex items-center gap-1">
            <StarIcon sx={{ fontSize: 10 }} className="text-emerald-400" />
            {destination.rating}
          </span>
          <span className="bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-3 py-1 text-[10px] font-medium text-white uppercase tracking-wider">
            {destination.days}
          </span>
        </div>
        <div style={{ transform: hovered ? "translateY(-4px)" : "translateY(0)", transition: "transform 0.5s ease" }}>
          <h3 className="text-white text-lg md:text-xl font-semibold tracking-tight">{destination.name}</h3>
          <p className="text-white/70 text-sm font-light">{destination.country}</p>
        </div>
        <div className="flex items-center justify-between mt-3">
          <span className="text-white text-base font-semibold">From {destination.price}</span>
          <span className="w-9 h-9 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-emerald-400 group-hover:text-stone-900 text-white transition-all duration-300">
            <NorthEastIcon sx={{ fontSize: 16 }} />
          </span>
        </div>
      </div>
    </Link>
  );
}