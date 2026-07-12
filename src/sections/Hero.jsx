import { useState, useEffect } from "react";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PeopleIcon from "@mui/icons-material/People";
import SearchIcon from "@mui/icons-material/Search";
import StarIcon from "@mui/icons-material/Star";
import PublicIcon from "@mui/icons-material/Public";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { heroSlides } from "../data/heroSlides";

const SLIDE_INTERVAL_MS = 6000;

const trustBadges = [
  { icon: StarIcon, label: "4.9 Rating", sub: "12k+ reviews" },
  { icon: PublicIcon, label: "50+", sub: "Locations" },
  { icon: FavoriteIcon, label: "10k+", sub: "Happy travelers" },
];

const searchTabs = ["Stays", "Flights", "Experiences", "Cars"];

export default function Hero({ onNavigate }) {
  const [activeTab, setActiveTab] = useState("Stays");
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setSlide((prev) => (prev + 1) % heroSlides.length), SLIDE_INTERVAL_MS);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index) => setSlide(index);
  const prevSlide = () => setSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  const nextSlide = () => setSlide((prev) => (prev + 1) % heroSlides.length);

  return (
    <section id="hero" className="relative h-screen min-h-[700px] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        {heroSlides.map((s, i) => (
          <img
            key={s.img}
            src={s.img}
            alt={s.alt}
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-[1500ms] ease-in-out"
            style={{
              opacity: i === slide ? 1 : 0,
              transform: i === slide ? "scale(1.06)" : "scale(1)",
              transitionProperty: "opacity, transform",
              transitionDuration: "1500ms, 8000ms",
              transitionTimingFunction: "ease-in-out, ease-out",
            }}
          />
        ))}
      </div>

      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(to right, #1c1917, rgba(28,25,23,0.85), rgba(28,25,23,0.4), transparent)" }}
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-32"
        style={{ background: "linear-gradient(to top, #f5f5f4, transparent, transparent)" }}
      />

      <button
        type="button"
        onClick={prevSlide}
        aria-label="Previous slide"
        className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 hover:scale-105 transition-all duration-300"
      >
        <ArrowForwardIcon sx={{ fontSize: 18 }} className="rotate-180" />
      </button>
      <button
        type="button"
        onClick={nextSlide}
        aria-label="Next slide"
        className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 hover:scale-105 transition-all duration-300"
      >
        <ArrowForwardIcon sx={{ fontSize: 18 }} />
      </button>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
        {heroSlides.map((s, i) => (
          <button
            key={s.img}
            type="button"
            onClick={() => goToSlide(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === slide ? "w-8 bg-emerald-400" : "w-2 bg-white/40 hover:bg-white/60"
            }`}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-2xl">
          <div className="anim-fade-in-up opacity-0" style={{ animationDelay: "0.1s" }}>
            <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 text-xs font-medium text-white/90 uppercase tracking-wider mb-6">
              <AutoAwesomeIcon sx={{ fontSize: 12 }} />
              Your Next Adventure Awaits
            </span>
          </div>
          <h1
            className="anim-fade-in-up opacity-0 text-4xl md:text-5xl lg:text-7xl font-medium text-white tracking-tight leading-[1.1] mb-6"
            style={{ animationDelay: "0.2s" }}
          >
            Discover the
            <span className="block mt-1">Sri Lanka&apos;s most </span>
            <span className="italic font-normal text-white/90">beautiful</span> places
          </h1>
          <p
            className="anim-fade-in-up opacity-0 text-base md:text-lg text-white/70 font-light leading-relaxed mb-10 max-w-lg"
            style={{ animationDelay: "0.3s" }}
          >
            Discover the beauty of Sri Lanka through unforgettable journeys. From ancient heritage sites and misty mountains to golden beaches and wildlife adventures, we create travel experiences that inspire.
          </p>

          <div className="anim-fade-in-up opacity-0" style={{ animationDelay: "0.4s" }}>
            <div className="bg-black/30 backdrop-blur-md border border-white/10 rounded-3xl p-2 max-w-3xl">
              <div className="flex items-center gap-1 mb-2 px-2 pt-1">
                {searchTabs.map((tab) => (
                  <button
                    key={tab}
                    type="button"
                    onClick={() => setActiveTab(tab)}
                    className={`text-xs font-medium px-4 py-2 rounded-full transition-all duration-300 ${
                      activeTab === tab ? "bg-stone-900 text-white" : "text-white/60 hover:text-white/90 hover:bg-white/10"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
              <div className="flex flex-col md:flex-row items-stretch md:items-center gap-2">
                <div className="flex-1 flex items-center gap-3 px-4 py-3 rounded-2xl hover:bg-white/5 transition-colors">
                  <LocationOnIcon sx={{ fontSize: 18 }} className="text-emerald-400 shrink-0" />
                  <div className="flex-1">
                    <p className="text-[10px] text-white/50 uppercase tracking-wider">Where to</p>
                    <input
                      type="text"
                      placeholder="Search destinations..."
                      className="bg-transparent text-white text-sm font-medium outline-none w-full placeholder:text-white/30"
                    />
                  </div>
                </div>
                <div className="hidden md:block w-px h-10 bg-white/10" />
                <div className="flex-1 flex items-center gap-3 px-4 py-3 rounded-2xl hover:bg-white/5 transition-colors">
                  <CalendarMonthIcon sx={{ fontSize: 18 }} className="text-emerald-400 shrink-0" />
                  <div className="flex-1">
                    <p className="text-[10px] text-white/50 uppercase tracking-wider">When</p>
                    <input
                      type="text"
                      placeholder="Add dates..."
                      className="bg-transparent text-white text-sm font-medium outline-none w-full placeholder:text-white/30"
                    />
                  </div>
                </div>
                <div className="hidden md:block w-px h-10 bg-white/10" />
                <div className="flex items-center gap-3 px-4 py-3 rounded-2xl hover:bg-white/5 transition-colors">
                  <PeopleIcon sx={{ fontSize: 18 }} className="text-emerald-400 shrink-0" />
                  <div>
                    <p className="text-[10px] text-white/50 uppercase tracking-wider">Who</p>
                    <span className="text-white text-sm font-medium">2 Travelers</span>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => onNavigate("Searching destinations...")}
                  className="bg-emerald-400 hover:bg-emerald-500 text-stone-900 px-6 py-3.5 rounded-2xl font-medium text-sm transition-all duration-300 hover:scale-105 flex items-center gap-2 shrink-0"
                >
                  <SearchIcon sx={{ fontSize: 16 }} />
                  <span className="hidden sm:inline">Search</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden lg:flex absolute bottom-20 left-12 z-10 flex-col gap-3 anim-fade-in opacity-0" style={{ animationDelay: "0.6s" }}>
        {trustBadges.map(({ icon: Icon, label, sub }, i) => (
          <div
            key={label}
            className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-4 py-3 flex items-center gap-3 anim-float"
            style={{ animationDelay: `${i * 0.5}s` }}
          >
            <div className="w-9 h-9 bg-emerald-400/20 rounded-xl flex items-center justify-center">
              <Icon sx={{ fontSize: 16 }} className="text-emerald-400" />
            </div>
            <div>
              <p className="text-white text-sm font-medium">{label}</p>
              <p className="text-white/50 text-[10px] uppercase tracking-wider">{sub}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}