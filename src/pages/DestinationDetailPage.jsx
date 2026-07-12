import { useMemo } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import StarIcon from "@mui/icons-material/Star";
import PlaceIcon from "@mui/icons-material/Place";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import DestinationCard from "../sections/Destinations/DestinationCard";
import { destinations } from "../data/destinations";

export default function DestinationDetailPage({ onNavigate }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const destination = useMemo(() => destinations.find((d) => d.id === id), [id]);

  const relatedDestinations = useMemo(() => {
    if (!destination) return [];
    return destinations.filter((d) => d.id !== destination.id).slice(0, 3);
  }, [destination]);

  if (!destination) {
    return (
      <div className="bg-stone-50 text-stone-900 min-h-screen flex flex-col" style={{ fontFamily: "'Inter', sans-serif" }}>
        <Navbar onNavigate={onNavigate} />
        <div className="flex-1 flex flex-col items-center justify-center px-6 py-32 text-center">
          <div className="w-14 h-14 bg-stone-100 rounded-2xl flex items-center justify-center mb-4">
            <PlaceIcon sx={{ fontSize: 22 }} className="text-stone-400" />
          </div>
          <h1 className="text-2xl font-semibold tracking-tight mb-2">Destination not found</h1>
          <p className="text-sm text-stone-500 font-light mb-6">We couldn&apos;t find the destination you were looking for.</p>
          <Link
            to="/destinations"
            className="bg-stone-900 hover:bg-stone-800 text-white text-sm font-medium px-5 py-2.5 rounded-full transition-all duration-300"
          >
            Browse all destinations
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="bg-stone-50 text-stone-900" style={{ fontFamily: "'Inter', sans-serif" }}>
      <Navbar onNavigate={onNavigate} />

      {/* ── Hero ── */}
      <section className="relative h-[70vh] min-h-[520px] flex items-end overflow-hidden">
        <img src={destination.img} alt={destination.name} className="absolute inset-0 w-full h-full object-cover" />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to right, #1c1917, rgba(28,25,23,0.85), rgba(28,25,23,0.35))" }}
        />
        <div
          className="absolute bottom-0 left-0 right-0 h-24"
          style={{ background: "linear-gradient(to top, #f5f5f4, transparent)" }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-14 w-full">
          <button
            type="button"
            onClick={() => navigate("/destinations")}
            className="anim-fade-in opacity-0 inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 text-xs font-medium text-white/90 hover:bg-white/20 transition-all duration-300 mb-6"
          >
            <ArrowBackIcon sx={{ fontSize: 14 }} />
            All destinations
          </button>

          <div
            className="anim-fade-in-up opacity-0 flex items-center gap-2 mb-4"
            style={{ animationDelay: "0.1s" }}
          >
            <span className="bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-3 py-1 text-[10px] font-medium text-white uppercase tracking-wider flex items-center gap-1">
              <StarIcon sx={{ fontSize: 10 }} className="text-emerald-400" />
              {destination.rating} Rating
            </span>
            <span className="bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-3 py-1 text-[10px] font-medium text-white uppercase tracking-wider">
              {destination.category}
            </span>
          </div>

          <h1
            className="anim-fade-in-up opacity-0 text-3xl md:text-4xl lg:text-6xl font-medium text-white tracking-tight leading-[1.1] mb-3"
            style={{ animationDelay: "0.2s" }}
          >
            {destination.name}
          </h1>
          <p
            className="anim-fade-in-up opacity-0 flex items-center gap-2 text-white/70 font-light"
            style={{ animationDelay: "0.3s" }}
          >
            <PlaceIcon sx={{ fontSize: 16 }} className="text-emerald-400" />
            {destination.country}
          </p>
        </div>
      </section>

      {/* ── Floating stat card, overlapping hero like the search bento cards elsewhere ── */}
      <section className="px-6 relative z-20">
        <div className="max-w-5xl mx-auto -mt-8">
          <div className="bg-white/80 backdrop-blur-2xl border border-white/80 rounded-3xl p-6 shadow-xl anim-scale-in opacity-0 grid grid-cols-2 md:grid-cols-4 gap-6" style={{ animationDelay: "0.4s" }}>
            <div>
              <p className="text-[10px] text-stone-500 uppercase tracking-wider mb-1">From</p>
              <p className="text-lg font-semibold text-stone-900">{destination.price}</p>
            </div>
            <div>
              <p className="text-[10px] text-stone-500 uppercase tracking-wider mb-1">Duration</p>
              <p className="text-lg font-semibold text-stone-900">{destination.days}</p>
            </div>
            <div>
              <p className="text-[10px] text-stone-500 uppercase tracking-wider mb-1">Rating</p>
              <p className="text-lg font-semibold text-stone-900 flex items-center gap-1">
                <StarIcon sx={{ fontSize: 16, color: "#fbbf24" }} />
                {destination.rating}
              </p>
            </div>
            <div>
              <p className="text-[10px] text-stone-500 uppercase tracking-wider mb-1">Best Time</p>
              <p className="text-sm font-semibold text-stone-900 flex items-center gap-1.5">
                <WbSunnyIcon sx={{ fontSize: 15 }} className="text-emerald-500 shrink-0" />
                {destination.bestTimeToVisit}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Overview + booking card ── */}
      <section className="py-16 md:py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <span className="inline-block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-3">Overview</span>
            <h2 className="text-2xl md:text-3xl font-medium tracking-tight mb-4">
              About <span className="italic font-normal text-stone-400">{destination.name}</span>
            </h2>
            <p className="text-stone-500 font-light leading-relaxed mb-10">{destination.description}</p>

            <span className="inline-block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-4">Trip Highlights</span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
              {destination.highlights.map((h) => (
                <div key={h} className="flex items-start gap-3">
                  <CheckCircleIcon sx={{ fontSize: 18 }} className="text-emerald-500 shrink-0 mt-0.5" />
                  <p className="text-sm text-stone-600 font-light leading-relaxed">{h}</p>
                </div>
              ))}
            </div>

            <span className="inline-block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-4">Gallery</span>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {destination.gallery.map((src, i) => (
                <img
                  key={src}
                  src={src}
                  alt={`${destination.name} view ${i + 1}`}
                  className="rounded-2xl w-full h-48 object-cover shadow-sm"
                />
              ))}
            </div>
          </div>

          <aside className="lg:col-span-1">
            <div className="bg-white rounded-3xl p-6 shadow-sm sticky top-24">
              <p className="text-[10px] text-stone-500 uppercase tracking-wider mb-1">Starting from</p>
              <p className="text-3xl font-semibold tracking-tight mb-1">{destination.price}</p>
              <p className="text-xs text-stone-500 font-light mb-6">per person, {destination.days.toLowerCase()}</p>

              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 text-sm text-stone-600">
                  <CalendarMonthIcon sx={{ fontSize: 16 }} className="text-emerald-500 shrink-0" />
                  Best visited {destination.bestTimeToVisit}
                </div>
                <div className="flex items-center gap-3 text-sm text-stone-600">
                  <PlaceIcon sx={{ fontSize: 16 }} className="text-emerald-500 shrink-0" />
                  {destination.country}
                </div>
              </div>

              <button
                type="button"
                onClick={() => onNavigate(`Booking request sent for ${destination.name}!`)}
                className="w-full bg-stone-900 hover:bg-stone-800 text-white py-3.5 rounded-xl font-medium text-sm transition-all duration-300 hover:scale-[1.02] shadow-lg"
              >
                Book This Trip
              </button>
              <p className="text-[11px] text-stone-400 font-light text-center mt-3">Free cancellation up to 48 hours before</p>
            </div>
          </aside>
        </div>
      </section>

      {/* ── Related destinations ── */}
      {relatedDestinations.length > 0 && (
        <section className="py-16 md:py-24 px-6 bg-white border-t border-stone-200/50">
          <div className="max-w-7xl mx-auto">
            <span className="inline-block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-3">Keep Exploring</span>
            <h2 className="text-2xl md:text-3xl font-medium tracking-tight mb-10">
              You might also <span className="italic font-normal text-stone-400">like</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {relatedDestinations.map((d) => (
                <div key={d.id} className="h-72">
                  <DestinationCard destination={{ ...d, span: "" }} />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
}