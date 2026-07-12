import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import SearchIcon from "@mui/icons-material/Search";
import PublicIcon from "@mui/icons-material/Public";
import StarIcon from "@mui/icons-material/Star";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import DestinationCard from "../sections/Destinations/DestinationCard";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import { destinations } from "../data/destinations";

const sortOptions = ["Featured", "Price: Low to High", "Price: High to Low", "Top Rated"];

function parsePrice(price) {
  return Number(price.replace(/[^0-9.]/g, ""));
}

export default function DestinationsPage({ onNavigate }) {
  const navigate = useNavigate();
  const [gridRef, gridVisible] = useIntersectionObserver({ threshold: 0.05 });

  const [query, setQuery] = useState("");
  const [activeSort, setActiveSort] = useState("Featured");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    let list = destinations.filter(
      (d) => !q || d.name.toLowerCase().includes(q) || d.country.toLowerCase().includes(q)
    );

    if (activeSort === "Price: Low to High") {
      list = [...list].sort((a, b) => parsePrice(a.price) - parsePrice(b.price));
    } else if (activeSort === "Price: High to Low") {
      list = [...list].sort((a, b) => parsePrice(b.price) - parsePrice(a.price));
    } else if (activeSort === "Top Rated") {
      list = [...list].sort((a, b) => Number(b.rating) - Number(a.rating));
    }

    return list;
  }, [query, activeSort]);

  return (
    <div className="bg-stone-50 text-stone-900" style={{ fontFamily: "'Inter', sans-serif" }}>
      <Navbar onNavigate={onNavigate} />

      {/* ── Hero banner ── */}
      <section className="relative h-[60vh] min-h-[440px] flex items-end overflow-hidden">
        <img
          src="https://picsum.photos/seed/wanderly-destinations-hero/1920/1080.jpg"
          alt="Aerial view of a coastal destination"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to right, #1c1917, rgba(28,25,23,0.85), rgba(28,25,23,0.45))" }}
        />
        <div
          className="absolute bottom-0 left-0 right-0 h-24"
          style={{ background: "linear-gradient(to top, #f5f5f4, transparent)" }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-14 w-full">
          <button
            type="button"
            onClick={() => navigate("/")}
            className="anim-fade-in opacity-0 inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 text-xs font-medium text-white/90 hover:bg-white/20 transition-all duration-300 mb-6"
          >
            <ArrowBackIcon sx={{ fontSize: 14 }} />
            Back to home
          </button>

          <span
            className="anim-fade-in-up opacity-0 inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 text-xs font-medium text-white/90 uppercase tracking-wider mb-6"
            style={{ animationDelay: "0.1s" }}
          >
            <TravelExploreIcon sx={{ fontSize: 12 }} />
            All Destinations
          </span>

          <h1
            className="anim-fade-in-up opacity-0 text-3xl md:text-4xl lg:text-6xl font-medium text-white tracking-tight leading-[1.1] mb-4 max-w-2xl"
            style={{ animationDelay: "0.2s" }}
          >
            Every place we <span className="italic font-normal text-white/80">recommend</span>
          </h1>
          <p
            className="anim-fade-in-up opacity-0 text-white/70 font-light leading-relaxed max-w-lg"
            style={{ animationDelay: "0.3s" }}
          >
            {destinations.length} curated destinations, hand-picked by our local experts across every continent.
          </p>
        </div>
      </section>

      {/* ── Floating search / filter card, overlapping hero like the Hero search bar ── */}
      <section className="px-6 relative z-20">
        <div className="max-w-5xl mx-auto -mt-8">
          <div className="bg-white/80 backdrop-blur-2xl border border-white/80 rounded-3xl p-3 shadow-xl anim-scale-in opacity-0" style={{ animationDelay: "0.4s" }}>
            <div className="flex flex-col md:flex-row items-stretch md:items-center gap-2">
              <div className="flex-1 flex items-center gap-3 px-4 py-3 rounded-2xl hover:bg-stone-100/60 transition-colors">
                <SearchIcon sx={{ fontSize: 18 }} className="text-emerald-500 shrink-0" />
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search by destination or country..."
                  className="bg-transparent text-stone-900 text-sm font-medium outline-none w-full placeholder:text-stone-400"
                />
              </div>
              <div className="hidden md:block w-px h-10 bg-stone-200" />
              <div className="flex items-center gap-1 px-2 overflow-x-auto">
                {sortOptions.map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => setActiveSort(option)}
                    className={`whitespace-nowrap text-xs font-medium px-4 py-2.5 rounded-full transition-all duration-300 ${
                      activeSort === option
                        ? "bg-stone-900 text-white"
                        : "text-stone-500 hover:text-stone-900 hover:bg-stone-100"
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Results grid ── */}
      <section ref={gridRef} className="py-16 md:py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className={`flex items-center gap-2 mb-8 ${gridVisible ? "anim-fade-in" : "opacity-0"}`}>
            <PublicIcon sx={{ fontSize: 16 }} className="text-emerald-500" />
            <p className="text-sm text-stone-500 font-light">
              Showing <span className="font-medium text-stone-800">{filtered.length}</span> of {destinations.length} destinations
            </p>
          </div>

          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((d, i) => (
                <div
                  key={d.name}
                  className={`h-80 ${gridVisible ? "anim-fade-in-up" : "opacity-0"}`}
                  style={{ animationDelay: `${Math.min(i, 8) * 0.08}s` }}
                >
                  <DestinationCard destination={{ ...d, span: "" }} />
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center text-center py-24 bg-white rounded-3xl border border-stone-200/60">
              <div className="w-14 h-14 bg-stone-100 rounded-2xl flex items-center justify-center mb-4">
                <SearchIcon sx={{ fontSize: 22 }} className="text-stone-400" />
              </div>
              <h3 className="text-lg font-semibold tracking-tight mb-1">No destinations found</h3>
              <p className="text-sm text-stone-500 font-light">Try a different search term or clear your filters.</p>
              <button
                type="button"
                onClick={() => { setQuery(""); setActiveSort("Featured"); }}
                className="mt-6 bg-stone-900 hover:bg-stone-800 text-white text-sm font-medium px-5 py-2.5 rounded-full transition-all duration-300"
              >
                Reset filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ── Trust strip, echoes the Hero badges pattern ── */}
      <section className="py-14 px-6 bg-white border-y border-stone-200/50">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-10">
          {[
            { icon: StarIcon, label: "4.9 Rating", sub: "12k+ reviews" },
            { icon: PublicIcon, label: "120+", sub: "Countries covered" },
            { icon: TravelExploreIcon, label: "2,500+", sub: "Curated trips" },
          ].map((s) => (
            <div key={s.label} className="flex items-center gap-3">
              <div className="w-11 h-11 bg-emerald-400/10 rounded-xl flex items-center justify-center">
                <s.icon sx={{ fontSize: 18 }} className="text-emerald-500" />
              </div>
              <div>
                <p className="text-sm font-semibold text-stone-800">{s.label}</p>
                <p className="text-xs text-stone-500 uppercase tracking-wider">{s.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}