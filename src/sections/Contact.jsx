import { useState } from "react";
import MailIcon from "@mui/icons-material/Mail";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SendIcon from "@mui/icons-material/Send";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import { contactInfo } from "../data/navLinks";

const iconMap = { mail: MailIcon, phone: PhoneIcon, location: LocationOnIcon };

const initialFormState = { name: "", email: "", message: "" };

export default function Contact({ onNavigate }) {
  const [ref, visible] = useIntersectionObserver({ threshold: 0.1 });
  const [formData, setFormData] = useState(initialFormState);

  const handleChange = (field) => (e) => setFormData((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    onNavigate("Message sent! We'll get back to you within 24 hours.");
    setFormData(initialFormState);
  };

  return (
    <section id="contact" ref={ref} className="py-24 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          <div className={visible ? "anim-slide-left" : "opacity-0"}>
            <span className="inline-block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-3">Get In Touch</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight mb-6">
              Let&apos;s plan your <span className="italic font-normal text-stone-400">dream trip</span>
            </h2>
            <p className="text-stone-500 font-light leading-relaxed mb-10">
              Have questions about a destination or need help planning? Our travel experts are here to help you create the perfect itinerary.
            </p>
            <div className="space-y-6">
              {contactInfo.map((c) => {
                const Icon = iconMap[c.icon];
                return (
                  <div key={c.label} className="flex items-center gap-4">
                    <div className="w-11 h-11 bg-stone-100 rounded-xl flex items-center justify-center">
                      <Icon sx={{ fontSize: 18 }} className="text-stone-600" />
                    </div>
                    <span className="text-sm text-stone-700 font-medium">{c.label}</span>
                  </div>
                );
              })}
            </div>
          </div>

          <form onSubmit={handleSubmit} className={`bg-white rounded-3xl p-8 shadow-sm ${visible ? "anim-slide-right" : "opacity-0"}`} style={{ animationDelay: "0.2s" }}>
            <div className="space-y-5">
              <div>
                <label className="block text-xs font-semibold text-stone-500 uppercase tracking-wider mb-2">Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={handleChange("name")}
                  className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-stone-400 focus:bg-white transition-all duration-300"
                  placeholder="Your name"
                  required
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-stone-500 uppercase tracking-wider mb-2">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={handleChange("email")}
                  className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-stone-400 focus:bg-white transition-all duration-300"
                  placeholder="you@example.com"
                  required
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-stone-500 uppercase tracking-wider mb-2">Message</label>
                <textarea
                  value={formData.message}
                  onChange={handleChange("message")}
                  rows={4}
                  className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-stone-400 focus:bg-white transition-all duration-300 resize-none"
                  placeholder="Tell us about your dream trip..."
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-stone-900 hover:bg-stone-800 text-white py-3.5 rounded-xl font-medium text-sm transition-all duration-300 hover:scale-[1.02] shadow-lg flex items-center justify-center gap-2"
              >
                <SendIcon sx={{ fontSize: 16 }} />
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}