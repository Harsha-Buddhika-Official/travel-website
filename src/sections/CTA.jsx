import { useState } from "react";
import MailIcon from "@mui/icons-material/Mail";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

export default function CTA({ onNavigate }) {
  const [ref, visible] = useIntersectionObserver({ threshold: 0.15 });
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    onNavigate("You're subscribed! Check your inbox for travel inspiration.");
    setEmail("");
  };

  return (
    <section ref={ref} className="py-20 sm:py-24 md:py-32 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <div className={`relative rounded-[2rem] overflow-hidden ${visible ? "anim-scale-in" : "opacity-0"}`}>
          <img src="https://www.sharpholidays.in/blog/wp-content/uploads/2020/06/srilanka.jpg" alt="CTA" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-stone-900/70" />
          <div className="relative z-10 text-center py-16 sm:py-20 md:py-28 px-4 sm:px-6">
            <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 text-[10px] font-medium text-white/90 uppercase tracking-widest mb-6">
              <MailIcon sx={{ fontSize: 12 }} />
              Stay Inspired
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-white tracking-tight mb-4">
              Ready for your next <span className="italic font-normal text-white/70">adventure</span>?
            </h2>
            <p className="text-sm sm:text-base text-white/60 font-light max-w-md mx-auto mb-8">Join 50,000+ travelers who get weekly destination inspiration and exclusive deals.</p>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center gap-3 max-w-lg mx-auto">
              <div className="relative flex-1 w-full">
                <MailIcon sx={{ fontSize: 16 }} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full bg-white/10 border border-white/20 rounded-full pl-11 pr-5 py-3.5 text-sm text-white placeholder:text-white/40 outline-none focus:border-emerald-400/50 focus:bg-white/15 transition-all duration-300"
                />
              </div>
              <button
                type="submit"
                className="bg-emerald-400 hover:bg-emerald-500 text-stone-900 px-7 py-3.5 rounded-full font-medium text-sm transition-all duration-300 hover:scale-105 shadow-lg shadow-emerald-400/20 w-full sm:w-auto"
              >
                Subscribe
              </button>
            </form>
            <p className="text-white/30 text-xs mt-4">No spam. Unsubscribe anytime.</p>
          </div>
        </div>
      </div>
    </section>
  );
}