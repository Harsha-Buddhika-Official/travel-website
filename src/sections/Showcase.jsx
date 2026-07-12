import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import ScheduleIcon from "@mui/icons-material/Schedule";
import HeadsetIcon from "@mui/icons-material/Headset";
import StarIcon from "@mui/icons-material/Star";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

const features = [
  { Icon: VerifiedUserIcon, title: "Safe & Secure", desc: "Verified listings, secure payments, and 24/7 travel support." },
  { Icon: LocalOfferIcon, title: "Best Price Guarantee", desc: "Find it cheaper? We'll match the price and refund the difference." },
  { Icon: ScheduleIcon, title: "Free Cancellation", desc: "Plans change. Cancel most bookings for free up to 48 hours before." },
  { Icon: HeadsetIcon, title: "Dedicated Support", desc: "Personal travel advisor available around the clock for your journey." },
];

export default function Showcase() {
  const [ref, visible] = useIntersectionObserver({ threshold: 0.15 });

  return (
    <section ref={ref} className="py-20 sm:py-24 md:py-32 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-20 items-center">
          <div className={`relative ${visible ? "anim-slide-left" : "opacity-0"}`}>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img src="https://img.magnific.com/premium-photo/travel-sri-lanka_1892-35.jpg?semt=ais_hybrid&w=740&q=80" alt="Traveler" className="w-full h-90 sm:h-125 md:h-150 object-cover" />
              <div className="absolute inset-0 bg-linear-to-t from-stone-900/30 to-transparent" />
            </div>
            <div className="hidden lg:block absolute -bottom-6 -right-4 md:right-6 bg-white/70 backdrop-blur-2xl border border-white/80 rounded-2xl p-5 shadow-xl anim-float max-w-55">
              <div className="flex items-center gap-3 mb-3">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <img key={i} src={`https://picsum.photos/seed/avatar-${i}/40/40.jpg`} alt="" className="w-8 h-8 rounded-full border-2 border-white object-cover" />
                  ))}
                </div>
                <span className="text-xs font-medium text-stone-600">+2.4k joined</span>
              </div>
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} sx={{ fontSize: 12, color: "#fbbf24" }} />
                ))}
                <span className="text-xs font-medium text-stone-700 ml-1">4.9/5</span>
              </div>
            </div>
            <div className="hidden lg:block absolute top-6 -left-4 md:left-6 bg-white/70 backdrop-blur-2xl border border-white/80 rounded-2xl px-4 py-3 shadow-xl anim-float" style={{ animationDelay: "1s" }}>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-emerald-400/20 rounded-lg flex items-center justify-center">
                  <TrendingUpIcon sx={{ fontSize: 14 }} className="text-emerald-500" />
                </div>
                <div>
                  <p className="text-[10px] text-stone-500 uppercase tracking-wider">Trending</p>
                  <p className="text-sm font-semibold text-stone-800">Ella, Sri Lanka</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <span className={`inline-block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-3 ${visible ? "anim-fade-in" : "opacity-0"}`}>Why Wanderly</span>
            <h2 className={`text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight mb-6 ${visible ? "anim-fade-in-up" : "opacity-0"}`} style={{ animationDelay: "0.1s" }}>
                Travel with <span className="italic font-normal text-stone-400">confidence</span>
            </h2>
            <p className={`text-stone-500 font-light leading-relaxed mb-10 ${visible ? "anim-fade-in-up" : "opacity-0"}`} style={{ animationDelay: "0.2s" }}>
                We take care of every detail so you can simply enjoy the wonders of Sri Lanka. From ancient heritage and lush hill country to pristine beaches and unforgettable wildlife, every journey is crafted for memories that last a lifetime.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {features.map((f, i) => (
                <div key={f.title} className={visible ? "anim-fade-in-up" : "opacity-0"} style={{ animationDelay: `${0.3 + i * 0.1}s` }}>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-stone-100 rounded-xl flex items-center justify-center shrink-0">
                      <f.Icon sx={{ fontSize: 18 }} className="text-stone-700" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-stone-800 mb-1">{f.title}</h3>
                      <p className="text-xs text-stone-500 font-light leading-relaxed">{f.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}