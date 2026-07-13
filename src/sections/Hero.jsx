import { useState, useEffect } from "react";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
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

function ScrollIndicator() {
  const scrollToNextSection = () => {
    const heroHeight = document.getElementById("hero")?.offsetHeight ?? window.innerHeight;
    window.scrollTo({ top: heroHeight, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      onClick={scrollToNextSection}
      aria-label="Scroll to explore"
      className="flex absolute left-1/2 -translate-x-1/2 z-20 flex-col items-center gap-1.5 sm:gap-2 anim-fade-in opacity-0 group cursor-pointer"
      style={{
        bottom: "max(3.25rem, calc(env(safe-area-inset-bottom, 0px) + 2.75rem))",
        animationDelay: "0.8s",
      }}
    >
      <span className="hidden sm:block text-white/50 text-[10px] font-medium uppercase tracking-widest group-hover:text-white/80 transition-colors duration-300">
        Scroll
      </span>
      <span className="w-5 h-8 sm:w-6 sm:h-10 rounded-full border-2 border-white/30 group-hover:border-emerald-400/60 flex justify-center pt-1.5 sm:pt-2 transition-colors duration-300">
        <span className="w-1 h-1.5 sm:h-2 rounded-full bg-emerald-400 anim-scroll-wheel" />
      </span>
    </button>
  );
}

function TrustStrip() {
  return (
    <div
      className="flex lg:hidden flex-col gap-2.5 mt-[clamp(1.25rem,4vw,2rem)] anim-fade-in-up opacity-0"
      style={{ animationDelay: "0.4s" }}
    >
      {trustBadges.map(({ icon: Icon, label, sub }) => (
        <div
          key={label}
          className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-4 py-3 flex items-center gap-3"
        >
          <div className="w-9 h-9 bg-emerald-400/20 rounded-lg flex items-center justify-center shrink-0">
            <Icon sx={{ fontSize: 15 }} className="text-emerald-400" />
          </div>
          <div>
            <p className="text-white text-sm font-medium">{label}</p>
            <p className="text-white/50 text-[10px] uppercase tracking-wider">{sub}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function Hero({ onNavigate }) {
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setSlide((prev) => (prev + 1) % heroSlides.length), SLIDE_INTERVAL_MS);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index) => setSlide(index);
  const prevSlide = () => setSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  const nextSlide = () => setSlide((prev) => (prev + 1) % heroSlides.length);

  return (
    <section
      id="hero"
      className="relative flex items-center overflow-hidden"
      style={{ minHeight: "100svh" }}
    >
      <div className="absolute inset-0">
        {heroSlides.map((s, i) => (
          <img
            key={s.img}
            src={s.img}
            alt={s.alt}
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out"
            style={{
              opacity: i === slide ? 1 : 0,
              transform: i === slide ? "scale(1.06)" : "scale(1)",
              transitionProperty: "opacity, transform",
              transitionDuration: "1000ms, 8000ms",
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
        className="absolute bottom-0 left-0 right-0"
        style={{ height: "clamp(5rem, 12vh, 8rem)", background: "linear-gradient(to top, #f5f5f4, transparent, transparent)" }}
      />

      {/* Slide arrows — desktop only, ample room needed either side */}
      <button
        type="button"
        onClick={prevSlide}
        aria-label="Previous slide"
        className="hidden lg:flex absolute left-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 hover:scale-105 transition-all duration-300"
      >
        <ArrowForwardIcon sx={{ fontSize: 18 }} className="rotate-180" />
      </button>
      <button
        type="button"
        onClick={nextSlide}
        aria-label="Next slide"
        className="hidden lg:flex absolute right-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 hover:scale-105 transition-all duration-300"
      >
        <ArrowForwardIcon sx={{ fontSize: 18 }} />
      </button>

      <ScrollIndicator />

      {/* Slide dots — safe-area aware so they clear the home-indicator on notched phones */}
      <div
        className="absolute left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5 sm:gap-2"
        style={{ bottom: "max(1.25rem, env(safe-area-inset-bottom, 0px) + 0.75rem)" }}
      >
        {heroSlides.map((s, i) => (
          <button
            key={s.img}
            type="button"
            onClick={() => goToSlide(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-1.5 sm:h-2 rounded-full transition-all duration-300 ${
              i === slide ? "w-6 sm:w-8 bg-emerald-400" : "w-1.5 sm:w-2 bg-white/40 hover:bg-white/60"
            }`}
          />
        ))}
      </div>

      <div
        className="relative z-10 max-w-7xl mx-auto w-full"
        style={{
          paddingLeft: "clamp(1rem, 5vw, 1.5rem)",
          paddingRight: "clamp(1rem, 5vw, 1.5rem)",
          paddingTop: "clamp(4.5rem, 14vh, 0px)",
        }}
      >
        <div className="max-w-2xl">
          <div className="anim-fade-in-up opacity-0" style={{ animationDelay: "0.1s" }}>
            <span
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full font-medium text-white/90 uppercase tracking-wider"
              style={{
                padding: "clamp(0.4rem, 1.2vw, 0.5rem) clamp(0.75rem, 2vw, 1rem)",
                fontSize: "clamp(0.625rem, 1.6vw, 0.75rem)",
                marginBottom: "clamp(1rem, 3vw, 1.5rem)",
              }}
            >
              <AutoAwesomeIcon sx={{ fontSize: 12 }} />
              Your Next Adventure Awaits
            </span>
          </div>

          <h1
            className="anim-fade-in-up opacity-0 font-medium text-white tracking-tight"
            style={{
              fontSize: "clamp(1.85rem, 6.5vw, 4.5rem)",
              lineHeight: 1.08,
              marginBottom: "clamp(1rem, 3vw, 1.5rem)",
              animationDelay: "0.2s",
            }}
          >
            Discover the
            <span className="block mt-1">Sri Lanka&apos;s most </span>
            <span className="italic font-normal text-white/90">beautiful</span> places
          </h1>

          <p
            className="anim-fade-in-up opacity-0 text-white/70 font-light leading-relaxed max-w-lg"
            style={{
              fontSize: "clamp(0.8125rem, 2vw, 1.125rem)",
              marginBottom: "clamp(0.5rem, 2vw, 2.5rem)",
              animationDelay: "0.3s",
            }}
          >
            Discover the beauty of Sri Lanka through unforgettable journeys. From ancient heritage sites and misty mountains to golden beaches and wildlife adventures, we create travel experiences that inspire.
          </p>

          <TrustStrip />
        </div>
      </div>

      {/* Floating vertical trust stack — desktop only (lg+), where TrustStrip is hidden */}
      <div className="hidden lg:flex absolute bottom-20 right-12 z-10 flex-col gap-3 anim-fade-in opacity-0" style={{ animationDelay: "0.6s" }}>
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